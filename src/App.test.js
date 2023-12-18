import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test("renders with a specific class name 'columns'", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns");
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name 'row'", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".row");
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name 'key'", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".key");
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name 'keyboard'", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".keyboard");
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name 'keyboard-wrapper'", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".keyboard-wrapper");
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name '.sura'", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".sura");
  expect(elementWithClassName).toBeInTheDocument();
});
