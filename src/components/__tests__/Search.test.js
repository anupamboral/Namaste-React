import { render } from "@testing-library/react";
import Body from "../Body";
import { json } from "react-router-dom";

it("should return Body component with search bar", () => {
  //*mock fetch function as it is not available in the js dom
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(data);
      },
    });
  });

  render(<Body />);
});
