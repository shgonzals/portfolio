"use client"
import React from 'react'
import { motion } from 'framer-motion';

const SkillItem = ({description, icon, id}) => {
    return (
        <motion.section 
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className='xl:mr-10 sm:mr-7 py-3 items-center justify-center mr-5'>
            <div className='items-center justify-center flex flex-col sm:mt-5'>
                <motion.img
                initial={{opacity: 0, y: 50, scale: 0.8}}
                animate={{opacity: 1, y: 0, scale:1}}
                whileHover={{scale: 1.25}} 
                transition={{opacity: {duration: 0.2, delay: id * 0.2}, y: {duration: 0.2, delay: id*0.2}, scale: {duration: 0.2}, whileHover: {duration: 0.1}}}
                src={icon} width={70} height={70} alt={description}
                className='rounded-lg' />
                <p className='text-white flex flex-wrap justify-center mt-3 font-semibold uppercase tracking-[1px]'> {description} </p>
          </div>
        </motion.section>
    );
};

export default SkillItem