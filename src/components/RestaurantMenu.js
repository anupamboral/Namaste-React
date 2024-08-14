// import React, { useEffect, useState } from "react";
// import { MENU_API_URL } from "../utils/config";//*Don't need because of the custom hook we made named useRestaurantMenu() to fetch the data.

import useOnlineStatus from "../utils/useOnlineStatus";
import ItemCategory from "./ItemCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//*⁡⁣⁢⁣Displaying restaurant menu data from Swiggy's api⁡
//* let's go to swiggy's website and open the network tab select xhr request and then open a restaurant card, then we will see that while we click on restaurant card at that time browser makes a network call to swiggy's api to request the restaurant menu data , so do it and get the api url. now we just copied a api url for one restaurant which is :- `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=385752&catalog_qa=undefined&submitAction=ENTER` and because of the cors issue we have add "https://richie-cors-proxy.glitch.me/" this url before the swiggy's url to solve the cors issue , it is actually a cors proxy we got from glitch (used in Body.js for restaurant card) and now we can go to our RestaurantMenu.js and inside the component we will write all the code to make the component dynamic. so similaly we did in the restaurantCard component, first will render the Shimmer Ui before making the network call so the user doesn't see the blank page while making the network call, and then once the component is loaded then we have to make the api call to request the data , so as we need to do it after rendering the component that's why we will use UseEffect hook,and while mentioning the arguments we will also mention the second argument as empty array, so then this useEffect can be called only once when the component renders first time, because we would not mention this second argument dependency array then this useEffect hook would be called every time the component re-renders.and we don't want because there is no need to get the data from the api every time it re-renders, we just need do it once.and then to save data we are again gonna use the useState hook , so the default value of the hook will be null first and the as we get the data from the api then we will change the state, and as we know the when ever the state variable will change the it will trigger react's reconciliation algorithm which will re-render the whole component with updated data which we got from the api.
//*and remember whenever we will use map method to iterate items, then we have to provide the key prop, and we can use the id as the value of this key prop.

//*from 7th lesson
//*⁡⁣⁢⁣making the restaurant menu dynamic⁡
//* now one more important thing is that our api url is :-https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=407669&catalog_qa=undefined&submitAction=ENTER ; and from this we are getting the restaurant menu data in restaurantMenu.js. and this url contains the restaurant id - 407669 ; and the amazing thing is that if we just change this restaurant id and put some other restaurant's id then then this url will load that other restaurant's menu data. So using it we can make our restaurant menu dynamic, so it can load any restaurants menu data.

//* So to get restaurant id dynamically, we have to send it through the route , so when the user clicks on any restaurantCard, any he will be redirected to restaurantMenu , and beside that the route url will send the resId , as we are using dynamic route for restaurant menu , So the dynamic part of the url (example:- /restaurants/:resId -this resId) will help to send the restaurant id through the route url, So that means for every restaurant it will send that restaurant's unique restaurant's id ,which we can use to load any  restaurant's menu. But even we send the id dynamically through route url, but still we need a way to get that id here in restaurantMenu.js from the route url. So basically we need a way to read this id from the url in this file.

//*and to solve this problem we react router dom gives us another function named useParams.
//*⁡⁣⁢⁣useParams⁡:- this hook helps us to get the parameters from the url/route. So sent the resId as a parameter when the user clicked the restaurant component , and now we are receiving the param(the dynamic part of the route/url) through this useParams hook. so when we call this hook then in return it gives us a object which contains the parameters as properties. and we can directly use destructuring to take the param(here resId) and use it.and remember we have to use the same param name which we used while passing this param through route which is resId. so let's  import this hook as named import from react router dom. then inside this RestaurantMenu component we will call this and destructure the `resId` param, and then in the api url we will use this resId to dynamically load any restaurant's menu.and also put the api url in the config file, because we should always this ind of important hard coded data in the config file.and then after importing the MENU_API_URL from the config file in restaurantMenu.js we will concat the MENU_API_URL with resId inside the fetch function, and now we can load any restaurants's menu just by changing the resId param in the url/path.
//*and now depending on the url(resId param of the url/route/path) our resMenu will be loaded which is really amazing.

