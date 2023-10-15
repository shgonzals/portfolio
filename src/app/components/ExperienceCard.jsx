import React from 'react'
import { motion } from 'framer-motion'; 

const ExperienceCard = () => {
  return (
    <article className='text-white mt-12 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[400px] md-[400px] xl:w-[400px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[80px] xl:h-[80px]
        object-cover object-start'
        src='/images/logos/angular.svg'
        alt="test"
        >
        </motion.img>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO</h4>
            <p className='font-bold text-2xl mt-1'>Company</p>
            <div className='flex space-x-2 my-2'>
                {/*
                    TECH USED
                */ }
            </div>
            <p className='uppercase py-5 text-gray-300'>
                Fechas
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary pointsSummary points</li>
                <li>Summary pointsSummary points</li>
                <li>Summary pointsSummary points</li>
                <li>Summary pointsSummary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard