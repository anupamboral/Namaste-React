import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_RES_MENU_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";
//* mock fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_MENU_DATA);
    },
  });
});
it("should load restaurant menu component and see if the first category has 20 items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(20);
});
it("should load restaurant menu and Header component and after adding item the the cart(0) should update to cart(1)", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });
  //* as the first accordion is already expanded so we will find the add+ button and trigger the click event to add the item to the cart
  const addBtns = screen.getAllByRole("button", { name: "+" }); //* we will get menu btns as every menu item has a add to cart btn.

  fireEvent.click(addBtns[0]); //* we are clicking the first items add btn to add 1 item

  const cartItems = screen.getAllByText("Cart🛒(1)"); //*in the header we have a nav for big screens and also a nav for small screens that's why we have 2 cart() links , so we use getAllByText().
  expect(cartItems[0]).toBeInTheDocument();
});

it("should collapse the the first food category accordion and expand the second food category and add second item from this category", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });
  //* selecting first food category accordion an triggering the click event to collapse it as by default it is expanded initially
  const recommendedAccordion = screen.getByText("Recommended");
  fireEvent.click(recommendedAccordion);

  //* expanding the second accordion
  const secondAccordion = screen.getByText("Burgers & Wraps");
  fireEvent.click(secondAccordion);
  //* checking if it has 20  items
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(20);

  //* adding another item to the cart
  const addBtns = screen.getAllByRole("button", { name: "+" });
  fireEvent.click(addBtns[5]);

  //* assertion to check if the cart has 2 items
  const cartItems = screen.getAllByText("Cart🛒(2)"); //*//*in the header we have a nav for big screens and also a nav for small screens that's why we have 2 cart() links , so we use getAllByText().

  expect(cartItems[0]).toBeInTheDocument();
});

test("should load the cart Page and it should have 2 items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  //* checking number of items in the cart page
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(2);
});
