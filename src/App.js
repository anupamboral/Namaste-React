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

//* after building the header section, first we filter the data depending on itemCategory , and got a array out of it named `itemCategories ` and we will now iterate it using map method and for every category we will have a accordion , so first we have to create that `ItemCategory` file which will have the code for every category accordion . and every accordion has a accordion header and a accordion description. And this description section is collapsible so when we click on the header the accordion description will appear and then if you again click on it then it will disappear . And when the description will get opened then we will see all of the items belong to that category So for every item inside the category we will render `MenuItem` component So let's create the file menu item so we can display a menu item for each of the items of a category so we will just loop over the item card array, And then for each item we will display one menu item.
//* now every thing is ready but how do we implement the expand and collapse feature of the accordion?
//*=> below code and explanation
/*  const [showItems, setShowItems] = useState(false);

  const accordianToggle = () => {
    //*implementing toogle functionality using not`!` operator
    setShowItems(!showItems); //* if showItem's current state is false then because of not operator it will be changed to true and if it is true then it will be changed to false
  };
   <button onClick={accordianToggle}>🔽</button>

      <div>
        {showItems &&
          data.card.card.itemCards.map((item) => (
            <MenuItem key={item.card.info.id} item={item} />
          ))}
      </div>
  */
//* so on the 🔽 Button we have attached a onclick handler and inside that we have put a call back function which will be executed when the user will click on this button and inside that function where to write the logic of displaying or hiding accordian description so to save the state of Showing and hiding the items first we will create a state variable named show items and its initial value will be false because initially we want to hide the accordion description and now inside that function which will be called on users click we will change the state of that state variable using setShowItem function so here we want a toggle feature so basically if its value is true then we want to make it false and if it is false then we want to make it true and to do that we will use the not operator and inside the set show item function first we will put the not operator and then show item state variable so because of the not operator when its value is false then on click it will become true and when its value is true then on click it will become false and that's how we are gonna implement the toggle feature but it is still not complete. So now inside the where we are displaying all of the item there we will use the && operator And before the end of later we'll put our show item variable and after it we will put the description component which will contain all of the items and because of the end operator When the value of show item state variable is true then only the after portion of the and operator will be executed and that's how implementing the hiding and displaying functionality of accordion works.show the above code for example .

//*⁡⁣⁢⁣React dev tools chrome extension⁡
//*We already installed the react dev tools chrome extension in our chrome browser but what it does is basically in the developer console it adds 2 new tabs phonics 1 is react component second one is react profiler so react component tab is very important because it shows you the uil layer and the data layer side by side so you will be able to see the virtual dom of the ui layer so all of the components which are already rendered on the ui and also if you click on any of the components then you will be able to also see the data layer of the component and now the second tab which is called profiler it is basically for recording the actions and optimizing your app so if you start recording then it will start basically profiling and it will record all of the steps the user is doing so like the user clicking on a button or going to some other page and so many other steps the user can perform on your website so after you stop the recording and cheque it then you will be able to see all of the actions of the user performed and even what was the time gap of loading any component and how much time the user stayed on any page and many other things so using this profiler you can justify what are the components which are taking so much time to load when your app grows so much bigger.

//* Controlled and uncontrolled components and lifting the state up
//* So right now each of the item category has its own state inside them so every item category component has a show item state variable inside it and we want to implement a feature that if we click on one category then it will be expanded and all of the other categories should be collapsed but as every component of category has its own state that's why it is not possible to do and the solution of this problem is that we shift the state variable show items to its parent which is restaurant menu so basically we want to control this item category child component from its parent component restaurant menu that means this child component will not have the show items state variable instead it will receive show item value as a probe from the parent restaurant menu so lets lift the state up.
//*but before that the previous version of itemCategory function is kept below for future reference
// const ItemCategory = ({ data }) => {
//   console.log(data);

//   const [showItems, setShowItems] = useState(false);//*commented out when lifting the state up to the it's parent RestaurantMenu for building the feature when we click on any category then all other will collapse.see above notes about it.

//   const accordianToggle = () => {

