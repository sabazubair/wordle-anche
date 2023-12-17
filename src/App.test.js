import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

//Test-1

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); 
  expect(elementWithClassName).toBeInTheDocument();
});

//Test-2

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".row"); 
  expect(elementWithClassName).toBeInTheDocument();
});

//Test-3 

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".key"); 
  expect(elementWithClassName).toBeInTheDocument();
});

//Test-4

test("renders with a specific id", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified id exists
  const elementWithId = container.querySelector("#divider"); 
  expect(elementWithId).toBeInTheDocument();
});

//Test-5

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".letter"); 
  expect(elementWithClassName).toBeInTheDocument();
});
