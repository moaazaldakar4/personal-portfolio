export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Computer Vision' | 'Research' | 'Autonomous Systems' | 'Applied Engineering';
  featured: boolean;
  status?: 'Completed' | 'In Development' | 'Published Research';
  description: string;
  longDescription: string;
  technologies: string[];
  contributions: string[];
  metricsOrOutcomes: string[];
  image: string;
  links: {
    github?: string;
    liveDemo?: string;
    paperUrl?: string;
    doi?: string;
  };
}

export interface Publication {
  title: string;
  conference: string;
  conferenceShort: string;
  year: string;
  dates: string;
  location: string;
  authors: { name: string; isHighlighted: boolean; affiliation: string }[];
  doi: string;
  doiUrl: string;
  ieeeUrl: string;
  abstract: string;
  keyContributions: string[];
  keywords: string[];
  image: string;
  bibtex: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; focus: string; proficiency?: string }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
  courses: string[];
}

export const PROFILE_DATA = {
  name: "Moaaz Hani AlDakar",
  shortName: "Moaaz Aldakar",
  researchName: "Moaaz H. Aldakar",
  title: "AI Engineer & Computer Vision Developer",
  tagline: "Building robust deep learning architectures, generative diffusion models, and real-time computer vision systems.",
  location: "Alexandria | Egypt",
  availability: "Open to Hybrid & Remote Opportunities",
  university: "Egypt-Japan University of Science and Technology (E-JUST)",
  bio: `I am an AI Engineer and Computer Vision Developer studying Computer Science at Egypt-Japan University of Science and Technology (E-JUST). My work bridges applied deep learning research and production software engineering — with published IEEE research in discrete diffusion models, alongside field-ready computer vision applications for agricultural disease detection and environmental audio recognition.

I focus on developing principled models that solve hard constraints: handling scarce datasets, edge-device latency, and structural generation challenges.`,
  contact: {
    email: "moaazeldakar@gmail.com",
    phone: "+20 102 151 1115",
    whatsapp: "https://wa.me/201021511115",
    linkedin: "https://www.linkedin.com/in/moaaz-h-al-dakar-594bb9273",
    github: "https://github.com/moaazaldakar4",
    resumeUrl: "CV.pdf",
    resumeFileName: "Moaaz_Aldakar_CV.pdf"

  },
  stats: [
    { label: "Research Paper", value: "IEEE 3SCEA", hint: "Co-authored publication" },
    { label: "Core Focus", value: "Vision & Diffusion", hint: "Deep learning systems" },
    { label: "University", value: "E-JUST", hint: "CS & AI Program" },
    { label: "Engineering", value: "Production ML", hint: "PyTorch & Edge Inference" }
  ]
};