//     //*implementing toogle functionality using not`!` operator
//     setShowItems(!showItems); //* if showItem's current state is false then because of not operator it will be changed to true and if it is true then it will be changed to false

//   };

//   return (
//     <div className="text-white cursor-pointer ">
//       <div
//         onClick={accordianToggle}
//         className="flex justify-between p-4 text-4xl my-4 shadow-md shadow-slate-400"
//       >
//         <div className="font-bold">{data.card.card.title}</div>
//         <span>🔽</span>
//       </div>
//       <div>
//         {showItems
//           ? data.card.card.itemCards.map((item) => (
//               <MenuItem key={item.card.info.id} item={item} />
//             ))
//           : ``}
//       </div>
//     </div>
//   );
// };

//* From this example we can also understand the concept of controlled and uncontrolled components so previously when item category child component has its own state at that time it was an uncontrolled component because its parent component was not controlling its state but when we are lifting the state up and its parent is controlling its state that means we are transferring the control to the parent so now the parent is controlling its child components,That's why all of the child components will become controlled components because they are being controlled by the parent restaurant menu now.

//* Now first to all to lift up the state,We commented out the local state variable and then went to restaurant menu component and inside that where we are mapping all of the item category components using map method there we have created a new prop named showItems,Because we want to pass show items from the parent restaurant card component as we have commented out the state variable here and first we will taste it with true and if we go to the ui then we will see that all of the components itemCategory are visible because we set it true for all itemCategory components We want to control it depending on the index Only using the index it is possible to track which itemCategory is closing and opening so that's why when we are using the map method inside that map methods callback function we have to mention the second parameter which is index,And now the prop we made Named Show items its value will be dependent on the index So first we will create another state variable where we will keep track of the index and the state variables name will be showIndex,And the probe set item's value will be :-showItems={index === showIndex ? true : false};So the first index is coming from the map method and the second one is the state variable we created and the condition is basically saying that if the components index is equal to our state variable then return true either return false and we will keep the state variables default value to zero as we want to keep the first itemCategory Expanded by default but now we want that this show index state variable which is present in the parent component its value should be changed when the user clicks on any of the item category so if he clicks on the second item card then That item category index should be passed inside this state variable so basically change the value of the state variable which will make that card open but to do that as the index will be accessible inside the child because it is only possible to know which category is being clicked inside that category only and from that we can get index but to do that the main problem is we need to control the state variable from the child component so basically we need to pass the control of the parent to the child component which is directly not possible and it is only possible to pass the control of the child to the parent but passing the control from the parent to the child is not possible so how can we do that so as we cannot do it directly we have to do it indirectly so we will create another prop which will be passed inside all item cards like this:- setShowIndex={() => setShowIndex(index)} ,and See closely that we have not called setShowIndex(index) While passing it as the probe instead we passed it inside a callback function and we passed it with the index so that means while mapping all of the item cards we'll get this probe with their own index number and as we have not called the setShowIndex(index) function,Instead passed it inside a callback function that means when we will call it inside the child then only the insider function will get executed So basically setShowIndex(index) Is passed inside the child component but it is not called But it is passed with the index of that component and it will be only called inside the child if we call it there inside the child,So now we have to receive this probe also inside the child and then inside the toggle function we made inside our child component there we just need to call this set show index function,So the feature is now almost complete,Basically at the first the first item category will keep expanded and then when we will click on some other category then the other categories should be collapsed so only one should be opened at a time but one more bug is that what if we want to close or collapse that only one opened category so if only one category is opened and we also want to collapse that and don't want to expand any other category then how is that possible so basically the toggle feature we implemented back how can we do that now so to do that the solution is very similar to what we just did so we just need to create another prop and pass it which will look like this :collapseItem={() => setShowIndex(false)} ;In this probe we are setting Show index value to false,But again we're not directly calling it we're just passing it inside a callback function and we'll call it inside the child component so again we need to receive it and now inside the accordion toggle function inside the child component we just need to use the ternary operator and write the condition that if it is already opened so if any category is already opened then call these collapse item function and if it is not open then call sets show index function which will expand that category like this:-    showItems ? collapseItem() : setShowIndex(); .

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
