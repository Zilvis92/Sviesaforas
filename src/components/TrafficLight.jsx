import React, { useState, useEffect } from "react";
import './TrafficLight.css';

const colorOrder = ["red", "yellow", "green"];

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [direction, setDirection] = useState("forward");

  const handleNext = () => {
    const currentIndex = colorOrder.indexOf(color);

    let nextIndex;
    if (direction === "forward") {
      nextIndex = currentIndex + 1;
      if (nextIndex >= colorOrder.length) {
        nextIndex = colorOrder.length - 2;
        setDirection("backward");
      }
    } else {
      nextIndex = currentIndex - 1;
      if (nextIndex < 0) {
        nextIndex = 1;
        setDirection("forward");
      }
    }

    setColor(colorOrder[nextIndex]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [color, direction]);
    
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