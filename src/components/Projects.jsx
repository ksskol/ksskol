import React from 'react';
import data from '../../data.json';
import { Link } from 'react-router-dom';

export default function Projects({ showLastThree }) {
  const { projects } = data;
  const displayedProjects = showLastThree ? projects.slice(0, 3) : projects;

  return (
    <div className="my-5 mx-10 laptop:mx-16 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-12 fourK:grid-cols-4 fourK:gap-14">
      {displayedProjects.map((project) => (
        <div key={project.id}>
          <div className="rounded-md border-2 overflow-hidden h-40 fourK:h-60">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                className="object-cover w-full h-full link-grow"
                src={project.imageSrc}
                alt="project picture"
              />
            </a>
          </div>
          <h1 className="mt-5 text-md font-medium">{project.title}</h1>
          <h2 className='text-gray-500'>{project.description}</h2>
        </div>
      ))}
      {showLastThree && (
        <div className="flex justify-center mt-10 col-span-full">
          <Link
            to="/projects"
            className="flex justify-center items-center tablet:h-20 hover:text-gray-500 link-transition"
            onClick={() => window.scrollTo(0, 0)}
          >
            See more projects...
          </Link>
        </div>
      )}
    </div>
  );
}
