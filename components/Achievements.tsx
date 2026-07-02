import { Trophy, Medal } from 'lucide-react';

interface Achievement {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: 'trophy' | 'medal';
  badge: string;
}

const achievements: Achievement[] = [
  {
    icon: 'trophy',
    badge: '🥇 Winner',
    title: 'UI/UX Hackathon',
    subtitle: 'Redesigned a Government Scheme Discovery App',
    date: 'March 2026',
    description:
      'Won first place by redesigning the end-to-end user experience of a government scheme discovery application — focusing on accessibility, clarity, and intuitive navigation for citizens.',
  },
  {
    icon: 'medal',
    badge: '🥈 Runner-up',
    title: 'VNPS State-Level Project Showcase',
    subtitle: 'Product Showcase — 2nd Year',
    date: '2024',
    description:
      'Secured runner-up at the VNPS State-Level Project Showcase while in my 2nd year of college, competing against teams across the state with a product-focused presentation.',
  },
];

export default function Achievements() {
  return (
    <section className="py-10" id="achievements">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
        Achievements
      </h2>

      <ul className="space-y-5">
        {achievements.map((item, i) => (
          <li key={i}>
            {/* Outer wrapper owns the spinning conic-gradient border */}
            <div className="achievement-card-wrap">
              {/* Inner card is the actual content surface */}
              <div className="achievement-card-inner flex items-start gap-4 p-4">
                {/* Icon */}
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1f1f1f] bg-[#151515]">
                  {item.icon === 'trophy' ? (
                    <Trophy size={16} className="text-[#c9a84c]" />
                  ) : (
                    <Medal size={16} className="text-[#8a8a8a]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-medium text-[#444444] border border-[#1f1f1f] rounded-full px-2 py-0.5">
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-[#383838]">{item.date}</span>
                  </div>

                  <p className="text-[14px] font-semibold text-[#e8e8e8] leading-snug mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-[12px] text-[#555555] mb-2">{item.subtitle}</p>
                  <p className="text-[13px] text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

            {i < achievements.length - 1 && (
              <hr className="mt-5 border-[#1a1a1a]" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
