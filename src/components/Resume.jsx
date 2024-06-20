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
    <div className="mt-10 w-full flex flex-col items-center">
      <div className="w-full bg-gray-50 max-w-4xl p-10 rounded-lg text-lg">
        <h1 className="text-xl ">Kristina Skolota</h1>
        <h3 className="opacity-60">Full-Stack Software Engineer</h3>
        <div className="my-5">
          <h3 className="font-bold">Education</h3>
          {/* <img
            className="w-full max-w-24"
            src="https://www.manchesterdigital.com/storage/6766/Northcoders-Primary-Logo---Red.png"
            alt="Northcoders"
          /> */}
          <h4> Northcoders, Manchester</h4>
          <p>Software Engineer</p>
          <p>March 2024 - May 2024</p>
        </div>
        <h3 className="font-bold">Skills</h3>
        <div className="grid grid-cols-1 gap-4">
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
        <div className="flex justify-center mt-5">
          <a href="../../adding/KristinaSkolotaCV.pdf" target="_blank">
            <button type="button" className="border border-gray-400 rounded-lg p-1 bg-white">View full CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}
