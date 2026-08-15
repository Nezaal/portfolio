import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsHorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const panelsRef = useRef(null);

  useEffect(() => {
    const panels = panelsRef.current;
    const trigger = triggerRef.current;
    if (!panels || !trigger) return;

    const totalScroll = panels.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(panels, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
          start: "top top-=15%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative">
      {/* Section Header — above the pinned area */}
      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#BEF202] mb-4">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>FEATURED WORK</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase text-white">
          Projects
        </h2>
        <p className="mt-3 text-xs md:text-sm font-mono text-white/50 max-w-xl mx-auto">
          Scroll to explore featured engineering systems and creative builds.
        </p>
      </div>

      {/* Horizontal Scroll Trigger Area */}
      <div ref={triggerRef} className="overflow-hidden">
        <div
          ref={panelsRef}
          className="flex gap-8 px-[5vw] will-change-transform"
          style={{ width: 'max-content' }}
        >
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          {/* End spacer card */}
          <div className="flex-shrink-0 w-[60vw] md:w-[40vw] flex items-center justify-center">
            <div className="text-center space-y-4">
              <p className="font-mono text-2xl md:text-4xl font-bold text-white/20">More coming soon...</p>
              <p className="font-mono text-xs text-white/30">Always building, always shipping.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[75vh] relative rounded-2xl overflow-hidden border border-white/10 group"
      style={{ perspective: '1200px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
        {/* Category + Year Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#BEF202]/10 border border-[#BEF202]/30 text-[10px] font-mono text-[#BEF202] uppercase tracking-wider">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-white/40">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-mono text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[0.95] mb-3">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="font-mono text-sm text-white/60 max-w-lg mb-4 leading-relaxed">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-xs text-white/40 max-w-md mb-6 leading-relaxed hidden md:block">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats Row */}
        {project.stats && project.stats.length > 0 && (
          <div className="flex gap-6 mb-6">
            {project.stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="font-mono text-lg md:text-xl font-bold text-[#BEF202]">{stat.value}</p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#BEF202] text-black font-mono font-bold text-xs tracking-wide hover:bg-[#a8d602] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-mono font-medium text-xs hover:bg-white/20 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Source
            </a>
          )}
          {/* Fallback when urls are placeholder '#' */}
          {project.liveUrl === '#' && (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 font-mono text-xs cursor-default">
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </span>
          )}
          {project.githubUrl === '#' && (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 font-mono text-xs cursor-default">
              <GithubIcon className="w-3.5 h-3.5" />
              Source
            </span>
          )}
        </div>
      </div>

      {/* Project Number Watermark */}
      <div className="absolute top-6 right-6 z-10">
        <span className="font-mono text-7xl md:text-8xl font-black text-white/[0.03] leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
