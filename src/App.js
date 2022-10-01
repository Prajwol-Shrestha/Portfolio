import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  Navigate,
} from "react-router-dom";
import { motion } from "framer-motion";

import Landing from "./components/Landing/Landing";

import Navbar from "./components/Navbar/Navbar";
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
    transform: 'translateX(-100vh)',
    opacity: 0,
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
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