//! from lesson 9
//*before building the custom hook , our restaurantCard component was this(expand it to see) as we are gonna shift the functionality of fetching the data in to custom hook that's why the previous version's copy is below for reference:-
// const RestaurantMenu = () => {
//   //*below state variable is named resInfo because it will contain info about a restaurant
//   const [resInfo, setResInfo] = useState(null); //default value is null

//   const { resId } = useParams();
//   console.log(resId);
//   //*the second argument is also mentioned which is a empty dependency array,and because of it the useEffect hook will be only called in the first render.
//   useEffect(() => {
//     const fetchMenu = async () => {
//       const data = await fetch(MENU_API_URL + resId);
//       const json = await data.json();
//       console.log(json);
//       setResInfo(json);
//     };
//     fetchMenu();
//   }, []);

//   if (resInfo === null) return <Shimmer />;

//   //*Placing the destructuring code  below the if Statement(for Shimmer UI) is important because as we are gonna destructure the needed properties from the data , if we would place it above the if statement then at the first render when the resInfo value is null then our variables will try to get the data from null, and that will throw an error so when the value is null then it should render the Shimmer Ui and that's why we placed the if statement above so the after the return the below lines would not execute, but when the data will arrive after the useEffect hook call then it's value will be filled with the data so then the if statement will not execute and the return will happen at that line, and the below lines execution will continue . and here we have not used ternary operator also because of this reason because we need to do some destructing here. and  this destructuring should only happen after the data arrives, and also because we can't do this destructuring inside the fetchMenu function because as it is inside the useEffect hook, and we mention the second parameter in the UseEffect hook that's why it will execute once in the first render.

//   const { avgRatingString, name, id, cuisines, costForTwoMessage } =
//     resInfo?.data?.cards[2]?.card?.card?.info;

//   const { itemCards: itemList1, title: title1 } =
//     resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card;

//   console.log(resInfo?.data.cards[4]?.groupedCard);
//   if (itemList1) {
//     return (
//       <div className="res-menu">
//         <h1>{name}</h1>
//         <p>
//           {cuisines.join(`,`)} <span>{avgRatingString}⭐</span>
//         </p>
//         <h3>{costForTwoMessage}</h3>
//         <ul>
//           <h3>{title1}</h3>
//           {itemList1.map((item) => {
//             return (
//               <li key={item.card.info.id}>
//                 {item.card.info.name} - Rs.
//                 {item.card.info.price / 100 ||
//                   item.card.info.defaultPrice / 100}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   } else {
//     //*this is created because of inconsistency in swiggy's api data
//     const { itemCards: itemList2, title: title2 } =
//       resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//         ?.card.categories[0];
//     console.log(
//       resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//         ?.card.categories
//     );
//     return (
//       <div className="res-menu">
//         <h1>{name}</h1>
//         <p>
//           {cuisines.join(`,`)} <span>{avgRatingString}⭐</span>
//         </p>
//         <h3>{costForTwoMessage}</h3>
//         <ul>
//           <h3>{title2}</h3>
//           {itemList2.map((item) => {
//             return (
//               <li key={item.card.info.id}>
//                 {item.card.info.name} - Rs.
//                 {item.card.info.price / 100 ||
//                   item.card.info.defaultPrice / 100}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// };

