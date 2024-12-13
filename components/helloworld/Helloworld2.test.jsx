// src/components/HelloWorld.test.jsx
import { render, screen } from "@testing-library/react";
import HelloWorld2 from "./Helloworld2";

test("renders greeting message with the provided name", () => {
  render(<HelloWorld2 name="John" />);
  const heading = screen.getByRole("heading", { name: /Hello, John4!/i });
  expect(heading).toBeInTheDocument(); // Using jest-dom matcher
});
