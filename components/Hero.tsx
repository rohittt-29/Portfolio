'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/rohittt-29', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rohit-mali-163267257/',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'https://x.com/rohittt_mali',
    label: 'Twitter / X',
  },
  { icon: Mail, href: 'mailto:rm2193352@gmail.com', label: 'Email' },
];

export default function Hero() {
  return (
    <section className="pt-28 pb-12">
      {/* Avatar */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-6"
      >
        <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#2a2a2a]">
          <Image
            src="/Profile.png"
            alt="Rohit Mali"
            fill
            sizes="200px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Name + role */}
      <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-2xl font-semibold tracking-tight text-[#e8e8e8] mb-1">
          Rohit Mali
        </h1>
        <p className="text-sm text-[#888888] mb-6">
          Full Stack Developer
        </p>
      </motion.div>


      {/* Bio */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="space-y-4 text-[#aaaaaa] text-[15px] leading-[1.8]"
      >
        <p>
          I build things for the web — mostly full-stack, occasionally chaotic.
          I'm comfortable across the stack, from designing APIs to obsessing
          over whether a button's border-radius is right.
        </p>
        <p>
          My stack is React, Node.js, Express, and MongoDB. I've shipped
          production apps with real-time features (Socket.IO), AI-powered
          search (RAG + vector embeddings), and a few things that I'm not
          sure technically worked but looked great.
        </p>
        <p>
          Right now I'm levelling up — learning TypeScript properly, poking at
          PostgreSQL, and trying to write code that future-me won't curse.
          I'm open to internships, freelance work, or just building something
          interesting together.
        </p>
      </motion.div>

      {/* Social links */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex gap-4 mt-8"
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#555555] hover:text-[#e8e8e8] transition-colors duration-200"
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
