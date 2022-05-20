import React from "react";
import styled from "styled-components";

const ButtonBox = styled.button`
  background-color: ${(props) =>
    props.type !== "result" ? "#e4e4e4" : "#1b1b1b"};
  color: ${(props) => (props.type !== "result" ? "#2e2e2e" : "white")};
  font-size: 33px;
  border: none;
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

function Button(props) {
  return (
    <ButtonBox
      data-for-calculate={props.dataForCalculate}
      data-for-display={props.dataForDisplay}
      type={props.type}
      onClick={props.onClick}
    >
      {props.dataForDisplay}
    </ButtonBox>
  );
}

export default Button;
