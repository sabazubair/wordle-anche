import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); 
  expect(elementWithClassName).toBeInTheDocument();
});


test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".row"); 
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".key"); 
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific id", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified id exists
  const elementWithClassName = container.querySelector("#divider"); 
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".div"); 
  expect(elementWithClassName).toBeInTheDocument();
});
