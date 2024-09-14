import React from 'react';
import CSSLogo from '/css.svg';
import ExpressMain from '/expressmain.webp';
import GitLogo from '/git.svg';
import HTMLLogo from '/html.svg';
import MongoDBLogo from '/mongo.svg';
import PrismaLogo from '/prisma.svg';
import ReactLogo from '/reactjs.svg';
import TailwindLogo from '/tailwind.svg';
import NodeJSLogo from '/nodejs.svg';
import NextJSLogo from '/nextjs.svg';
import GitHubLogo from '/github.svg';
import PostgresLogo from '/postgresql.svg';
import PostmanLogo from '/postman-icon.svg';

function Skills() {
  const frontendSkills = [
    { name: 'HTML', Logo: HTMLLogo },
    { name: 'CSS', Logo: CSSLogo },
    { name: 'React', Logo: ReactLogo },
    { name: 'Tailwind CSS', Logo: TailwindLogo },
    { name: 'Next.js', Logo: NextJSLogo }
  ];

  const backendSkills = [
    { name: 'Node.js', Logo: NodeJSLogo },
    { name: 'Express', Logo: ExpressMain },
  ];

  const databaseSkills = [
    { name: 'MongoDB', Logo: MongoDBLogo },
    { name: 'Prisma', Logo: PrismaLogo },
    { name: 'PostgreSQL', Logo: PostgresLogo }
  ];

  const toolsSkills = [
    { name: 'Git', Logo: GitLogo },
    { name: 'GitHub', Logo: GitHubLogo },
    { name: 'Postman', Logo: PostmanLogo }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center mb-5 text-4xl font-bold text-white">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="text-cyan-400 px-4">Skills</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Container for all skills */}
      <div className="flex justify-between space-x-4">
        {/* Frontend Section */}
        <div className="border border-gray-600 rounded-lg p-4 flex-1 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-900">
          <div className="text-xl font-semibold mb-4 text-center text-cyan-400   ">Frontend</div>
          <div className="grid grid-cols-3 mx-auto max-w-[600px] gap-2">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={skill.Logo} alt={skill.name} className="w-16 h-16 mb-2" />
                <span className="text-white text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="border border-gray-600  rounded-lg p-4 flex-1 transition-transform duration-300 transform hover:scale-105 hover:bg-orange-500">
          <div className="text-xl font-semibold mb-1 text-cyan-400 text-center  hover:text-blue-400">Backend</div>
          <div className="grid grid-cols-2 mx-auto max-w-[600px] gap-2">
            {backendSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={skill.Logo} alt={skill.name} className="w-24 h-24 mb-2" />
                <span className="text-white text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Database Section */}
        <div className="border border-gray-600 rounded-lg p-4 flex-1 transition-transform duration-300 transform hover:scale-105 hover:bg-red-500">
          <div className="text-xl font-semibold mb-4 text-cyan-400 text-center ">Database</div>
          <div className="grid grid-cols-3 mx-auto max-w-[600px] gap-2">
            {databaseSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={skill.Logo} alt={skill.name} className="w-16 h-16 mb-2" />
                <span className="text-white text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="border border-gray-600 rounded-lg p-4 flex-1 transition-transform duration-300 transform hover:scale-105 hover:bg-purple-900">
          <div className="text-xl font-semibold mb-4 text-cyan-400 text-center">Tools</div>
          <div className="grid grid-cols-3 mx-auto max-w-[600px] gap-2">
            {toolsSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={skill.Logo} alt={skill.name} className="w-24 h-24 mb-2" />
                <span className="text-white text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

