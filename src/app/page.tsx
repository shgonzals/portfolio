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
      <section className="container mt-24 mx-auto px-12 py-12" id="inicio">
        <section className="snap-start lg:mt-10 lg:px-12 sm: px-1 ">
          <HeroSection />
        </section>
       <section id="about">
          <AboutSection />
       </section> 
       <section className="py-20" id="skills">
          <SkillsSection />
        </section>
        <section className="snap-center mb-10 py-20" id="experience">
          <ExperienceSection />
        </section>        
        <section className="py-20" id="projects" >
          <ProjectSection />
        </section>
        <section className="py-20" id="contact">
          <EmailSection />
        </section>      
      </section>
      <Footer />
    </main>
  )
}
