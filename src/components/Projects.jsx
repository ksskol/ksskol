import React from 'react';
import data from '../../data.json'; 

export default function Projects() {
  const { projects } = data;

  return (
    <div className="my-5 mx-10 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-7 desktop:grid-cols-4 fourK:grid-cols-5 fourK:gap-14">
      {projects.map((project) => (
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
          <h2 className='text-gray-500'>{project.description}</h2>
        </div>
      ))}
    </div>
  );
}
