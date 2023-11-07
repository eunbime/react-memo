import React, { useEffect, useRef, useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  const [count, setCount] = useState(0);

  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>카운트 예제</h2>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </div>
  );
}

export default App;
