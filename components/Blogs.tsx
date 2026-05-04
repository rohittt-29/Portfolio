import { ArrowUpRight } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  description: string;
  href: string;
  comingSoon?: boolean;
}

const posts: BlogPost[] = [
  {
    title: 'How I built a RAG-powered AI chatbot for my note-taking app',
    date: 'Coming soon',
    description:
      'A deep-dive into vector embeddings, MongoDB Atlas Vector Search, and integrating LLMs via OpenRouter.',
    href: '#',
    comingSoon: true,
  },
  {
    title: 'Real-time chat with Socket.IO — what I learned the hard way',
    date: 'Coming soon',
    description:
      'Room management, disconnection handling, and why you should never trust the client.',
    href: '#',
    comingSoon: true,
  },
  {
    title: 'From Vite to Next.js — migrating my portfolio to App Router',
    date: 'Coming soon',
    description:
      'SSR vs SSG, the "use client" decision tree, and setting up Tailwind v3 in 2025.',
    href: '#',
    comingSoon: true,
  },
];

export default function Blogs() {
  return (
    <section className="py-10" id="writing">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
        Writing
      </h2>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.title}>
            <a
              href={post.href}
              className={`group block ${post.comingSoon ? 'pointer-events-none opacity-60' : ''}`}
              aria-label={post.title}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="blog-link text-[14px] text-[#e8e8e8] font-medium mb-1 group-hover:text-white transition-colors">
                    {post.title}
                  </p>
                  <p className="text-[13px] text-[#666666] leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[11px] text-[#444444] whitespace-nowrap">
                    {post.date}
                  </span>
                  {!post.comingSoon && (
                    <ArrowUpRight
                      size={14}
                      className="text-[#444444] group-hover:text-[#e8e8e8] transition-colors"
                    />
                  )}
                  {post.comingSoon && (
                    <span className="text-[10px] text-[#333333] border border-[#1f1f1f] rounded-full px-2 py-0.5">
                      soon
                    </span>
                  )}
                </div>
              </div>
            </a>

            <hr className="mt-6 border-[#1a1a1a]" />
          </li>
        ))}
      </ul>
    </section>
  );
}
