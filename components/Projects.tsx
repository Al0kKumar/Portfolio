import React from "react";
import Card from "./Card";

export default function Projects() {
  const data = [
    { flex: "flex-row-reverse", image: "/Project1.png",title:"Wallet",github:"https://github.com/Al0kKumar/Wallet-v1",live:"https://wallet-op.vercel.app/"},
    { flex: "",image: "/Project2.png" , title:"Real-Time Location tracker",github:"https://github.com/Al0kKumar/Real-Time-location",live:"https://real-time-location-b1kg.onrender.com"},
  ];
  return (
    <div id="projects" className="min-h-screen  px-4 py-24">
      <h1 className="uppercase text-center text-3xl py-5 font-WorkSansSemiBold text-gray-500">
        Projects 
      </h1>
      <div className=" flex flex-col  items-center  w-full ">
        {data.map((n, index) => {
          return <Card key={index} title={n.title} live={n.live} github={n.github}  rev={n.flex} image={n.image} />;
        })}
      </div>
    </div>
  );
}
