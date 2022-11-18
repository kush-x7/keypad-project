import { render, screen, prettyDOM } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../Button";

describe("Testing for Button", () => {
  it("should be visible on the screen and display the text", async () => {
    render(<Button text={"C"} />);
    const btnElement = screen.getByText("C");
    console.log(prettyDOM(btnElement));

    // console.log(btnElement, "kush");
    // expect(btnElement).toBeInTheDocument();
  });
});
