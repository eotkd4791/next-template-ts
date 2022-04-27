import { render, screen } from "@testing-library/react";
import Example from ".";

describe("test suite", () => {
  test("exam", () => {
    render(<Example />);
    const buttonEl = screen.getByRole<HTMLButtonElement>("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
