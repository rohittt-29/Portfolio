'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

/* ─── IST clock helper ───────────────────────────── */
function getIST(): string {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600_000);
  const h = ist.getHours().toString().padStart(2, '0');
  const m = ist.getMinutes().toString().padStart(2, '0');
  const s = ist.getSeconds().toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function Topbar() {
  const [time, setTime] = useState('');
  const [temp, setTemp] = useState<number | null>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  /* avoid hydration mismatch */
  useEffect(() => {
    setMounted(true);
    setTime(getIST());
    const id = setInterval(() => setTime(getIST()), 1000);
    return () => clearInterval(id);
  }, []);

  /* fetch Mumbai weather once */
  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current_weather=true'
    )
      .then((r) => r.json())
      .then((d) => {
        const t = d?.current_weather?.temperature;
        if (typeof t === 'number') setTemp(Math.round(t));
      })
      .catch(() => {});
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <header className="topbar fixed top-0 left-0 right-0 z-50">
      <div
        className="mx-auto flex items-center justify-between px-5 sm:px-6 h-10"
        style={{ maxWidth: '750px' }}
      >
        {/* ── Left: theme toggle · city · temp ── */}
        <div className="flex items-center gap-2 text-xs topbar-muted">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="topbar-btn p-1 rounded-md transition-colors duration-200"
            >
              {isDark ? <Sun size={13} /> : <Moon size={13} />}
            </button>
          )}

          <span className="topbar-dot select-none">·</span>
          <span>Mumbai</span>

          {temp !== null && (
            <>
              <span className="topbar-dot select-none">·</span>
              <span>{temp}°C</span>
            </>
          )}
        </div>

        {/* ── Right: IST time ── */}
        <div className="flex items-center gap-2 text-xs topbar-muted">
          {time && (
            <>
              <span className="tabular-nums tracking-tight">{time}</span>
              <span className="topbar-dot">GMT+5:30</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
