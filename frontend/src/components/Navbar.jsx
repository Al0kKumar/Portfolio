import React from 'react'

function Navbar() {
  return (
    <div className='bg-slate-800  bg-opacity-1 sticky top-0 flex justify-center space-x-10 p-2  shadow-lg z-50'>
      <a href="#skills" className="text-cyan-400 font-bold text-lg px-6 py-3 rounded-full hover:bg-slate-600 hover:text-white transition duration-300 shadow-md transform hover:scale-105">
        Skills
      </a>
      <a href="#about" className="text-cyan-400 font-bold text-lg px-6 py-3 rounded-full hover:bg-slate-600 hover:text-white transition duration-300 shadow-md transform hover:scale-105">
        About
      </a>
      <a href="#projects" className="text-cyan-400 font-bold text-lg px-6 py-3 rounded-full hover:bg-slate-600 hover:text-white transition duration-300 shadow-md transform hover:scale-105">
        Projects
      </a>
      <a href="#connect" className="ttext-cyan-400 font-bold text-lg px-6 py-3 rounded-full hover:bg-slate-600 hover:text-white transition duration-300 shadow-md transform hover:scale-105">
        Connect
      </a>
    </div>
  )
}

export default Navbar