import { Route, Routes } from "react-router";
import Header from "./components/Header";
import MainInfo from "./components/MainInfo";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<MainInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
