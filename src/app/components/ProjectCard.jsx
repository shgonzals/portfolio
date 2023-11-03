import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl, tags}) => {
  return (
   <div className='text-center border border-secondary-500 rounded-xl grid grid-rows-[auto,1fr]'>
  <div className='rounded-t-xl text-center relative'>
  <motion.div className='flex items-center justify-center overflow-hidden relative group'>
  <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 '>
      <Link href={gitUrl} target="_blank" className='h-10  w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-secondary-500 group/link'>
            <CodeBracketIcon className='h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-secondary-500' />
      </Link>
      {previewUrl && (
        <Link href={previewUrl} target="_blank" className='h-10 w-10 ml-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-secondary-500 group/link'>
          <EyeIcon className='h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-secondary-500' />
        </Link>
      )}
  </div>
    <Image src={imgUrl} alt={title} width={300} height={300} className='rounded-2xl mt-5 mx-5 p-2 mb-5 border-2 hover:shadow-lg dark:hover:shadow-black/30 bg-black hover:active:' />
  </motion.div>
</div>
  <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4 border-t border-secondary-500'>
    <h5 className='text-xl font-semibold mb-2 uppercase underli'>{title}</h5>
    <p className='text-[#ADB7BE]'>{description}</p>
    <div className='my-2 mt-5 justify-center items-center flex flex-wrap'>
      {tags.map((tag, tagIndex) => (
        <span key={tagIndex} className='rounded-full bg-pink-500 px-2 py-1 text-white mx-2 text-xs uppercase mb-2'>
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>
  )
}

export default ProjectCard;