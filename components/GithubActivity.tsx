'use client';

import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === 'dark';

  return (
    <section className="py-10" id="github">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
        GitHub Activity
      </h2>

      <div className="github-card rounded-xl p-6 sm:p-8">
        <div className="overflow-x-auto -mx-2">
          <div className="min-w-[280px]">
            {isDark ? (
              <GitHubCalendar
                username="rohittt-29"
                colorScheme="dark"
                theme={{
                  dark: ['#1e1e1e', '#1a2f1a', '#255c25', '#2d8a2d', '#4ade80'],
                }}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
                fontSize={12}
                blockSize={10}
                blockMargin={3}
                style={{ color: '#777777' }}
              />
            ) : (
              <GitHubCalendar
                username="rohittt-29"
                colorScheme="light"
                theme={{
                  light: ['#e8e8e8', '#bbf7d0', '#86efac', '#4ade80', '#16a34a'],
                }}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
                fontSize={12}
                blockSize={10}
                blockMargin={3}
                style={{ color: '#555555' }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
