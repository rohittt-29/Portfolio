'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import ProjectGrid from '@/components/ProjectGrid';
import GithubActivity from '@/components/GithubActivity';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/* ─── Scroll-shine grid canvas ───────────────────── */
function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const scrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const GRID = 25;
    const RADIUS = 300;

    let mouseX = -9999;
    let mouseY = -9999;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    window.addEventListener('mousemove', onMouseMove);

    function onScroll() {
      scrollRef.current = window.scrollY;
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    function draw() {
      if (!canvas || !ctx) return;
      const isDark = resolvedTheme !== 'light';
      const scroll = scrollRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / GRID) + 1;
      const rows = Math.ceil(canvas.height / GRID) + 1;

      // Scroll-based shine: glowing band moves down as user scrolls
      const totalH = document.body.scrollHeight - window.innerHeight;
      const scrollFrac = totalH > 0 ? scroll / totalH : 0;
      const shineCenterY = scrollFrac * canvas.height;
      const SHINE_HALF = 80; // half-height of the shine band

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * GRID;
          const y = r * GRID;

          // Mouse proximity glow
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distMouse = Math.sqrt(dx * dx + dy * dy);
          const mouseFactor = Math.max(0, 1 - distMouse / RADIUS);

          // Scroll band proximity glow
          const distScroll = Math.abs(y - shineCenterY);
          const scrollFactor = Math.max(0, 1 - distScroll / SHINE_HALF);

          const combined = Math.max(mouseFactor, scrollFactor * 0.7);

          let alpha: number;
          if (isDark) {
            alpha = 0.025 + combined * 0.18;
          } else {
            alpha = 0.04 + combined * 0.22;
          }

          ctx.fillStyle = isDark
            ? `rgba(255,255,255,${alpha})`
            : `rgba(0,0,0,${alpha})`;
          ctx.fillRect(x, y, 1.2, 1.2);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resolvedTheme]);

  return <canvas ref={canvasRef} className="grid-canvas" />;
}

export default function HomePage() {
  return (
    <>
      <GridCanvas />
      <main className="min-h-screen">
        <div className="mx-auto px-5 sm:px-6" style={{ maxWidth: '750px' }}>
          <Hero />

          <hr className="section-divider" />
          <TechMarquee />

          <hr className="section-divider" />
          <ProjectGrid />

          <hr className="section-divider" />
          <GithubActivity />

          <hr className="section-divider" />
          <Blogs />

          <hr className="section-divider" />
          <Contact />

          <Footer />
        </div>
      </main>
    </>
  );
}
