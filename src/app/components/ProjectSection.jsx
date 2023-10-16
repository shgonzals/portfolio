import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        id: 1,
        title: 'API QR Gen',
        description: 'API con UI en Swagger desarrollado en Java 8 con Springbootb',
        image: '/images/projects/1.png',
        tag: ["ALL", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    },{
        id: 2,
        title: 'QR Gen',
        description: 'Frontend en Angular que generará un QR personalizado utilizando un API.',
        image: '/images/projects/2.png',
        tag: ["ALL", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    },{
        id: 3,
        title: 'Portfolio',
        description: 'Ha sido creada con Next.js 13.5 + Tailwind CSS 3.3.3.',
        image: '/images/projects/3.png',
        tag: ["ALL", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    },{
        id: 4,
        title: 'Stock Tracker',
        description: 'Ha sido creada con Next.js 13.5 + Tailwind CSS 3.3.3.',
        image: '/images/projects/4.png',
        tag: ["ALL", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    }
];

const ProjectSection = () => {
  return (
    <div className='snap-center'>
        {/*
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <button className='rounded-full border-2 border-secondary-500 px-6 py-3 text-xl cursor-pointer'>All</button>
            <button className='rounded-full border-2 border-white hover:border-secondary-500 px-6 py-3 text-xl cursor-pointer'>Web</button>
        </div>
        */}
        <h2 className='text-center top-24 uppercase tracking-[10px] font-semibold text-white text-2xl mb-4'>
            Mis Proyectos
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md-gap-12'>
            {projectData.map((project) => <ProjectCard key={project.id} 
            title={project.title} 
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl} />)}
        </div>
    </div>
  )
}

export default ProjectSection