//*    So right now our RestaurantMenu component has multiple responsibilities which are basically fetching the data maintaining its state and displaying the jsx on the ui, But According to the one responsibility principle this restaurant menu component should have only one responsibility which is to basically display the data on the ui so to do that we can abstract or basically take out all of the other functionalities inside a custom hook so right now the other responsibilities are basically how to fetch the data and maintaining the state using the state variable these are other responsibilities the component is handling so we will try to build a hook named useRestaurantMenu(), This book will handle all of these other responsibilities so the data will be fetched and how the state will be maintained when the data comes we just need to pass the parameter resid which is basically the dynamic parameter different for every restaurant so while calling the hook we will just pass this restaurant id and in return this hook will give us the restaurant data directly so we do not need to Do all of the other things inside this restaurant menu component instead our custom hook will handle all of the other responsibilities and directly give us our data so let's build the hook.So the only responsibility of the restaurant menu component is to get the data and display it and the other responsibilities it had which was how to fetch the data is now abstracted into another custom book named Hughes useRestaurantMenu(resId).
//*Hooks are nothing but utility functions / helper functions. and the best place to create hooks id utils folder. and we already  have this folder.
//* Important:-Always try to create a separate file for every  hook.
//* So as every hook is a helper/utility function , so the best place to create them inside utils folder, so lets create the hook to abstract the functionality of fetch the data from the api. now while creating the file for a hook we always start with the word 'use'(in small letters basically using camelCase) , and the file name should be same as the hook name. In this case, the hook name name will be useRestaurantMenu() , so the file name should be  'useRestaurantMenu.js ' . this `use` keyword helps React to understand that this is a hook.
//* while making a hook , first we should think that what's the contract, so contract means what the hook takes as input and what the hook giving as output, here our useRestaurantMenu(resId) takes the resId(restaurant id) as input while calling the function and it will return the resInfo(restaurant information) as output ,so this is the contract of this hook, so it will get the resId and fetch the Data and return the resInfo back to where it is called from. And also export it because we will use it inside RestaurantMenu.js so we need to import it there.
//* Now we know that we will receive the data resId as the parameter and it will return the resInfo after fetching the data and as usual we will use the use effect hook to fetch the data, Like we do in other components and we have to mention the empty dependency array[] as the second argument while calling the use effect hook because we want to call this hook only once in the initial render. And after fetching the data we will get the json . And now we know that we have to return resInfo , And rest info is basically a local variable inside this function so inside this hook so to save the data we just get from the api we will create a state variable named resInfo and its default state will be null And when we get the data we will update the state using setResInfo. And finally it will returned. So as conclusion at first This function will return null and because of that our restaurant menu function will first display the shimmer ui and then the use effect group will be called and it will fetch the data and update the straight variable so because of the change in state the whole component will be rendered so basically the function will be called again and this time it will return the restaurant information which contains the data we received from the api.

//* So now as we extracted the functionality of fetching the data to a custom hook named useRestaurantMenu(), So we do not even need to maintain the state in this component ,So don't need the useState hook and useEffect hook,We just need to get the race id and pass it as argument while calling the custom hook we made and in return it will give the data we need so now our component is very much lightweight and it is following the one responsibility principle so it has now only one responsibility to display the data.
//*So now our code is working like before and there is no change in the feature but this is a better way of writing code which is more cleaner and maintainable and testable.
//*  a lot of people can write code right a lot of junior developers can build the same thing and a lot of senior developers also can build the same thing but the difference between a junior developer and a senior developer is how you write the code right now if you will write the code in a modular fashion  and a more maintainable fashion , following  single responsibility fashion then your code will be much more good to maintain , when your project grows ,  your code should be clean ,your code should be readable, your code should be lightweight .
//* this is the wisdom , this is the decision that you have to take as a developer according to your wisdom let me tell you honestly that there are no issues if you if you make an api call over here but if you make your api call inside a different hook that makes much more sense and it makes it testable .
//*why I say it is testable? because now If I have to test the fetching data logic I just need to test my useRestaurantMenu() hook suppose if there is a issue in my fetching data logic I know that where I have to make the changes inside this hook . I don't have to like wrap up my head inside restaurantMenu component . because I know that fetching data logic is there in useRestaurantMenu() hook so if there is some issue right there is a bug relating to fetching data I have to go to use restaurant menu if there is some issue with displaying the data I have to come to restaurantMenu so restaurantMenu component now has one single major responsibility that is just displaying the data right fetching the data logic inside our custom hook so that is how we create an own custom hook.

//* creating another custom hook to check the online status(internet on/off) of the user:InIn other chatting apps we have seen that when a user is online then a green dot gets shown to tell that he is active so he is Internet connexion i and and when he goes offline then it turns red so it means that his connexion is lost or he turned off the Internet so now we will create a feature like this by building another custom hook to make our understanding of custom hooks better .We already know that we have to create this book inside the util folder and we will name the file useOnlineStatus.js and also the hook name will be same so useOnlineStatus(), And to build this hook first we have to think about the contract so what this function will receive as input and what it will give in return as output so in case of this hook we do not need anything as input from where we will call this hook so there is no input required because using some event listeners provided by window object which browser gives us we can check if the user is online or not. And in return we will return a boolean value so if the user is active we will return true and if he is not active then we will return false and to know the event name we are going to use we can Google online status event listener and we will get the necessary event listener name so let us build the hook.
//*but how many times we need to add the event listener to browser?
//*:-- only once . but how we can add our event listener once? and we can do that using useEffect hook by mentioning the empty dependency array.And the event listeners job is to keep track when the user is online and when the user is offline and keep returning that status to us. so the event listener is window.addEventlistener(`online`,()=>{}),and window.addEventlistener(`offline`,()=>{}).
//* And whenever the status changes we have to return the Boolean value and to save that Boolean value so basically whenever the offline online status changes we can save that status somewhere we will create a state variable and whenever the status will change according to the event listener we will update this state variable and we will name this state variable online status and we will also return the state variable because it is the output of this hook.
//*default value of the state variable is true because when user will open the page we can assume he will be online.

