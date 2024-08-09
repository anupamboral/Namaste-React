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
    <div
      className="res-card border-[1px] border-[solid] border-[black] w-56 h-[24rem] [transition:all_0.5s] text-center rounded-2xl bg-[rgba(41,46,178,0.4)]  text-yellow-50 hover:[box-shadow:10px_10px_2px_1px_rgba(0,_30,_255,_0.244)] hover:scale-[1.01]"
      style={cardStyles}
    >
      <img
        className="res-logo w-[13.5rem] p-2 pb-[0.1rem] h-40 rounded-2xl"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name text-[1.6rem]  font-semibold">{name}</h3>
      <h4 className="cuisine-details text-[1rem] font-semibold">
        {cuisines.join(", ")}
      </h4>
      <h5 className="res-rating m-2 text-[1rem] font-semibold">
        ⭐{avgRating} Rating
      </h5>
      <h5 className="delivery-time m-2 text-[1rem] font-semibold">
        {" "}
        {deliveryTime} minutes delivery
      </h5>
    </div>
  );
};

export default RestaurantCard;
