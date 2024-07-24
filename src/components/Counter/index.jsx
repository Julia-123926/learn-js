const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <button onClick={increment} disabled={value >= 5}>
        +
      </button>
      {value}
      <button onClick={decrement} disabled={value <= 0}>
        -
      </button>
    </div>
  );
};

export default Counter;
