import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";

export default function LastThreeProjects() {
  const { projects } = data;
  const firstThreeProjects = projects.slice(0, 3);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="my-5 mx-10">
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7 desktop:grid-cols-4 fourK:grid-cols-6 fourK:gap-14 animate-fadeInF">
        {firstThreeProjects.map((project) => (
          <div key={project.id}>
            <div className="rounded-md border-2 overflow-hidden h-40">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover w-full h-full link-grow"
                  src={project.imageSrc}
                  alt="project picture"
                />
              </a>
            </div>
            <h1 className="mt-5 text-md font-medium">{project.title}</h1>
            <h2 className="text-gray-500">{project.description}</h2>
          </div>
        ))}
        <div className="laptop:col-span-3 desktop:col-span-1">
          <Link
            to="/projects"
            className="flex justify-center items-center tablet:h-40 hover:text-blue-500 link-transition"
            onClick={scrollToTop}
          >
            See more projects...
          </Link>
        </div>
      </div>
    </div>
  );
}
