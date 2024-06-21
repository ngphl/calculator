import React from 'react'
import "./Screen.css"

interface DisplayProps {
    formula:string;
    result: number;
}

const Screen: React.FC<DisplayProps> = ({ formula, result }) => {
  return (
    <div className="screen">
      <div className="formula">{formula}</div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Screen