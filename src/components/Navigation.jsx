import "./styles/Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen] = useState(false);

  return (
    <nav className="nav-container">
      <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
