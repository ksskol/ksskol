import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <h4>Contact</h4>
      <FaLinkedinIn className="contact-link"/>
      <FaGithub className="contact-link"/>
      <MdOutlineMail className="contact-link"/>
    </div>
  );
}
