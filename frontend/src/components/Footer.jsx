import React from 'react'

const Footer = () => (
  <footer className="bg-teal-900 text-white text-center p-4">
    <p>&copy; {new Date().getFullYear()} Alok kumar. All rights reserved.</p>
    
    {/* Social Media Links */}
    <div className="flex justify-center space-x-4 mt-2">
      <a href="https://github.com/Al0kKumar" target="_blank" rel="noopener noreferrer">
        <img src="/githubhai.svg" alt="GitHub" className="w-6 h-6 filter brightness-200" />
      </a>
      <a href="https://www.linkedin.com/in/alok-kumar09/" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 filter brightness-200" />
      </a>
      <a href="https://x.com/Al0k_Mishra_" target="_blank" rel="noopener noreferrer">
        <img src="/twitter-x.svg" alt="Twitter" className="w-6 h-6 filter brightness-200" />
      </a>
      <a href="https://leetcode.com/u/Al0k_Kumar/" target="_blank" rel="noopener noreferrer">
        <img src="/leetcode.svg" alt="LeetCode" className="w-6 h-6 " />
      </a>
    </div>

    {/* Optional Back to Top button */}
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="mt-2 text-yellow-400 hover:underline"
    >
      Back to Top
    </button>
  </footer>
);

export default Footer;