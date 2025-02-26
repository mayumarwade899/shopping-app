/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import React from 'react'

interface propsType {
    img: string;
    title: string;
    desc: string;
    price: string;
}

const ProductCard: React.FC<propsType> = ({img, title, desc, price}) => {
  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
        <div className="w-[150px] h-[150px] overflow-hidden flex items-center justify-center">
            <Image 
                className='w-full h-auto object-cover'
                src={img}
                width={150}
                height={150}
                alt={title}
            />
        </div>

        <div className='space-y-2 py-2'>
            <h2 className='text-accent font-medium uppercase'>{title}</h2>
            <p className='text-gray-500 max-w-[150px]'>{desc}</p>
        </div>
    </div>
  )
}

export default ProductCard