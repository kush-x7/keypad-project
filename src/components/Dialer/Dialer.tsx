import { useState } from "react";
import Display from "../Display/Display";
import KeyPad from "../KeyPad/KeyPad";

const Dialer = () => {
  const [displayValue, setDisplayValue] = useState<number | string>("");

  return (
    <div className="dialer">
      <Display displayValue={displayValue} setDisplayValue={setDisplayValue} />
      <KeyPad displayValue={displayValue} setDisplayValue={setDisplayValue} />
    </div>
  );
};

export default Dialer;
