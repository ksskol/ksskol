import React from "react";
import About from "./About";
import Contact from "./Contact";
import data from "../../data.json";
import Projects from "./Projects";
import DotBackground from "./DotBackground";

export default function MainInfo({ isDarkMode, toggleTheme }) {
  const { name, title } = data;

  return (
    <main>
       <div className="mx-5 laptop:my-72 laptop:mx-10">
        <div className="relative overflow-hidden">
          <DotBackground />
          <div className="relative inline-block bg-white rounded-2xl z-10 my-60 mx-5 laptop:my-72 laptop:mx-10 p-5 ">
            <h1 className="text-2xl laptop:text-3xl desktop:text-4xl ">
              {name}
            </h1>
            <h2 className="text-4xl laptop:text-5xl desktop:text-7xl ">
              {title}
            </h2>
            <Contact />
          </div>
        </div>
        <h3 className="my-10 mx-5 laptop:mx-10 text-2xl text-bold">Projects</h3>
        <div className="grid grid-cols-1">
          <Projects showLastThree={true} />
        </div>
        <div className="mx-5 laptop:mx-10">
          <h3 className="text-2xl text-bold" id="about">
            About
          </h3>
          <About />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="my-5">
          <Contact />
        </div>
      </div>
    </main>
  );
}
