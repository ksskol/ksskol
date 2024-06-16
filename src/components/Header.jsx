import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <Link to={`/`}>ksskol</Link>
      <div>
        <Link to={`/about`}>
          about
        </Link>
        <Link to={`/projects`}> 
          projects
        </Link>
        <Link to={`/resume`}>
          resume
        </Link>
      </div>
    </header>
  );
}
