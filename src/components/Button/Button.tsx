import "./Button.css";

type ButtonProps = {
  text: string | number;
};

// Approach 2
const Button = ({ text }: ButtonProps) => {
  return <button className={`btn`}>{text}</button>;
};

export default Button;

// Found an new error -> Binding element 'X' implicitly has an 'any' type in react
// referred this article to solve the pb -> https://bobbyhadz.com/blog/react-binding-element-implicitly-has-an-any-type

// Approach 1 to set the object type.
// const Button: React.FunctionComponent<ButtonProps> = ({ text }) => {
