"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; 


const EmailSection = () => {
  const [emailSubmitted , setEmailSubmitted ] = useState(false);
  const [emailError , setEmailError ] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    // Configura un temporizador para ocultar el mensaje después de cierto tiempo 
    if (emailSubmitted) {
      const timer = setTimeout(() => {
        setEmailSubmitted(false);

      }, 10000); // 10000 milisegundos (10 segundos)
      
      // Reseteamos timer
      return () => clearTimeout(timer);
    }

    if (emailError) {
      const timer = setTimeout(() => {
        setEmailError(false);
      }, 10000); // 10000 milisegundos (10 segundos)
      
      // Reseteamos timer
      return () => clearTimeout(timer);
    }

    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, 5000); // 5000 milisegundos (10 segundos)
      
      // Reseteamos timer
      return () => clearTimeout(timer);
    }
  }, [emailSubmitted, emailError, clicked]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
    };

    const endpoint = "/api/send";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(endpoint, options);

      if (response.status === 200) {
        console.log('Message sent.');
        setEmailSubmitted(true);
        e.target.email.value = '';
        e.target.subject.value = '';
        e.target.message.value = '';
      } else {
        setEmailError(true);
        console.error('Error sending the message.');
      }
    } catch (error) {
      setEmailError(true);
      console.error('An error occurred:', error);
    }
  }

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 gap-4 snap-center'>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}>
        <h5 className='top-24 uppercase tracking-[10px] font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600
        text-2xl mb-4'>
          Let&apos;s Connect
        </h5>
        <p className='text-black dark:text-[#ADB7BE] mb-4 max-w-md'>
            Siempre estoy abierta a nuevas oportunidades, por lo que estaré encantada de conectar a través de LinkedIn.
            Si tienes alguna pregunta o simplemente quieres saludar, ¡manda un email e intentaré responderte lo antes posible! :)
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://www.github.com/shgonzals"  target="_blank" >
            <motion.img style="background: red"
                initial={{opacity: 0, y: 50, scale: 0.8}}
                animate={{opacity: 1, y: 0, scale:1}}
                whileHover={{scale: 1.25}} 
                transition={{opacity: {duration: 0.2, delay: 1 * 0.2}, y: {duration: 0.2, delay: 1*0.2}, 
                scale: {duration: 0.2}, whileHover: {duration: 0.1}}}
                src="/images/github-icon.svg" width={40} height={40} alt="GitHub Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sh-gonzal" target="_blank">
          <motion.img className='bg-red'
                initial={{opacity: 0, y: 50, scale: 0.8}}
                animate={{opacity: 1, y: 0, scale:1}}
                whileHover={{scale: 1.25}} 
                transition={{opacity: {duration: 0.2, delay: 1 * 0.2}, y: {duration: 0.2, delay: 1*0.2},
                scale: {duration: 0.2}, whileHover: {duration: 0.1}}}
                src="/images/linkedin-icon.svg" width={40} height={40} alt="LinkedIn Icon" />
          </Link>
        </div>
      </motion.div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='email' className='mb-2 text-black dark:text-white block text-sm font-medium'>
              Email
            </label>
            <input
              name='email'
              type="email"
              id="email"
              className='dark:bg-[#18191E] border border-[#33353F] placeholder-black/80 dark:placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='Tu email'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='mb-2 text-black dark:text-white block text-sm font-medium'>
              Asunto
            </label>
            <input
              name='subject'
              type="text"
              id="subject"
              className='dark:bg-[#18191E] border border-[#33353F] placeholder-black/80 dark:placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='¡He visto tu perfil!'
            ></input>
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='mb-2 dark:text-white block text-sm font-medium'>
              Mensaje
            </label>
            <textarea
              name='message'
              id="message"
              className='dark:bg-[#18191E] border border-[#33353F] placeholder-black/80 dark:placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='Me gustaría hablarte sobre...'
            />
          </div>
          <button
            type='submit'  onClick={handleClick} 
            className={`py-2.5 px-5 rounded-lg w-full ${clicked ? 'bg-secondary-700' : 'bg-secondary-500'}
             text-white font-medium transition-all duration-300
             hover:bg-secondary-700`}
          >
            Enviar Email
          </button>
          {
            emailSubmitted && (
              <p className='text-green-500 text-sm mt-2'>
                ¡Enviado correctamente!
              </p>
            )
          }
          {
            emailError && (
              <p className='text-red-500 text-sm mt-2'>
                Ha ocurrido un error, vuelva a intentarlo más tarde.
              </p>
            )
          }
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
