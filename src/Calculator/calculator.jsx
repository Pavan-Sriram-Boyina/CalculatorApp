import React, { useState } from "react";
import "./calculator.css";

export default function CalculatorApp() {
  const [solution, setSolution] = useState(null);
  const [expression, setExpression] = useState("");
  const [ternary, setTernary] = useState(true);

  function valueOfCalculator(num) {
    setExpression((prevState) => prevState + num);
  }
  function singleValueRemover() {
    let stringValue = [...expression];
    stringValue.pop();
    setExpression(stringValue.join(""));
    console.log(stringValue);
  }
  function removeValues() {
    setExpression("");
    setSolution(null);
    setTernary(true);
  }

  function solutionCalculator() {
    try {
      const result = eval(expression);
      setSolution(result);
      setTernary(false);
    } catch {
      setSolution("Error");
    }
  }

  return (
    <div className="calculator-holder">
      {ternary ? (
        <div className="value-holder">
          <div className="solution-holder">
            <p>Solving:{expression}</p>
          </div>
        </div>
      ) : (
        <div className="value-holder">
          <h3>Solution:{solution}</h3>
        </div>
      )}
      <div className="numbers-holder">
        {[1, 2, 3].map((num) => {
          return (
            <button
              key={num}
              className="number-button"
              onClick={() => valueOfCalculator(num)}
            >
              {num}
            </button>
          );
        })}
      </div>
      <div className="numbers-holder">
        {[4, 5, 6].map((num) => {
          return (
            <button
              key={num}
              className="number-button"
              onClick={() => valueOfCalculator(num)}
            >
              {num}
            </button>
          );
        })}
      </div>
      <div className="numbers-holder">
        {[7, 8, 9].map((num) => {
          return (
            <button
              key={num}
              className="number-button"
              onClick={() => valueOfCalculator(num)}
            >
              {num}
            </button>
          );
        })}
      </div>

      <div>
        {["+", "-", "*", "/"].map((operator) => {
          return (
            <button
              key={operator}
              className="number-symbols"
              onClick={() => valueOfCalculator(operator)}
            >
              {operator}
            </button>
          );
        })}
      </div>
      <div className="solution-container">
        <div>
          <button
            className="number-solution"
            onClick={() => valueOfCalculator(".")}
          >
            .
          </button>
          <button
            className="number-solution"
            onClick={() => singleValueRemover()}
          >
            Delete
          </button>
        </div>
        <div>
          <button
            className="number-solution"
            onClick={() => solutionCalculator()}
          >
            =
          </button>
        </div>
        <div>
          <button className="number-solution" onClick={() => removeValues()}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
