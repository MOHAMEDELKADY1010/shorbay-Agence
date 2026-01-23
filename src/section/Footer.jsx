import React, { useState } from 'react'
import {
  FaPhoneVolume,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  const [open, setOpen] = useState(null)

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20 py-16">

        {/* ================= Desktop ================= */}
        <div className="hidden lg:grid grid-cols-4 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <h2 className="text-themegreen text-3xl font-bold uppercase">
              Shorbagy
            </h2>
            <p className="text-gray-400 text-sm leading-6">
              Saturday to Thursday, from 9:00 AM to 6:00 PM.
            </p>

            <div className="flex items-center gap-3 text-sm">
              <FaPhoneVolume className="text-themegreen" />
              <span>01010394673</span>
            </div>

            <div className="flex gap-4 text-xl mt-3">
              <FaFacebook className="hover:text-themegreen transition" />
              <FaTwitter className="hover:text-themegreen transition" />
              <FaLinkedin className="hover:text-themegreen transition" />
              <FaInstagram className="hover:text-themegreen transition" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Company</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              {['Home', 'About Us', 'Pricing', 'Blog', 'Projects'].map(item => (
                <li key={item} className="hover:text-themegreen cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Services</h3>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              {[
                'Digital Marketing',
                'Content Creation',
                'Social Media Management',
                'Responsive Websites',
              ].map(item => (
                <li key={item} className="hover:text-themegreen cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Subscribe to Newsletter
            </h3>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-4 bg-transparent border border-gray-700 rounded-md mb-4 focus:border-themegreen outline-none"
            />
            <button className="w-full bg-themegreen hover:bg-white hover:text-black transition py-4 rounded-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* ================= Mobile ================= */}
        <div className="lg:hidden flex flex-col gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-themegreen text-2xl font-bold uppercase">
              Shorbagy
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Sat – Thu | 9:00 AM – 6:00 PM
            </p>
            <div className="flex items-center gap-3 mt-3 text-sm">
              <FaPhoneVolume className="text-themegreen" />
              <span>01010394673</span>
            </div>
          </div>

          {/* Accordion */}
          {[
            {
              title: 'Company',
              items: ['Home', 'About Us', 'Pricing', 'Blog', 'Projects'],
            },
            {
              title: 'Services',
              items: [
                'Digital Marketing',
                'Content Creation',
                'Social Media',
                'Responsive Websites',
              ],
            },
          ].map((section, i) => (
            <div key={i} className="border-b border-gray-800 pb-4">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center text-lg font-semibold"
              >
                {section.title}
                <span className="text-themegreen">
                  {open === i ? '−' : '+'}
                </span>
              </button>

              {open === i && (
                <ul className="mt-4 flex flex-col gap-3 text-gray-400 text-sm">
                  {section.items.map(item => (
                    <li key={item} className="hover:text-themegreen">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Social */}
          <div className="flex justify-center gap-6 text-2xl pt-4">
            <FaFacebook  className="hover:text-themegreen" />
            <FaTwitter className="hover:text-themegreen "/>
            <FaLinkedin  className="hover:text-themegreen"/>
            <FaInstagram  className="hover:text-themegreen"/>
          </div>
        </div>

        {/* ================= Bottom ================= */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row gap-4 items-center justify-between text-gray-400 text-sm">
          <p>© 2024 Shorbagy. All rights reserved.</p>
          <ul className="flex gap-6">
            <li className="hover:text-themegreen">Terms</li>
            <li className="hover:text-themegreen">Privacy</li>
            <li className="hover:text-themegreen">Cookies</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer