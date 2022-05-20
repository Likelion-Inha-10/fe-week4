import { useState } from "react";
import Calculator from "./component/Calculator";
import InputSample from "./component/Input";
import Problem from "./component/Problem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        gdgdgd
      </button>
      <InputSample />
      <Problem />
      <Calculator></Calculator>
    </>
  );
}

export default App;
