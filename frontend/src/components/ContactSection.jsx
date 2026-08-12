import { personalInfo } from '../data/portfolioData';
import { Mail, Eye } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection({ onOpenResume }) {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BEF202]/20 to-transparent" />

      <div className="max-w-3xl mx-auto text-center space-y-8">
        <span className="font-mono text-[10px] text-[#BEF202] uppercase tracking-[0.3em]">
          [ CONTACT & COLLABORATION ]
        </span>

        <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight text-white leading-[0.95]">
          Let's Build<br />Something Exceptional
        </h2>

        <p className="text-sm text-white/50 font-mono max-w-xl mx-auto leading-relaxed">
          Currently open for full-stack & AI projects, and entry-level engineering roles.
        </p>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#BEF202] text-black font-mono font-bold text-xs tracking-wide hover:bg-[#a8d602] transition-all hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-mono font-medium text-xs hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[#BEF202]" />
            <span>Resume</span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="pt-6 flex justify-center gap-4">
          {[
            { href: personalInfo.socials.github, Icon: GithubIcon, label: 'GitHub' },
            { href: personalInfo.socials.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-[#BEF202] hover:border-[#BEF202]/30 hover:bg-[#BEF202]/5 transition-all"
              title={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
