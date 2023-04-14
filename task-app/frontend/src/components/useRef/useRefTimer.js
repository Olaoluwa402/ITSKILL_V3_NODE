import React, { useRef, useEffect, useState } from "react";

const UseRefTimer = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  useEffect(() => {
    countRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    //cleanup

    return () => {
      //unsubscribe from set interval event using clearInterval()
      setCount(0);
      clearInterval(countRef.current);
    };
  }, []);

  function clearHandler() {
    console.log("clicked");
    //unsubscribe from set interval event using clearInterval()
    setCount(0);
    clearInterval(countRef.current);
  }
  return (
    <div>
      <h2>Ref count - {count}</h2>
      <button type="button" onClick={clearHandler}>
        Clear
      </button>
    </div>
  );
};

export default UseRefTimer;
