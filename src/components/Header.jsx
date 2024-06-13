import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to={`/`}>ksskol</Link>
      <Link className="pl-10" to={`/about`}>
        about
      </Link>
      <Link className="pl-10" to={`/projects`}>
        projects
      </Link>
      <Link className="pl-10" to={`/resume`}>
        resume
      </Link>
    </header>
  );
}
