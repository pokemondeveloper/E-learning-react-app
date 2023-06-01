import React from "react";
// import components
import AboutSection from "../components/AboutSection";
import BenefitsSections from "../components/BenefitsSection";
import FaqSection from "../components/FaqSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <BenefitsSections />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
