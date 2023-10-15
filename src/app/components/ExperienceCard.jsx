import React from 'react'
import { motion } from 'framer-motion'; 

const ExperienceCard = ({src, puesto, empresa, fechas, content, id}) => {
  return (
    <article className='text-white mt-12 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[400px] md-[400px] xl:w-[400px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[80px] xl:h-[80px]
        object-cover object-start bg-white'
        src={src}
        alt={id}
        
        >
        </motion.img>

        <div className='px-0 md:px-10'>
            <h4 className='lg:text-2xl sm:text-lg font-light'>{puesto}</h4>
            <p className='font-bold lg:text-xl sm:text-m mt-1'>{empresa}</p>
            <p className='uppercase py-5 lg:text-s sm:text-s  text-gray-300'>
                {fechas}
            </p> 
            {content}
        </div>
    </article>
  )
}

export default ExperienceCard