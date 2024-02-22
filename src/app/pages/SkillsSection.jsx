"use client";
import React from 'react'
import SkillItem from './SkillItem'
import { motion } from 'framer-motion'; 
import skills from '../data/skills';


const SkillsSection = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='mb-20 snap-center'>
        <h2 className='text-center top-24 uppercase tracking-[10px] font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600
        text-2xl'>
            Skills
        </h2>
        <div className='flex flex-wrap justify-center  mt-6 m-10 relative z-1'>
            {skills.map((skill) => <SkillItem key={skill.id} id={skill.id} icon={skill.icon} description={skill.description} />)}
        </div>
    </motion.div>
  )
}

export default SkillsSection