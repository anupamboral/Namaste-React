import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//! Lesson - 9 - Optimizing our app
//*
//*My notes
//*Some principles to optimise your code which can make your app faster

//*Single responsibility principle:- it says that each of the components (either functional component or class component) should have only responsibility.example:- if we are creating a component for restaurant menu then it should have only one responsibility to show the menu only.

//*this is a good way of maintaining the code in modular fashion.A lot of developers don't understand the concept of modularity.

//*Modularity:- it means you breakdown you code into small small components so that our code becomes more maintainable and testable and also reusable.And it also helps you to find bugs easily Because if you write too much code in just one file then if you introduce a bug it will very complicated to find that bug but if you divided all of your code into small pieces basically in small components then you can write test cases for every component and it will become very easy to find that bug.And as for every requirement we create a module that's why if we want to use that same component for another place then we can easily do that we have divided all of the components into small pieces and that's why our components are reusable.

//* custom hooks:- Till now we have learnt about some hooks provided to us by react development and hooks are nothing but some utility functions or basically some useful function with some specific use case and till now we have used use effect useState hook , But in this lesson we are gonna make some custom books for us, so basically from a component we will extract some functionality and put that inside a hook so our code become more modular and more readable.

//* Is it really necessary to create a custom hook? It is not a mandatory thing but it is very good to have because it makes your code more readable ,modular,maintainable and testable .

//* ⁡⁣⁢⁣creating a custom hook for Restaurant menu component:-⁡
//*before building the custom hook , our restaurantCard component was this(expand it to see):-
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: `/`,
    element: <AppLayout />,
    children: [
      {
        path: `/`,
        element: <Body />,
      },
      {
        path: `/about`,
        element: <About />,
      },
      {
        path: `contact`,
        element: <Contact />,
      },
      {
        path: `/restaurants/:resId`,
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
