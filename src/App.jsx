import { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import MainInfo from "./components/MainInfo";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="dark:bg-neutral-900 dark:text-white">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<MainInfo isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        <Route path="/resume" element={<Resume isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        <Route path="/projects" element={<Projects isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
      </Routes>
    </div>
  );
}

export default App;
