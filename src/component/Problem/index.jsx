import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

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

  const useDidMountEffect = (deps) => {
    const didMount = useRef(false); // useRef는 뭘까요?
    // useRef : 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 역할을 함 -> 이게 주 역할은 아님

    useEffect(() => {
      if (didMount.current) setCount((prev) => prev + 1);
      else didMount.current = true;
    }, [deps]);
    // 해당 ref 변수를 이용해 초기값을 false로 두고, 첫 render시에 true로 변경, 이후에 useEffect가 실행되게 하여
    // 첫 render에 useEffect가 먼저 실행되는 것을 막음.
  };

  useDidMountEffect(isClick);
  // plag?

  // 발생 원인 : useEffect 내에 count가 없어서 경고 발생.
  // -> count를 useEffect의 인자로 넘겨줄 경우, isClick 값 변경에 따라 count의 값 변경 발생,
  // -> 이에 useEffect가 이를 감지해 count가 계속 자동으로 올라가기 때문에 count를 인자로 넘겨줄 수 없음.

  // 해결 방법 : count 대신 해당 state의 이전 상태를 저장하고 있는 prev를 활용하여 count를 대체함.
  // -> App.js에 <React.StrictMode> 태그와 같은 경우, 사용자에게 화면을 render해 보여주기 전에
  // -> 미리 render를 해 test를 한 후에 사용자에게 보여주기 때문에 총 2번의 useEffect가 발생하여
  // -> count의 값이 0이 아닌 2로 시작하게 됨.
  // -> 이에 대해 App.js에서 <React.StrictMode>를 제거, 위와 같은 useDidMountEffect 함수를 만들어
  // -> 초기값 0부터 시작하게끔 변경.

  return (
    <ProblemWrapper>
      {count ? count : 0}
      <button onClick={() => setIsClick(!isClick)}>button</button>
    </ProblemWrapper>
  );
};

export default Problem;
