import React from "react";
import { motion } from "framer-motion";

import Stats from "./Stats";
import StrengthCards from "./StrengthCards";
import Process from "./Process";
import WaterTech from "../components/WaterTech"
import ExploreTech from "./ExploreTech";
import StrategicPartnership from "./StrategicPartnership";
import Infrastructure from "./Infrastructure";
import Herosection from "./Hero";
import DualFocusSection from "./DualFocusSection";

const sectionVariants = {
  hidden: {
    y: 120,
  },

  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const RevealSection = ({ children }) => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -80px 0px",
      }}
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  return (
    <div>
      <Herosection />

      <RevealSection>
        <Stats />
      </RevealSection>

      <RevealSection>
        <StrengthCards />
      </RevealSection>

      <RevealSection>
        <DualFocusSection />
      </RevealSection>

      <RevealSection>
        <Process />
      </RevealSection>

<WaterTech/>

      <RevealSection>
        <ExploreTech />
      </RevealSection>

      <RevealSection>
        <Infrastructure />
      </RevealSection>

      <RevealSection>
        <StrategicPartnership />
      </RevealSection>
    </div>
  );
};

export default Home;