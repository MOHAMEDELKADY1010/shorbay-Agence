import React, { useState, useEffect } from 'react'

const whatsappNumber = '201010394673' // رقمك على واتساب

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  // الرسالة الترحيبية تظهر بعد قليل عند فتح Chatbot
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([{ from: 'bot', text: 'مرحبًا! كيف أقدر أساعدك اليوم؟' }])
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const handleOption = (option) => {
    setMessages(prev => [...prev, { from: 'user', text: option }])

    if (option === 'تواصل عبر واتساب') {
      window.open(`https://wa.me/${whatsappNumber}`, '_blank')
    } else {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { from: 'bot', text: 'شكرًا، سنساعدك قريباً!' },
        ])
      }, 500)
    }
  }

  const options = ['تواصل عبر واتساب', 'مواعيد', 'الأسعار', 'خدماتنا']

  return (
    <div className="fixed bottom-20 right-5 w-80 bg-white shadow-2xl rounded-xl flex flex-col z-50 border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
        <span className="font-semibold">Chatbot</span>
        <button onClick={onClose} className="font-bold hover:text-gray-200">X</button>
      </div>

      {/* Messages */}
      <div className="p-4 flex-1 overflow-y-auto h-64 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ${
              msg.from === 'bot' ? 'text-left' : 'text-right'
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg animate-fade ${
                msg.from === 'bot'
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-green-500 text-white'
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Options */}
      <div className="flex flex-wrap gap-2 p-2 border-t border-gray-200">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleOption(opt)}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-lg hover:bg-green-200 transition"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChatBot