import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">VISION-SCOPE</a>
      </div>

      <ul className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/generate">Generate Images</Link>
      </ul>
    </div>
  );
};

export default Navbar;
