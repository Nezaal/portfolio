export const personalInfo = {
  name: "Nezaal Ahmad",
  title: "AI-Full-Stack Engineer",
  tagline: "Building at the edge of ideas. Turning complex problems into elegant digital products.",
  shortBio: "A software engineer crafting thoughtful, high-performance digital experiences with modern web tech, applied AI, and interactive 3D graphics.",
  location: "Delhi, India",
  status: "Available for  projects & entry-level roles",
  socials: {
    github: "https://github.com/Nezaal",
    linkedin: "https://www.linkedin.com/in/nezaal-ahmad-711156240/",
    email: "ahmadnezal19@gmail.com"
    // twitter: "https://twitter.com",
  }
}

export const skillsData = [
  {
    category: "Core Architecture & Frontend",
    description: "Building responsive, sub-millisecond interfaces with modern frameworks and type safety.",
    items: [
      { name: "React 19 & Next.js", level: 98, icon: "Code2" },
      { name: "TypeScript", level: 95, icon: "FileCode" },
      { name: "Tailwind CSS", level: 96, icon: "Palette" },
      { name: "Three.js / WebGL", level: 88, icon: "Box" },
      { name: "GSAP & Animation", level: 92, icon: "Zap" },
      { name: "State Architecture", level: 94, icon: "Cpu" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Scalable microservices, real-time web sockets, and robust database architectures.",
    items: [
      { name: "Node.js & Express", level: 92, icon: "Server" },
      { name: "Python / FastAPI", level: 90, icon: "Terminal" },
      { name: "PostgreSQL & Prisma", level: 89, icon: "Database" },
      { name: "Redis & Caching", level: 86, icon: "Layers" },
      { name: "GraphQL & REST APIs", level: 94, icon: "Network" },
      { name: "Docker & Kubernetes", level: 84, icon: "Container" }
    ]
  },
  {
    category: "Applied AI & Innovation",
    description: "Integrating LLM workflows, custom embeddings, and spatial computing interfaces.",
    items: [
      { name: "LLM Orchestration", level: 90, icon: "Brain" },
      { name: "Vector DBs (Pinecone)", level: 87, icon: "Search" },
      { name: "Prompt Engineering", level: 95, icon: "Sparkles" },
      { name: "Autonomous Agents", level: 88, icon: "Bot" },
      { name: "WebGPU & Shader Dev", level: 80, icon: "Activity" }
    ]
  }
]



export const projectsData = [
  {
    id: "skillbridge",
    title: "SkillBridge AI",
    tagline: "Interview preparation and resume generation platform",
    category: "Applied AI & Full Stack",
    year: "2026",
    description: "A job prep and JD specific resume generation",
    longDescription: "Aura Studio combines Three.js GPU-accelerated rendering with custom WebSockets to stream high-density LLM responses into node graphs floating in 3D space. Includes real-time collaboration, custom shader nodes, and one-click cloud deployment.",
    tags: ["React.js", "JWT", "mongoDB", "TailwindCSS", "Node.js"],
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Rendering Speed", value: "60 FPS" },
      { label: "Token Processing", value: "1.2k t/s" },
      { label: "Active Nodes", value: "100k+" }
    ],
    liveUrl: "https://skill-bridge-ai-lilac.vercel.app/login",
    githubUrl: "https://github.com/Nezaal/Skill-Bridge-AI"
  },
  {
    id: "neural-flow-analytics",
    title: "Synapse Engine",
    tagline: "Sub-millisecond telemetry analytics platform with predictive AI alerts",
    category: "Full-Stack System",
    year: "2025",
    metrics: "<15ms Latency • 2.4 Billion Logs/Day",
    description: "High-throughput real-time streaming engine built for monitoring distributed cloud microservices with instant anomaly detection.",
    longDescription: "Synapse Engine processes gigabytes of telemetry data per second using Rust backend workers and presents interactive canvas timeline visualizations in a sleek dark-mode dashboard.",
    tags: ["React 19", "Rust", "ClickHouse", "Tailwind CSS", "ECharts"],
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Query Speed", value: "<15ms" },
      { label: "Throughput", value: "2.4B events" },
      { label: "Uptime", value: "99.999%" }
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "quantum-os-interface",
    title: "Vapor OS Dashboard",
    tagline: "Futuristic browser-based workspace with glassmorphism UI components",
    category: "Creative Dev & UI Systems",
    year: "2025",
    metrics: "12k Stars on GitHub",
    description: "An ultra-premium, Apple-inspired Web desktop experience featuring physics-based windows, dynamic audio feedback, and custom design tokens.",
    longDescription: "Built to demonstrate the outer boundaries of browser UI capabilities. Includes custom window management, hardware-accelerated blur filters, keyboard shortcuts, and sound synthesis.",
    tags: ["React", "GSAP", "Tailwind CSS", "Web Audio API"],
    featured: true,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "GitHub Stars", value: "12,400+" },
      { label: "Bundle Size", value: "42 KB" }
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
]
