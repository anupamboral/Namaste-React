import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
//* to group multiple test cases we can use describe method
describe("test cases for contact us page", () => {
  test("should load contact us component", () => {
    render(<Contact />); //*  this method will render the contact component on to the jsdom.
    //* to access the rendered components we will use the screen object imported from react testing library
    //*querying
    const heading = screen.getByRole("heading"); //* getByRole("heading") this will find all of the heading elements from the rendered contact component. it finds the role like heading, footer, or any other role of elements.
    //*Assertion
    expect(heading).toBeInTheDocument(); //* expecting heading inside the document(screen)
  });

  //* finding multiple elements
  test("should find all the input elements", () => {
    render(<Contact />);

    //* input elements has the role textbox
    const inputBoxes = screen.getAllByRole("textbox"); //* to find multiple elements using role we have to use getAllByRole() method

    // console.log(inputBoxes);//* it will react elements which are basically javascript objects, so don't be surprised to see objects.and yes we can do console log here while writing test cases.

    console.log(inputBoxes.length); //*4

    //* assertion
    expect(inputBoxes.length).not.toBe(3); //* .not is like ! mark , it makes the method opposite . because of not the above assertion means the length should not be 3. as the answer is 4 so it will passed.
  });

  it("should render button", () => {
    render(<Contact />); //* it will render the contact component on the js dom

    //* accessing the button elm which is rendered on the js dom using the screen object
    const sendBtn = screen.getByText(`Send`); //* using getByText() method we can search any element by searching the text written inside the element
    //* assertion
    expect(sendBtn).toBeInTheDocument();
  });

  it("should render email input element", () => {
    render(<Contact />); //* it will render the contact component on the js dom

    //* accessing the email input elm which is rendered on the js dom using the screen object
    const emailInputElm = screen.getByTestId("test1"); //* using getByTestId() method we can search any element by using the data-testid attribute we mentioned in the element, but remember you have to mention the the data-testid attribute in the element you want to test
    //* assertion
    expect(emailInputElm).toBeInTheDocument();
  });
  //*instead of test keyword we can use it keyword also and it both are basically same it is just a naming convention
  it("should render name input element", () => {
    render(<Contact />); //* it will render the contact component on the js dom

    //* accessing the name input element which is rendered on the js dom using the screen object
    const nameInputElm = screen.getByPlaceholderText(`Name`); //* using getByPlaceholderText() method we can search any input element using its placeholder attribute vale.
    //* assertion
    expect(nameInputElm).toBeInTheDocument();
  });
});
