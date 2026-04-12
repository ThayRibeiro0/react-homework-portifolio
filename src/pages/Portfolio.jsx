import React, { useState } from "react";
import "./styles/Portfolio.css";
import github from "../assets/images/github.png";
import analogcrono from "../assets/images/analogcrono.png";
import countdown from "../assets/images/countdown1.png";
import employeeTracker from "../assets/images/employee_tracker.png";
import myWebsite from "../assets/images/my-new-website.png";
import nodeReadme from "../assets/images/node-readme-generator.png";
import pokemonApp from "../assets/images/pokemon_app.png";
import pyGym from "../assets/images/PyGym.png";
import quizReact from "../assets/images/Quiz-React.png";
import stargazers from "../assets/images/stargazers.png";
import vehicleConsoleApp from "../assets/images/vehicle-console-app.png";
import Costs from "../assets/images/Costs.png";
import calculator from "../assets/images/calculator.png";

const projects = [
  {
    title: "Analog Crono",
    desc: "Interactive digital stopwatch with a responsive and animated interface.",
    problem: "Provides accurate time tracking with a user-friendly experience.",
    tech: "HTML, CSS, JavaScript",
    highlight: "Implemented real-time timing logic with smooth UI animations.",
    img: analogcrono,
    url: "https://github.com/ThayRibeiro0/analogcrono",
    demo: "https://thayribeiro0.github.io/analogcrono/",
  },
  {
    title: "Countdown",
    desc: "Event countdown application with dynamic updates.",
    problem: "Helps users track important upcoming dates in real time.",
    tech: "HTML, CSS, JavaScript",
    highlight: "Handled date/time calculations with live DOM updates.",
    img: countdown,
    url: "https://github.com/ThayRibeiro0/countdown1",
    demo: "https://thayribeiro0.github.io/countdown1/",
  },
  {
    title: "Employee Tracker",
    desc: "Command-line application for managing employee data.",
    problem: "Streamlines organization and access to employee records.",
    tech: "JavaScript, Node.js",
    highlight: "Built full CRUD functionality and business logic via CLI.",
    img: employeeTracker,
    url: "https://github.com/ThayRibeiro0/employee_tracker",
    demo: "https://www.loom.com/share/ce09f4cf457e4614afc130339c3eefb8",
  },
  {
    title: "My Website",
    desc: "Personal portfolio website showcasing projects and skills.",
    problem: "Centralizes professional information and development work.",
    tech: "HTML, CSS, JavaScript",
    highlight: "Designed responsive layout with intuitive navigation.",
    img: myWebsite,
    url: "https://github.com/ThayRibeiro0/my-new-website",
    demo: "https://your-portfolio.com",
  },
  {
    title: "Node README Generator",
    desc: "CLI tool that automatically generates professional README files.",
    problem: "Eliminates repetitive manual documentation work.",
    tech: "Node.js",
    highlight: "Automated file generation through command-line prompts.",
    img: nodeReadme,
    url: "https://github.com/ThayRibeiro0/node-readme-generator",
    demo: "",
  },
  {
    title: "Pokemon App",
    desc: "Web application that consumes the Pokémon API to display data.",
    problem: "Simplifies exploration and visualization of API data.",
    tech: "React, REST API",
    highlight: "Integrated external API with dynamic rendering and state management.",
    img: pokemonApp,
    url: "https://github.com/ThayRibeiro0/pokemon_app",
    demo: "",
  },
  {
    title: "PyGym",
    desc: "Workout management application for tracking fitness routines.",
    problem: "Helps users organize and manage exercise plans.",
    tech: "Python",
    highlight: "Implemented structured logic for workout tracking and control.",
    img: pyGym,
    url: "https://github.com/ThayRibeiro0/pyGym",
    demo: "",
  },
  {
    title: "Quiz React",
    desc: "Interactive quiz application built with React.",
    problem: "Allows users to test knowledge through dynamic questions.",
    tech: "React",
    highlight: "Managed application state and user interactions efficiently.",
    img: quizReact,
    url: "https://github.com/ThayRibeiro0/quiz-react",
    demo: "",
  },
  {
    title: "Stargazers",
    desc: "Web app that visualizes GitHub repository and user data.",
    problem: "Provides insights into repository popularity and activity.",
    tech: "JavaScript, GitHub API",
    highlight: "Fetched and displayed real-time API data with dynamic UI updates.",
    img: stargazers,
    url: "https://github.com/ThayRibeiro0/stargazers",
    demo: "",
  },
  {
    title: "Vehicle Console App",
    desc: "Console-based application for managing vehicle data.",
    problem: "Organizes and processes data via command-line interface.",
    tech: "C#",
    highlight: "Applied object-oriented programming principles for data modeling.",
    img: vehicleConsoleApp,
    url: "https://github.com/ThayRibeiro0/vehicle-console-app",
    demo: "",
  },
  {
    title: "Costs",
    desc: "Financial management app for tracking expenses and budgets.",
    problem: "Helps users manage and monitor financial planning.",
    tech: "React",
    highlight: "Built reusable components and handled state for financial data.",
    img: Costs,
    url: "https://github.com/ThayRibeiro0/costs",
    demo: "",
  },
  {
    title: "Calculator",
    desc: "Basic calculator for real-time mathematical operations.",
    problem: "Provides quick and accurate calculations.",
    tech: "JavaScript",
    highlight: "Implemented event-driven logic for real-time computation.",
    img: calculator,
    url: "https://github.com/ThayRibeiro0/calculator",
    demo: "",
  },
];

const Portfolio = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[index];

  return (
    <section className="portfolio">
      <h2>My Projects</h2>

      <div className="carousel">
        <button onClick={prev} className="nav-btn">◀</button>

        <div className="card">
          {/* 🔥 IMAGEM = LIVE DEMO */}
          <a
            href={project.demo || project.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Check this Live Demo"
          >
            <img src={project.img} alt={project.title} className="card-img" />
          </a>

          <div className="card-body">
            <h3>{project.title}</h3>

            <p><strong>Description:</strong> {project.desc}</p>
            <p><strong>Problem Solved:</strong> 💡 {project.problem}</p>
            <p><strong>Technologies:</strong> ⚙️ {project.tech}</p>
            <p><strong>What I Did:</strong> 🔥 {project.highlight}</p>

            {/* 🐙 GITHUB ICON = REPO */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Check this project"
            > 
              <img src={github} alt="GitHub" className="github" />
              
            </a>
          </div>
        </div>

        <button onClick={next} className="nav-btn">▶</button>
      </div>
    </section>
  );
};

export default Portfolio;