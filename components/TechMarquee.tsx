'use client';

const techStack = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '🚂' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind CSS', icon: '🌬️' },
  { name: 'Redux', icon: '🔄' },
  { name: 'Socket.IO', icon: '🔌' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Zustand', icon: '🐻' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Git', icon: '🌿' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Gemini AI', icon: '✨' },
];

// Duplicate for seamless loop
const doubled = [...techStack, ...techStack];

export default function TechMarquee() {
  return (
    <section className="py-10">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
        Tech Stack
      </h2>

      <div className="overflow-hidden -mx-4 sm:-mx-6">
        <div className="animate-marquee">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-[13px] text-[#777777] bg-[#111111] border border-[#1a1a1a] rounded-full px-3 py-1 mx-1.5 whitespace-nowrap hover:text-[#e8e8e8] hover:border-[#2a2a2a] transition-colors duration-200"
            >
              <span aria-hidden="true">{tech.icon}</span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
