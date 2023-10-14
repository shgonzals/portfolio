"use client"

import React from "react";
import Image from "next/image";
import '/styles/styles.css';


import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm-text-5xl lg:text-6xl font-extrabold">
                    <span className="bg-clip-text ">
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
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    />
                    <span className="blink degradado">|</span>
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lf:text-xl italic">
                &quot;Dreams are extremely important. You can&apos;t do it unless you imagine it.&quot;
               </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500  hover:bg-slate-200 text-white mr-4">
                        Hire Me
                        </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                       <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>                    </button>
                </div>
            </div>
            <div className="col-span-5 flex justify-center items-center ">
                <div className="rounded-full bg-[#181818] w-[220px] h-[220px] relative">
                    <Image src="/images/retro.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
                    rounded-full bg-[#181818] w-[200px] h-[200px] "
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection