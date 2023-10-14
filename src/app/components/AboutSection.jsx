"use client"
import React, { useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Java 8</li>
        <li>Hibernate/JPA</li>
        <li>API/REST</li>
        <li>Oracle/SQL - PL/SQL</li>
        <li>GIT</li>
        <li>Angular</li>
        <li>Sencha ExtJS</li>
      </ul>
    )
  },{
    title: 'Certificaciones',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>Angular Level 2 Certification - Interstate 21, LLC (12/2022) [ID: 3L14N3T]</li>
        <li>Spring Boot-JPA - Desfufor S.L. (09/2022)</li>
        <li>Errores recurrentes en la programación SW (20h) - 2018</li>
        <li>Oracle11g Lenguaje PL/SQL II (12h) - 2018</li>
      </ul>
    )
  },{
    title: 'Estudios',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (2015 - 2017)</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about.jpg" className='rounded-xl ' width={500} height={500} alt=''/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
              <h2 className='text-4xl font-semibold text-white mb-4'>Sobre mi</h2>
              <div className='text-base lg:text-lg'>
                <p>
                Actualmente desarrollo funcionalidades como backend con Java 8 y Spring Batch para una aplicación refactorizada, en la cual también participo en el análisis de los casos de uso a realizar, basándonos en la aplicación de origen (CA Plex).
                </p>
                <br/>
                <p>
                  Me considero una persona con gran capacidad resolutiva, dinámica y con adaptación a nuevos entornos y dificultades, buena compañera en el trabajo en equipo y con ganas de seguir formándome y progresando en las tecnologias del desarrollo.
                </p>  
              </div>
              <div className='flex justify-start flex-row mt-8'>
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "} Skills {" "}</TabButton>
                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "} Certificaciones {" "}</TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "} Estudios {" "}</TabButton>
              </div>
              <div className='mt-8'>
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
        </div>
    </section>
   
  )
}

export default AboutSection