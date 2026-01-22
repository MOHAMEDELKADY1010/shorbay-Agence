import React, { useEffect, useRef } from 'react'
import { reviews } from '../export'
import { FaStar } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, [])

  // Auto Scroll
  useEffect(() => {
    const container = scrollRef.current
    let scrollAmount = 0

    const interval = setInterval(() => {
      if (!container) return

      scrollAmount += 1
      container.scrollLeft += 1

      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0
        scrollAmount = 0
      }
    }, 20) // كل ما تقلل الرقم السرعة تزيد

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="testimonials" className="w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px]">

      <h1 data-aos="zoom-in" className="text-themegreen uppercase text-sm font-poppins">
        CLIENT VOICES
      </h1>

      <h1 data-aos="zoom-in" className="text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] font-poppins lg:w-[50%] w-full text-center">
        Stories of Success from Our Clients
      </h1>

      <p data-aos="zoom-in" className="text-gray-500 text-md font-poppins lg:w-[60%] w-full text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="w-full flex gap-6 overflow-x-hidden mt-8"
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="min-w-[280px] lg:min-w-[320px] flex flex-col 
            justify-between gap-4 bg-gray-100 hover:bg-green-100 
            lg:py-10 py-6 px-6 rounded-md cursor-pointer"
          >
            <button className="flex items-center gap-1 bg-white py-2 px-4 rounded-full w-fit">
              {review.rating}
              <FaStar className="text-yellow-500" />
            </button>

            <p className="text-gray-500 text-sm font-poppins">
              {review.about}
            </p>

            <div>
              <h1 className="text-themegreen text-md font-poppins">
                {review.name}
              </h1>
              <h1 className="text-gray-700 font-semibold text-sm capitalize">
                {review.role}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews