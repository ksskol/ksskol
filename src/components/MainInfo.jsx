import React from 'react';
import About from "./About";
import Contact from "./Contact";
import ProjectsGallery from './ProjectsGallery';
import data from '../../data.json';

export default function MainInfo({ isDarkMode, toggleTheme }) {
  const { name, title, projects } = data;

  return (
    <main className="m-5 mx-10 animate-fadeIn">
      <div>
        <div className="my-60 laptop:my-72">
          <h1 className="text-2xl laptop:text-3xl desktop:text-4xl ">
            {name}
          </h1>
          <h2 className="text-4xl laptop:text-5xl desktop:text-6xl ">
            {title}
          </h2>
          <Contact />
        </div>
        <h3 className="my-10 text-2xl text-bold">Projects</h3>
        <div className="grid grid-cols-1">
          <ProjectsGallery isDarkMode={isDarkMode} toggleTheme={toggleTheme} projects={projects} className="text-2xl" />
        </div>
        <h3 className="my-10 text-2xl text-bold" id="about">
          About
        </h3>
        <About />
      </div>

      <div className="flex flex-col items-center">
        <div className="my-5">
          <Contact />
        </div>
      </div>
    </main>
  );
}
