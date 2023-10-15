"use client";
import React from 'react'
import { motion } from 'framer-motion'; 
import ExperienceCard from './ExperienceCard';


const DATA = [
    {
        id: 1,
        src: '/images/company/capgemini.png',
        puesto: 'Full-Stack Developer',
        empresa: 'Capgemini',
        fechas: 'Julio 2021 - Presente',
        content: (
            <ul className='list-disc space-y-4 ml-5 text-s'>
                <li>Desarrollo backend con Java 11 y Spring Batch</li>
                <li>Análisis de requisitos para una aplicación refactorizada (Java) en base a los casos de uso de la aplicación origen (CA Plex)</li>
                <li>Desarrollo de front-end (ExtJS) y back-end (Java)</li>
                <li>Mantenimiento de aplicaciones</li>
            </ul>
        )
    },{
        id: 2,
        src: '/images/company/oesia.png',
        puesto: 'Full-Stack Developer',
        empresa: 'Grupo Oesia',
        fechas: 'Abril 2021 - Julio 2021',
        content: (
            <ul className='list-disc space-y-4 ml-5 text-s'>
                <li>Desarrollo de back-end (Java 8)</li>
                <li>Ejecución y creación de pruebas</li>
            </ul>
        )
    },{
        id: 3,
        src: '/images/company/pfslogo.png',
        puesto: 'Full-Stack Developer',
        empresa: 'PFS Group',
        fechas: 'Abril 2020 - Marzo 2021',
        content: (
            <ul className='list-disc space-y-4 ml-5 text-s'>
                <li>Desarrollo de front-end (ExtJS/Angular) y back-end (Java)</li>
                <li>Mantenimiento de aplicaciones</li>
                <li>Ejecución de pruebas</li>
                <li>Análisis de requisitos</li>
                <li>Desarrollo de documentación funcional</li>
            </ul>
        )
    },{
        id: 4,
        src: '/images/company/images.png',
        puesto: 'Full-Stack Developer',
        empresa: 'Cofares',
        fechas: 'Octubre 2019 - Abril 2020',
        content: (
            <ul className='list-disc space-y-4 ml-5 text-s'>
                <li>Desarrollo de front-end (ExtJS) y back-end (Java)</li>
                <li>Mantenimiento de aplicaciones</li>
                <li>Ejecución de pruebas</li>
                <li>Desarrollo de documentación funcional</li>
            </ul>
        )
    },{
        id: 5,
        src: '/images/company/minsait.png',
        puesto: 'Full-Stack Developer',
        empresa: 'Indra Minsait',
        fechas: 'Marzo 2017 - Septiembre 2019',
        content: (
            <ul className='list-disc space-y-4 ml-5 text-s'>
                <li>Desarrollo de front-end (ExtJS) y back-end (Java)</li>
                <li>Mantenimiento de aplicaciones</li>
                <li>Ejecución de pruebas</li>
                <li>Desarrollo de documentación funcional</li>
            </ul>
        )
    }
];

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
            {DATA.map((d) => <ExperienceCard  key={d.id}
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