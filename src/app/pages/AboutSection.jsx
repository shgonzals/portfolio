"use client"
import React, { useTransition, useState} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 
import TabButton from "./TabButton";
import about from '../data/about';


const AboutSection = () => {
  const [tab, setTab] = useState("certifications");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-black dark:text-white snap-center'>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <div className='flex justify-center items-center'>
            <Image src="/images/1.webp" className='rounded-xl' width={450} height={450} alt=''/></div>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-center align-middle'>
              <h2 className='top-20 uppercase tracking-[10px] font-bold 
              text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600
              text-2xl mt-0'>Sobre mi</h2>
              <div className='text-base lg:text-m'>
                <p>
                Actualmente desarrollo funcionalidades como backend con Java 8 y Spring Batch para una aplicación refactorizada, en la cual también participo en el análisis de los casos de uso a realizar, basándonos en la aplicación de origen (CA Plex).
                </p>
                <br/>
                 
              </div>
              <div className='flex justify-start flex-row mt-8'>
                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "} Certificaciones {" "}</TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "} Estudios {" "}</TabButton>
              </div>
              <div className='mt-8'>
                {about.find((t) => t.id === tab).content}
              </div>
            </div>
        </motion.div>
    </section>
   
  )
}

export default AboutSection