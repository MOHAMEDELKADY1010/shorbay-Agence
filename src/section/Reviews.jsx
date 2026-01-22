import React, { useEffect, useRef } from 'react'
import { reviews } from '../export'
import { FaStar } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {
  const scrollRef = useRef(null)

  // animation
  const rafRef = useRef(null)
  const velocity = useRef(0)
  const direction = useRef(1)

  // drag
  const isDragging = useRef(false)
  const lastX = useRef(0)

  useEffect(() => {
    AOS.init({ duration: 800, delay: 200, once: false })
    startAutoAnimation()
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  /* ============ AUTO + INERTIA LOOP ============ */
  const startAutoAnimation = () => {
    const el = scrollRef.current
    if (!el) return

    const friction = 0.95
    const baseSpeed = 0.12

    const animate = () => {
      if (!isDragging.current) {
        velocity.current += direction.current * baseSpeed
      }

      velocity.current *= friction
      el.scrollLeft += velocity.current

      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 2) {
        direction.current = -1
      }

      if (el.scrollLeft <= 0) {
        direction.current = 1
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()
  }

  /* ============ DRAG START ============ */
  const dragStart = (x) => {
    isDragging.current = true
    lastX.current = x
    velocity.current = 0
  }

  /* ============ DRAG MOVE ============ */
  const dragMove = (x) => {
    if (!isDragging.current) return

    const delta = lastX.current - x
    scrollRef.current.scrollLeft += delta * 2
    velocity.current = delta * 1.5
    lastX.current = x
  }

  /* ============ DRAG END ============ */
  const dragEnd = () => {
    isDragging.current = false
  }

  return (
    <div
      id="testimonials"
      className="w-full h-auto flex flex-col items-center 
      justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px]"
    >
      <h1 className="text-themegreen uppercase text-sm font-poppins">
        CLIENT VOICES
      </h1>

      <h1 className="text-black lg:text-[45px] text-[30px] 
      capitalize font-poppins text-center lg:w-[50%]">
        Stories of Success from Our Clients
      </h1>

      <p className="text-gray-500 text-md font-poppins text-center lg:w-[60%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* ===== SCROLL AREA ===== */}
      <div
        ref={scrollRef}
        className="w-full flex gap-6 overflow-x-hidden mt-8 
        cursor-grab active:cursor-grabbing select-none"
        
        // mouse
        onMouseDown={(e) => dragStart(e.clientX)}
        onMouseMove={(e) => dragMove(e.clientX)}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}

        // touch
        onTouchStart={(e) => dragStart(e.touches[0].clientX)}
        onTouchMove={(e) => dragMove(e.touches[0].clientX)}
        onTouchEnd={dragEnd}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="min-w-[280px] lg:min-w-[320px] 
            flex flex-col gap-4 bg-gray-100 hover:bg-green-100 
            lg:py-10 py-6 px-6 rounded-md"
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