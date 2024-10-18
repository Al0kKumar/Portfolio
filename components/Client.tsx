// import React from 'react';

// const skillsData = [
//   "React",
//   "Typescript",
//   "Go",
//   "Tailwind",
//   "Nodejs",
//   "Express",
//   "MongoDB",
//   "PostgreSQL",
//   "Prisma",
//   "Redis",
//   "Git",
//   "Postman",
// ];

// export default function Client() {
//   return (
//     <div className=" text-white py-10">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl lg:text-4xl font-bold mb-6"> Skills</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {skillsData.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105"
//             >
//               <h3 className="text-xl font-semibold text-center">{skill}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';

const skillsData = [
  "React",
  "Typescript",
  "Go",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Git",
  "Postman",
];

export default function SkillsComponent() {
  return (
    <div className=" py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 rounded-lg"></div>
              <h3 className="text-gray-200 relative text-xl font-semibold text-center z-10">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
