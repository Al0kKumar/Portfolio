import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Intro() {
  return (
    <div className='bg-slate-800 text-cyan-400 shadow-lg flex justify-center p-8'>
      {/* Left Side - Intro Text */}
      <div className='text-cyan-400 p-6'>
        <h4 className='text-xl'>Hi there</h4> {/* Increased size */}
        <h1 className='text-6xl font-bold'>I’m <span className='text-purple-600'>Alok Kumar</span></h1> {/* Increased size */}
        <h2 className='text-3xl mt-2'>Full Stack Web Developer</h2> {/* Increased size */}

        {/* Social Media Links */}
        <div className='flex mt-8'>
          <div className='flex space-x-6'>
            <a href="https://github.com/Al0kKumar" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-200 transform hover:scale-105">
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6 mr-2" /> {/* Increased icon size */}
                GitHub
              </button>
            </a>
            <a href="https://x.com/Al0k_Mishra_" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-200 transform hover:scale-105">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 mr-2" /> {/* Increased icon size */}
                X
              </button>
            </a>
            <a href="https://www.linkedin.com/in/alok-kumar09/" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-200 transform hover:scale-105">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 mr-2" /> {/* Increased icon size */}
                LinkedIn
              </button>
            </a>
          </div>
        </div>

        {/* CV Download Button */}
        <div className='mt-8'>
          <button className='bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:from-green-400 hover:to-green-300 transition duration-200 transform hover:scale-105'>
            Download CV
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className='text-white p-6 ml-32'>
        <img src='/images (1).jpeg' alt="Alok Kumar" className='w-72 h-72 rounded-full' /> {/* Increased size */}
      </div>
    </div>
  );
}

export default Intro;
