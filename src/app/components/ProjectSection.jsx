import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        id: 1,
        title: 'API QR Gen',
        description: 'QR Gen Swagger',
        image: '/images/projects/1.png',
        tag: ["ALL", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    },{
        id: 2,
        title: 'QR Gen',
        description: 'Frontend QR Gen en Angular',
        image: '/images/projects/2.png',
        tag: ["ALL", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    },{
        id: 3,
        title: 'Portfolio',
        description: 'Portfolio en Next.js',
        image: '/images/projects/3.png',
        tag: ["ALL", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    }
];

const ProjectSection = () => {
  return (
    <div>
        {/*
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <button className='rounded-full border-2 border-pink-500 px-6 py-3 text-xl cursor-pointer'>All</button>
            <button className='rounded-full border-2 border-white hover:border-pink-500 px-6 py-3 text-xl cursor-pointer'>Web</button>
        </div>
        */}
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
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