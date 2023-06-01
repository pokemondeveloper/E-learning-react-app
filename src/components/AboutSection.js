import React from "react";
// import images
import homeIntro from "../img/home_intro.jpg";
// Styled
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
// framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>Be educated so that</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              you <span>can change</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>the world.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          An educated mind can teach many. An educated mind is better than empty
          one.
        </p>
        <button>About us</button>
      </Description>
      <Image>
        <img src={homeIntro} alt="man reading a book" />
      </Image>
    </About>
  );
};

// Styled Components

export default AboutSection;
