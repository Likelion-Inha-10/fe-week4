import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const CalculatorBox = styled.div`
  position: fixed;
  right: 50px;
  top: 50px;
  margin: 50px;
  padding: 15px;
  width: 400px;
  height: 650px;
  background-color: white;
  border-radius: 55px;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
`;
const CalculatorViewWrap = styled.div`
  box-sizing: border-box;
  width: 390px;
  height: 200px;
  margin: 5px;
  padding-bottom: 15px;
  border-radius: 45px;
  background-color: #e4e4e4;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const CalculatorFormulaBox = styled.div`
  box-sizing: border-box;
  width: 390px;
  height: 35px;
  font-size: 35px;
  color: #181818;
  text-align: right;
  padding-right: 30px;
`;

const CalculatorResultBox = styled.div`
  box-sizing: border-box;
  width: 390px;
  height: 20px;
  font-size: 20px;
  color: #a2a2a2;
  text-align: right;
  padding-right: 35px;
`;

const ButtonWrap = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

// Button Component를 따로 만들지 않았을 경우
/*
const Button = styled.button`
  background-color: #e4e4e4;
  color: black;
  font-size: 33px;
  border: none;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  margin: 5px;
  transition: 0.15s;
  &:hover {
    background-color: #b7b7b7;
    transition: 0.15s;
  }
`;
*/

function Calculator() {
  const [operand, setOperand] = useState("empty");
  const [formula, setFormula] = useState("");
  const [displayFormula, setDisplayFormula] = useState("");
  const [resetButtonState, setResetButtonState] = useState(false);
  const [equalsButtonState, setEqualsButtonState] = useState(false);

  const onClick = (event) => {
    if (event.target.getAttribute("type") === "operand") {
      if (equalsButtonState === true && operand !== "empty") {
        setEqualsButtonState(!equalsButtonState);
        setOperand(event.target.getAttribute("data-for-calculate"));
        setFormula(event.target.getAttribute("data-for-calculate"));
        setDisplayFormula(event.target.getAttribute("data-for-calculate"));
      } else if (operand === "empty") {
        setOperand(event.target.getAttribute("data-for-calculate"));
        setFormula((prev) =>
          String(prev + event.target.getAttribute("data-for-calculate"))
        );
        setDisplayFormula((prev) =>
          String(prev + event.target.getAttribute("data-for-calculate"))
        );
      } else {
        setOperand((prev) =>
          Number(prev + event.target.getAttribute("data-for-calculate"))
        );
        setFormula(
          (prev) => prev + event.target.getAttribute("data-for-calculate")
        );
        setDisplayFormula(
          (prev) => prev + event.target.getAttribute("data-for-calculate")
        );
      }
    } else if (event.target.getAttribute("type") === "operator") {
      if (equalsButtonState === true) {
        setEqualsButtonState(!equalsButtonState);
      }
      setOperand("empty");
      setFormula(
        (prev) => prev + event.target.getAttribute("data-for-calculate")
      );
      setDisplayFormula(
        (prev) => prev + event.target.getAttribute("data-for-display")
      );
    } else if (event.target.getAttribute("type") === "result") {
      let calculateResult = new Function("return " + formula);
      console.log(calculateResult);
      let temp = () => {
        console.log(formula);
        return formula;
      };
      console.log(temp);
      setOperand(calculateResult);
      setDisplayFormula(calculateResult);
      setFormula(calculateResult);
      setEqualsButtonState(true);
    } else if (event.target.getAttribute("type") === "clear") {
      setResetButtonState(!resetButtonState);
    }
  };

  const onReset = () => {
    setOperand("empty");
    setFormula("");
    setDisplayFormula("");
    setEqualsButtonState(false);
  };

  useEffect(() => {
    onReset();
  }, [resetButtonState]);

  // map을 위한 배열
  const buttons = [
    {
      dataForCalculate: 7,
      dataForDisplay: 7,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: 8,
      dataForDisplay: 8,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: 9,
      dataForDisplay: 9,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: "/",
      dataForDisplay: " ÷ ",
      type: "operator",
      onClick: onClick,
    },
    {
      dataForCalculate: 4,
      dataForDisplay: 4,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: 5,
      dataForDisplay: 5,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: 6,
      dataForDisplay: 6,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: "*",
      dataForDisplay: " x ",
      type: "operator",
      onClick: onClick,
    },
    {
      dataForCalculate: 1,
      dataForDisplay: 1,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: 2,
      dataForDisplay: 2,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: 3,
      dataForDisplay: 3,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: "-",
      dataForDisplay: " - ",
      type: "operator",
      onClick: onClick,
    },
    {
      dataForCalculate: "c",
      dataForDisplay: "c",
      type: "clear",
      onClick: onClick,
    },
    {
      dataForCalculate: 0,
      dataForDisplay: 0,
      type: "operand",
      onClick: onClick,
    },
    {
      dataForCalculate: "+",
      dataForDisplay: " + ",
      type: "operator",
      onClick: onClick,
    },
    {
      dataForCalculate: "=",
      dataForDisplay: " = ",
      type: "result",
      onClick: onClick,
    },
  ];

  return (
    <CalculatorBox>
      <CalculatorViewWrap>
        <CalculatorFormulaBox>{displayFormula}</CalculatorFormulaBox>
        <CalculatorResultBox>
          {operand === "empty" ? "" : operand}
        </CalculatorResultBox>
      </CalculatorViewWrap>
      <ButtonWrap>
        {buttons.map((button) => (
          <Button
            dataForCalculate={button.dataForCalculate}
            dataForDisplay={button.dataForDisplay}
            type={button.type}
            onClick={button.onClick}
          />
        ))}
      </ButtonWrap>
    </CalculatorBox>
  );
}

export default Calculator;
