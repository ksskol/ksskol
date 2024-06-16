import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <Link to={`/`}>ksskol</Link>
      <div className="flex float-right mr-20">
        <Link className="pl-10" to={`/about`}>
          about
        </Link>
        <Link className="pl-10" to={`/projects`}>
          projects
        </Link>
        <Link className="pl-10" to={`/resume`}>
          resume
        </Link>
      </div>
    </header>
  );
}
