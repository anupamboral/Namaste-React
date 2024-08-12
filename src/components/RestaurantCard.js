import { CDN_URL } from "../utils/config";
const cardStyles = {
  // backgroundColor: "cyan",
};

//*Normal RestaurantCard
const RestaurantCard = (prop) => {
  //*to use the data coming from the prop , we need to destructure it first and while destructuring we have to use the same name we used while passing the prop , in this case resData.
  const { resData } = prop;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info; //* ? mark is used is called optional chaining, so if the property exist it will read property and if does not exist then it will return undefined.
  const { deliveryTime } = resData?.info.sla;

  console.log(resData);
  return (
    <div
      className="res-card border-[1px] border-[solid] border-[black] w-56 h-[24rem] [transition:all_0.5s] text-center rounded-2xl bg-[rgba(41,46,178,0.4)]  text-yellow-50 hover:[box-shadow:10px_10px_2px_1px_rgba(0,_30,_255,_0.244)] hover:scale-[1.01] mb-5"
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

//* from Lesson - 11 - data is new oil
//* higher order component :- a higher order component is function which takes a component as input and returns another component as output.So it is like a enhancer/modifier function. It takes an existing component and enhances/modifies it then return it.
//*If we go to Swiggy's website then we will see that on some restaurant cards there is a promoted level on top of the card very similar to sponsor tags or labels we see on many websites so how we can also add these kind of promoted labels on top of our restaurant cards so first of all if we cheque the data and we will see that there is a property named promoted and its value is either false or true so we can use this property from the data to show the promoted label on top of the restaurant cards. Throw inside the restaurant card js file we already have a restraint card component which returns the jsx of a restaurant card and the restaurant card component is basically a function which is returning this jsx now we will create another functional component which will take this normal restraint card component and modifies it to add the promoted level and then it will return a restaurant card with the promoted label.
//*⁡⁣⁢⁣Creating a higher order component to add promoted(open/closed) label tag on restaurantCards⁡(⁡⁣⁢⁣as promoted property was not available in the swiggy's new api data so we are gonna use isOpen property so if the restaurant is opened so we will display this label.⁡ ⁡)
//*So as a conclusion we are gonna create a higher order component inside restaurant card js this component will take the previous normal restaurantCard Component as input and it will modify this component so it will add the promoted level depending on the data and then as the output it will return the enhanced restraint card component with promoted label.
//* so let's build that higher component first which we will name `withPromotedLabel` then we will export it as named export as we already have an default export which is normal restaurantCard component and as we are gonna use it inside body component so we have to import it there.

//* now inside Body.js's body component , we will call this function with passing the argument which is normal RestaurantCard. and save it's returned value inside a constant named Restaurant card promoted.
//*higher order component for promoted label feature(takes an component as input and returns  the functional component after enhancing it like adding some features without changing the previous component )

//* input= normal restaurantCard
//* output(return)= enhanced  restaurantCard with promoted label(open/closed)
//* and now below where are rendering the normal restaurantCard.js there we have to write a condition to use it. the condition is :-
//* if restaurant.info.isOpen is true then use then use <RestaurantCardPromoted /> else use <RestaurantCard/ >

//* using ternary operator :- restaurant.info.isOpen ? <RestaurantCardPromoted resdata="restaurant"/> : <RestaurantCard/ resdata="restaurant">
//* and also pass the props resdata="restaurant".
//* but where we will receive this props?
//*=> withPromotedLabel() returning a functional component which is actually a function, we have receive the props in that returning function and then as inside returning function we composition the <RestaurantCard/> , so finally there we have to pass the props again. like <RestaurantCard {...props}/> so we are spreading all props using spread operator then passing then inside the component at once. so the returned functional compoenent will look like:-
/*  return (prop) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...prop} />
      </div>
    );
  };*/

export const withPromotedLabel = (RestaurantCard) => {
  //*returns a component (functional component is just function which returns a piece of jsx)
  //*=> withPromotedLabel() returning a functional component which is actually a function, we have receive the props in that returning function and then as inside returning function we composition the <RestaurantCard/> , so finally there we have to pass the props again. like <RestaurantCard {...props}/>
  return (prop) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...prop} />
      </div>
    );
  };
};
export default RestaurantCard;
