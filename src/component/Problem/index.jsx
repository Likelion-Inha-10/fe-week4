import styled from "styled-components";
import { useEffect, useState } from "react";

const ProblemWrapper = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Problem = () => {
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [isClick]);
  /*
  기존 코드의 문제점: useEffect안에서 사용하는 것은 deps에 모두 넣어주어야 하는데, deps에 count가 없다. 
                     이렇게 되면 useEffect 안의 함수가 실행될 때 최신 상태를 가리키지 않는다고 한다.
  해결 방법: setCount의 return 값인 count을 prev라는 변수에 저장하고, arrow function을 통해 이 변수가 항상 새로운 상태를 받아들이도록 한다.
  */

  return (
    <ProblemWrapper>
      {count ? count : 0}
      <button onClick={() => setIsClick(!isClick)}>button</button>
    </ProblemWrapper>
  );
};

export default Problem;
