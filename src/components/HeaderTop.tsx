import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='px-12 py-4'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-3'>
                    <div className='header_top__icon_wrapper'>
                        <BsFacebook />
                    </div>
                    <div className='header_top__icon_wrapper'>
                        <BsTwitter />
                    </div>
                    <div className='header_top__icon_wrapper'>
                        <BsInstagram />
                    </div>
                    <div className='header_top__icon_wrapper'>
                        <BsLinkedin />
                    </div>
                </div>

                <div className='text-gray-500 text-[12px]'>
                    <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $100
                </div>

                <div className='flex gap-4'>
                    <select 
                    className='text-gray-500 text-[12px] w-[60px]'
                    name="currency"
                    id='currency'
                    >
                        <option value="USD $">USD $</option>
                        <option value="EURO €">EURO €</option>
                        <option value="INR ₹">INR ₹</option>
                    </select>

                    <select 
                    className='text-gray-500 text-[12px] w-[60px]'
                    name="language" 
                    id="language"
                    >
                        <option value="English">English</option>
                        <option value="French">French</option>
                    </select>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HeaderTop
