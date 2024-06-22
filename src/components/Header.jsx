import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import Dark from "./Dark";

export default function Header({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLinkClick(path) {
    setIsMenuOpen(false);

    if (path === "/about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }

  function isActiveLink(path) {
    return location.pathname === path ? "underline-sm" : "";
  }

  return (
    <div className="block sticky top-0 bg-white dark:bg-neutral-900 dark:text-white">
      <div className="m-5 ml-10 mr-10 flex items-center justify-between p-2">
        <Link className={`text-lg hover:text-gray-400 link-transition ${isActiveLink("/")}`} to={`/`}>
          ksskol
        </Link>

        <div className="flex items-center laptop:hidden">
          <div className="mx-5">
            <Dark isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>

          <button onClick={handleClick} className="flex items-center text-3xl">
            {isMenuOpen ? <VscChromeClose /> : <IoReorderThree />}
          </button>
        </div>

        <div className="hidden laptop:flex items-center space-x-5 ">
          <Link to={`/about`} onClick={() => handleLinkClick("/about")} className={`p-2 hover:text-gray-400 link-transition ${isActiveLink("/about")}`}>
            about
          </Link>
          <Link to={`/projects`} onClick={() => handleLinkClick("/projects")} className={`p-2 hover:text-gray-400 link-transition ${isActiveLink("/projects")}`}>
            projects
          </Link>
          <Link to={`/resume`} onClick={() => handleLinkClick("/resume")} className={`p-2 hover:text-gray-400 link-transition ${isActiveLink("/resume")}`}>
            resume
          </Link>
          <div className="laptop:text-xl">
            <Dark isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="laptop:hidden absolute right-0 top-16 w-10/12 p-4 bg-white dark:bg-neutral-900 shadow-md  dark:shadow-zinc-800 rounded-md tablet:w-7/12">
          <div className="grid grid-cols-1 space-y-5">
            <Link to={`/about`} onClick={() => handleLinkClick("/about")} className={`p-2 flex ${isActiveLink("/about")}`}>
              about
            </Link>
            <Link to={`/projects`} onClick={() => handleLinkClick("/projects")} className={`p-2 flex ${isActiveLink("/projects")}`}>
              projects
            </Link>
            <Link to={`/resume`} onClick={() => handleLinkClick("/resume")} className={`p-2 flex ${isActiveLink("/resume")}`}>
              resume
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
