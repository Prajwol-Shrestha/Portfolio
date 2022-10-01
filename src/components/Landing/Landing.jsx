import React from "react";
import Typewriter from "typewriter-effect";
import { AiOutlineCloudDownload } from 'react-icons/ai'

export default function Landing() {
  return (
    <section className="hero-section">
      <div className="intro">
        <h1 className="heading"> Prajwol Shrestha </h1>
        <div className="title flex">
          I am a
          <Typewriter
          I am a
            options={{
              strings: ["Frontend Developer.", "Python Developer.", "Problem Solver."],
              autoStart: true,
              loop: true,
            }}
          />{" "}
        </div>
          <div className="btn-container">
            <button className="btn"> <AiOutlineCloudDownload /> Resume </button>
            <button className="btn"> Contact </button>
          </div>
      </div>
    </section>
  );
}
