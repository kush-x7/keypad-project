import Button from "../Button/Button";
import "./KeyPad.css";

const KeyPad = () => {
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

  return (
    <div className="keypad">
      {buttons.map((btn) => (
        <Button key={btn} text={btn} />
      ))}
    </div>
  );
};

export default KeyPad;
