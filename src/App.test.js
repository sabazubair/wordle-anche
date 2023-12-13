import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Navbar from "./Navbar"; // Check if the path to the Navbar component is correct
import BoardRow from "./BoardRow";
import Keyboard from './Keyboard';

test("renders with a specific class name", () => {
  const { container } = render(<App />);
  const elementWithClassName = container.querySelector(".columns");
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders Navbar", () => {
  const { getByTestId } = render(<Navbar />);
  const headerContainer = getByTestId("header-container");
  expect(headerContainer).toBeInTheDocument();
});

test('Navbar title is rendered', () => {
  const { getByText } = render(<Navbar />);
  const titleElement = getByText('Wordle-anche!');
  expect(titleElement).toBeInTheDocument();
});

test('renders BoardRow without errors', () => {
  const input = [
    { letter: 'A', color: '#FFFFFF', fontColor: '#000000' },
  ];
  render(<BoardRow input={input} />);
});

test(' Keyboard running without problem', () => {
  render(<Keyboard />);
});


