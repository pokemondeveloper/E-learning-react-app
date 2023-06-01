import React from "react";
// import images
import homeIntro2 from "../img/home_intro2.jpg";
// Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const BenefitsSections = () => {
  return (
    <Benefits>
      <Description>
        <h2>High-Quality Learning System</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} alt="a girl in laboratory" />
      </Image>
    </Benefits>
  );
};

const Benefits = styled(About)`
  /* background-color: purple; */
  flex-direction: row-reverse;
  h2 {
    padding-bottom: 5rem;
    color: #30bee1;
  }
  h3 {
    width: 70%;
    padding: 1rem;
    font-weight: 400;
    font-style: italic;
    font-size: 1.4rem;
    background-color: #fff;
    color: black;
    margin-top: 1rem;
    clip-path: polygon(0 25%, 100% 0, 100% 75%, 0% 100%);
    border-left: 4px solid #30bee1;
  }
`;

export default BenefitsSections;
