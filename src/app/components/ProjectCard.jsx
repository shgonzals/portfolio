import React from 'react';
import Image from 'next/image';

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl, tags}) => {
  return (
    <div className='text-center border border-secondary-500 rounded-xl'>
  <div className='rounded-t-xl text-center'>
    <div className='flex items-center justify-center mt-5 mx-5'>
      <Image src={imgUrl} alt={title} width={300} height={300} className='rounded-xl p-2 mb-2 border-2   '/>
    </div>
  </div>
  <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 border-t border-secondary-500'>
    <h5 className='text-xl font-semibold mb-2'>{title}</h5>
    <p className='text-[#ADB7BE]'>{description}</p>
    <div className='my-2 flex flex-wrap justify-center items-center'>
      {tags.map((tag, tagIndex) => (
          <span key={tagIndex} className='rounded-full bg-pink-500 px-2 py-1  text-white mx-2 text-xs uppercase'>
              {tag}
          </span>
      ))}
    </div>
  </div>
</div>
  )
}

export default ProjectCard;