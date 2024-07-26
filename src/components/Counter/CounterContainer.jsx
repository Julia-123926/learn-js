import Counter from ".";
// import { useAuthorize } from "../UserContext";

const CounterContainer = ({ value, setValue }) => {
  // const { value: authStatus } = useAuthorize();
  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <div>
      <Counter value={value} increment={increment} decrement={decrement} />
    </div>
  );
};

export default CounterContainer;
