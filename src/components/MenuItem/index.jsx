import { useState } from "react";
import CounterContainer from "../Counter/CounterContainer";
import { useAuthorize } from "../UserContext";

const MenuItem = ({ name }) => {
  const { value: authStatus } = useAuthorize();
  const [value, setValue] = useState(0);

  return (
    <div>
      {name}
      {authStatus === "signOut" && (
        <CounterContainer value={value} setValue={setValue} />
      )}
    </div>
  );
};

export default MenuItem;
