import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsPerson, BsTools, BsFacebook } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-sm ">
          <div className="container">
            <Link to='/' className="nav-link">
              <div className="logo"> PS </div>
            </Link>
            <div className="social-links">
              <a href="https://github.com/Prajwol-Shrestha" target="_blank" rel="noopener noreferrer" >
                <span>
                  {" "}
                  <AiFillGithub size={20} />{" "}
                </span>
              </a>
              <span>
                {" "}
                <BsFacebook size={20} />{" "}
              </span>
            </div>
            <span>
              {" "}
              <i
                className={`${toggleNav ? "fas fa-times" : "fas fa-bars"}`}
                onClick={() => setToggleNav(!toggleNav)}
              ></i>
            </span>
          </div>
        </div>
        <ul className={`${!toggleNav ? "hide menu" : "menu show"}`}>
          <Link to="/" className="nav-link">
            {" "}
            <li>
              {" "}
              <AiOutlineHome size={20} />{" "}
            </li>
          </Link>
          <Link to="/projects" className="nav-link">
            {" "}
            <li>
              {" "}
              <GrProjects size={20} />{" "}
            </li>{" "}
          </Link>
          <Link to="/skills" className="nav-link">
            {" "}
            <li>
              {" "}
              <BsTools size={20} />{" "}
            </li>{" "}
          </Link>
          <Link to="/about" className="nav-link">
            {" "}
            <li>
              {" "}
              <BsPerson size={20} />{" "}
            </li>{" "}
          </Link>
          <Link to="/contact" className="nav-link">
            {" "}
            <li>
              {" "}
              <AiOutlineMail size={20} />{" "}
            </li>
          </Link>
          {/* <span className={`${!toggleNav ? 'hide': null}`}> <i className="fas fa-times" onClick={() => setToggleNav(false)}/> </span> */}
        </ul>
      </nav>
      <nav className="navbar-lg">
        <Link to='/' className="nav-link">
          <div className="logo"> PS </div>
        </Link>
        <ul className="links">
          <Link to="/" className="nav-link tooltip">
            {" "}
            <li>
              {" "}
              <AiOutlineHome size={20} />
              <span className="tooltiptext para">Home</span>{" "}
            </li>
          </Link>
          <Link to="/projects" className="nav-link tooltip">
            {" "}
            <li>
              {" "}
              <GrProjects size={20} />{" "}
              <span className="tooltiptext para">Projects</span>{" "}
            </li>{" "}
          </Link>
          <Link to="/skills" className="nav-link tooltip">
            {" "}
            <li>
              {" "}
              <BsTools size={20} />
              <span className="tooltiptext para">Skills</span>{" "}
            </li>{" "}
          </Link>
          <Link to="/about" className="nav-link tooltip">
            {" "}
            <li>
              {" "}
              <BsPerson size={20} />{" "}
              <span className="tooltiptext para">About</span>
            </li>{" "}
          </Link>
          <Link to="/contact" className="nav-link tooltip">
            {" "}
            <li>
              {" "}
              <AiOutlineMail size={20} />{" "}
              <span className="tooltiptext para">Contact</span>{" "}
            </li>
          </Link>
        </ul>
        <div className="social-links">
        <a href="https://github.com/Prajwol-Shrestha" target="_blank" rel="noopener noreferrer" >
          <span>
            {" "}
            <AiFillGithub size={20} />{" "}
          </span>
          </a>
            <span>
              {" "}
              <BsFacebook size={20} />{" "}
            </span>
        </div>
      </nav>
    </>
  );
}
