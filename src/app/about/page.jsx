import React from "react";
import History from "@/Components/About/History";
import MissionAndVision from "@/Components/About/MissionAndVision";
import ProductiveProcess from "@/Components/About/ProductiveProcess";
import './About.css';


const About = () => {
  return (
    <div className="aboutContainer">
      <History />
      <MissionAndVision />
      <ProductiveProcess />
    </div>
  );
};

export default About;