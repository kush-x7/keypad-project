import React, { useState } from "react";
import "./Display.css";

type displayState = {
  displayValue: string;
  setDisplayValue: (newDisplayValue: string) => void;
};

const Display = ({ displayValue, setDisplayValue }: displayState) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[0-9]*$/)) {
      setDisplayValue(e.target.value);
    }
  };
  return (
    <input
      type="text"
      id="display"
      value={displayValue}
      onChange={handleChange}
    />
  );
};
export default Display;
