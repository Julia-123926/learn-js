import React, { useState } from "react";
import Counter from ".";

const CounterContainer = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev - 1);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};

export default CounterContainer;
