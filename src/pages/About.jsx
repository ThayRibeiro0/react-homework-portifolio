import React from "react";
import "./styles/about.css";

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <img
        src="/src/assets/images/avatar.png"
        alt="avatar"
        className="avatar"
      />
      <p>
        I am a <span className="highlight">Software Engineer</span> and a{" "}
        <span className="highlight">digital warrior</span>, forging scalable and
        high-performance web applications with the precision of a
        battle-hardened strategist. My expertise lies in JavaScript (ES6+),
        TypeScript, React.js, and Node.js, crafting both engaging front-end
        experiences and robust back-end solutions. I navigate through the
        intricate landscape of technology, mastering relational and
        non-relational databases, microservices, Docker, and CI/CD
        pipelines—tools that arm me for any challenge ahead. Much like a warrior
        traversing an enigmatic forest, my career has taken me through diverse
        paths, each shaping my resilience and adaptability. I have walked the
        worlds of law, logistics, customer service, administration, and even
        caregiving, all of which sharpened my ability to solve problems under
        pressure, adapt quickly, and thrive in fast-paced environments. Now, as
        I hone my technical expertise at the UCI Bootcamp, I am refining my
        craft through projects that involve RESTful APIs with Express.js and
        PostgreSQL, front-end applications using React and Vite, and best coding
        practices to build efficient, maintainable systems. I seek new
        challenges where I can wield my technical skills, problem-solving
        mindset, and warrior spirit to craft impactful solutions in the tech
        industry. The journey is long, the path is unknown, but I embrace the
        challenge—one line of code at a time.
      </p>
    </section>
  );
};

export default About;
