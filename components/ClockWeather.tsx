'use client';

import { useEffect, useState } from 'react';

function getISTTime(): string {
  const now = new Date();
  // IST = UTC + 5:30
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);

  const h = ist.getHours().toString().padStart(2, '0');
  const m = ist.getMinutes().toString().padStart(2, '0');
  const s = ist.getSeconds().toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function ClockWeather() {
  const [time, setTime] = useState<string>('');
  const [temp, setTemp] = useState<number | null>(null);

  // Tick every second
  useEffect(() => {
    setTime(getISTTime()); // set immediately to avoid blank flash
    const id = setInterval(() => setTime(getISTTime()), 1000);
    return () => clearInterval(id);
  }, []);

  // Fetch weather once on mount
  useEffect(() => {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current_weather=true';
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const t = data?.current_weather?.temperature;
        if (typeof t === 'number') setTemp(Math.round(t));
      })
      .catch(() => {
        // Silently fail — widget just won't show temperature
      });
  }, []);

  // Avoid hydration mismatch: render nothing until client has ticked
  if (!time) return null;

  return (
    <p className="text-zinc-500 text-xs sm:text-sm flex items-center gap-2 flex-wrap">
      <span className="tabular-nums tracking-tight">{time}</span>
      <span className="text-zinc-700 select-none">·</span>
      <span>GMT+5:30</span>
      <span className="text-zinc-700 select-none">·</span>
      <span>Mumbai</span>
      {temp !== null && (
        <>
          <span className="text-zinc-700 select-none">·</span>
          <span>{temp}°C</span>
        </>
      )}
    </p>
  );
}
