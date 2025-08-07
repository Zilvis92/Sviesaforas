import React, { useState, useEffect } from "react";
import './TrafficLight.css';

const nextColor = {
  red: "yellow",
  yellow: "green",
  green: "red",
};

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const handleNext = () => {
    setColor(nextColor[color]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(prevColor => nextColor[prevColor]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
    
    return (
        <div>
            <h1>Sviesaforas</h1>

            <div className={`bulb red ${color === "red" ? "on" : ""}`}></div>
            <div className={`bulb yellow ${color === "yellow" ? "on" : ""}`}></div>
            <div className={`bulb green ${color === "green" ? "on" : ""}`}></div>

            <button onClick={handleNext}>Kitas signalas</button>
        </div>
    );
}

export default TrafficLight;