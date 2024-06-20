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
  }

  return (
    <div className="block">
      <div className="flex items-center justify-between p-2">
        <Link className="font-medium" to={`/`}>
          ksskol
        </Link>

        <button onClick={handleClick} className="flex items-center text-2xl">
          {isMenuOpen ? <VscChromeClose /> : <IoReorderThree />}
        </button>

        {isMenuOpen && (
          <div className="absolute right-10 top-16 z-10 w-8/12 p-4 border border-gray-950 bg-white shadow-md rounded-md">
            <div className="grid grid-cols-1 space-y-5">
              <button className="p-2 flex">
                <Link to={`/about`} onClick={handleLinkClick}>
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
