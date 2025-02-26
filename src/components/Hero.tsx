"use client";

import React from 'react'
import Slider from "react-slick"
import Slide from './Slide';

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        speed: 800,
    };

    const slideData = [
        {
            id: 0,
            img: "/banner-1.webp",
            title: "Trending Fashion",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20"
        },
        {
            id: 2,
            img: "/banner-2.webp",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$10"
        },
        {
            id: 3,
            img: "/banner-3.webp",
            title: "MID SEASON SALE",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30"
        }
    ]

  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {slideData.map((item) => (
                <Slide 
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero

