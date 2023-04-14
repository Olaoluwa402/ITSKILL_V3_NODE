import useCounter from "./useCounter";

const CounterOne = () => {
  const [value, plus, minus, reset] = useCounter(0, 5);

  return (
    <div>
      <h2>count - {value}</h2>
      <button onClick={plus}>increment</button>
      <button onClick={minus}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterOne;
