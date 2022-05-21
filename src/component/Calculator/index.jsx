import { useEffect, useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  width: 370px;
  height: 500px;
  border: 2px black solid;
  margin: 10px;
`;

const ResultWrapper = styled.div`
  width: 300px;
  height: 40px;
  border: 2px #c0c0c0 solid;
  margin: 20px;
  padding: 12px;
  text-align: right;
  font-size: 22px;
`;

const Button = styled.button`
  cursor: pointer;
  height: 80px;
  width: 80px;
  border: 2px #c0c0c0 solid;
  background-color: white;
  font-size: 17px;
  text-align: center;
  padding: 10px;
  margin: ${(props) => props.margin};
  &:hover {
    background-color: lightblue;
  }
`;

const Calculator = () => {
  const [calculateValue, setCalculateValue] = useState("");
  const [display, setDisplay] = useState(false);

  const onReset = () => {
    setCalculateValue("");
  };

  const updateValue = (value) => {
    setCalculateValue(calculateValue + value);
  };

  useEffect(() => {
    if (calculateValue !== "") {
      setCalculateValue(eval(calculateValue.replace("x", "*")));
    }
  }, [display]);

  return (
    <CalculatorWrapper>
      <ResultWrapper>{calculateValue}</ResultWrapper>
      <Button margin="5px 0 0 28px" onClick={() => updateValue("7")}>
        7
      </Button>
      <Button margin="5px 0 0 -2px" onClick={() => updateValue("8")}>
        8
      </Button>
      <Button margin="5px 0 0 -2px" onClick={() => updateValue("9")}>
        9
      </Button>
      <Button margin="5px 0 0 -2px" onClick={() => updateValue("/")}>
        /
      </Button>
      <Button margin="-2px 0 0 28px" onClick={() => updateValue("4")}>
        4
      </Button>
      <Button margin="-2px 0 0 -2px" onClick={() => updateValue("5")}>
        5
      </Button>
      <Button margin="-2px 0 0 -2px" onClick={() => updateValue("6")}>
        6
      </Button>
      <Button margin="-2px 0 0 -2px" onClick={() => updateValue("x")}>
        x
      </Button>
      <Button margin="-2px 0 0 28px" onClick={() => updateValue("1")}>
        1
      </Button>
      <Button margin="-2px 0 0 -2px" onClick={() => updateValue("2")}>
        2
      </Button>
      <Button margin="-2px 0 0 -2px" onClick={() => updateValue("3")}>
        3
      </Button>
      <Button margin="-2px 0 0 -2px" onClick={() => updateValue("-")}>
        -
      </Button>
      <Button margin="-2px 0 0 28px" onClick={onReset}>
        @
      </Button>
      <Button margin="-2px 0 0 -2px" onClick={() => updateValue("0")}>
        0
      </Button>
      <Button margin="-2px 0 0 -2px" onClick={() => updateValue("+")}>
        +
      </Button>
      <Button margin="-2px 0 0 -2px" onClick={() => setDisplay(!display)}>
        =
      </Button>
    </CalculatorWrapper>
  );
};

export default Calculator;
