import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import react from "../img/react-redux.png";
import soon from "../img/soon.png";
import js from "../img/js.png";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Courses = () => {
  return (
    <StyledCourses
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Course>
        <h2>Interaktiv React va Redux</h2>
        <div className="line"></div>
        <Link to="/courses/react">
          <img src={react} alt="react-redux" />
        </Link>
      </Course>
      <Course>
        <h2>Tez Kunda</h2>
        <div className="line"></div>
        <Link to="/courses/soon">
          <img src={soon} alt="soon" />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv JavaScript</h2>
        <div className="line"></div>
        <Link to="/courses/javascript">
          <img src={js} alt="js" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  /* overflow: hidden; */
  h2 {
    padding: 1rem 0rem;
    color: #30bee1;
    text-transform: uppercase;
  }
`;
const Course = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Courses;
