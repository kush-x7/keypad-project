import "./Button.css";

type ButtonProps = {
  text: string | number;
  handleOnClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({ text, handleOnClick }: ButtonProps) => {
  return (
    <button
      disabled={text === "R" || text == "C"}
      onClick={handleOnClick}
      className={`btn ${text === "R" ? "btn-r" : ""} ${
        text === "C" ? "btn-c" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;

// Found an new error -> Binding element 'X' implicitly has an 'any' type in react
// referred this article to solve the pb -> https://bobbyhadz.com/blog/react-binding-element-implicitly-has-an-any-type

// Approach 1 to set the object type.
// const Button: React.FunctionComponent<ButtonProps> = ({ text }) => {

// Approach 2
// const Button = ({ text }: ButtonProps) => {
