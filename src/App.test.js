import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component
import fs from 'fs';
import path from 'path';

const htmlPath = path.join(__dirname, "../public/index.html");
const htmlContent = fs.readFileSync(htmlPath, "utf-8");

beforeEach(() => {
  document.body.innerHTML = htmlContent;
});

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test('renders with the correct background color in body', () => {
  render(<App />);
  const bodyElement = document.body;
  expect(bodyElement).toHaveStyle('background-color: rgb\\(250, 196, 209\\)');
});

test('renders with a specific title', () => {
  const titleElement = document.querySelector('title');
  expect(titleElement).toBeInTheDocument();
  expect(titleElement.textContent).toBe('Wordle-anche!');
});

test('renders keyboard is present', () => {
  render(<App />);
  const keyboard = document.querySelector('.keyboard');
  // Check if the element is present
  expect(keyboard).toBeInTheDocument();
});

test('renders with the correct charset', () => {
  render(<App />);
  const charsetMeta = document.querySelector('meta[charset="utf-8"]');
  expect(charsetMeta).toBeInTheDocument();
});