/* eslint-disable react/no-unescaped-entities */
import NavComponent from "./NavComponent";

export default function Header() {
  return (
    <>
      <NavComponent />
      <div id="home" className="h-screen w-full flex justify-center flex-col items-center">
        <div className=" px-4 h-full flex justify-center flex-col items-center text-center">
          <h1 className="font-WorkSansRegular flex flex-col text-gray-500  text-4xl lg:text-6xl">
          <span>
          I'm a 
          <span className="px-2 font-WorkSansSemiBold text-white">
            Full-Stack Developer
          </span>
          passionate about  
        </span>
        <span className="text-purple-500">
        backend <span className="text-gray-500">
         technologies, with strong   
         </span>
        </span>
         <span className="text-yellow-200">
         frontend <span className="text-gray-500">
         skills and  
         </span>
         </span>
         
         <span className="text-orange-400">
        <span className="text-gray-500"> love for </span> DSA
         </span>
          </h1>
        </div>
      </div>
    </>
  );
}
