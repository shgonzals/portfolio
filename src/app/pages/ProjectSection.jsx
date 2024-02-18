"use client";
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'; 
import projects from '../data/projects';



const ProjectSection = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className=''>
        {/*
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <button className='rounded-full border-2 border-secondary-500 px-6 py-3 text-xl cursor-pointer'>All</button>
            <button className='rounded-full border-2 border-white hover:border-secondary-500 px-6 py-3 text-xl cursor-pointer'>Web</button>
        </div>
        */}
        <h2 className='text-center top-24 uppercase tracking-[10px] font-semibold text-white text-2xl mb-6'>
            Mis Proyectos
        </h2>
        <div className='grid sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 md-gap-10'>
            {projects.map((project) => <ProjectCard key={project.id} 
            title={project.title} 
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tags={project.tags}
            previewUrl={project.previewUrl} />)}
        </div>
        <div className='text-center text-white mt-5 text-xs'>
        <button
            type='submit'
            className='py-2.5 px-5 rounded-lg 
             text-white font-medium transition-all duration-300
             bg-secondary-500
             hover:bg-secondary-700'
        >
            <a href="https://github.com/shgonzals?tab=repositories" target="_blank"> Ver más proyectos... </a>
          </button>
        </div>
    </motion.div>
  )
}

export default ProjectSection