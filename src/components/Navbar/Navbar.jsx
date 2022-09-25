import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineHome, AiOutlineMail, AiFillGithub} from 'react-icons/ai'
import { BsPerson, BsTools, BsFacebook } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

export default function Navbar() {
  const [ toggleNav, setToggleNav ] = useState(false)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-sm ">
         <div className="container">
         <span className="logo"> PS </span>
         <div className="social-links">
          <span> < AiFillGithub size={20}/> </span>
          <span>  <BsFacebook size={20}/> </span>
         </div>
          <span> <i className={`${toggleNav ? 'fas fa-times' : 'fas fa-bars'}`} onClick={() => setToggleNav(!toggleNav)}></i></span>
         </div>
        </div>
        <ul className={`${!toggleNav ? 'hide menu': 'menu show'}`}>
                <Link to='/'  className='nav-link' > <li> <AiOutlineHome size={20}/> </li></Link>
                <Link to='/projects' className='nav-link' > <li> <GrProjects size={20}/> </li> </Link>
                <Link to='/skills' className='nav-link' > <li> <BsTools size={20}/> </li> </Link>
                <Link to='/about' className='nav-link' > <li> <BsPerson size={20}/> </li>  </Link>
                <Link to='/contact' className='nav-link' > <li> <AiOutlineMail size={20}/>  </li></Link>
                {/* <span className={`${!toggleNav ? 'hide': null}`}> <i className="fas fa-times" onClick={() => setToggleNav(false)}/> </span> */}
        </ul>
      </nav>
      <nav className="navbar-lg"> </nav>
    </>
  );
}
