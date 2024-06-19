import React from "react";
import "./ButtonPanel.css";
import Button from "../Buttons/Button";

const ButtonPanel: React.FC = () => {
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
        <Button
          key={button}
          onClick={() => console.log(button)}
          label={button}
        />
      ))}
    </div>
  );
};

export default ButtonPanel;
