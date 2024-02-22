import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";
import AboutSection from './pages/AboutSection';
import ProjectSection from './pages/ProjectSection'; 
import EmailSection from './pages/EmailSection';
import Footer from './pages/Footer';
import SkillsSection from './pages/SkillsSection';
import Experience from './pages/Experience';
import ThemeSwitch from './pages/ThemeSwitch';
import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-black/90
    overflow-x-hidden overflow-y-scroll snap-mandatory h-screen
    scrollbar scrollbar-track-secondary-500/20 scrollbar-thumb-secondary-500/80">
      <Head>
        <meta name="description" content="Portfolio"></meta>
      </Head>
      <Navbar />
      <section className="container mt-24 mx-auto xl:px-10 px-3 py-12 lg:px-5" id="inicio">
        <section className="snap-start lg:mt-10 lg:px-12 sm: px-1 ">
          <HeroSection />
        </section>
       <section id="about">
          <AboutSection />
       </section> 
       <section className="py-20" id="skills">
          <SkillsSection />
        </section>
        <section className="py-20 " id="experience" >
          <Experience />
        </section>        
        <section className="py-20" id="projects" >
          <ProjectSection />
        </section>
        <section className="py-20" id="contact">
          <EmailSection />
        </section>      
        <ThemeSwitch  />
      </section>
      
      <Footer />
    </main>
  )
}
