import { Mail, FileText, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-10" id="contact">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
        Get in Touch
      </h2>

      <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-xl p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-[#e8e8e8] mb-3">
          Let's build something together.
        </h3>
        <p className="text-[14px] text-[#777777] leading-relaxed mb-6 max-w-sm">
          I'm open to internships, freelance gigs, or just a friendly tech chat
          over coffee ☕. If you have a project, an idea, or just want to say
          hi — my inbox is always open.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:rm2193352@gmail.com"
            className="inline-flex items-center gap-2 bg-[#e8e8e8] text-[#0a0a0a] text-[13px] font-medium rounded-lg px-4 py-2.5 hover:bg-white transition-colors duration-200"
          >
            <Mail size={14} />
            Email me
            <ArrowUpRight size={13} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-[#e8e8e8] text-[13px] font-medium border border-[#2a2a2a] rounded-lg px-4 py-2.5 hover:border-[#3a3a3a] hover:bg-[#111111] transition-colors duration-200"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
