"use client"

import React from 'react';

import { motion } from 'framer-motion'; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from "react-intersection-observer";
import { BriefcaseIcon  } from '@heroicons/react/24/solid';
import experience from '../data/experience';


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
          {experience.map((experiencia, index) => (
            <VerticalTimelineElement
              key={index}
              animate={true}
              date={experiencia.fechas}
              dateClassName="text-black xl:text-black dark:xl:text-white sm:text-black uppercase"
              iconStyle={{ background: 'rgb(236, 72, 153)', color: '#fff' }}
              icon={<BriefcaseIcon  />}
              contentStyle={{
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                background:"#f3f4f6" 
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