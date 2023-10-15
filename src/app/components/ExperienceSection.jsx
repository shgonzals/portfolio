"use client";
import React from 'react'
import { motion } from 'framer-motion'; 
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
    max-w-full px-10  justify-evenly mx-auto items-center'>
        <h3 className='absolute top-1 uppercase tracking-[10px] font-semibold text-white text-2xl'>Experiencia</h3>    

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
        scrollbar scrollbar-track-pink-500/20 scrollbar-thumb-pink-500/80'>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default ExperienceSection