import { useState } from "react";

const useCounter = (initialValue = 0, value = 1) => {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((prev) => prev + value);
  }

  function decrement() {
    setCount((prev) => prev - value);
  }

  function reset() {
    setCount(initialValue);
  }
  return [count, increment, decrement, reset];
};

export default useCounter;