//* And now we can use this custom hook anywhere in our app to display the status so first we will import this hook in our body component and before returning the shimmer ui we will just Write a if else statement ,We have to write it above the simmer ui condition because if it is true then the return will not happen and the below code will get executed to return the shimmer ui or actual data) : -
// if (OnlineStatus === false) return <h1>You are offline. Please cheack your internet connection</h1>
//*So whenever the user goes offline this message will be displayed in our body component and we can also test that out by stimulating offline condition using our network tab in the developer Console of the browser.

//* We know that when we go to  Other pages then our body component will not be visible but the header component will be visible so let us add another item on the navigation bar which will display the online status so it will become green when the user is online and it will display a red circle when the user gets offline so first lets import this hook on our header component.And now inside the header component first we have to create a constant variable named online status and as its value we will call our useOnlineStatus hook which will return the status after checking the browser Internet connection. And then inside the navigation bar we have to add another list item like this:-
//* <li>Online Status:{onlineStatus ? `🟢` :`🔴`}</li>
//*So here we used the ternary operator so if its value is true then it will show the green sign which means active Internet connection and if the user gets offline so his Internet connection is lost then it will show the red colour dot which means that his Internet connection is lost.

const RestaurantMenu = () => {
  const { resId } = useParams();
  //* getting data from the custom hook built to fetch the data for restaurant menu
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  //* from the resInfo we filtered only the cards belong to itemCategory (not cards for veg or non veg )
  const itemCategories = resInfo?.data?.cards[5]?.groupedCard
    ? resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (card) =>
          card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    : resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (card) =>
          card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
  console.log(itemCategories);

  //*Placing the destructuring code  below the if Statement(for Shimmer UI) is important because as we are gonna destructure the needed properties from the data , if we would place it above the if statement then at the first render when the resInfo value is null then our variables will try to get the data from null, and that will throw an error so when the value is null then it should render the Shimmer Ui and that's why we placed the if statement above so the after the return the below lines would not execute, but when the data will arrive after the useEffect hook call then it's value will be filled with the data so then the if statement will not execute and the return will happen at that line, and the below lines execution will continue . and here we have not used ternary operator also because of this reason because we need to do some destructing here. and  this destructuring should only happen after the data arrives, and also because we can't do this destructuring inside the fetchMenu function because as it is inside the useEffect hook, and we mention the second parameter in the UseEffect hook that's why it will execute once in the first render.

  //*new version of restaurant menu with accordions(previous version of jsx is saved in the notes file for future reference if needed)
  return (
    <div className="restaurant-menu-container bg-[url('src/imgs/background_image.jpg')] min-h-dvh text-gray-50 text-left">
      <div className="max-w-6xl mx-auto  ">
        <div className="shadow-cyan-600 shadow-lg">
          <h2 className="restaurant-name text-5xl pb-4 px-4 font-bold ">
            {resInfo.data.cards[2].card.card.info.name}
          </h2>
          <p className="restaurant-rating pb-8 px-4 border-b-2 border-y-white  ">
            {resInfo.data.cards[2].card.card.info.avgRatingString}(
            {resInfo.data.cards[2].card.card.info.totalRatingsString}) •
            <span className="ml-2">
              {resInfo.data.cards[2].card.card.info.costForTwoMessage}
            </span>
          </p>
        </div>
        <div>
          {itemCategories.map((itemCategoryData) => {
            return (
              <ItemCategory
                key={itemCategoryData.card.card.title}
                data={itemCategoryData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
