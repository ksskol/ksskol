import React from "react";
import data from "../../data.json";

export default function Resume() {
  const { name, title, resume } = data;

  return (
    <div className="my-10 mx-5 flex flex-col items-center animate-fadeInF">
      <div className="w-full bg-zinc-100 dark:bg-zinc-700 dark:text-white max-w-4xl p-10 rounded-lg">
        <h1 className="text-lg">{name}</h1>
        <h3 className="text-gray-400">{title}</h3>

        <div className="my-5">
          <h3 className="font-bold">Education</h3>
          <h4>{resume.education.placeName}</h4>
          <p>{resume.education.placePara}</p>
          <p className="text-gray-400">{resume.education.placeDate}</p>
        </div>

        <h3 className="font-bold">Skills</h3>
        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-4">
          <SkillCategory title="Languages" skills={resume.skills.languages} />
          <SkillCategory title="Frontend Tech" skills={resume.skills.frontEnd} />
          <SkillCategory title="Backend Tech" skills={resume.skills.backEnd} />
          <SkillCategory title="Testing Framework" skills={resume.skills.testing} />
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={resume.CV.CV1}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="hover:text-gray-500 link-transition">View Full Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div>
      <h4 className="font-bold mb-2">{title}</h4>
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
}
