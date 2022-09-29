import React from "react";
import Typewriter from "typewriter-effect";

export default function Landing() {
  return (
    <section className="hero-section">
      <div className="intro">
        <h1 className="heading"> Prajwol Shrestha </h1>
        <p className="title flex">
          I am a
          <Typewriter
          I am a
            options={{
              strings: ["Frontend Developer.", "Python Developer.", "Problem Solver."],
              autoStart: true,
              loop: true,
            }}
          />{" "}
        </p>
      </div>
    </section>
  );
}
