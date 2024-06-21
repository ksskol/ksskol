import React from 'react';
import data from '../../data.json'; 

export default function Projects() {
  const { projects } = data;

  return (
    <div className="my-5 mx-10 overflow-x-auto snap-x snap-mandatory">
      <div className="flex space-x-7">
        {projects.map((project) => (
          <div key={project.id} className="snap-center flex-shrink-0 w-48 desktop:w-64 mb-5">
            <div className="rounded-md border-2 overflow-hidden h-32 desktop:h-40">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover w-full h-full"
                  src={project.imageSrc}
                  alt="project picture"
                />
              </a>
            </div>
            <h1 className="mt-5 text-md font-medium">{project.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
