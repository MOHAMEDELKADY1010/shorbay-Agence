import React, { useEffect } from 'react'
import heroimg from '../assets/hero.png'
import backgroundimage from '../assets/hero_bg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    })
  }, [])

  return (
    <div
      id='hero'
      className='w-full h-screen relative flex flex-col lg:flex-row justify-between items-center
      px-4 sm:px-6 md:px-12 lg:px-20 pt-20 sm:pt-24 lg:pt-36 pb-16 sm:pb-20 lg:pb-28 gap-8 sm:gap-10 lg:gap-16
      bg-cover bg-center overflow-hidden'
      style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundAttachment: 'fixed', // Parallax effect
      }}
    >
      {/* النصوص */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6 items-start justify-center order-1 lg:order-1'>
        <h1 data-aos='fade-down' data-aos-delay='50'
          className='text-themegreen uppercase text-xs sm:text-sm md:text-base lg:text-base font-poppins'>
          Seamails digital services
        </h1>

        <h1 data-aos='fade-up' data-aos-delay='150'
          className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-poppins leading-snug md:leading-tight lg:leading-[1.2em]'>
          Transforming Ideas into Digital Success
        </h1>

        <p data-aos='fade-up' data-aos-delay='250'
          className='text-gray-300 text-sm sm:text-base md:text-lg lg:text-md font-poppins'>
          We help brands grow with modern digital marketing, creative design,
          and powerful online solutions tailored to your business.
        </p>

        <button data-aos='zoom-in' data-aos-delay='350'
          className='bg-themegreen hover:bg-white hover:text-black py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6
          text-black text-sm sm:text-md md:text-md font-semibold mt-4 sm:mt-5 rounded-md transition-all duration-300'>
          EXPLORE SOLUTION
        </button>
      </div>

      {/* الصورة */}
      <div className='w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-2 mb-6 lg:mb-0 relative'>
        <div data-aos='fade-up' data-aos-delay='400'
          className='w-full lg:w-[80%] flex justify-center items-center px-3 sm:px-4 pt-3 sm:pt-4
          bg-themegreen bg-opacity-30 rounded-md transform transition-transform duration-1000 hover:scale-105'>
          <img src={heroimg} alt="Hero"
               className='w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]
               animate-float' />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.03); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Hero