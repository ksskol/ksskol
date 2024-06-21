import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";

export default function Dark({ isDarkMode, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? <IoMdMoon /> : <FiSun />}
    </button>
  );
}
