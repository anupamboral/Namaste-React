import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("should load contact us component", () => {
  render(<Contact />); //*  this method will render the contact component on to the jsdom.
  //* to access the rendered components we will use the screen object imported from react testing library
  const heading = screen.getByRole("heading"); //* findAllByRole("heading") this will find all of the heading elements from the rendered contact component.

  expect(heading).toBeInTheDocument(); //* expecting heading inside the document(screen)
});
