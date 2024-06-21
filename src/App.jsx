import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import MainInfo from "./components/MainInfo";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleTheme() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  }

  useEffect(() => {
    const storedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (storedMode) {
      setIsDarkMode(storedMode);
      document.documentElement.classList.toggle("dark", storedMode);
    }
  }, []);

  return (
    <div className={`dark:bg-neutral-900 dark:text-white ${isDarkMode ? "dark" : ""}`}>
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
