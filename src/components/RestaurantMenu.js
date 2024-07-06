import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//*⁡⁣⁢⁣Displaying restaurant menu data from Swiggy's api⁡
//* let's go to swiggy's website and open the network tab select xhr request and then open a restaurant card, then we will see that while we click on restaurant card at that time browser makes a network call to swiggy's api to request the restaurant menu data , so do it and get the api url. now we just copied a api url for one restaurant which is :- `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=385752&catalog_qa=undefined&submitAction=ENTER` and because of the cors issue we have add "https://richie-cors-proxy.glitch.me/" this url before the swiggy's url to solve the cors issue , it is actually a cors proxy we got from glitch (used in Body.js for restaurant card) and now we can go to our RestaurantMenu.js and inside the component we will write all the code to make the component dynamic. so similaly we did in the restaurantCard component, first will render the Shimmer Ui before making the network call so the user doesn't see the blank page while making the network call, and then once the component is loaded then we have to make the api call to request the data , so as we need to do it after rendering the component that's why we will use UseEffect hook,and while mentioning the arguments we will also mention the second argument as empty array, so then this useEffect can be called only once when the component renders first time, because we would not mention this second argument dependency array then this useEffect hook would be called every time the component re-renders.and we don't want because there is no need to get the data from the api every time it re-renders, we just need do it once.and then to save data we are again gonna use the useState hook , so the default value of the hook will be null first and the as we get the data from the api then we will change the state, and as we know the when ever the state variable will change the it will trigger react's reconciliation algorithm which will re-render the whole component with updated data which we got from the api.
//*and remember whenever we will use map method to iterate items, then we have to provide the key prop, and we can use the id as the value of this key prop.
const RestaurantMenu = () => {
  //*below state variable is named resInfo because it will contain info about a restaurant
  const [resInfo, setResInfo] = useState(null); //default value is null

  //*the second argument is also mentioned which is a empty dependency array,and because of it the useEffect hook will be only called in the first render.
  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(
        `https://richie-cors-proxy.glitch.me/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=407669&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json);
    };
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  //*Placing the destructuring code  below the if Statement(for Shimmer UI) is important because as we are gonna destructure the needed properties from the data , if we would place it above the if statement then at the first render when the resInfo value is null then our variables will try to get the data from null, and that will throw an error so when the value is null then it should render the Shimmer Ui and that's why we placed the if statement above so the after the return the below lines would not execute, but when the data will arrive after the useEffect hook call then it's value will be filled with the data so then the if statement will not execute and the return will happen at that line, and the below lines execution will continue . and here we have not used ternary operator also because of this reason because we need to do some destructing here. and  this destructuring should only happen after the data arrives, and also because we can't do this destructuring inside the fetchMenu function because as it is inside the useEffect hook, and we mention the second parameter in the UseEffect hook that's why it will execute once in the first render.

  const { avgRatingString, name, id, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards: itemList1, title: title1 } =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.categories;
  const { itemCards: itemList2, title: title2 } =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card ||
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.categories;
  [0];
  const { itemCards: itemList3, title: title3 } =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card ||
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.categories[0];

  console.log(resInfo);
  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(`,`)} <span>{avgRatingString}⭐</span>
      </p>
      <h3>{costForTwoMessage}</h3>
      <ul>
        <h3>{title1}</h3>
        {itemList1.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
          );
        })}

        <h3>{title2}</h3>
        {itemList2.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
          );
        })}

        <h3>{title3}</h3>
        {itemList3.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
