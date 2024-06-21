export const calculate = (
  prevValue: number,
  currentValue: number,
  operator: string
): number => {
  switch (operator) {
    case "+":
      return prevValue + currentValue;
    case "-":
      return prevValue - currentValue;
    case "x":
      return prevValue * currentValue;
    case "/":
      return prevValue / currentValue;
    case "%":
      return prevValue % currentValue;
    default:
      return currentValue;
  }
};
