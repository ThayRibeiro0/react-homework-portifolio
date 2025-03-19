import React from "react";
import "./styles/Resume.css";
import CV from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p>
        Download my{" "}
        <a href={CV} download>
          resume
        </a>
      </p>

      <div className="proficiencies">
        <div className="front-end">
          <h3>Front-end Proficiencies:</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+) </li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>SCSS, Tailwind CSS, Bootstrap </li>
            <li>Vite.js</li>
            <li>Three.js</li>
            <li>Agile/Scrum</li>
            <li>Code Reviews & Git/GitHub</li>
          </ul>
        </div>

        <div className="back-end">
          <h3>Back-end Proficiencies:</h3>
          <ul>
            <li>Node.js & Express.js </li>
            <li>MySQL, SQLite, SQL, MongoDB </li>
            <li>Prisma</li>
            <li>Server & Web APIs</li>
            <li>Docker</li>
            <li>CI/CD</li>
          </ul>
        </div>

        <div className="tools">
          <h3>Additional Skills:</h3>
          <ul>
            <li>Adobe Photoshop</li>
            <li>Figma</li>
            <li>Scratch</li>
            <li>Canva</li>
            <li>C, PHP, Java, Python</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
