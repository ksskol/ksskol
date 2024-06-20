// header.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

export default function NavBar() {
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
    <div className="block">
      <div className="flex items-center justify-between p-2">
        <Link to={`/`}>ksskol</Link>

        <button onClick={handleClick} className="flex items-center text-2xl">
          {isMenuOpen ? <VscChromeClose /> : <IoReorderThree />}
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 top-16 z-10 w-10/12 p-4 bg-white shadow-md rounded-md">
            <div className="grid grid-cols-1 space-y-5 text-sm">
              <button className="p-2 flex">
                <Link to={`/`} onClick={handleLinkClick}>
                  about
                </Link>
              </button>
              <button className="p-2 flex">
                <Link to={`/projects`} onClick={handleLinkClick}>
                  projects
                </Link>
              </button>
              <button className="p-2 flex">
                <Link to={`/resume`} onClick={handleLinkClick}>
                  resume
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
