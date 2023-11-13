"use client"

import React from "react";
import Image from "next/image";
import '/styles/styles.css';
import { motion } from 'framer-motion'; 


import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 lg:place-self-center sm:place-self-auto sm:m-2 ">
                <h1 className="top-24 uppercase tracking-[20px] lg:text-4xl lg:text-center sm:text-right font-semibold text-white">
                    <span className="bg-clip-text">
                        Sheila González {" "} 
                    </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                        'Backend Developer',
                        1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={1}
                        className="text-transparent bg-clip-text text-lg sm:text-right bg-gradient-to-r from-primary-400 to-secondary-600"
                        
                    />
                    <span className="blink degradado">|</span>
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 mt-6 sm:mb-6 lf:text-xl italic">
                &quot;Dreams are extremely important. You can&apos;t do it unless you imagine it.&quot;
               </p>
                <div className="lg:flex lg:justify-center lg:items-center">
                    <button className="group uppercase 
                    tracking-[5px] px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-primary-500
                     to-secondary-500  text-white mr-4
                     hover:opacity-80 hover:bg-slate-200
                     "
                     >
                       <a href="./docs/CV.pdf " download> Descargar CV </a>
                    </button>
                    {/* 
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                       <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                    </button>
                    */}
                </div>
            </div>
            <div className="col-span-5 flex justify-center items-center mt-6 md:mt-0 xl:mt-0 ">
                <div className="rounded-full bg-[#181818] w-[220px] h-[220px] relative ">
                    <Image src="/images/retro.webp"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
                    rounded-full bg-[#181818] w-[200px] h-[200px] "
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default HeroSection