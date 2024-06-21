import { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import Dark from "./Dark";

export default function Header({ isDarkMode, toggleTheme }) {
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
    <div className="block sticky top-0 bg-white dark:bg-neutral-900 dark:text-white">
      <div className="m-5 ml-10 mr-10 flex items-center justify-between p-2">
        <Link className="text-lg" to={`/`}>
          ksskol
        </Link>

        <div className="flex items-center laptop:hidden">
          <div className="mx-5 text-xl">
            <Dark isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>

          <button onClick={handleClick} className="flex items-center text-3xl">
            {isMenuOpen ? <VscChromeClose /> : <IoReorderThree />}
          </button>
        </div>

        <div className="hidden laptop:flex items-center space-x-5 ">
          <Link to={`/`} onClick={handleLinkClick} className="p-2">
            about
          </Link>
          <Link to={`/projects`} onClick={handleLinkClick} className="p-2">
            projects
          </Link>
          <Link to={`/resume`} onClick={handleLinkClick} className="p-2">
            resume
          </Link>
          <div className="laptop:text-2xl">
            <Dark isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="laptop:hidden absolute right-0 top-16 w-10/12 p-4 bg-white dark:bg-neutral-900 shadow-md  dark:shadow-zinc-800 rounded-md tablet:w-7/12">
          <div className="grid grid-cols-1 space-y-5">
            <Link to={`/`} onClick={handleLinkClick} className="p-2 flex">
              about
            </Link>
            <Link
              to={`/projects`}
              onClick={handleLinkClick}
              className="p-2 flex"
            >
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
