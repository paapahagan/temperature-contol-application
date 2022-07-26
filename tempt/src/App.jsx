import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(10);

  return (
    <div className="app-container">
      <div className="temperature-display-conatainers">
        <div className="temperature-display">{temperature}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => setTemperature(temperature + 1)}>+</button>
        <button onClick={() => setTemperature(temperature - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
