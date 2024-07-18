import Counter from ".";

const CounterContainer = ({ value, setValue }) => {
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};

export default CounterContainer;
