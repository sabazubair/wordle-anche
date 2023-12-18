import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument()

});

//Test 1
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".header"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument()

});

//Test 2
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".letter"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument()
});

//Test 3
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".keyboard-wrapper"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument()

});

//Test 4
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".row"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument()

});

//Test 5
test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".keyboard"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument()

});
