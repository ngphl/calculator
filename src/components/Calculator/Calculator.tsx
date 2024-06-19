import React from "react";
import "./Calculator.css";
import Screen from "../Screen/Screen";
import ButtonPanel from "../ButtonPanel/ButtonPanel";

const Calculator: React.FC = () => {
  return (
    <div className="frame">
      <Screen value="2" />
      <ButtonPanel />
    </div>
  );
};

export default Calculator;
