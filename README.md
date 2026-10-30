# Moaaz Aldakar — AI Engineer & Computer Vision Developer Portfolio

A production-grade, component-based personal portfolio website built with **React**, **TypeScript**, **Vite**, and a custom **Vanilla CSS Design System**.

Designed with a **dark charcoal base** (`#090c0d` / `#0b0f10`) and **restrained emerald-green technical accents** (`#10b981`), highlighting academic research, computer vision pipelines, and deep learning engineering capabilities.

---

## 🌟 Key Highlights

- **Published Research Showcase**: Prominently spotlights the co-authored IEEE conference paper:  
  *“Conditional Autoregressive Diffusion for Procedural Content Generation”* ([IEEE 3SCEA 2026 Proceedings](https://ieeexplore.ieee.org/document/11602791), DOI: `10.1109/3SCEA68071.2026.11602791`), complete with interactive BibTeX citation copying and architecture diagrams.
- **Featured Projects**:
  1. **Jannat AI**: AI-assisted date palm foliar disease detection and pest monitoring using multi-scale computer vision (PyTorch, YOLOv8, OpenCV, edge inference).
  2. **Conditional Autoregressive Diffusion for PCG**: Discrete token diffusion for 2D platformer level synthesis with scarce training datasets (IEEE research).
  3. **Audio Classification CNN**: Acoustic feature extraction (MFCCs & 128-band Log-Mel Spectrograms with SpecAugment) and 2D CNN benchmarking on ESC-50 & UrbanSound8K.
  4. **Alfred AI Personal Assistant**: Autonomous developer co-pilot with local speech-to-text, tool orchestration, and function calling (clearly badged as **In Development**).
  5. **Applied Engineering Systems**: AL AHRAM Medical Lab, Engineers Association Portal, and PhoneDizer.
- **Categorized Technical Matrix**: Skills grouped into AI & Machine Learning, Computer Vision, Software Engineering, and Development Tools with practical application notes.
- **Profile & Background**: Educational foundation at **Egypt-Japan University of Science and Technology (E-JUST)** and professional mobile/web development history (DEPI internship & community engineering).
- **Direct Contact Hub**: Verified channels for Email, WhatsApp, LinkedIn, GitHub, and 1-click CV download (`/resume_moaaz_eldakar.pdf`).

---

## 🏗️ Repository Architecture

```text
personal website/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment pipeline
├── public/
│   ├── favicon.svg               # Custom dark charcoal & emerald SVG favicon
│   ├── resume_moaaz_eldakar.pdf  # Downloadable authentic CV
│   └── media/                    # High-res project diagrams, legacy captures & assets
│       ├── jannat_ai.jpg         # Computer vision leaf segmentation & diagnostics visual
│       ├── diffusion_pcg.jpg     # Discrete token diffusion architecture diagram
│       ├── alfred_ai.jpg         # Autonomous assistant workflow execution card
│       ├── Screenshot 2025-06-23 174424.png # Audio classification spectrogram capture
│       ├── Screenshot (56).png   # Alahram lab capture
│       └── eng (2).png           # Engineers association capture
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with glassmorphism, scroll spy & mobile drawer
│   │   ├── Hero.tsx              # Headline, citation alias, stats bar & terminal card
│   │   ├── ResearchShowcase.tsx  # Featured IEEE 3SCEA paper card & BibTeX citation tool
│   │   ├── FeaturedProjects.tsx  # Project grid with category filter & modal launcher
│   │   ├── ProjectModal.tsx      # Accessible technical deep-dive modal
│   │   ├── AboutExperience.tsx   # E-JUST background, timeline & DEPI internship
│   │   ├── TechnicalSkills.tsx   # Grouped skill cards (AI/ML, CV, Software, Dev Tools)
│   │   ├── Contact.tsx           # Contact channels, copy triggers & email composer
│   │   ├── Footer.tsx            # Navigation links, citation link & back-to-top
│   │   └── Icons.tsx             # Clean SVG icon components
│   ├── data/
│   │   └── portfolioData.ts      # Typed, centralized data model for easy maintenance
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Custom design tokens, accessibility & responsive rules
│   └── main.tsx                  # React 19 application entry point
├── dist/                         # Optimized production bundle (generated on build)
├── index.html                    # SEO metadata, Open Graph tags & Google Fonts
├── package.json
├── tsconfig.json
└── vite.config.ts                # Portable relative base configuration
```

---

## 🚀 Setup & Local Development

### Prerequisites
- Node.js `v18.0.0` or higher (recommended: Node 20 or 22)
- npm `v9.0.0` or higher

### Installation
```bash
# Clone or navigate to the repository directory
cd "personal website"

# Install project dependencies
npm install
```

### Running Locally (Dev Server)
```bash
npm run dev
```
The application will launch with Hot Module Replacement (HMR) at `http://localhost:5173/`.

### Building for Production
```bash
npm run build
```
Compiles TypeScript with strict type-safety (`tsc -b`) and generates the optimized production bundle in the `dist/` directory.

### Previewing the Production Bundle Locally
```bash
npm run preview
```
Spins up a local web server serving the exact contents of `dist/` at `http://localhost:4173/`.

---

## 🌐 Deployment Instructions

### Option 1: Automatic Deployment with GitHub Pages (Recommended)
This repository includes a pre-configured GitHub Actions workflow in [deploy.yml](file:///.github/workflows/deploy.yml).

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: modern AI & Computer Vision developer portfolio"
   git branch -M main
   git remote add origin https://github.com/moaazaldakar4/personalwebsite.git
   git push -u origin main
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every push to `main` will automatically build and publish your portfolio at `https://moaazaldakar4.github.io/personalwebsite/`.

### Option 2: Vercel or Netlify
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

Because `vite.config.ts` uses `base: './'`, asset paths are relative and work seamlessly on any domain or subdirectory.

---

## 📝 Updating Your Data
All project information, publications, skills, and contact details are cleanly centralized in `src/data/portfolioData.ts`:
- **Add a new project**: Append a new entry to `FEATURED_PROJECTS`.
- **Update CV file**: Place your new PDF inside `public/` and update `PROFILE_DATA.contact.resumeUrl`.
- **Add research**: Add entries to `PUBLICATION_DATA` or create a publications list.
