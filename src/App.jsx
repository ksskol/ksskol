import { Route, Routes } from "react-router";
import Header from "./components/NavBar";
import MainInfo from "./components/MainInfo";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
      <div className="m-5 ml-10 mr-10">
          <Contact />
          <Header />
          <Routes>
            <Route path="/" element={<MainInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        );
}

export default App;
