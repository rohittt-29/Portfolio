'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useCallback } from 'react';
import { ActivityCalendar, type Activity } from 'react-activity-calendar';

/* ─── Skeleton loader using the built-in Skeleton ───── */
function CalendarSkeleton({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex gap-[3px] overflow-hidden" aria-label="Loading GitHub contributions…">
      {[...Array(53)].map((_, c) => (
        <div key={c} className="flex flex-col gap-[3px]">
          {[...Array(7)].map((_, r) => (
            <div
              key={r}
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                backgroundColor: isDark ? '#2a2a2a' : '#e0e0e0',
                opacity: 0.5,
                animation: `pulse 1.5s ease-in-out ${((c * 7 + r) % 10) * 0.05}s infinite`,
              }}
            />
          ))}
        </div>
      ))}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

/* ─── Error state ─────────────────────────────────── */
function CalendarError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-3 text-center">
      <span className="text-3xl select-none">⚠️</span>
      <p className="text-sm" style={{ color: '#888' }}>
        Couldn&apos;t load GitHub contributions.
      </p>
      <button
        onClick={onRetry}
        style={{
          fontSize: '12px',
          padding: '6px 16px',
          borderRadius: '8px',
          border: '1px solid #444',
          color: '#aaa',
          background: 'transparent',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#777';
          (e.currentTarget as HTMLButtonElement).style.color = '#eee';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#444';
          (e.currentTarget as HTMLButtonElement).style.color = '#aaa';
        }}
      >
        Try again
      </button>
    </div>
  );
}

/* ─── Map count → intensity level ─────────────────── */
function toLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3)  return 1;
  if (count <= 6)  return 2;
  if (count <= 9)  return 3;
  return 4;
}

/* ─── Main Component ─────────────────────────────── */
export default function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted]     = useState(false);
  const [status, setStatus]       = useState<'loading' | 'success' | 'error'>('loading');
  const [activities, setActivities] = useState<Activity[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [retryKey, setRetryKey]   = useState(0);

  useEffect(() => { setMounted(true); }, []);

  const fetchContributions = useCallback(async () => {
    setStatus('loading');
    try {
      const res = await fetch('/api/github-contributions');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json();
      if (json?.error) throw new Error(json.error);

      // API returns two possible shapes — handle both
      // Shape A (our GraphQL proxy):  { contributions: [...], total: number }
      // Shape B (public API fallback): { contributions: [...], total: { lastYear: number, ... } }
      const raw: { date: string; contributionCount?: number; count?: number; level?: number }[] =
        json.contributions ?? [];

      if (!Array.isArray(raw) || raw.length === 0) throw new Error('Empty data');

      const days: Activity[] = raw.map((d) => {
        const count = d.contributionCount ?? d.count ?? 0;
        return {
          date: d.date,
          count,
          level: (d.level != null ? d.level : toLevel(count)) as 0 | 1 | 2 | 3 | 4,
        };
      });

      // Sort ascending (required by react-activity-calendar)
      days.sort((a, b) => (a.date < b.date ? -1 : 1));

      const total =
        typeof json.total === 'number'
          ? json.total
          : (json.total as Record<string, number>)?.lastYear ??
            days.reduce((s, d) => s + d.count, 0);

      setActivities(days);
      setTotalCount(total);
      setStatus('success');
    } catch (err) {
      console.error('[GithubActivity] Fetch failed:', err);
      setStatus('error');
    }
  }, [retryKey]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { fetchContributions(); }, [fetchContributions]);

  const isDark = !mounted || resolvedTheme === 'dark';

  return (
    <section className="py-10" id="github">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
        GitHub Activity
      </h2>

      <div className="github-card rounded-xl p-6 sm:p-8">
        <div className="overflow-x-auto -mx-2">
          <div className="min-w-[280px]">

            {status === 'loading' && <CalendarSkeleton isDark={isDark} />}

            {status === 'error' && (
              <CalendarError onRetry={() => setRetryKey((k) => k + 1)} />
            )}

            {status === 'success' && mounted && activities.length > 0 && (
              <ActivityCalendar
                data={activities}
                totalCount={totalCount}
                colorScheme={isDark ? 'dark' : 'light'}
                theme={{
                  dark:  ['#1e1e1e', '#1a2f1a', '#255c25', '#2d8a2d', '#4ade80'],
                  light: ['#e8e8e8', '#bbf7d0', '#86efac', '#4ade80', '#16a34a'],
                }}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
                fontSize={12}
                blockSize={10}
                blockMargin={3}
                showWeekdayLabels
                style={{ color: isDark ? '#777' : '#555' }}
              />
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
