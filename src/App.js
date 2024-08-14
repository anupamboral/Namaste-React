import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

//! Lesson - 11 - data is new oil
//*
//*My notes
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

//* An important part about react applications is that it has mainly two layers one is the ui layer and another one is the data layer so the UI layer is usually static because whatever jsx we write that will be rendered on the ui but on the other hand Data layer management is so much important because this data layer will control the ui layer so whatever states props everything is inside this data layer and it will control the ui layer so if you know how to manage your data better then you can make better performant react applications.

//* ⁡⁣⁢⁣Rebuilding restaurant menu⁡
//* So in the swiggy website if we open any restaurant card and see its menu then we will see that at the top there is some restaurant information like the name and its location and below that there are many kind of categories like recommended ,burgers, pizzas, And many other categories and every category is an accordion so we can expand and collapse the accordion by clicking on it and when we click on any category then all of the items related to that category appear as a list and if we again click on the accordion then it will collapse so basically on toggle it will expand and collapse so let's build the restaurant menu section beautifully using tailwind css.
//*Every accordion has two main parts first one is accordion Header and second one is accordion description the accordion header gets shown all the time and when we click on the accordion then the accordion expands and it shows the description and if we again click on the accordion then the description will collapse and the header will get displayed only.
//* let's go to restaurant menu first and start rebuilding it.
//*but before building the restaurant menu below if have kept the previous version of restaurant menu for future reference as we gonna delete the previous returning jsx part and rebuild it properly , the new version will contain the accordion menu . the previous version is below:-
// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   //* getting data from the custom hook built to fetch the data for restaurant menu
//   const resInfo = useRestaurantMenu(resId);
//   console.log(resInfo);

//   if (resInfo === null) return <Shimmer />;

//   //*Placing the destructuring code  below the if Statement(for Shimmer UI) is important because as we are gonna destructure the needed properties from the data , if we would place it above the if statement then at the first render when the resInfo value is null then our variables will try to get the data from null, and that will throw an error so when the value is null then it should render the Shimmer Ui and that's why we placed the if statement above so the after the return the below lines would not execute, but when the data will arrive after the useEffect hook call then it's value will be filled with the data so then the if statement will not execute and the return will happen at that line, and the below lines execution will continue . and here we have not used ternary operator also because of this reason because we need to do some destructing here. and  this destructuring should only happen after the data arrives, and also because we can't do this destructuring inside the fetchMenu function because as it is inside the useEffect hook, and we mention the second parameter in the UseEffect hook that's why it will execute once in the first render.

//   const { avgRatingString, name, cuisines, costForTwoMessage } =
//     resInfo?.data?.cards[2]?.card?.card?.info;

//   const { itemCards: itemList1, title: title1 } =
//     resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card;

//   // console.log(resInfo?.data.cards[4]?.groupedCard);
//   //* swiggy's data has some inconsistency in property names that's why we had to create below if else statement
//   if (itemList1) {
//     return (
//       <div className="res-menu pl-8 bg-[url('src/imgs/background_image.jpg')] text-yellow-50  h-[50rem] min-h-dvh max-h-full">
//         <h1 className="border-b-[1px_solid_black] text-4xl font-bold">
//           {name}
//         </h1>
//         <p className="text-[1.2rem] mb-4">
//           {cuisines.join(`,`)} <span>{avgRatingString}⭐</span>
//         </p>
//         <h3>{costForTwoMessage}</h3>
//         <ul>
//           <h3 className="mx-2 my-4 text-[1.8rem] font-semibold">{title1}</h3>
//           {itemList1.map((item) => {
//             return (
//               <li className="font-semibold" key={item.card.info.id}>
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
//       <div className=" res-menu pl-8 bg-[url('src/imgs/background_image.jpg')] text-yellow-50  min-h-dvh max-h-full ">
//         <h1 className="border-b-[1px_solid_black] text-4xl font-bold">
//           {name}
//         </h1>
//         <p className="text-[1.2rem] mb-4">
//           {cuisines.join(`,`)} <span className="ml-4">{avgRatingString}⭐</span>
//         </p>
//         <h3>{costForTwoMessage}</h3>
//         <ul>
//           <h3 className="mx-2 my-4 text-[1.8rem] font-semibold">{title2}</h3>
//           {itemList2.map((item) => {
//             return (
//               <li className="font-semibold" key={item.card.info.id}>
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
//* now let's go to RestaurantMenu component file and build it beautifully.

const Grocery = lazy(() => import("./components/Groceries.js"));
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
        path: `/groceries`,
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />{" "}
          </Suspense>
        ),
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
