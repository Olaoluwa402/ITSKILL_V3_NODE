import useCounter from "./useCounter";

const CounterTwo = () => {
  const [value, plus, minus, reset] = useCounter(2, 2);
  return (
    <div>
      <h2>count - {value}</h2>
      <button onClick={plus}>increment</button>
      <button onClick={minus}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterTwo;
