"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image';

const navLinks = [
  {
    title: "Sobre mi",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills"  
  },
  {
    title: "Experiencia",
    path: "#experience"
  },
  {
    title: "Proyectos",
    path: "#projects",
  },
  {
    title: "Contacto",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeNavbar = () => {
    console.log('NAVBAR: paso CLOSE')
    setNavbarOpen(false);
  };  

  return (
    <nav className="fixed mx-auto border border-secondary-500  border-t-0 border-l-0 border-r-0 top-0 left-0 right-0 z-10
     dark:bg-[#121212] bg-opacity-95 bg-white">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"#inicio"}
          className="text-2xl md:text-5xl dark:text-white font-semibold"
        >
          <Image alt="logo" src="/images/logo2.webp" width={50} height={60} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border border-secondary-500 rounded secondary-secondary-500 text-secondary-500  dark:hover:text-white dark:hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border border-secondary-500 rounded secondary-secondary-500 text-secondary-500  dark:hover:text-white dark:hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} 
                onClick={() => setNavbarOpen(false)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onClose={closeNavbar} /> : null}
    </nav>
  );
};

export default Navbar;