import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders the navbar", () => {
  const { container } = render(<App />);

  const elementWithId = container.querySelector("#header-container");
  expect(elementWithId).toBeInTheDocument();
});

test("renders the navbar content", () => {
  const { container } = render(<App />);

  const titleElement = container.querySelector("#header-container");
  expect(titleElement).toHaveTextContent("Wordle-anche!");
});

test("renders the keyboard correctly", () => {
  const { container } = render(<App />);

  const elementWithClassName = container.querySelector(".keyboard-wrapper");
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders the main container", () => {
  const { container } = render(<App />);

  const elementWithId = container.querySelector("#main");
  expect(elementWithId).toBeInTheDocument();
});

test("renders a divider line", () => {
  const { container } = render(<App />);

  const elementWithId = container.querySelector("#divider");
  expect(elementWithId).toBeInTheDocument();
});
