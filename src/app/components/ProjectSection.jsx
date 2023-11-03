"use client";
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'; 

const projectData = [
    {
        id: 1,
        title: 'API QR Gen',
        description: 'API con UI en Swagger desarrollado en Java 8 con Springboot. Ha sido creada con Java 8 y Springboot 2.5.5',
        image: '/images/projects/1.webp',
        tags: ["Java", "Springboot"],
        gitUrl: 'https://github.com/shgonzals/qr-gen',
        previewUrl: 'https://qrgen.shgonzals.es/api/swagger-ui.html'
    },{
        id: 2,
        title: 'QR Gen',
        description: 'Frontend en Angular que generará un QR personalizado utilizando un API. Ha sido creada con Angular 16.0.0',
        image: '/images/projects/2.webp',
        tags: ["Angular", "Material"],
        gitUrl: 'https://github.com/shgonzals/qr-gen-front',
        previewUrl: 'http://qrgen.shgonzals.es/'
    },{
        id: 3,
        title: 'Portfolio',
        description: '¡Este portfolio! Ha sido creado con Next.js 13.5 + Tailwind CSS 3.3.3',
        image: '/images/projects/3.webp',
        tags: ["Next.js", "Tailwind"],
        gitUrl: 'https://github.com/shgonzals/portfolio',
        previewUrl: 'https://portfolio-shgonzals.vercel.app/'
    },{
        id: 4,
        title: 'Stock Tracker',
        description: 'Aplicación que comprueba la información de stock. Ha sido creada con Angular 13.0.0',
        image: '/images/projects/4.webp',
        tags: ["Angular", "Material"],
        gitUrl: 'https://github.com/shgonzals/stock-track',
        previewUrl: ''
    }
];

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
            {projectData.map((project) => <ProjectCard key={project.id} 
            title={project.title} 
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tags={project.tags}
            previewUrl={project.previewUrl} />)}
        </div>
    </motion.div>
  )
}

export default ProjectSection