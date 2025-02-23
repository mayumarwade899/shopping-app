import Image from 'next/image';
import React from 'react'

interface propsType {
    img: string;
}

const Slide:React.FC<propsType> = ({img}) => {
  return (
    <div className='outline-none border-none relative'>
      <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%]      -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
      </div>

      <Image className='w-full h-[400px] md:h-[400px] rounded-xl'
        src={img}
        alt='banner'
        width={800}
        height={400}
      />
    </div>
  )
}

export default Slide
