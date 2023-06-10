import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import resumePdf from '../../assets/Resume.pdf'

export default function Landing() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(!show)
    }, [500])
  }, [])

  function preview() {
    window.open(`${resumePdf}`, "_blank");
  }

  return (
    <section className="hero-section">
      { show && 
        <div className="intro">
          <h1 className="heading">
            <span className="letter">P</span>
            <span className="letter">r</span>
            <span className="letter">a</span>
            <span className="letter">j</span>
            <span className="letter">w</span>
            <span className="letter">o</span>
            <span className="letter">l</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">S</span>
            <span className="letter">h</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
            <span className="letter">s</span>
            <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">a</span>
          </h1>

          <div className="title flex">
            I am a
            <Typewriter
              I am a
              options={{
                strings: ["React Developer.", "Problem Solver."],
                autoStart: true,
                loop: true,
                cursor: '_'
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
      }
    </section>
  );
}
