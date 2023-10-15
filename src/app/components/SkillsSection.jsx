import React from 'react'
import SkillItem from './SkillItem'

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
    }
];

const SkillsSection = () => {
  return (
    <div className='mb-20'>
        <h2 className='text-center text-4xl font-bold text-white mb-4'>
            Skills
        </h2>
        <div className='flex flex-wrap justify-center mt-6 m-10 relative z-1'>
            {skills.map((skill) => <SkillItem key={skill.id} icon={skill.icon} description={skill.description} />)}
        </div>
    </div>
  )
}

export default SkillsSection