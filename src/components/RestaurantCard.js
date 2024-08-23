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
      className="res-card border-[1px] border-[solid] border-[black] w-60 h-[25rem] [transition:all_0.5s] text-center rounded-2xl bg-[url('/src/imgs/background2.png')]  text-white font-bold hover:shadow-cyan-600 hover:shadow-xl  hover:scale-[1.01] mb-5 mx-auto"
      style={cardStyles}
    >
      <img
        className="res-logo w-60 p-2 pb-[0.1rem] h-40 rounded-2xl"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name text-[1.6rem]  font-bold">{name}</h3>
      <h4 className="cuisine-details text-[1rem] font-bold">
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
//*⁡⁣⁢⁣Creating a higher order component to add promoted(discount percentages) label tag on restaurantCards⁡(⁡⁣⁢⁣as promoted property was not available in the swiggy's new api data so we are gonna use isOpen property so if the restaurant is opened so we will display this label.⁡ ⁡)
//*So as a conclusion we are gonna create a higher order component inside restaurant card js this component will take the previous normal restaurantCard Component as input and it will modify this component so it will add the promoted level depending on the data and then as the output it will return the enhanced restraint card component with promoted label.
//* so let's build that higher component first which we will name `withPromotedLabel` then we will export it as named export as we already have an default export which is normal restaurantCard component and as we are gonna use it inside body component so we have to import it there.

//* now inside Body.js's body component , we will call this function with passing the argument which is normal RestaurantCard. and save it's returned value inside a constant named Restaurant card promoted.
//*higher order component for promoted label feature(takes an component as input and returns  the functional component after enhancing it like adding some features without changing the previous component )

//* input= normal restaurantCard
//* output(return)= enhanced  restaurantCard with promoted label(discount percentage)
//* and now below where are rendering the normal restaurantCard.js there we have to write a condition to use it. the condition is :-
//* if discount is present then use then use <RestaurantCardPromoted /> else use <RestaurantCard/ >

//* using ternary operator :-   {restaurant.info.aggregatedDiscountInfoV3 ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}

//* and also pass the props resdata="restaurant".
//* but where we will receive this props?
//*=> withPromotedLabel() returning a functional component which is actually a function, we have receive the props in that returning function and as inside returning function we have a child component(we received as input) the <RestaurantCard/> , so finally there we have to pass the props again. like <RestaurantCard {...props}/> so we are spreading all props using spread operator , in this way we passing all of the received props inside the child component <RestaurantCard/>  at once. so the higher order component  will look like:-

// export const withPromotedLabel = (RestaurantCard) => {
//*returned functional component
/*   return (props) => {
    //*destructuring the discounts
   const discountPercentageSubHeader =
      props.resData.info.aggregatedDiscountInfoV3.subHeader;

    const discountPercentageHeader =
      props.resData.info.aggregatedDiscountInfoV3.header;
//* returning the enhanced component with promoted discount label
    return (
      <div className="relative">
        {/* Promoted discount label */
//         <label className="absolute top-0.5 text-yellow-50 bg-cyan-800 m-1 p-1 z-10 rounded-lg ">
//           {`${discountPercentageHeader} ${discountPercentageSubHeader}`}
//         </label>
{
  /** received component  */
}
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };
// }
//* ⁡⁣⁢⁣when we are using spread operator to spread the props  inside <RestaurantCard {...prop} /> , so it is passing all received props into   <RestaurantCard {...prop} /> component. but why are we need to pass the props using spread operator here and not like what we do normally (like this resData="props")? And what is a Pure Function? why higher order components are called pure functions?⁡
//* because Higher order components are pure functions as they receive a component but it does not modify the received component's actual features it just adds some another feature on top of it without modifying the actual component ,so it is just enhancing the component. that's why here we were passing the props using spread operator.

export const withPromotedLabel = (RestaurantCard) => {
  //*returns a component (functional component is just function which returns a piece of jsx)
  //*=> withPromotedLabel() returning a functional component which is actually a function, we have receive the props in that returning function and then as inside returning function we composition the <RestaurantCard/> , so finally there we have to pass the props again. like <RestaurantCard {...props}/>
  //*returned functional component
  return (props) => {
    // console.log(prop);
    //*destructuring the discounts
    const discountPercentageSubHeader =
      props.resData.info.aggregatedDiscountInfoV3.subHeader;

    const discountPercentageHeader =
      props.resData.info.aggregatedDiscountInfoV3.header;

    return (
      <div className="relative">
        {/* Promoted discount label */}
        <label className="absolute top-0.5 text-white font-semibold bg-cyan-800 m-1 p-1 z-10 rounded-lg ">
          {`${discountPercentageHeader} ${discountPercentageSubHeader}`}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
