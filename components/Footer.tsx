/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <div id="contact" className="py-10 h-[50vh] flex justify-center items-center flex-col">
      <div className="text-center">
        <h1 className="text-5xl">Get in Touch</h1>
      </div>
      <div className="flex justify-center items-center">
        <a href="mailto:mishraalok189381@gmail.com">
        <img src="/Mail.svg" alt="Image" />
        </a>
        <a href="https://www.linkedin.com/in/alok-kumar09/">
        <img src="/LinkedIn.svg" alt="Image" />
        </a>
      </div>
    </div>
  );
}
