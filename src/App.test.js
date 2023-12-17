import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test('renders without crashing', () => {
  render(<App />);
});

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test('renders the Wordle-anche! title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Wordle-anche!/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders an hr tag with the id "divider"', () => {
  render(<App />);
  const dividerElement = document.getElementById('divider');
  expect(dividerElement).toBeInTheDocument();
});

test('renders a div with the "board-col" class', () => {
  render(<App />);
  const columnsElements = document.getElementsByClassName('board-col');
  expect(columnsElements.length).toBeGreaterThan(0);
});