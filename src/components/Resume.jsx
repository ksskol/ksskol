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
      <h1>Kristina Skolota</h1>
      <h3>Full-Stack Software Engineer</h3>
      <h3>Education</h3>
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
      <h3>Skills</h3>
      <h4>Languages</h4>
        <p><RiJavascriptFill /> JavaScript</p>
        <p><BiLogoTypescript /> TypeScript</p>
      <h4>Testing</h4>
        <p><SiJest /> TDD using Jest and Supertest</p>
      <h4>Back-end</h4>
        <p><GoDatabase /> SQL</p>
        <p><SiPostgresql /> PSQL</p>
        <p> <SiMongodb />MongoDB</p>
      <h4>Front-end</h4>
        <p><FaHtml5 /> HTML</p>
        <p><IoLogoCss3 /> CSS</p>
        <p><FaReact /> React</p>
    </div>
  );
}
