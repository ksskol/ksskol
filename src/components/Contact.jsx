import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="absolute top-5 right-5 space-y-5">
  <div className="text-2xl ">
    <FaLinkedinIn />
  </div>
  <div className="text-2xl ">
    <FaGithub />
  </div>
  <div className="text-2xl">
    <MdOutlineMail />
  </div>
</div>
  );
}
