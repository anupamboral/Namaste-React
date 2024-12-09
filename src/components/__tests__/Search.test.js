import { render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
//*mock fetch function as it is not available in the js dom
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should return Body component with search bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  console.log(searchBtn);
  //*assertion
  expect(searchBtn).toBeInTheDocument();
});
