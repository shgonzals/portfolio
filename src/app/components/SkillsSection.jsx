"use client";
import React from 'react'
import SkillItem from './SkillItem'
import { motion } from 'framer-motion'; 


const skills = [
    {
        id: '1',
        icon: '/images/logos/java.svg',
        description: 'Java'
    },{
        id: '2',
        icon: '/images/logos/git.svg',
        description: 'Git'
    },{
        id: '3',
        icon: '/images/logos/oracle.svg',
        description: 'Oracle'
    },{
        id: '4',
        icon: '/images/logos/springio.svg',
        description: 'Spring'
    },{
        id: '5',
        icon: '/images/logos/hibernate.svg',
        description: 'Hibernate'
    },{
        id: '6',
        icon: '/images/logos/angular.svg',
        description: 'Angular'
    },{
        id: '7',
        icon: '/images/logos/sencha.svg',
        description: 'ExtJS'
    },{
        id: '8',
        icon: '/images/logos/postman.svg',
        description: 'Postman'
    },{
        id: '9',
        icon: '/images/logos/kafka.svg',
        description: 'Kafka'
    },{
        id: '10',
        icon: '/images/logos/mongodb.svg',
        description: 'MongoDB'
    },{
        id: '11',
        icon: '/images/logos/docker.svg',
        description: 'Docker'
    }
];

const SkillsSection = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='mb-20 snap-center'>
        <h2 className='text-center top-24 uppercase tracking-[10px] font-semibold text-white text-2xl'>
            Skills
        </h2>
        <div className='flex flex-wrap justify-center  mt-6 m-10 relative z-1'>
            {skills.map((skill) => <SkillItem key={skill.id} id={skill.id} icon={skill.icon} description={skill.description} />)}
        </div>
    </motion.div>
  )
}

export default SkillsSection