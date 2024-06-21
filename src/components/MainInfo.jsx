import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function MainInfo() {
  return (
    <main>
      <div>
        <div className="my-60 laptop:my-72">
          <h1 className="text-2xl laptop:text-3xl desktop:text-4xl">Kristina Skolota</h1>
          <h2 className="text-4xl laptop:text-5xl desktop:text-6xl">Software Engineer</h2>
        <Contact />
        </div>
        <h3 className="my-10 text-2xl text-bold">Projects</h3>
        <div className="px-3 pb-10 grid grid col-1 ">
          <Projects className="text-2xl" />
        </div>
        <h3 className="my-10 text-2xl text-bold" id="about">
          About
        </h3>
        <About />
      </div>

      <div className="flex flex-col items-center">
        <div className="my-5">
          <Contact />
        </div>
      </div>
    </main>
  );
}
