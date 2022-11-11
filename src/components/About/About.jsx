import React from "react";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <section className="hero-section">
      <div className="scale-up-center container-about">
        <h1 className="heading"> About me </h1>
        <div className="underline"></div>
        <div className="about-container">
          <div className="img-container">
            <img src={avatar} alt="myimage" />
          </div>
          <div className="bio">
            <p className="para">
              I am a self-taught front-end developer. I primarily focus on
              writing clean, and efficient code. I am proficient in
              HTML, CSS, SASS, JavaScript and React JS.
            </p>
            <div className="btn-container">
              <Link to="/contact">
              <button className="btn"> Hire me! </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
