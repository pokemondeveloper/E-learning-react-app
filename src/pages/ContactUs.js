import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Contact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Contact Us</h1>
    </Contact>
  );
};

const Contact = styled(motion.div)`
  h1 {
    color: #30bee1;
  }
  min-height: 100vh;
  padding: 5rem 10rem;
`;

export default ContactUs;
