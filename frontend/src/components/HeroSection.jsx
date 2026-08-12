import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, ChevronDown, MapPin } from 'lucide-react';

export default function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Centered Title Overlay — rendered over the fixed full-page mesh */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none mix-blend-difference text-white">
        <h1 className="font-display text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
          {personalInfo.name.toUpperCase()}
        </h1>
        <p className="mt-4 font-mono text-xs md:text-sm max-w-lg opacity-80">
          {personalInfo.tagline}
        </p>
      </div>

      {/* Floating Nav Bar */}
      <div className="absolute top-6 left-0 right-0 z-30 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl">
          <div className="w-2.5 h-2.5 rounded-full bg-[#BEF202] animate-pulse" />
          <span className="font-mono text-xs tracking-wider text-white/90">
            {personalInfo.name} <span className="text-white/40">/</span> {personalInfo.title.split('&')[0].trim()}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 p-1.5 rounded-full">
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer"
            className="p-2 text-white/70 hover:text-[#BEF202] transition-colors rounded-full hover:bg-white/5" title="GitHub">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2 text-white/70 hover:text-[#BEF202] transition-colors rounded-full hover:bg-white/5" title="LinkedIn">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          {/* <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer"
            className="p-2 text-white/70 hover:text-[#BEF202] transition-colors rounded-full hover:bg-white/5" title="Twitter">
            <TwitterIcon className="w-4 h-4" />
          </a> */}
          <a href={`mailto:${personalInfo.socials.email}`}
            className="p-2 text-white/70 hover:text-[#BEF202] transition-colors rounded-full hover:bg-white/5" title="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hero Info Overlay — Bottom Left */}
      <div className="absolute bottom-24 left-6 md:left-12 z-20 max-w-lg pointer-events-none">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#BEF202]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white font-bold">{personalInfo.location}</span>
        </div>
        <p className="font-mono text-xs text-white/50 leading-relaxed max-w-md">
          {personalInfo.shortBio}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#BEF202] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#BEF202]/80">{personalInfo.status}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 hover:text-[#BEF202] transition-colors cursor-pointer group"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
