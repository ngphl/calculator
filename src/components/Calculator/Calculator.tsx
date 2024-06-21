import React, { useState, useEffect } from "react";
import "./Calculator.css";
import Screen from "../Screen/Screen";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import { calculate } from "../Logic/calculatorLogic";

const Calculator: React.FC = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState("");
  const [display, setDisplay] = useState("");

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

  //Clear Display
  const clearDisplay = () => {
    setCurrentValue("");
    setPrevValue("");
    setOperator("");
    setDisplay("");
  };

  //Toggle Sign
  const toggleSign = () => {
    setCurrentValue((prev) => {
      const newValue = (parseFloat(prev) * -1).toString();
      setDisplay(prevValue + operator + newValue);
      return newValue;
    });
  };

  //Calculate the result
  const calculateResult = () => {
    if (operator && prevValue !== null) {
      let result = calculate(
        parseFloat(prevValue),
        parseFloat(currentValue),
        operator
      );
      setDisplay(result.toString());
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
      setDisplay(currentValue + nextOperator);
    }
    setOperator(nextOperator);
  };

  //Add Input
  const inputDigit = (digit: string) => {
    setCurrentValue((prev) => {
      const newValue = prev === "" ? digit : prev + digit;
      setDisplay((prevDisplay) => prevValue + operator + newValue);
      return newValue;
    });
  };

  const backspace = () => {
    if (currentValue !== "") {
      // Remove the last character from currentValue
      setCurrentValue((prev) => {
        const newValue = prev.slice(0, -1) || ""; // Remove last character or set to '' if empty
        setDisplay(prevValue + operator + newValue);
        return newValue;
      });
    } else if (operator !== "") {
      // Remove the operator
      setOperator("");
      setDisplay(prevValue);
    } else if (prevValue !== "") {
      // Remove the last character from prevValue
      setPrevValue((prev) => {
        const newValue = prev.slice(0, -1) || ""; // Remove last character or set to '' if empty
        setDisplay(newValue);
        return newValue;
      });
    }
  };

  return (
    <div className="frame">
      <Screen value={display} />
      <ButtonPanel onButtonClick={handleClick} />
    </div>
  );
};

export default Calculator;
