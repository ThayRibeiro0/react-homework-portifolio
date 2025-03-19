import React from "react";
import "./styles/Footer.css";
import Github from "../assets/icons/github-icon.gif";
import LinkedIn from "../assets/icons/linkedin-icon.gif";
import StackOverflow from "../assets/icons/stackoverflow-icon.gif";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="button-container">
        {/* GitHub Button with Icon */}
        <a
          href="https://github.com/ThayRibeiro0"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button github"
        >
          <img
            src={Github}
            alt="GitHub"
            className="social-icon"
          />
        </a>

        {/* LinkedIn Button with Icon */}
        <a
          href="https://www.linkedin.com/in/thays-ribeiro-maher-475b39275/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button linkedin"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="social-icon"
          />
        </a>

        {/* StackOverflow Button with Icon */}
        <a
          href="https://stackoverflow.com/users/29440864/thays-moia-ribeiro"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button stackoverflow"
        >
          <img
            src={StackOverflow}
            alt="StackOverflow"
            className="social-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