export const PUBLICATION_DATA: Publication = {
  title: "Conditional Autoregressive Diffusion for Procedural Content Generation",
  conference: "2026 IEEE International Conference on Smart Sustainable Systems for Computer and Engineering Applications (3SCEA)",
  conferenceShort: "IEEE 3SCEA 2026",
  year: "2026",
  dates: "April 19–21, 2026",
  location: "Cairo, Egypt",
  authors: [
    { name: "Ahmed E. Al Mohamady", isHighlighted: false, affiliation: "E-JUST" },
    { name: "Shehab T. Shaban", isHighlighted: false, affiliation: "E-JUST" },
    { name: "Mohamed A. Ebrahim", isHighlighted: false, affiliation: "E-JUST" },
    { name: "Moaaz H. Aldakar", isHighlighted: true, affiliation: "E-JUST" },
    { name: "Hazem N. Alieldin", isHighlighted: false, affiliation: "E-JUST" },
    { name: "Aly M. Elhalawany", isHighlighted: false, affiliation: "E-JUST" },
    { name: "Ahmed B. Zaky", isHighlighted: false, affiliation: "Benha University" }
  ],
  doi: "10.1109/3SCEA68071.2026.11602791",
  doiUrl: "https://doi.org/10.1109/3SCEA68071.2026.11602791",
  ieeeUrl: "https://ieeexplore.ieee.org/document/11602791",
  abstract: "Diffusion models have been state-of-the-art for continuous content generation, such as image or audio generation, but their use in discrete problems remains underexplored. To address this gap, we decided to use one of the most famous and prominent games in history, Super Mario Bros., which is a 2D platformer game with a discrete number of tiles that represent a game level. Game level generation has always been a difficult problem for deep learning methods, as they require extensive training data, which is usually not available for video games. Our method aims to show the potential of diffusion models in discrete problems such as game level generation using a very limited training dataset.",
  keyContributions: [
    "Formulated discrete token diffusion mechanisms for procedural content generation (PCG) in discrete grid domains.",
    "Integrated autoregressive conditioning to maintain sequential coherence across generated platformer tile segments.",
    "Demonstrated successful synthesis of viable, playable game layouts with strict structural constraints under scarce training data."
  ],
  keywords: ["Procedural content generation", "diffusion models", "level generation", "deep learning", "discrete latent space"],
  image: "/media/diffusion_pcg.jpg",
  bibtex: `@inproceedings{almohamady2026conditional,
  title={Conditional Autoregressive Diffusion for Procedural Content Generation},
  author={Al Mohamady, Ahmed E. and Shaban, Shehab T. and Ebrahim, Mohamed A. and Aldakar, Moaaz H. and Alieldin, Hazem N. and Elhalawany, Aly M. and Zaky, Ahmed B.},
  booktitle={2026 IEEE International Conference on Smart Sustainable Systems for Computer and Engineering Applications (3SCEA)},
  pages={249--254},
  year={2026},
  organization={IEEE},
  doi={10.1109/3SCEA68071.2026.11602791}
}`
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "jannat-ai",
    title: "Jannat AI",
    subtitle: "AI-assisted date palm disease detection using computer vision",
    category: "AI & Computer Vision",
    featured: true,
    status: "In Development",
    description: "An intelligent diagnostic computer vision system designed to assist agricultural teams and date palm farmers with real-time detection, segmentation, and classification of foliar diseases and pest infestations.",
    longDescription: "Date palm cultivation is an economic pillar across the MENA region, yet early-stage foliar diseases and pest stress frequently cause massive yield degradation before symptoms become visibly prominent. Jannat AI utilizes deep convolutional networks and multi-scale object detection to scan foliage in real-time, pinpoint pathogen loci, and output actionable health severity indexes with low latency.",
    technologies: ["PyTorch", "YOLOv8", "OpenCV", "Python", "Data Augmentation", "Edge Deployment", "ONNX"],
    contributions: [
      "Engineered a domain-specialized image preprocessing and data augmentation pipeline to handle varying field illumination and rare disease samples.",
      "Trained and fine-tuned multi-scale deep learning models for precise leaf frond segmentation and localized disease classification.",
      "Designed an intuitive diagnostic interface providing bounding box overlays, confidence scores, and foliage health metrics."
    ],
    metricsOrOutcomes: [
      "High-precision real-time detection on edge devices",
      "Robust localization across complex agricultural foliage backgrounds",
      "Modular pipeline adaptable to various crop pathogen profiles"
    ],
    image: "/media/jannat_ai.jpg",
    links: {
      github: "https://github.com/moaazaldakar4"
    }
  },
  {
    id: "diffusion-pcg",
    title: "Conditional Autoregressive Diffusion for PCG",
    subtitle: "Discrete token diffusion for 2D level generation with scarce datasets (IEEE Publication)",
    category: "Research",
    featured: true,
    status: "Published Research",
    description: "Co-authored IEEE research addressing the frontier of discrete generative modeling. Adapted diffusion models to synthesize coherent 2D platformer levels using highly constrained training data.",
    longDescription: "While continuous diffusion models dominate high-fidelity image and audio generation, discrete token structures have historically posed steep mathematical and training obstacles. In this research, we adapted diffusion models for discrete procedural generation on 2D platformer grids (benchmarked on Super Mario Bros.). By compounding autoregressive conditioning with discrete noise scheduling, the system generates high-integrity, traversable level layouts even under severe data scarcity.",
    technologies: ["PyTorch", "Diffusion Models", "Autoregressive Modeling", "Discrete Latent Spaces", "Python", "NumPy", "Matplotlib"],
    contributions: [
      "Co-authored research published in IEEE 3SCEA 2026 conference proceedings.",
      "Formulated the discrete token denoising progression and categorical loss formulations.",
      "Conducted comparative evaluations demonstrating global structural coherence and playability metrics."
    ],
    metricsOrOutcomes: [
      "Peer-reviewed & published in IEEE Xplore (DOI: 10.1109/3SCEA68071.2026.11602791)",
      "Maintained topological playability with minimal training instances",
      "Demonstrated viability of diffusion models over traditional discrete procedural generators"
    ],
    image: "/media/diffusion_pcg.jpg",
    links: {
      paperUrl: "https://ieeexplore.ieee.org/document/11602791",
      doi: "https://doi.org/10.1109/3SCEA68071.2026.11602791"
    }
  },
  {
    id: "audio-classification-cnn",
    title: "Audio Classification CNN",
    subtitle: "Acoustic feature extraction and convolutional deep learning for environmental sound recognition",
    category: "AI & Computer Vision",
    featured: true,
    status: "Completed",
    description: "Deep learning pipeline converting raw acoustic waveforms into log-mel spectrograms and MFCC feature representations, followed by a regularized 2D convolutional neural network for multi-class environmental sound classification.",
    longDescription: "Environmental audio classification requires robust acoustic representations invariant to background noise and tempo fluctuations. This project implements a complete audio processing and classification pipeline using the ESC-50 and UrbanSound8K benchmarks. By converting raw audio into time-frequency representations (Log-Mel Spectrograms and Mel-Frequency Cepstral Coefficients), a multi-layer 2D CNN extracts salient spatial-temporal patterns for classification.",
    technologies: ["Python", "PyTorch", "Librosa", "Mel-Spectrograms", "MFCC", "2D CNN", "Scikit-Learn"],
    contributions: [
      "Built audio feature extraction pipeline converting diverse raw audio formats into standardized 128-band log-mel spectrograms.",
      "Implemented SpecAugment (time and frequency masking) to significantly boost model generalization under acoustic distortion.",
      "Trained and evaluated deep 2D CNN architectures with residual skips, dropout, and batch normalization."
    ],
    metricsOrOutcomes: [
      "Benchmarked on ESC-50 and UrbanSound8K datasets",
      "Effective noise resistance via time-frequency augmentation",
      "Low-latency feature extraction suitable for real-time inference"
    ],
    image: "/media/Screenshot 2025-06-23 174424.png",
    links: {
      github: "https://github.com/moaazaldakar4"
    }
  },
  {
    id: "alfred-ai",
    title: "Alfred AI Personal Assistant",
    subtitle: "Autonomous multimodal personal assistant with tool-calling and local intelligence",
    category: "Autonomous Systems",
    featured: true,
    status: "In Development",
    description: "A developer-oriented autonomous assistant architecture integrating local multi-modal input processing, LLM function calling, semantic vector memory, and automated task execution.",
    longDescription: "Alfred AI is designed as a developer's privacy-first autonomous co-pilot. Combining speech recognition with lightweight local LLMs, Alfred parses intents, retains short and long-term memory via vector embeddings, and executes structured tool calls across local developer workflows. Note: Actively under engineering; marked as in development until a live public demo is finalized.",
    technologies: ["Python", "Local LLMs", "Function Calling", "Speech-to-Text (Whisper)", "Tool Orchestration", "Vector Memory"],
    contributions: [
      "Architected modular execution workflow separating natural language understanding, orchestration, and tool execution.",
      "Prototyped tool-calling schemas for developer workspace actions and local API query dispatch.",
      "Benchmarked memory retrieval latency using localized vector embeddings."
    ],
    metricsOrOutcomes: [
      "Currently in active development & internal iteration",
      "Modular node architecture for extensible tool integrations",
      "Engineered for low-latency local execution"
    ],
    image: "/media/alfred_ai.jpg",
    links: {
      github: "https://github.com/moaazaldakar4"
    }
  },
  {
    id: "alahram-lab",
    title: "AL AHRAM Medical Lab Platform",
    subtitle: "Production web platform for medical diagnostics showcase and patient communication",
    category: "Applied Engineering",
    featured: false,
    status: "Completed",
    description: "A clinical laboratory web platform created for AL AHRAM Medical Lab, designed to showcase diagnostic specializations, streamline patient communications, and maintain high accessibility.",
    longDescription: "Developed for a medical diagnostics center, this platform emphasizes clinical credibility, fast load times, and an intuitive hierarchy for patients seeking test details, laboratory accreditations, and contact channels.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Accessibility (a11y)"],
    contributions: [
      "Engineered full responsive front-end interface optimized for all device viewports.",
      "Structured diagnostic service catalog with clear categorization and contact touchpoints."
    ],
    metricsOrOutcomes: [
      "Live production deployment serving clinic visitors",
      "High PageSpeed performance and clean semantic structure"
    ],
    image: "/media/Screenshot (56).png",
    links: {
      liveDemo: "https://alahram.io/"
    }
  },
  {
    id: "engineers-association",
    title: "Engineers Association Portal",
    subtitle: "Community web portal for engineering collaboration, resources, and events",
    category: "Applied Engineering",
    featured: false,
    status: "Completed",
    description: "A responsive community web portal engineered for a non-profit engineering initiative to connect practicing engineers and students with networking resources and updates.",
    longDescription: "A volunteer web engineering project designed to provide an organized hub for engineering announcements, professional resources, and collaborative initiatives.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Performance Optimization"],
    contributions: [
      "Built clean, responsive layouts emphasizing accessibility and ease of navigation.",
      "Optimized static assets for minimal bandwidth consumption."
    ],
    metricsOrOutcomes: [
      "Successfully deployed for community access",
      "Demonstrated commitment to engineering community initiatives"
    ],
    image: "/media/eng (2).png",
    links: {
      liveDemo: "https://moaazaldakar4.github.io/engengineersassociation/",
      github: "https://github.com/moaazaldakar4"
    }
  },
  {
    id: "phondizer",
    title: "Phondizer",
    subtitle: "Modern responsive web exploration platform for smartphone specifications",
    category: "Applied Engineering",
    featured: false,
    status: "Completed",
    description: "A fast, responsive product exploration interface providing structured device specifications, clean comparison cards, and fluid browsing.",
    longDescription: "Engineered to deliver a fast, clutter-free browsing experience for tech consumers, featuring responsive comparison cards, modular layouts, and swift client-side interactions.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify Deployment", "UI/UX Design"],
    contributions: [
      "Designed UI layouts focusing on rapid scanning of device specifications.",
      "Implemented mobile-first responsive grid system."
    ],
    metricsOrOutcomes: [
      "Deployed on Netlify with automated continuous deployment",
      "100% mobile responsive layout"
    ],
    image: "./media/Screenshot 2026-10-29 185700.png",
    links: {
      liveDemo: "https://mobile-store-eight-tan.vercel.app/#",
      github: "https://github.com/moaazaldakar4"
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    description: "Core modeling, deep learning architectures, generative diffusion, and training pipelines.",
    skills: [
      { name: "PyTorch", focus: "Model training, custom architectures, GPU acceleration" },
      { name: "Diffusion Models", focus: "Discrete token diffusion, denoising schedules" },
      { name: "Convolutional Neural Networks", focus: "2D CNNs, ResNets, feature extraction" },
      { name: "Generative AI & LLMs", focus: "Agent workflows, prompt pipelines, fine-tuning" },
      { name: "Scikit-Learn", focus: "Classification, clustering, evaluation metrics" },
      { name: "TensorFlow / Keras", focus: "Model prototyping and verification" },
      { name: "Mathematical Foundations", focus: "Linear algebra, probability, loss formulations" }
    ]
  },
  {
    title: "Computer Vision",
    description: "Object detection, spatial segmentation, edge vision models, and signal processing.",
    skills: [
      { name: "OpenCV", focus: "Image processing, spatial filtering, geometric transforms" },
      { name: "YOLOv8 & Detection", focus: "Object detection, bounding boxes, mAP optimization" },
      { name: "Image Segmentation", focus: "Semantic & instance masks, agricultural foliage analysis" },
      { name: "Acoustic / Vision Spectrograms", focus: "Mel-spectrograms, MFCCs, 2D signal transforms" },
      { name: "Edge Inference & ONNX", focus: "Model conversion, latency reduction, quantization" },
      { name: "Data Augmentation", focus: "SpecAugment, Albumentations, class imbalance handling" }
    ]
  },
  {
    title: "Software Engineering",
    description: "Robust programming languages, modern frameworks, and clean architecture.",
    skills: [
      { name: "Python", focus: "Scientific computing, PyTorch, NumPy, Librosa, scripts" },
      { name: "TypeScript & JavaScript", focus: "Type-safe interfaces, modern ESNext, React" },
      { name: "React & Modern Web", focus: "Component architecture, hooks, state, Vite" },
      { name: "C++", focus: "Algorithms, competitive programming, systems concepts" },
      { name: "RESTful APIs", focus: "API design, client integration, data formatting" },
      { name: "HTML5 / CSS3", focus: "Semantic layout, responsive design, a11y, modern CSS" }
    ]
  },
  {
    title: "Development Tools & Infrastructure",
    description: "Version control, GPU environments, deployment platforms, and developer tooling.",
    skills: [
      { name: "Git & GitHub", focus: "Branching, PRs, version control, CI/CD" },
      { name: "CUDA & GPU Workloads", focus: "NVIDIA accelerated training, memory optimization" },
      { name: "Linux / Shell", focus: "Bash scripting, server environments, automation" },
      { name: "Jupyter & Notebooks", focus: "Exploratory data analysis, rapid prototyping" },
      { name: "Docker", focus: "Containerization, environment reproducibility" },
      { name: "VS Code & Developer Tooling", focus: "Productivity, profiling, debugging" }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Mobile Development Intern",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Nov 2023 — Sep 2024",
    type: "Internship (Remote)",
    location: "Egypt",
    summary: "Selected for the national DEPI technology leadership initiative, gaining intensive practical engineering training in cross-platform mobile development.",
    highlights: [
      "Built responsive, user-friendly mobile applications utilizing Flutter and Firebase backends.",
      "Gained hands-on experience in cross-platform UI state management, real-time database syncing, and authentication.",
      "Collaborated in agile software delivery sprints, code reviews, and technical project presentations."
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Cross-Platform Engineering", "Git"]
  },
  {
    role: "Web Developer & Technical Volunteer",
    organization: "Engineers Association",
    period: "Jan 2023 — Dec 2024",
    type: "Volunteering / Community",
    location: "Egypt",
    summary: "Contributed to non-profit web engineering initiatives supporting regional engineering students and professional networks.",
    highlights: [
      "Engineered accessible, responsive front-end pages to share updates, technical materials, and collaborative initiatives.",
      "Emphasized clean navigation, rapid page loading, and cross-browser accessibility.",
      "Applied web development skills to generate direct civic and technical community value."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Optimization", "GitHub Pages"]
  },
{
  role: "Coding Instructor & Cover Tutor",
  organization: "iSchool",
  period: "Jun2025 — Sep2025",
  type: "Education / Part-time",
  location: "Egypt",
  summary: "Delivered coding education to young learners while supporting instructional continuity and troubleshooting technical issues across digital learning sessions.",
  highlights: [
    "Taught programming concepts to students in Grades 4–6 through structured, age-appropriate lessons and practical activities.",
    "Supported students in understanding coding fundamentals, solving problems, and completing learning activities.",
    "Provided cover tutoring and technical troubleshooting to maintain smooth lesson delivery and minimize disruptions."
  ],
  technologies: [
    "Programming Fundamentals",
    "Coding Education",
    "Problem-Solving",
    "Technical Troubleshooting",
    "Online Learning Platforms"
  ]
}
  
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Egypt-Japan University of Science and Technology (E-JUST)",
  period: "Oct 2022 — May 2026 (Expected)",
  location: "New Borg El Arab City, Alexandria, Egypt",
  details: [
    "Comprehensive academic curriculum combining rigorous Japanese engineering standards with contemporary Computer Science and Artificial Intelligence research.",
    "Active undergraduate researcher in generative deep learning and discrete procedural generation.",
    "Integrated Japanese language and cultural communication coursework as part of the E-JUST degree program."
  ],
  courses: [
    "Machine Learning & Deep Learning",
    "Computer Vision & Pattern Recognition",
    "Algorithms & Data Structures",
    "Linear Algebra & Probability for AI",
    "Operating Systems & Architecture",
    "Software Engineering Methodologies",
    "Japanese Language & Cultural Studies"
  ]
};
