import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection'; 
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
