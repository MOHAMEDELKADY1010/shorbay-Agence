import React, { useEffect } from 'react'
import Aboutimage from '../assets/about.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      delay: 150,
      once: true,
    })
  }, [])

  return (
    <div
      id='about'
      className='w-full h-auto flex flex-col items-center justify-between
      px-4 sm:px-6 md:px-12 lg:px-20 py-16 lg:py-20 gap-16'
    >

      {/* ===== TOP BOX ===== */}
      <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10'>

        {/* Text */}
        <div data-aos='fade-right'
          className='w-full lg:w-[60%] flex flex-col gap-4'>
          <h4 className='text-themegreen uppercase text-sm font-poppins'>
            Who We Are
          </h4>

          <h1 className='text-black text-2xl sm:text-3xl md:text-4xl lg:text-[45px]
          capitalize leading-tight font-poppins'>
            Delivering Excellence in Digital Solutions
          </h1>

          <p className='text-gray-500 text-sm sm:text-base font-poppins'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt accusantium modi aliquid, non commodi ipsam error
            perferendis molestias ullam sunt.
          </p>
        </div>

        {/* Button */}
        <div data-aos='fade-left'
          className='w-full lg:w-auto flex justify-start lg:justify-end'>
          <button className='bg-themegreen hover:bg-black hover:text-white
          py-3 px-6 text-black text-sm sm:text-md font-semibold rounded-md transition-all'>
            LEARN MORE
          </button>
        </div>
      </div>

      {/* ===== BOTTOM BOX ===== */}
      <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16'>

        {/* Image */}
        <div data-aos='zoom-in'
          className='w-full lg:w-[40%] flex justify-center'>
          <img
            src={Aboutimage}
            alt='About'
            className='w-full max-w-[450px] rounded-lg shadow-lg'
          />
        </div>

        {/* Content */}
        <div className='w-full lg:w-[60%] flex flex-col gap-10'>

          {/* Box */}
          <div data-aos='fade-up' className='flex flex-col gap-3'>
            <h2 className='text-black text-xl sm:text-2xl md:text-[35px] font-poppins'>
              Expertise
            </h2>
            <p className='text-gray-500 text-sm sm:text-base font-poppins'>
              Amet consectetur adipisicing elit. Rerum laboriosam,
              aut laborum quidem quia non!
            </p>
          </div>

          <div data-aos='fade-up' data-aos-delay='100' className='flex flex-col gap-3'>
            <h2 className='text-black text-xl sm:text-2xl md:text-[35px] font-poppins'>
              Innovation
            </h2>
            <p className='text-gray-500 text-sm sm:text-base font-poppins'>
              Amet consectetur adipisicing elit. Rerum laboriosam,
              aut laborum quidem quia non!
            </p>
          </div>

          <div data-aos='fade-up' data-aos-delay='200' className='flex flex-col gap-3'>
            <h2 className='text-black text-xl sm:text-2xl md:text-[35px] font-poppins'>
              Strategy
            </h2>
            <p className='text-gray-500 text-sm sm:text-base font-poppins'>
              Amet consectetur adipisicing elit. Rerum laboriosam,
              aut laborum quidem quia non!
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About