import { CDN_URL } from "../utils/config";
const cardStyles = {
  // backgroundColor: "cyan",
};

const RestaurantCard = (prop) => {
  //*to use the data coming from the prop , we need to destructure it first and while destructuring we have to use the same name we used while passing the prop , in this case resData.
  const { resData } = prop;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info; //* ? mark is used is called optional chaining, so if the property exist it will read property and if does not exist then it will return undefined.
  const { deliveryTime } = resData?.info.sla;

  // console.log(resData);
  return (
    <div className="res-card" style={cardStyles}>
      <img
        className="res-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="cuisine-details">{cuisines.join(", ")}</h4>
      <h5 className="res-rating">⭐{avgRating} Rating</h5>
      <h5 className="delivery-time"> {deliveryTime} minutes delivery</h5>
    </div>
  );
};

export default RestaurantCard;
