import React from "react";
import data from "../../data";

export default function Projects() {
  return (
    <section className="hero-section">
      <div className="container">
        <header>
          <h1 className="heading mt"> Projects </h1>
          <div className="underline"></div>
        </header>
        <div className="tabs-container"></div>
        <div className="grid-container">
          {data[0].projects.map((project, index) => (
            <div
              className="card scale-up-center"
              style={{ 
                backgroundImage: `url(${project.gif})`
              }}
              key={index}
              loading="lazy"
            >
              <div className="overlay">
                <div className="overlay-content">
                  <h3 className="title">
                    {" "}
                    <a href={project.url} target="_blank">
                      {" "}
                      {project.title}{" "}
                    </a>{" "}
                  </h3>
                  <div className="tags-container">
                    {project.tags.map((tag, index) => (
                      <span className="tag" key={index}>
                        {" "}
                        {tag}{" "}
                      </span>
                    ))}
                  </div>
                  <p className="para"> {project.description} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
