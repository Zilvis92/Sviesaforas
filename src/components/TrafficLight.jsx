import React, { useState } from "react";
import './TrafficLight.css';

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const handleNext = () => {
        const next = {
            red: "yellow",
            yellow: "green",
            green: "red",
        };
        setColor(next[color]);
    };
    
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