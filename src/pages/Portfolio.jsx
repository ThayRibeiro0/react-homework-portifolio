import React from "react";
import "./styles/portfolio.css";
import Helmet from "../assets/images/helmet.gif";
import Gihub from "../assets/images/github.png";

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <h2>My Projects</h2>
      <p>Check out some of the projects I've developed below!</p>

      <div className="projects">
        {/* Projeto 1 */}
        <div className="project-card">
          <img src={Helmet} alt="Greek Helmet" className="helmet" />
          <div className="project-info">
            <h3>
              Project1
              <img src={Gihub} alt="Gihub" className="Gihub" />
            </h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/seu-usuario/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a
              href="https://seu-usuario.github.io/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Ver o projeto
            </a>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="project-card">
          <img src={Helmet} alt="Greek Helmet" className="helmet" />
          <div className="project-info">
            <h3>
              Project1
              <img src={Gihub} alt="Gihub" className="Gihub" />
            </h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/seu-usuario/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a
              href="https://seu-usuario.github.io/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Ver o projeto
            </a>
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="project-card">
          <img src={Helmet} alt="Greek Helmet" className="helmet" />
          <div className="project-info">
            <h3>
              Project1
              <img src={Gihub} alt="Gihub" className="Gihub" />
            </h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/seu-usuario/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a
              href="https://seu-usuario.github.io/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Ver o projeto
            </a>
          </div>
        </div>

        {/* Projeto 4 */}
        <div className="project-card">
          <img src={Helmet} alt="Greek Helmet" className="helmet" />
          <div className="project-info">
            <h3>
              Project1
              <img src={Gihub} alt="Gihub" className="Gihub" />
            </h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/seu-usuario/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a
              href="https://seu-usuario.github.io/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Ver o projeto
            </a>
          </div>
        </div>

        {/* Projeto 5 */}
        <div className="project-card">
          <img src={Helmet} alt="Greek Helmet" className="helmet" />
          <div className="project-info">
            <h3>
              Project1
              <img src={Gihub} alt="Gihub" className="Gihub" />
            </h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/seu-usuario/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a
              href="https://seu-usuario.github.io/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Ver o projeto
            </a>
          </div>
        </div>

        {/* Projeto 6 */}
        <div className="project-card">
          <img src={Helmet} alt="Greek Helmet" className="helmet" />
          <div className="project-info">
            <h3>
              Project1
              <img src={Gihub} alt="Gihub" className="Gihub" />
            </h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/seu-usuario/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a
              href="https://seu-usuario.github.io/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Ver o projeto
            </a>
          </div>
        </div>

        {/* Projeto 7 */}
        <div className="project-card">
          <img src={Helmet} alt="Greek Helmet" className="helmet" />
          <div className="project-info">
            <h3>
              Project1
              <img src={Gihub} alt="Gihub" className="Gihub" />
            </h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/seu-usuario/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a
              href="https://seu-usuario.github.io/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Ver o projeto
            </a>
          </div>
        </div>

        {/* Projeto 8 */}
        <div className="project-card">
          <img src={Helmet} alt="Greek Helmet" className="helmet" />
          <div className="project-info">
            <h3>
              Project1
              <img src={Gihub} alt="Gihub" className="Gihub" />
            </h3>
            <p>ThayRibeiro0</p>
            <a
              href="https://github.com/seu-usuario/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            <a
              href="https://seu-usuario.github.io/projeto1"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-link"
            >
              Ver o projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
