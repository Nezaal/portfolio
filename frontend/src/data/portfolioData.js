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
    "id": "skillbridge",
    "title": "SkillBridge AI",
    "tagline": "AI-powered interview preparation and personalized performance analysis platform",
    "category": "Applied AI & Full Stack",
    "year": "2026",
    "description": "An AI-powered interview preparation platform that conducts realistic mock interviews, analyzes responses, and generates personalized performance reports.",
    "longDescription": "SkillBridge AI combines a React frontend with a Node.js and Express backend to deliver AI-powered mock interviews, response analysis, detailed performance analytics, and downloadable PDF reports. It uses MongoDB for persistent data storage and JWT-based authentication with a service-oriented backend architecture.",
    "tags": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AI"
    ],
    "featured": true,
    "image": "/skillbridge.png",
    "stats": [
      {
        "label": "Interview Analysis",
        "value": "AI Powered"
      },
      {
        "label": "Performance Reports",
        "value": "PDF Export"
      },
      {
        "label": "Authentication",
        "value": "JWT Secure"
      }
    ],
    "liveUrl": "https://skill-bridge-ai-lilac.vercel.app/login",
    "githubUrl": "https://github.com/Nezaal/Skill-Bridge-AI"
  },
  {
    id: "k72-portfolio",
    title: "K72 Website Clone",
    tagline: "A motion-driven recreation of the K72 creative agency website",
    category: "Frontend / Creative Development",
    year: "2025",
    metrics: "GSAP Animations • Interactive UI • Responsive Design",
    description: "A frontend recreation of the K72 creative agency website, focused on expressive motion, smooth transitions, and a visually immersive browsing experience.",
    longDescription: "Built with React and GSAP, this project recreates the visual language and interactions of K72.ca with custom animations, scroll-based motion, page transitions, and responsive layouts. The project combines React component architecture with GSAP-powered interactions to create a polished, animation-heavy agency-style experience.",
    tags: [
      "React 19",
      "GSAP",
      "Tailwind CSS",
      "React Router",
      "Vite"
    ],
    featured: true,
    image: '/project images/k72.png',
    stats: [
      {
        label: "Frontend",
        value: "React 19"
      },
      {
        label: "Animation",
        value: "GSAP"
      },
      {
        label: "Styling",
        value: "Tailwind CSS"
      }
    ],
    liveUrl: "https://k72-portfolio.vercel.app/",
    githubUrl: "https://github.com/Nezaal/K72-portfolio"
  },
  {
    "id": "resume-screener",
    "title": "AI Resume Screener",
    "tagline": "AI-powered candidate screening and ranking platform",
    "category": "Full-Stack AI Application",
    "year": "2026",
    "metrics": "AI Scoring • Semantic Matching • Automated Ranking",
    "description": "A full-stack web application that automatically analyzes resumes against job descriptions, generates candidate match scores, and ranks applicants by suitability.",
    "longDescription": "Built with React, Node.js, and Express, the platform supports PDF and DOCX resume uploads, automatic text and skill extraction, semantic similarity analysis using local sentence-transformer embeddings, and weighted candidate scoring. Results are stored in Supabase and presented through an interactive dashboard with search, sorting, and CSV export functionality.",
    "tags": [
      "React",
      "Node.js",
      "Express.js",
      "Supabase",
      "Tailwind CSS",
      "Transformers.js",
      "Vite"
    ],
    "featured": true,
    "image": '/project images/resumeScreener.png',
    "stats": [
      {
        "label": "Skill Match",
        "value": "60%"
      },
      {
        "label": "Semantic Match",
        "value": "30%"
      },
      {
        "label": "Education Match",
        "value": "10%"
      }
    ],
    liveUrl: "https://resume-screener-chi-gilt.vercel.app",
    githubUrl: "https://github.com/Nezaal/resume-Screener"
  }
]
