import React from "react";
import "./ButtonPanel.css";
import Button from "../Buttons/Button";

interface ButtonPanelProps {
  onButtonClick: (label:string) => void;
}

const ButtonPanel: React.FC<ButtonPanelProps> = ({onButtonClick}) => {
  const buttons = [
    "C",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "<-",
    "=",
  ];

  return (
    <div className="ButtonPanel">
      {buttons.map((button) => (
        <Button key={button} onClick={() => onButtonClick(button)} label={button}/>
      ))}
    </div>
  );
};

export default ButtonPanel;
