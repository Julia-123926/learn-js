import { useState } from "react";
import CounterContainer from "../Counter/CounterContainer";

const MenuItem = ({ name }) => {
  const [value, setValue] = useState(0);

  return (
    <div>
      {name}
      <CounterContainer value={value} setValue={setValue} />
    </div>
  );
};

export default MenuItem;
