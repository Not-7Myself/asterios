import React, { useState } from "react";
import "./Plan.css";

const Plan = () => {
  const leftContent = [
    "Probe Landing",
    "Ionization of minerals into gases",
    "Extraction of minerals",
  ];

  const rightContent = [
    `On landing, the probe first stabilizes the asteroid by stopping its
    rotation, then Astraios initiates its first step by forming a
    dome-like structure around the concentrated mine.`,
    `To compensate for the lack of gravity, and hence having to drop
    the conventional idea of drilling machines, solar-powered lasers
    concentrate light and heat energy from Kepler-186 to create holes,
    ionize the substances on the asteroids into gas, and compress
    them to make sure they’re fit for extraction.`,
    `Dense and light materials are centrifuged, and hence the
    extraction of our valuable elements takes place. Our robots store
    these elements in dedicated compartments, which are later
    collected by us at specified time intervals.`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.target.scrollTop;
    const sectionHeight = event.target.scrollHeight / rightContent.length;
    const index = Math.floor(scrollPosition / sectionHeight);
    setCurrentIndex(index);
  };

  return (
    <div className="page-container">
      <div className="general-info">
        <h1>Extraction Process</h1>
        <p>We at Astraios, aim for further and beyond the stars</p>
      </div>

      <div className="scroll-container">
        <div className="left-content">
          <h2>{leftContent[currentIndex]}</h2>
        </div>
        <div className="right-content" onScroll={handleScroll}>
          {rightContent.map((content, index) => (
            <div key={index} className="section">
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plan;
