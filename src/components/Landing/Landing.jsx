import React from "react";
import Typewriter from "typewriter-effect";
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import resumePdf from '../../assets/Resume.pdf'

export default function Landing() {

  function preview() {
    window.open(`${resumePdf}`, "_blank");
  }

  return (
    <section className="hero-section">
      <div className="intro">
        <h1 class="heading">
          <span class="letter">P</span>
          <span class="letter">r</span>
          <span class="letter">a</span>
          <span class="letter">j</span>
          <span class="letter">w</span>
          <span class="letter">o</span>
          <span class="letter">l</span>
          <span class="letter">&nbsp;</span>
          <span class="letter">&nbsp;</span>
          <span class="letter">S</span>
          <span class="letter">h</span>
          <span class="letter">r</span>
          <span class="letter">e</span>
          <span class="letter">s</span>
          <span class="letter">t</span>
          <span class="letter">h</span>
          <span class="letter">a</span>
        </h1>

        <div className="title flex">
          I am a
          <Typewriter
            I am a
            options={{
              strings: ["Frontend Developer.", "React Developer.", "Problem Solver."],
              autoStart: true,
              loop: true,
              pause: 50
            }}
          />{" "}
        </div>
        <div className="btn-container">
          <button className="btn" onClick={preview} > <AiOutlineCloudDownload /> Resume </button>
          <Link to="/contact">
            <button className="btn"> Contact </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
