'use client';

import { useEffect, useState, useCallback } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

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
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
      .catch(() => { });
  }, []);

  const isDark = resolvedTheme === 'dark';

  const handleToggle = useCallback(() => {
    setIsAnimating(true);
    // Short delay so the spin animation plays before the icon swaps
    setTimeout(() => {
      setTheme(isDark ? 'light' : 'dark');
    }, 200);
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  }, [isDark, setTheme]);

  return (
    <header className="topbar fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 sm:px-10 h-11">
        {/* ── Left: theme toggle · city · temp ── */}
        <div className="flex items-center gap-2.5 text-sm topbar-muted">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={handleToggle}
              aria-label="Toggle theme"
              className="rounded-full relative flex items-center justify-center cursor-pointer"
              style={{ width: 36, height: 36 }}
            >
              {/* Animated glow ring */}
              <span
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background: isDark
                    ? 'radial-gradient(circle, rgba(160,190,255,0.25) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(255,180,50,0.3) 0%, transparent 70%)',
                  transform: 'scale(1.6)',
                }}
              />
              <Image
                src={isDark ? '/Moon.png' : '/Sun.png'}
                alt={isDark ? 'Moon – switch to light mode' : 'Sun – switch to dark mode'}
                width={36}
                height={36}
                className="rounded-full object-cover select-none pointer-events-none relative z-10"
                style={{
                  filter: isDark
                    ? 'drop-shadow(0 0 8px rgba(160,190,255,0.6))'
                    : 'drop-shadow(0 0 8px rgba(255,160,50,0.7))',
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
                  transform: isAnimating
                    ? 'rotate(360deg) scale(0.5)'
                    : 'rotate(0deg) scale(1)',
                  opacity: isAnimating ? 0.3 : 1,
                }}
                draggable={false}
              />
            </button>
          )}

          <span className="topbar-dot select-none">·</span>
          <span className="font-medium">Mumbai</span>

          {temp !== null && (
            <>
              <span className="topbar-dot select-none">·</span>
              <span className="font-medium">{temp}°C</span>
            </>
          )}
        </div>

        {/* ── Right: IST time ── */}
        <div className="flex items-center gap-2.5 text-sm topbar-muted">
          {time && (
            <>
              <span className="tabular-nums tracking-tight font-medium">{time}</span>
              <span className="topbar-dot text-xs">IST</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}


