'use client';

import { useRef, useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import ProjectGrid from '@/components/ProjectGrid';
import GithubActivity from '@/components/GithubActivity';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function FadeSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto px-5 sm:px-6" style={{ maxWidth: '750px' }}>
        {/* Hero doesn't need FadeSection — it has its own Framer Motion stagger */}
        <Hero />

        <hr className="section-divider" />

        <FadeSection>
          <TechMarquee />
        </FadeSection>

        <hr className="section-divider" />

        <FadeSection>
          <ProjectGrid />
        </FadeSection>

        <hr className="section-divider" />

        <FadeSection>
          <GithubActivity />
        </FadeSection>

        <hr className="section-divider" />

        <FadeSection>
          <Blogs />
        </FadeSection>

        <hr className="section-divider" />

        <FadeSection>
          <Contact />
        </FadeSection>

        <Footer />
      </div>
    </main>
  );
}
