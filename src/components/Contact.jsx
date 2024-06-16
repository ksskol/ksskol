import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex space-x-4 mt-5 text-2xl">
      <div>
        <a href="https://www.linkedin.com/in/ksskol/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://github.com/ksskol" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="mailto:tinaskolo@gmail.com" target="_blank">
          <MdOutlineMail />
        </a>
      </div>
    </div>
  );
}
