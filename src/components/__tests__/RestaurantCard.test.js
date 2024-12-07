import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";
it("should render restaurant card component with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  //* query
  const restaurantName = screen.getByText("Pizza Hut");
  //*assertion
  expect(restaurantName).toBeInTheDocument();
});
it("should render restaurantCard component with PromotedLabel ", () => {
  const PromotedRestaurant = withPromotedLabel(RestaurantCard); //* it's a higher order component so it takes RestaurantCard as argument and returns the enhanced functional component , and we saved that component inside this promotedRestaurant constant.

  render(<PromotedRestaurant resData={MOCK_DATA} />);

  //* query
  const restaurantLabel = screen.getByText("ITEMS AT ₹99");
  //* assertion
  expect(restaurantLabel).toBeInTheDocument();
});
