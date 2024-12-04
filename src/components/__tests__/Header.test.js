import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should loader Header component with Cart", () => {
  //* render method will render the header component inside jsdom. but jsdom doesn't understands redux , but header component is using redux , useSelector hook, but as we are testing header component in isolation that's why we need to provide the redux store here also.
  //*So if we are creating the routing configuration then we can use routerProvider along with createBrowserRouter() with if the configuration is already created but we are testing some component in isolation then we can BrowserRouter component to provide the3 configuration as it  stores all other route components. It uses the HTML5 history API to keep the UI in sync with the URL.
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //* query
  const logInBtn = screen.getByRole("button", { name: "Log In" }); //* As there are multiple buttons so we can specify the name of the button to find the specific button.
  // const logInBtn = screen.getByText("Log In");
  //* assertion
  expect(logInBtn).toBeInTheDocument();
});

test("should loader Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //* query
  const cart = screen.getAllByText(/Cart/); //*so if we use getByText("") then we have to write the whole string perfectly like this getByText("Cart🛒(0)") but if we just want to mention a part of the text like only cart then we can use regex to write it like this:- getByText(/Cart/).

  //* assertion
  expect(cart[0]).toBeInTheDocument(); //* expecting cart[0] because there are two cart buttons thats why we got an array and using it's 0th index.
});

test("should change login button to log out btn", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //* query
  const logInBtn = screen.getByRole("button", { name: "Log In" });

  fireEvent.click(logInBtn); //*imported from react testing library to fire the click event on the log in btn using code

  const logOutBtn = screen.getByRole("button", { name: "Log Out" });
  //* assertion
  expect(logOutBtn).toBeInTheDocument();
});
