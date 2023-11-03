import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection'; 
import Projects from './components/Projects'; 
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';
import Experience from './components/Experience';
import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bg 
    overflow-x-hidden overflow-y-scroll  snap-mandatory h-screen
    scrollbar scrollbar-track-secondary-500/20 scrollbar-thumb-secondary-500/80">
      <Head>
        <meta name="portfolio" content="Portfolio" />
      </Head>
      <Navbar />
      <section className="container mt-24 mx-auto px-10 py-12 lg:px-5" id="inicio">
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
      </section>
      <Footer />
    </main>
  )
}
