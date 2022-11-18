import "./Display.css";

type displayState = {
  displayValue: number | string;
  setDisplayValue: (newDisplayValue: number | number) => void;
};

const handleChange = () => {};

const Display = ({ displayValue, setDisplayValue }: displayState) => {
  return <input id="display" value={displayValue} onChange={handleChange} />;
};
export default Display;
