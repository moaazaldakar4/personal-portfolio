import { BackgroundAura } from './components/BackgroundAura';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchShowcase } from './components/ResearchShowcase';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutExperience } from './components/AboutExperience';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      {/* Interactive Lighting & Background Aura */}
      <BackgroundAura />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Co-Authored IEEE Research Showcase */}
        <ResearchShowcase />

        {/* Featured Projects Grid */}
        <FeaturedProjects />

        {/* About & Professional Experience */}
        <AboutExperience />

        {/* Technical Skills Grouped by Domain */}
        <TechnicalSkills />

        {/* Contact CTA Hub */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
