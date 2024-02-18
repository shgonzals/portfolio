"use client"

import React from 'react';

import { motion } from 'framer-motion'; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from "react-intersection-observer";
import { BriefcaseIcon  } from '@heroicons/react/24/solid';

const DATA = [
    {
        id: 1,
        puesto: 'Full-Stack Developer',
        empresa: 'Capgemini',
        fechas: 'Julio 2021 - Presente',
        content: (
            <ul className='list-disc space-y-2 ml-5 text-s'>
                <li>Desarrollo backend con Java 11 y Spring Batch</li>
                <li>Análisis de requisitos para una aplicación refactorizada (Java) en base a los casos de uso de la aplicación origen (CA Plex)</li>
                <li>Desarrollo de front-end (ExtJS) y back-end (Java)</li>
                <li>Mantenimiento de aplicaciones</li>
            </ul>
        )
    },{
        id: 2,
        puesto: 'Full-Stack Developer',
        empresa: 'Grupo Oesia',
        fechas: 'Abril 2021 - Julio 2021',
        content: (
            <ul className='list-disc space-y-2 ml-5 text-s'>
                <li>Desarrollo de back-end (Java 8)</li>
                <li>Ejecución y creación de pruebas</li>
            </ul>
        )
    },{
        id: 3,
        puesto: 'Full-Stack Developer',
        empresa: 'PFS Group',
        fechas: 'Abril 2020 - Marzo 2021',
        content: (
            <ul className='list-disc space-y-2 ml-5 text-s'>
                <li>Desarrollo de front-end (ExtJS/Angular) y back-end (Java)</li>
                <li>Mantenimiento de aplicaciones</li>
                <li>Ejecución de pruebas</li>
                <li>Análisis de requisitos</li>
                <li>Desarrollo de documentación funcional</li>
            </ul>
        )
    },{
        id: 4,
        puesto: 'Full-Stack Developer',
        empresa: 'Cofares',
        fechas: 'Octubre 2019 - Abril 2020',
        content: (
            <ul className='list-disc space-y-2 ml-5 text-s'>
                <li>Desarrollo de front-end (ExtJS) y back-end (Java)</li>
                <li>Mantenimiento de aplicaciones</li>
                <li>Ejecución de pruebas</li>
                <li>Desarrollo de documentación funcional</li>
            </ul>
        )
    },{
        id: 5,
        puesto: 'Full-Stack Developer',
        empresa: 'Indra Minsait',
        fechas: 'Marzo 2017 - Septiembre 2019',
        content: (
            <ul className='list-disc space-y-2 ml-5 text-s'>
                <li>Desarrollo de front-end (ExtJS) y back-end (Java)</li>
                <li>Mantenimiento de aplicaciones</li>
                <li>Ejecución de pruebas</li>
                <li>Desarrollo de documentación funcional</li>
            </ul>
        )
    }
];

const Experience = () => {
    const { ref, inView } = useInView({
    });
  
    return (
      <div className="mx-auto w-full" ref={ref}>
        <motion.div 
        className='mt-4'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        >
        <h2 className="text-center uppercase tracking-[10px] font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600
        text-2xl mb-10 ">Trayectoria profesional</h2>
        </motion.div>
        <VerticalTimeline>
          {DATA.map((experiencia, index) => (
            <VerticalTimelineElement
              key={index}
              animate={true}
              date={experiencia.fechas}
              dateClassName="text-black xl:text-white sm:text-black uppercase"
              iconStyle={{ background: 'rgb(236, 72, 153)', color: '#fff' }}
              icon={<BriefcaseIcon  />}
              contentStyle={{
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left"
              }}
              visible={inView} 
            >
              <h3 className="text-xl font-bold text-black uppercase tracking-[2px]">{experiencia.puesto}</h3>
              <h4 className="text-md font-semibold text-black">{experiencia.empresa}</h4>
              <div className='text-black'>{experiencia.content}</div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  };

export default Experience;