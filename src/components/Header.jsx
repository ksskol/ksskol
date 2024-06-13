import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to={`/`}>ksskol</Link>
      <Link className="right-link" to={`/resume`}>
        resume
      </Link>
      <Link className="right-link" to={`/projects`}>
        projects
      </Link>
      <Link className="right-link" to={`/about`}>
        about
      </Link>
    </header>
  );
}
