import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
`;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;

function InputSample() {
  //이 페이지에서 useState를 단 한번만 사용한다면 선착순 한분에게 커피한잔 사드립니다!
  // 요 위치에 useState 구문이 들어가면 됩니다!
  const [datas, setDatas] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = datas;
  const onChange = (e) => {
    console.log("onchange 실행");
    //console.log(e.target.name);
    //console.log(e.target.value); // e.target.value 가 무엇일까요??
    // 여기에 코드를 작성하여 해결합니다!
    // onChange 함수를 읽히고 이 함수가 사용될때 useState 가 사용되면 되겠죠?
    if (e.target.name === "name") {
      setDatas({
        name: e.target.value,
        nickname: nickname,
      });
    } else {
      setDatas({
        name: name,
        nickname: e.target.value,
      });
    }
    // 이거 말고 다른 방법이 있을텐데....
  };

  const onReset = () => {
    // 여기는 reset 버튼을 눌렀을때 발생하는 함수입니다!!
    setDatas({ name: "", nickname: "" });
  };

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      <ViewWrapper>
        값 : {name === "" ? "이름이 없습니다." : name}:(
        {nickname === "" ? "별명이 없습니다." : nickname})
      </ViewWrapper>
    </div>
  );
}

export default InputSample;
