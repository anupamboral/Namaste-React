import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import { act } from "@testing-library/react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
//*mock fetch function as it is not available in the js dom
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search restaurant list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  //* checking initially 20 cards are loaded or not
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");

  const searchBtn = screen.getByRole("button", { name: "Search" });
  console.log(searchBtn);

  //* for triggering an event using code(it will trigger the on change event and also set e.target.value="burger"
  fireEvent.change(searchInput, { target: { value: "burger" } });

  //*assertion
  expect(searchBtn).toBeInTheDocument();

  //* for triggering the click event on the search btn
  fireEvent.click(searchBtn);
  //* query
  const cardsAfterSearch = screen.getAllByTestId("resCard"); //* it will returns an array of cards;

  //* assertion
  expect(cardsAfterSearch.length).toBe(7);
});
