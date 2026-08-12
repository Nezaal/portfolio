import React from 'react';
import NeonMesh from '../components/ui/neon-mesh';
import CoverflowCarousel from '../components/ui/coverflow-carousel';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Mail, 
  Download, 
  ChevronDown,
  Code2,
  Cpu,
  Layers,
  FolderGit2,
  ExternalLink
} from 'lucide-react';

const PORTFOLIO_PROJECT_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&q=80&auto=format",
    alt: "SkillBridge Ai",
    title: "SkillBridge Ai",
    subtitle: "AI-Powered Job Preparing Platform",
    category: "WEB DEVELOPMENT , Applied AI",
    description: "SkillBridge Ai is a web platform designed to help job seekers prepare for interviews. It uses AI to provide personalized feedback on their responses and helps them improve their interview skills.",
    meta: [
      { label: "Tech Stack", value: "React 18 • Node.js • Google Gemini AI" },                
      { label: "Performance", value: "Optimized for Speed and Responsiveness" },
      { label: "Status", value: "Active Project" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=80&auto=format",
    alt: "Synapse Real-Time Engine",
    title: "Synapse Telemetry Engine",
    subtitle: "Sub-millisecond Streaming Analytics",
    category: "Full-Stack System",
    description: "High-throughput real-time telemetry processing 2.4 Billion logs per day with instant anomaly detection.",
    meta: [
      { label: "Throughput", value: "2.4B Events / Day" },
      { label: "Query Speed", value: "<15ms Ultra Low-Latency" },
      { label: "Core Stack", value: "React 19 • Rust • ClickHouse" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=800&fit=crop&q=80&auto=format",
    alt: "Vapor OS Glassmorphic Workspace",
    title: "Vapor OS Dashboard",
    subtitle: "Apple-Inspired Glassmorphic System",
    category: "Creative Dev & Design Tokens",
    description: "An ultra-premium browser-based desktop experience with physics-based windows and hardware blur.",
    meta: [
      { label: "Lighthouse", value: "100 / 100 Performance" },
      { label: "GitHub Stars", value: "12,400+ Stars" },
      { label: "Built With", value: "GSAP • Tailwind CSS • Web Audio" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=800&fit=crop&q=80&auto=format",
    alt: "Quantum Kinetic Mesh",
    title: "Verlet Kinetic Engine",
    subtitle: "Real-time 3D Particle & Cloth Physics",
    category: "Kinetic Interactive Design",
    description: "Hardware-accelerated 3D Verlet physics integration running smooth 60fps vector force simulations.",
    meta: [
      { label: "Physics", value: "Constraint Relaxation Solver" },
      { label: "FPS", value: "120 FPS Native Render" },
      { label: "Category", value: "Interactive 3D Web Content" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=800&fit=crop&q=80&auto=format",
    alt: "Neural Cyber Security Vault",
    title: "Aegis Cipher Protocol",
    subtitle: "Zero-Knowledge Encryption Engine",
    category: "Distributed Security",
    description: "Decentralized cryptographic key management with automated intrusion detection and audit trails.",
    meta: [
      { label: "Security", value: "AES-256 GCM Encryption" },
      { label: "Compliance", value: "SOC2 Type II Certified" },
      { label: "Architecture", value: "Node.js • WASM • WebCrypto" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop&q=80&auto=format",
    alt: "Hardware Edge AI Processing Unit",
    title: "Pulse Edge AI Framework",
    subtitle: "On-Device Neural Model Acceleration",
    category: "Applied Machine Learning",
    description: "Lightweight WebGPU tensor execution framework for running LLM inference directly in browser clients.",
    meta: [
      { label: "Runtime", value: "WebGPU / WebAssembly" },
      { label: "Inference", value: "1,200 tokens / sec" },
      { label: "Footprint", value: "< 4.2 MB Compressed" },
    ],
  },
];

export default function Home({ onOpenContact, onOpenResume, onScrollToNext }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-[#050702] text-white font-sans selection:bg-[#BEF202] selection:text-black">
      {/* 1. HERO SECTION WITH 3D KINETIC MESH */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* 3D Kinetic Verlet Mesh Background */}
        <NeonMesh
          title={personalInfo.name.toUpperCase()}
          subtitle=""
          description={personalInfo.tagline}
          className="w-full h-screen"
        />

        {/* Floating Header Overlay / Navigation Bar Preview */}
        <div className="absolute top-6 left-0 right-0 z-30 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto pointer-events-auto">
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl">
            <div className="w-2.5 h-2.5 rounded-full bg-[#BEF202] animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-white/90">
              {personalInfo.name} <span className="text-white/40">/</span> {personalInfo.title.split('&')[0]}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 p-1.5 rounded-full">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-[#BEF202] transition-colors rounded-full hover:bg-white/5"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-[#BEF202] transition-colors rounded-full hover:bg-white/5"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-[#BEF202] transition-colors rounded-full hover:bg-white/5"
              title="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2 text-white/70 hover:text-[#BEF202] transition-colors rounded-full hover:bg-white/5"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </section>

      {/* 2. PROJECT SECTION DIRECTLY BELOW HERO (COVERFLOW CAROUSEL) */}
      <section id="projects" className="relative z-30 py-24 px-6 md:px-12 border-t border-white/10 bg-[#050702]">
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#BEF202] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>INTERACTIVE 3D COVERFLOW</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-mono tracking-tight uppercase">
            Featured Projects
          </h2>
          <p className="mt-3 text-xs md:text-sm font-mono text-white/60 max-w-xl mx-auto">
            Drag, swipe, or use arrow keys to navigate through featured engineering systems and creative WebGL builds.
          </p>
        </div>

        {/* Coverflow Carousel Component */}
        <div className="w-full max-w-6xl mx-auto">
          <CoverflowCarousel
            slides={PORTFOLIO_PROJECT_SLIDES}
            cardWidth="clamp(220px, 30vw, 360px)"
            rotate={42}
            depth={0.75}
            showCaption={true}
            showNavigation={true}
            showPagination={true}
            loop={true}
          />
        </div>
      </section>
    </div>
  );
}
