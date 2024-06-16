import Contact from "./Contact";
import Projects from "./Projects";

export default function MainInfo() {
  return (
    <main>
      <div className="mt-60">
        <h1 className="text-2xl ">Kristina Skolota</h1>
        <h2 className="text-4xl ">Software Engineer</h2>
        <Contact />
        <h3 className="mt-60 font-medium">Projects</h3>
        <Projects className="text-2xl" />
      </div>
    </main>
  );
}
