import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection'; 
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] 
    overflow-x-hidden overflow-y-scroll  snap-mandatory h-screen
    scrollbar scrollbar-track-pink-500/20 scrollbar-thumb-pink-500/80">
      <Navbar />
      <section className="container mt-24 mx-auto px-12 py-12">
        <div className="snap-start mt-10 ">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <div className="snap-center mb-10">
          <ExperienceSection />
        </div>        
        <ProjectSection />
        <EmailSection />
      </section>
      <Footer />
    </main>
  )
}
