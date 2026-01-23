import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import ChatBot from './ChatBot'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* زر واتساب */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-5 right-5 z-50
          bg-green-500 hover:bg-green-600
          text-white
          w-14 h-14
          rounded-full
          flex items-center justify-center
          shadow-lg
          transform transition-transform duration-300 hover:scale-110
          animate-bounce-slow
        "
      >
        <FaWhatsapp size={30} />
      </button>

      {/* ChatBot */}
      {isOpen && <ChatBot onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default WhatsAppButton