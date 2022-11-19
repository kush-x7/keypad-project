import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./KeyPad.css";

type displayValue = {
  displayValue: string;
  setDisplayValue: (newDisplayValue: string) => void;
};

const KeyPad = ({ displayValue, setDisplayValue }: displayValue) => {
  const [isDisplayEmpty, setIsDisplay] = useState(false);
  const [clearedValue, setClearedValue] = useState<string>("");

  // Step 3 -> To Check whether the display box is empty and enabling clear button as soon some values are input
  useEffect(() => {
    Boolean(displayValue) ? setIsDisplay(true) : setIsDisplay(false);
  }, [displayValue]);

  // Step 4 -> Removing Disable attribute from my Clear button
  // useEffect(() => {
  //   if (isDisplayEmpty) {
  //     document.querySelector(".btn-c")?.removeAttribute("disabled");
  //   } else {
  //     document.querySelector(".btn-c")?.setAttribute("disabled", "true");
  //   }
  // }, [isDisplayEmpty]);

  const buttons: Array<string> = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "R",
    "0",
    "C",
  ];

  // STEP 1 -> Adding values in display

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    const btn = e.target as HTMLElement;
    const labelInput = document.getElementById("display") as HTMLInputElement;

    // STEP 2 -> Not adding the string
    if (btn.innerText === "R") {
      setDisplayValue(clearedValue);
    } else if (btn.innerText === "C") {
      setClearedValue(displayValue);
      setDisplayValue("");
    } else {
      setDisplayValue(labelInput.value + btn.innerText);
    }
  };

  return (
    <div className="keypad">
      {buttons.map((btn) => (
        <Button key={btn} text={btn} handleOnClick={handleOnClick} />
      ))}
    </div>
  );
};

export default KeyPad;
