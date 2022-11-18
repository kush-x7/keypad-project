import Button from "../Button/Button";
import "./KeyPad.css";

type displayValue = {
  displayValue: number | string;
  setDisplayValue: (newDisplayValue: number | string) => void;
};

const KeyPad = ({ displayValue, setDisplayValue }: displayValue) => {
  const buttons: Array<string | number> = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "R",
    0,
    "C",
  ];

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    const btn = e.target as HTMLElement;
    const labelInput = document.getElementById("display") as HTMLInputElement;

    if (btn.innerText == "R" || btn.innerText == "C") {
      setDisplayValue(labelInput.value);
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
