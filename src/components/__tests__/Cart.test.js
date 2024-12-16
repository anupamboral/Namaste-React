import { act, render } from "@testing-library/react";
import MOCK_RES_MENU_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";

//* mock fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_MENU_DATA);
    },
  });
});
it("should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <RestaurantMenu />
      </BrowserRouter>
    );
  });
});
