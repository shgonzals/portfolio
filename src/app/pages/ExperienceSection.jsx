"use client";
import React from 'react'
import { motion } from 'framer-motion'; 
import ExperienceCard from './ExperienceCard';
import experience from '../data/experience';


const ExperienceSection = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
    max-w-full md:px-10 lg:px-12 sm:px-0 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-1 uppercase tracking-[10px] font-semibold text-white text-2xl'>Experiencia</h3>    

        <div className='w-full flex space-x-5 overflow-x-scroll lg:p-8 sm:p-2 snap-x snap-mandatory 
        scrollbar scrollbar-track-secondary-500/20 scrollbar-thumb-secondary-500/80'>
            {experience.map((d) => <ExperienceCard  key={d.id}
            id={d.id}
            src={d.src}
            puesto={d.puesto}
            empresa={d.empresa}
            fechas={d.fechas}
            content={d.content}
            />)}
        </div>
    </motion.div>
  )
}

export default ExperienceSection