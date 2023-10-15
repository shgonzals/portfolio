import React from 'react'
import GitHubIcon from '../../../public/images/github-icon.svg';
import LinkedInIcon from '../../../public/images/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 snap-center'>
        <div>
            <h5 className='top-24 uppercase tracking-[10px] font-semibold text-white text-2xl mb-4'>
                Let&apos;s Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>{" "}
                I&apos;m currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
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
            <form className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor='email' type="email" className='mb-2 text-white block text-sm font-medium'>
                        Email
                    </label>
                    <input type="email" id="email" 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    required placeholder='sh.gonzal.s@gmail.com'/>
                    
                </div>
                <div className='mb-6'>
                    <label htmlFor='subject' type="subject" className='mb-2 text-white block text-sm font-medium'>
                        Asunto
                    </label>
                    <input type="text" id="subject" 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    required placeholder='Me gustaria contactar'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='message' type="message" className='mb-2 text-white block text-sm font-medium'>
                        Mensaje
                    </label>
                    <textarea type="text" id="message" 
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    required placeholder='Deja tu mensaje aquí...'/>
                </div>
                <button 
                type='submit'
                className='bg-pink-500 hover:bg-pink-500 text-white font-medium py-2.5 px-5 rounded-lg w-full' >
                    Enviar Email
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection