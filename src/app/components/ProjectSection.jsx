"use client";
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'; 

const projectData = [
    {
        id: 1,
        title: 'Taskify',
        description: 'App que gestiona tareas para aplicar las últimas novedades de Angular v17.',
        image: '/images/projects/1.webp',
        tags: [ "Angular", "Material" ],
        gitUrl: 'https://github.com/shgonzals/taskify',
        previewUrl: 'https://taskify-shgonzals.vercel.app/'
    },{
        id: 2,
        title: 'QR Gen',
        description: 'App en Angular que generará un QR personalizado utilizando un API con UI en Swagger desarrollado en Java 8 con Springboot.',
        image: '/images/projects/2.webp',
        tags: ["Angular", "Material", "Java", "Springboot", "Swagger", "API"],
        gitUrl: 'https://github.com/shgonzals/qr-gen-front',
        previewUrl: 'http://qrgen.shgonzals.es/'
    },{
        id: 3,
        title: 'Portfolio',
        description: '¡Este portfolio! Frontend con información sobre mi vida laboral.',
        image: '/images/projects/3.webp',
        tags: ["Next.js", "Tailwind"],
        gitUrl: 'https://github.com/shgonzals/portfolio',
        previewUrl: 'https://portfolio-shgonzals.vercel.app/'
    },{
        id: 4,
        title: 'Stock Tracker',
        description: 'Aplicación que comprueba la información de stock.',
        image: '/images/projects/4.webp',
        tags: ["Angular", "Material"],
        gitUrl: 'https://github.com/shgonzals/stock-track',
        previewUrl: ''
    },{
        id: 5,
        title: 'BookNest',
        description: 'API securizada para trackear los libros leídos.',
        image: '/images/projects/5.webp',
        tags: ["Java", "OpenAPI", "SpringBoot", "MongoDB", "JWT", "Docker", "JUnit5"],
        gitUrl: 'https://github.com/shgonzals/book-nest',
        previewUrl: ''
    },{
        id: 6,
        title: 'Reservation Confirmation System',
        description: 'API que maneja reservas de restaurantes y manda emails de confirmación de la reserva al usuario.',
        image: '/images/projects/6.webp',
        tags: ["Java", "Springboot", "MongoDb", "Docker", "Kafka"],
        gitUrl: 'https://github.com/shgonzals/reservation-confirmation-system',
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