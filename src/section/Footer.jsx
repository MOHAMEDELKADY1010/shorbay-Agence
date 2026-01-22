import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
<div className='w-full bg-black h-auto flex flex-col items-start justify-center lg:px-[80px] px-[20px] lg:py-[50px] py-[30px] gap-[60px]'>
  <div className='w-full h-auto flex lg:flex-row flex-col items-start justify-center gap-[60px]'>
    <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-[25px]'>
      <div className='text-themegreen font-bold text-left lg:text-4xl text-3xl uppercase'>
        Shorbagy <span className='text-white'></span>
      </div>
      <p className='text-gray-300 text-md font-poppins'>
        Feel free to call us in working hours satPlease feel free to contact us during our business hours, Saturday to Thursday, from 9:00 AM to 6:00 PM. Our team will be happy to answer your questions.
      </p>
      <div className='flex justify-center items-center gap-2 text-white'>
        <FaPhoneVolume className='text-themegreen size-5' /> 
        01010394673
      </div>
    </div>
    
    <div className='flex justify-center items-center gap-6 text-white text-2xl'>
      <FaFacebook className='hover:text-themegreen cursor-pointer transition-colors' />
      <FaTwitter className='hover:text-themegreen cursor-pointer transition-colors' />
      <FaLinkedin className='hover:text-themegreen cursor-pointer transition-colors' />
      <FaInstagram className='hover:text-themegreen cursor-pointer transition-colors' />
    </div>
    <div className='lg:w-[15%] w-full flex flex-col justify-center items-start gap-6'>
      <h1 className='text-white text-[23px] capitalize leading-[1.2em] font-poppins'>Company</h1>
      <ul className='flex flex-col justify-center items-start gap-2'>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Home</li>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>About Us</li>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Pricing</li>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Blog</li>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Our Projects</li>
      </ul>
    </div>
    <div className='lg:w-[15%] w-full flex flex-col justify-center items-start gap-6'>
      <h1 className='text-white text-[23px] capitalize leading-[1.2em] font-poppins'>services</h1>
      <ul className='flex flex-col justify-center items-start gap-2'>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Digital Marketing</li>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Content Creation</li>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Social Media Management</li>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>building website responsive</li>
        <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Our Projects</li>
      </ul>
    </div>
    <div className='lg:w-[30%] w-full flex flex-col justify-center items-start gap-5'>
      <h1 className='text-white text-[23px] capitalize leading-[1.2em] font-poppins'>subscribe to Newsletter</h1>
      <div className='flex flex-col justify-center items-start w-full'>
      <input type="text" placeholder="Enter your email address" className='w-full p-4 bg-transparent border-2 text-white border-gray-800 rounded-md' />
        <button className='w-full bg-themegreen hover:bg-white hover:text-black py-4 px-6 text-black text-md font-semibold mt-5 rounded-md'>
        Subscribe
        </button>
      </div>
    </div>
    <div className='w-full h-auto flex 1g:flex-row flex-col items-center justify-between border-t-2 border-gray-700 pt-6 gap-[10px]'>
      <p className='text-gray-300 text-md font-poppins text-center'>Copyright ©2026 MoQady. All rights reserved</p>
      <ul className='text-gray-300 flex justify-center items-end gap-6'>
          <li>Terms of use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
      </ul>
    </div>
  </div>
</div>
  )
}
export default Footer
