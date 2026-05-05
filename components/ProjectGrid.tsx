import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  gitLink: string;
  liveLink: string;
  tags: string[];
  isLive: boolean;
}

const projects: Project[] = [
  {
    title: 'BrainBox AI',
    description:
      'Intelligent note-taking platform with an AI chatbot powered by RAG and MongoDB Vector Search — ask questions about your own saved notes.',
    image: '/Brain-box.png',
    gitLink: 'https://github.com/rohittt-29/Brain-box',
    liveLink: 'https://brain-box1.vercel.app',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Gemini AI', 'Tailwind'],
    isLive: true,
  },
  {
    title: 'Togetha',
    description:
      'A real-time dating and chat platform with profile swipes, live messaging via Socket.IO, and a slick match UI.',
    image: '/Togetha.png',
    gitLink: 'https://github.com/rohittt-29/togetha-ui',
    liveLink: 'https://togetha-web.vercel.app',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.IO', 'ShadCN'],
    isLive: true,
  },
  {
    title: 'StreamVibe',
    description:
      'Sleek movie streaming UI with real-time Firebase auth, TMDB API listings, and Gemini AI-powered smart search.',
    image: '/StreamVibe.png',
    gitLink: 'https://github.com/rohittt-29/StreamVibe',
    liveLink: 'https://stream-vibe-20.vercel.app',
    tags: ['React', 'Redux', 'Tailwind', 'Firebase', 'TMDB API', 'Gemini'],
    isLive: true,
  },
  {
    title: 'Dash3',
    description:
      'A responsive crypto-tracking dashboard displaying real-time prices, market stats, and trending coins via the CoinGecko API with Chart.js visualizations.',
    image: '/Dash3.png',
    gitLink: 'https://github.com/rohittt-29/dash-3',
    liveLink: 'https://dash-3.netlify.app',
    tags: ['React', 'Tailwind', 'CoinGecko API', 'Chart.js'],
    isLive: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'This site — a clean, minimal portfolio built with Next.js 14, TypeScript, Tailwind, and Framer Motion.',
    image: '/Port.png',
    gitLink: 'https://github.com/rohittt-29/portfolio',
    liveLink: 'https://rohitmalii.vercel.app',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    isLive: true,
  },
];

export default function ProjectGrid() {
  return (
    <section className="py-10" id="projects">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative bg-[#111111] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#2a2a2a] transition-all duration-300"
          >
            {/* Project image */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

              {/* LIVE badge */}
              {project.isLive && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1a1a1a] rounded-full px-2.5 py-1 text-[11px] font-medium text-[#4ade80]">
                  <span className="live-dot w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block" />
                  LIVE
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-[15px] font-semibold text-[#e8e8e8]">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-[#555555] hover:text-[#e8e8e8] transition-colors"
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live`}
                    className="text-[#555555] hover:text-[#e8e8e8] transition-colors"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              <p className="text-[13px] text-[#777777] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-[#666666] bg-[#1a1a1a] border border-[#222222] rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
