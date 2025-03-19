import React from "react";
import "./styles/portfolio.css";
import analogcrono from "../assets/images/analogcrono.png";
import countdown from "../assets/images/countdown1.png";
import employeeTracker from "../assets/images/employee_tracker.png";
import github from "../assets/images/github.png";
import myWebsite from "../assets/images/my-new-website.png";
import nodeReadme from "../assets/images/node-readme-generator.png";
import pokemonApp from "../assets/images/pokemon_app.png";
import pyGym from "../assets/images/PyGym.png";
import quizReact from "../assets/images/Quiz-React.png";
import stargazers from "../assets/images/stargazers.png";
import vehicleConsoleApp from "../assets/images/vehicle-console-app.png";
import Costs from "../assets/images/Costs.png";
import calculator from "../assets/images/calculator.png";

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <h2>My Projects</h2>
      <p>Check out some of the projects I've developed below!</p>

      <div className="projects">
        <div className="project-card">
          <img src={analogcrono} alt="Analog Crono" className="project-image" />
          <div className="project-info">
            <h3>Analog Crono</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/analogcrono"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={countdown} alt="Countdown" className="project-image" />
          <div className="project-info">
            <h3>Countdown</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/countdown1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src={employeeTracker}
            alt="Employee Tracker"
            className="project-image"
          />
          <div className="project-info">
            <h3>Employee Tracker</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/employee_tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={myWebsite} alt="My Website" className="project-image" />
          <div className="project-info">
            <h3>My Website</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/my-new-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src={nodeReadme}
            alt="Node README Generator"
            className="project-image"
          />
          <div className="project-info">
            <h3>Node README Generator</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/node-readme-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"              
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={pokemonApp} alt="Pokemon App" className="project-image" />
          <div className="project-info">
            <h3>Pokemon App</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/pokemon_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={pyGym} alt="PyGym" className="project-image" />
          <div className="project-info">
            <h3>PyGym</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/pyGym"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={quizReact} alt="Quiz React" className="project-image" />
          <div className="project-info">
            <h3>Quiz React</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/quiz-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={stargazers} alt="Stargazers" className="project-image" />
          <div className="project-info">
            <h3>Stargazers</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/stargazers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src={vehicleConsoleApp}
            alt="Vehicle Console App"
            className="project-image"
          />
          <div className="project-info">
            <h3>Vehicle Console App</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/vehicle-console-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={Costs} alt="Costs" className="project-image" />
          <div className="project-info">
            <h3>Costs</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/costs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"            
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src={calculator}
            alt="Calculator"
            className="project-image"
          />
          <div className="project-info">
            <h3>Calculator</h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/ThayRibeiro0/calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="github-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
