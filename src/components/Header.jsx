import { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLinkClick() {
    setIsMenuOpen(false);

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="block sticky top-0 bg-white">
      <div className="flex items-center justify-between p-2">
        <Link className="text-lg" to={`/`}>ksskol</Link>

        <div className="laptop:hidden">
          <button onClick={handleClick} className="flex items-center text-3xl">
            {isMenuOpen ? <VscChromeClose /> : <IoReorderThree />}
          </button>
        </div>

        <div className="hidden laptop:flex space-x-5 text-lg">
          <Link to={`/`} onClick={handleLinkClick} className="p-2">
            about
          </Link>
          <Link to={`/projects`} onClick={handleLinkClick} className="p-2">
            projects
          </Link>
          <Link to={`/resume`} onClick={handleLinkClick} className="p-2">
            resume
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="laptop:hidden absolute right-0 top-16 z-10 w-10/12 p-4 bg-white shadow-md rounded-md tablet:w-7/12">
          <div className="grid grid-cols-1 space-y-5">
            <Link to={`/`} onClick={handleLinkClick} className="p-2 flex">
              about
            </Link>
            <Link to={`/projects`} onClick={handleLinkClick} className="p-2 flex">
              projects
            </Link>
            <Link to={`/resume`} onClick={handleLinkClick} className="p-2 flex">
              resume
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
