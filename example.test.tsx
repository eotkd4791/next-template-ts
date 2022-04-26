import { render, screen } from "@testing-library/react";
import Example from "./Example";

describe("test suite", () => {
  test("exam", () => {
    render(<Example />);
    const buttonEl = screen.getByRole<HTMLButtonElement>("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
