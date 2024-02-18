"use client";
import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';



const ThemeSwitch = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }else{
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") | null;

        if(localTheme){
            setTheme(localTheme);
            if(localTheme === "dark"){
                document.documentElement.classList.add("dark");
            }
        }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme("dark");
            document.documentElement.classList.remove("dark");
        }
    }, []);


  return (
    <button className='fixed bottom-5 right-5 m-5 flex items-center justify-center
    text-secondary-500 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] rounded-full
    border border-secondary-500 shadow-2xl hover:scale-[1.15] 
     active:scale-105 transition-all'
    onClick={toggleTheme}>
        {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ThemeSwitch