import * as React from "react";
import Client from "../components/Skills";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-black text-white w-full h-full font-WorkSansRegular">
      <Header />
      <Client />
      <Projects />
      <Footer />
    </div>
  );
}
