import React from 'react';
import ReactLogo from '/reactjs.svg';
import TailwindLogo from '/tailwind.svg';
import ProjectImage from '/Project1.png';


const projects = [
  {
    title: 'To-do',
    image: ProjectImage,
    techs: [TailwindLogo, ReactLogo],
    link: 'https://project-one.com',
    github:'https://github.com/Al0kKumar/To-do'
  },
 
  // Add more projects as needed
];
function Projects() {
  
  return (

    <div className="p-8 text-cyan-500">
      {/* Heading with lines on both sides */}
      <div className="flex items-center mb-8 text-4xl font-bold text-white">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="px-4 text-cyan-400">Projects</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

    <div className="flex flex-wrap justify-center">
      {projects.map((project, index) => (
        <div key={index} className=" bg-slate-800 m-4 p-4 border rounded-lg shadow-lg w-80">
          <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover rounded-t-lg"
           />
          
          <h3 className="text-xl font-bold mt-2 text-lime-500">{project.title}</h3>
          <div className="flex mt-2">
            {project.techs.map((tech, index) => (
              <img key={index}
               src={tech} 
               alt={`Logo of ${tech}`} 
               className="w-6 h-6 mr-1" 
               />
            ))}
          </div>

          <div className='space-x-2 mt-4  '>
            
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg">
              View Project
            </button>
          </a>
          
          
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-400 text-white py-2 px-4 rounded-lg">
               Github Repo
            </button>
          </a>
          
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Projects;