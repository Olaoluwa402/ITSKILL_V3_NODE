import React, { useState } from "react";
import useDocTitle from "./useDocTitle";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);
  //custom hook
  useDocTitle(count);

  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default DocTitleOne;
