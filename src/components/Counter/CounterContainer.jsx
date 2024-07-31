import Counter from ".";

const CounterContainer = ({ value, setValue }) => {
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <div>
      <Counter value={value} increment={increment} decrement={decrement} />
    </div>
  );
};

export default CounterContainer;
