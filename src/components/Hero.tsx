"use client";

import React from 'react'
import Slider from "react-slick"
import Slide from './Slide';

const Hero = () => {

    var settings = {
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
            img: "/banner1.jpg",
            title: "Trending Fashion",
            mainTitle: "TRENDY FASHION",
        },
        {
            id: 2,
            img: "/banner2.jpg",
            title: "New Arrivals",
            mainTitle: "WOMENS ETHNIC FASHION"
        },
        {
            id: 3,
            img: "/banner3.jpg",
            title: "MID SEASON SALE",
            mainTitle: "FOOTWEAR & ACCESSORIES"
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
                />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
