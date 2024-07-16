import React from "react";
import CounterContainer from "../Counter/CounterContainer";

const MenuItem = ({ name }) => {
  return (
    <div>
      {name}
      <CounterContainer />
    </div>
  );
};

export default MenuItem;
