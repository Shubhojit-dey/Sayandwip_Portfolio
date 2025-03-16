import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Brand Name */}
      <div className="navbar-brand"></div>

      {/* Right: Nav Links */}
      <ul className="navbar-links">
        <li><Link to="/"><span style={{ color: "#FF4081" }}>#</span>home</Link></li>
        <li><Link to="/projects" ><span style={{ color: "#FF4081" }}>#</span>projects</Link></li>
        <li><Link to="/about-me"><span style={{ color: "#FF4081" }}>#</span>about-me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
