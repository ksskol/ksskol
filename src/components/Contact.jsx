import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex float-right flex-col space-y-5 ml-10">
      <div className="text-2xl mb-3">
      <MdOutlineDarkMode />
      </div>
      <div className="text-2xl ">
        <a href="https://www.linkedin.com/in/ksskol/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="text-2xl ">
        <a href="https://github.com/ksskol" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="text-2xl">
        <a href="mailto:tinaskolo@gmail.com" target="_blank">
          <MdOutlineMail />
        </a>
      </div>
    </div>
  );
}
