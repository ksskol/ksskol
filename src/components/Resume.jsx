import { SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiJest } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GoDatabase } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";

export default function Resume() {
  return (
    <div>
      <div className="border-2 w-28">
        <a href="../../adding/KristinaSkolotaCV.pdf" target="_blank">
          <button type="button">View full CV</button>
        </a>
      </div>
      <h1>Kristina Skolota</h1>
      <h3>Full-Stack Software Engineer</h3>
      <h3 className="font-bold">Education</h3>
      <img className="w-full max-w-24" src="https://www.manchesterdigital.com/storage/6766/Northcoders-Primary-Logo---Red.png" alt="Northcoders" />
      <h4> Northcoders, Manchester</h4>
      Software Engineer March 2024 - Current
      <p>
        Software Development: Contributed to the development and maintenance of
        software applications using JavaScript.
      </p>
      <p>
        Problem Solving: Identified and resolved software issues efficiently,
        ensuring reliable solutions were delivered.
      </p>
      <p>
        Team Collaboration: Worked closely with team members, participated in
        code reviews, and followed Agile processes to promote teamwork and
        enhance efficiency.
      </p>
      <p>
        Learning and Innovation: Stayed updated with emerging technologies,
        aimed for innovation, and continuously improved project outcomes.
      </p>
      <h3 className="font-bold">Skills</h3>
      <div className="grid grid-cols-8 gap-5">
        <div>
          <h4 className="font-bold mb-2">Languages</h4>
          <p className="flex items-center">
            <RiJavascriptFill className="mr-2" /> JavaScript
          </p>
          <p className="flex items-center">
            <BiLogoTypescript className="mr-2" /> TypeScript
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Front-end</h4>
          <p className="flex items-center">
            <FaHtml5 className="mr-2" /> HTML
          </p>
          <p className="flex items-center">
            <IoLogoCss3 className="mr-2" /> CSS
          </p>
          <p className="flex items-center">
            <FaReact className="mr-2" /> React
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Back-end</h4>
          <p className="flex items-center">
            <GoDatabase className="mr-2" /> SQL
          </p>
          <p class="flex items-center">
            <SiPostgresql className="mr-2" /> PSQL
          </p>
          <p class="flex items-center">
            <SiMongodb className="mr-2" /> MongoDB
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Testing</h4>
          <p className="flex items-center">
            <SiJest className="mr-2" /> TDD using Jest
          </p>
        </div>
      </div>
    </div>
  );
}
