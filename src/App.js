import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation} from "react-router-dom";
import { motion } from "framer-motion";

import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from "./components/Contact/Contact";

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0,
    transform: 'translateX(-100vw)',
  },
  in: {
    opacity: 1,
    transform: 'translateX(0vw)',

  },
  out: {
    opacity: 0,
    transform: 'translateX(-100vw)',
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: .5,
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
