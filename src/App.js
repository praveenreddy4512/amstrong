import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    if (number === "") {
      setResult("Please enter a number");
      return;
    }

    const num = parseInt(number);
    const digits = number.split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

    if (sum === num) {
      setResult(`${num} is an Armstrong Number ✅`);
    } else {
      setResult(`${num} is NOT an Armstrong Number ❌`);
    }
  };

  return (
    <div className="container">
      <h1>🔢 Armstrong Number Checker</h1>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={checkArmstrong}>Check</button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;
