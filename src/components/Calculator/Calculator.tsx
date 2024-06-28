import React, { useState, useEffect } from "react";
import "./Calculator.css";
import Screen from "../Screen/Screen";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import { calculate } from "../Logic/calculatorLogic";

const Calculator: React.FC = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState("");
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (label: string) => {
    switch (label) {
      case "C":
        clearDisplay();
        break;
      case "+":
      case "x":
      case "-":
      case "/":
      case "%":
        inputOperator(label);
        break;
      case "=":
        calculateResult();
        break;
      case "<-":
        backspace();
        break;
      case "+/-":
        toggleSign();
        break;
      default:
        inputDigit(label);
    }
  };

  // For debugging
  useEffect(() => {
    console.log("Prev value: " + prevValue);
    console.log("Current value: " + currentValue);
  }, [currentValue, prevValue, operator]);

  //Clear formula
  const clearDisplay = () => {
    setCurrentValue("");
    setPrevValue("");
    setOperator("");
    setFormula("");
    setResult(0);
  };

  

  //Toggle Sign
  const toggleSign = () => {
    if (currentValue !== "") {
      setCurrentValue((prev) => {
        const newValue = (parseFloat(prev) * -1).toString();
        setFormula(prevValue + operator + newValue);
        return newValue;
      });
    }
  };

  //Calculate the result
  const calculateResult = () => {
    if (operator && prevValue !== null) {
      let result = calculate(
        parseFloat(prevValue),
        parseFloat(currentValue),
        operator
      );
      setResult(result);
      setCurrentValue("");
      setPrevValue("");
      setOperator("");
    }
  };

  //Operator
  const inputOperator = (nextOperator: string) => {
    if (currentValue === "") return;
    if (prevValue !== "") {
      calculateResult();
    } else {
      setPrevValue(currentValue);
      setCurrentValue("");
      setFormula(currentValue + nextOperator);
    }
    setOperator(nextOperator);
  };

  //Add Input
  const inputDigit = (digit: string) => {
    setCurrentValue((prev) => {
      const newValue = prev === "" ? digit : prev + digit;
      setFormula(prevValue + operator + newValue);
      return newValue;
    });
  };

  const backspace = () => {
    if (currentValue !== "") {
      // Remove the last character from currentValue
      setCurrentValue((prev) => {
        const newValue = prev.slice(0, -1) || ""; // Remove last character or set to '' if empty
        setFormula(prevValue + operator + newValue);
        return newValue;
      });
    } else if (operator !== "") {
      // Remove the operator
      setOperator("");
      setFormula(prevValue);
    } else if (prevValue !== "") {
      // Remove the last character from prevValue
      setPrevValue((prev) => {
        const newValue = prev.slice(0, -1) || ""; // Remove last character or set to '' if empty
        setFormula(newValue);
        return newValue;
      });
    }
  };

  return (
    <div className="frame">
      <Screen formula={prevValue + operator + currentValue} result={result} />
      <ButtonPanel onButtonClick={handleClick} />
    </div>
  );
};

export default Calculator;
