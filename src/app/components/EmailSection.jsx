"use client"
import React from 'react';
import GitHubIcon from '../../../public/images/github-icon.svg';
import LinkedInIcon from '../../../public/images/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
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
      } else {
        console.error('Error sending the message.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 snap-center'>
      <div>
        <h5 className='top-24 uppercase tracking-[10px] font-semibold text-white text-2xl mb-4'>
          Let&apos;s Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            Siempre estoy abierta a nuevas oportunidades, por lo que estaré encantada de o conectar a través de LinkedIn.
            Si tienes alguna pregunta o simplemente quieres saludar, ¡intentaré responderte lo antes posible! :)
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="https://www.github.com/shgonzals" target="_blank">
            <Image src={GitHubIcon} alt='GitHub Icon' />
          </Link>
          <Link href="https://www.linkedin.com/in/sh-gonzal" target="_blank">
            <Image src={LinkedInIcon} alt='LinkedIn Icon' />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='email' className='mb-2 text-white block text-sm font-medium'>
              Email
            </label>
            <input
              name='email'
              type="email"
              id="email"
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='Tu email'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='mb-2 text-white block text-sm font-medium'>
              Asunto
            </label>
            <input
              name='subject'
              type="text"
              id="subject"
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='¡He visto tu perfil!'
            ></input>
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='mb-2 text-white block text-sm font-medium'>
              Mensaje
            </label>
            <textarea
              name='message'
              id="message"
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='Me gustaría hablarte sobre...'
            />
          </div>
          <button
            type='submit'
            className='bg-secondary-500 hover:bg-secondary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Enviar Email
          </button>
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
