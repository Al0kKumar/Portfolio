import React from "react";
interface Props {
  rev: string;
  image: string;
  title: string,
  github: string,
  live:string
}

export default function Card({ rev, image,title,github,live}: Props) {
  return (
    <div
      className={`${rev} flex items-end p-16  my-3 max-w-5xl flex-wrap md:flex-nowrap px-4`}
    >
      <div>
        <img
          src={image}
          alt="placeholder.png"
          width="500"
          height="200"
          className=""
        />
      </div>
      <div className="mx-3 max-w-xl md:max-w-sm lg:max-w-xl">
        <p className="text-2xl p-3 uppercase">{title} </p>
        
        <div className="flex ">
          <div className="p-2">
            <a href={live}>
            <button className="hover:bg-orange-500 text-gray-300  px-6 py-2 border rounded-full ">
           Link
            </button>
            </a>
          </div>
          <div className="p-2">
            <a href={github}>
           <button className="hover:bg-[#BC3CD8] text-gray-300 px-6 py-2 border rounded-full ">
            Github
           </button>
           </a>
        </div>
        </div>
      </div>
    </div>
  );
}
