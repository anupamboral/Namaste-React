import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import JSDOMEnvironment from "jest-environment-jsdom";
test("should load contact us component", () => {
  render(<Contact />); //*  this method will render the contact component on to the jsdom.
  //* to access the rendered components we will use the screen object imported from react testing library
  const heading = screen.getByRole("heading"); //* getByRole("heading") this will find all of the heading elements from the rendered contact component. it finds the role like heading, footer, or any other role of elements.
  //*Assertion
  expect(heading).toBeInTheDocument(); //* expecting heading inside the document(screen)
});
test("should render button", () => {
  render(<Contact />); //* it will render the contact component on the js dom

  //* accessing the button elm which is rendered on the js dom using the screen object
  const sendBtn = screen.getByText(`Send`); //* using getByText() method we can search any element by searching the text written inside the element
  //* assertion
  expect(sendBtn).toBeInTheDocument();
  JSDOMEnvironment.expect().to;
});

test("should render email input element", () => {
  render(<Contact />); //* it will render the contact component on the js dom

  //* accessing the email input elm which is rendered on the js dom using the screen object
  const emailInputElm = screen.getByTestId("test1"); //* using getByTestId() method we can search any element by using the data-testid attribute we mentioned in the element, but remember you have to mention the the data-testid attribute in the element you want to test
  //* assertion
  expect(emailInputElm).toBeInTheDocument();
});
test("should render name input element", () => {
  render(<Contact />); //* it will render the contact component on the js dom

  //* accessing the name input element which is rendered on the js dom using the screen object
  const nameInputElm = screen.getByPlaceholderText(`Name`); //* using getByPlaceholderText() method we can search any input element using its placeholder attribute vale.
  //* assertion
  expect(nameInputElm).toBeInTheDocument();
});
