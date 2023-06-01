import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          e-Learning
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About us</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/courses">Courses</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/courses" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #383e47;
  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: "Silkscreen", cursive;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    display: block;
    padding: 0.2rem;
    margin: 0;
    ul {
      flex-direction: column;
      align-items: center;
    }
    li {
      margin: 0.25rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #30bee1;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
`;

export default Nav;
