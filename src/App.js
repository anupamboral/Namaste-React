import React, {
  useEffect,
  useState,
  lazy,
  Suspense,
  Provider,
  useContext,
} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

import UserContext from "./utils/UserContext.js";

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

//*Prop drilling:- Sometimes in our File hierarchy there is so much nesting basically that means we have nested components one inside another very deeply and in large scale applications it is very obvious to happen so in these kind of scenario when we have very nested component structure and we want some data at the top level of the hierarchy and also at the bottom level of the hierarchy so that means the top parent needs the same data and very much nested a child component needs the same data so in that condition we have to remember that react has one way flow of data so data flows from the top to bo bas basically from the parent to child then to its child from the top to the bottom and that's why if we have some data at the top level of the hierarchy and we want to access that data at the most nested level of the hierarchy then we have to use the props and pass the data at each level of the hierarchy to maintain the flow of the data ,We have restaurant menu component inside it we have item category component and inside the item category component we have menuItem Component and we have some data in the top level so in the restaurant menu component and we want to access that data in the menu item component As we know react has one way data flow that means to get the data in the menu item component first we have to pass the data through the Item category as prop and then from the item category component we have to pass that data to menu item component Category component is the parent of menu item and category components parent is restaurant menu that's why to get the data in the menu item component we first need to maintain the data flow to get the data at the deepest level of the hierarchy and that is called prop drilling.Because we are drilling the components to access the prop at the deepest level in another words we are passing the props at each level of hierarchy to maintain the data flow and get the data at the deepest level of the hierarchy and this concept of passing the props or drilling the props through each level of the hierarchy of the dom structure is called prop drilling.

//*But sometimes when we have so much nested data And in the in between components we does not even need that prop we are just Passing the prop to send it to the next child.For example we have the data in the restaurant menu component and we need the data in the menu item component so we do not need to use this data in the in between component item category component but as react has only one way data flow that is why to reach to menu item first we need to pass the data to the item category component then only we can pass the data from there to menu item even we do not need to use the data in the item category but we are still passing through it and for one or two level it is ok to do it but when we have so much level of nesting like 10 levels of nesting and in between components does not need the data then it does not make any sense to use prop drilling through every step of the hierarchy to get the data at the deep level of the hierarchy.
//*To solve this problem we have something called react context.

//* and many times in large scaled applications we need some global data which we access anywhere in our webapp no matter how much nested our component is. Now sometimes people think that they will keep some global data at the top level and then they will pass that data through props but it is very foolish to pass any data 10 level deeper using props if there is no need of that data in between components.
//* so the solution of this problem is context which is like an global place where you data is kept and anybody can access it.so no need to do prop drilling. when you are using react context.
//* there are some scenarios when we need this kind of global space where need to put some data which should be accessible from everywhere.like- user credentials of a logged in user,it can be needed in places all over the app.
//* so first of all we can create ,multiple context, basically multiple global spaces for keeping data.
//* so lets create our first react context, where we will keep information of a logged in user.
//* we will create our context file inside our utils folder, as it will keep the information of a logged in user so we will name the file UserContext.js. so let's create the file inside utils folder. and context files names also start with capital letter like react components.
//* to create a context we need to import a function from react library named createContext(). inside it we will pass a object which will keep the data so here inside the object we are gonna put some information which it will hold , as properties and we will set some default value to it. this createContext function call will be assigned as the value of a variable. and at last we need it export it.
//* now to use the context react gives us access to a hook named useContext, we need to import it in our Header.js file  from react as named import because we rae gonna display the information in the navigation. and we also need to import the context `UserContext` we created.
//* now inside our Header component, we will call the hook useContext and assign it as value of a constant , and as this will return a object so we are gonna directly destructure loggedInUser form it, because we are getting the data of the logged in user inside it. and inside the the hook userContext(UserContext) , we need to pass UserContext , which we imported form utils folder so the context we created.
//* like this :-  const {loggedInUser} = useContext(UserContext);
//* ⁡⁣⁢⁣but why are we passing the UserContext inside the hook useContext?⁡
//* ⁡⁢⁣⁣because there can be multiple contexts we can create, and to tell react which context we need to use we have to pass the context name as a argument inside useContext() function.⁡
//* so let's add another nav item and use loggedInItem data(coming from context) there and display it.
//* and we can access this context data in any file in this way.

//* ⁡⁣⁢⁣should we put all of the data in context?⁡
//* no we should only put that kind of in context which can be useful in many places all over the webapp.

//*accessing context inside class based component
//* ⁡⁣⁢⁣we have talked about one way of consuming/using the context data which is by using the useContext() hook , but what if we need to use this context data inside  a class based component .As class based components does'nt have access to hooks. so how can we access the context data inside a class based component?⁡

//*to understand it let's got to a class based component in our project About component , now to use the context data without using the hook, we have to do it using a property named consumer which works like component, so after importing the context file in 'About.js , now we need to go inside the render method where we are returning jsx. now to use the context we need write first the context name which we imported following with the property consumer and we have to write it like a component , now inside the somponent , we have to write a callback function , in this callback function we get access to the data , we can directly destructure it, and inside the callback function we can return any jsx using the context data like this:-
/* <h1>About</h1>

        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return <h1>Hello {loggedInUser}</h1>;
          }}
        </UserContext.Consumer>

        <h2>This is Namaste React</h2>
*/
//* now we know two ways of consuming the context data , one is using the useContext hook second is using consumer property (writing it like a component).

//* ⁡⁣⁢⁣making the navigation bar responsive in header.js(not from this course learnt from youtube link is included below if needed)⁡
//*To make the design responsive for smaller screens we have added a menu icon which will be visible for smaller screens and all of the navigation items will get hidden but when the user will click on the menu icon then all of the navigation links should get displayed and to keep track Of the navigation menu is open or not we have created a state variable named isOpenItIts default state will be false because by default it should be hidden but when the user will click on the menu button then on click event this state variables value will be changed and it will get true,And when it gets true then we have used an operator and as soon as it gets true on click of the menu button we display all of the menu items so the navigation items in a column format for bigger screens we were displaying it in a row format but for responsiveness Small screens we will show all of the navigation items in a column format so we have created a div which will be only displayed when the state variables value gets true which will happen on click event But inside the div if we would create the same navigation items again then it will be duplication of code which is not allowed that's why we have created this  constant named navLinks which is containing all of the navigation items so then we can use same navigation links To display for bigger screens in the row format and also in the smaller screens in the column format and that is how we are dealing with the problem of duplication of code.to know more see this video:-(https://www.youtube.com/watch?v=iq-7qRUYsTI)

//* ⁡⁣⁢⁣changing the data of context from anywhere⁡
//* till now we know we know how to create context using createContext() and how to use using useContext hook and .Consumer property (see about.js) and now we are using the context data in our about.js and also in Header.js and the property loggedInUser Has a default value which is default user but now lets say in this App.js file so in the root file We have some authentication code written and when the user sign up or sign in then we send that data to our server and in response we get some data which contains the username so as we are sending data to our server and getting some response from it so definitely we are gonna do it inside use effect hook Because it should execute after the component is rendered and we already know the reason of using use effect hook but now as when the user do sign in we send some password and his name and in response we get the user name from the server but now we want this received name should be updated in the context so we want to send this data or provide this data to our context and update the context data so basically we want to provide the data to our context named UserContext , from here App.js.but before let's create some fake data inside a useEffect hook in our AppLayout component so we can simulate that we are getting some data from the server. and now we also have to create a variable to save this data we are getting from server (simulated ) . so we are gonna name that state variable UserName. so now we are gonna get that  data in the state variable , now, we need a way to pass or provide this data to the context and also update the loggedInUser property in the context with this data , but how can we do that?
//* - .Provider property - this property will help us to provide this data and update the loggedInUser property in the context, it's very similar to Consumer property we learnt few times ago but it's work is different, so first we do not need to import this property from react because when we created the context we already got access of this property like Consumer property. but we need to import our context file named UserContext. so let's import it. and after importing we need to use this Provide property after the context and like a component and we are gonna put our whole returning jsx (of this AppLayout component) inside this component.like this:-
/*  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, greetingMessage: `Hello` }}
    >
      <div className="app">
        <Header />
        <Outlet />
        </div>
        </UserContext.Provider>
      );
 */
//* but why we are we putting the whole appLayout component inside this </UserContext.Provider> component?
//* because  this component is providing this new data to the context and updating it's properties but it will Provide this data only for those components which are inside it and that's why we are putting the whole AppLayout component inside it. so all of the components get access to the updated context data.
//* what if we only included only the Header component inside this     </UserContext.Provider> component?like below
/*  return (
   
      <div className="app">
//* only header is inside 
         <UserContext.Provider
         value={{ loggedInUser: userName, greetingMessage: `Hello` }}
          >
          <Header />
         </UserContext.Provider>

        <Outlet />
        </div>
        
      );
 */
//* then only the header component could get access to to this new updated data through the context and all of the other components would get the default data we set as default. because in this scenario the new data would be only given to the Header component.
//* so now know we can create multiple contexts , access it anywhere, control where to access updated context and where just need default data.

//* Can we use two context providers at same time? and if we pass different data for both then what will happen ? and is it even possible to do? see below example:-
/*  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, greetingMessage: `Hello` }}
    >
      <div className="app">

      <UserContext.Provider
      value={{ loggedInUser: `krishna`, greetingMessage: `Hi` }}
    >
        <Header />
      </UserContext.Provider>

        <Outlet />
        </div>
        </UserContext.Provider>
      );
 */
//*Yes it is very much possible to use two context providers at same time, In the above example Our whole app layout gsx is inside one context provider to add the value is userName(Anupam) of  loggedInUser But our header component is inside another contact provider where the value of loggedInUser Is Krishna so in this case only inside the header component wherever the context is used it will display Krishna as the value of loggedInUser, But accept the header component anywhere inside our app wherever we use our context the value of loggedInUser will be Anupam Boral.

//*Changing context values from other component
//* Now lets know about some of the other powers of context so right now we are changing the value of the context Using the state variable named userName,But let's say we want to have another input box inside our body component like the search box and we want that whatever we type in that input box that will update the value of the context's loggedInUser property.but loggedInUser property's value is set to userName (state variable). but if we want to change it's value from the Header.js. but then we need to access the setUserName() function in Header.js but how can we access setUserName in Header.js?

//* So like we are updating the value of loggedInUser property here:- <UserContext.Provider value={{ loggedInUser: userName }}> , in the same way we can also pass this function into context, just like we are creating a new property inside the context , and the property is this setUserName() function like this:-
//*<UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
//* so now inside our context this setUserName property will be also available. and as we can access the context any where so noe we can also access this function anywhere through the context, and to access it inside Header.js we just need to import our context file file then using useContext hook we can access the function like this:-
// const { loggedInUser, setUserName } = useContext(UserContext);//* we need to do it inside header component.

//*and now just add the input element and when onChange event happens we will receive the value from the event and the pass that inside our setUserInfo function
//*<input value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}></input>;
//* And that's all so now whatever we will type inside the input element that will be the value of loggedInUser, So wherever this loggedInUser Property is used in whatever component everywhere the value of this property will be whatever we will type inside the input box because on change event we are updating the state variables value which is provided to the context and updating its properties value so even we used this property in any component like in the header or the about section everywhere the value will change when the user will type something in this input box and the more amazing thing is that even we are loading some component using lazy loading like we are loading the grocery component using the lazy loading right now so if we use the loggedInUser Property inside grocery component then also inside the grocery component we will see the updated value of loggedInUser property, And it is amazing because as we are using lazy loading to load the grocery component that means in the initial load we did not have the files of grocery component but in spite of that when we load the grocery component later then also we get the updated value of context. and that is power of react context.
//*So many people in the industry talk about some data management libraries or so called state management libraries like redux But React context Does the same thing for us so it creates a global space where we can store any data we want and react context is so much powerful that you don't even need to use Redux when you are building a small or mid size application because redux will do the same thing basically creating a global space for us where we can put data but if you are building a large scale application then you might need to use a data management tool like redux, But if you are building a small or midsize application then there is no need to import a third party library like redux from npm because we get react context with react already so most of the time we do not even need to import this kind of state management libraries from npm and most of the developers don't know that they don't even need to use redux every time, it is only needed when it is necessary.

const Grocery = lazy(() => import("./components/Groceries.js"));
const AppLayout = () => {
  //* state variable to save user's data coming from api
  const [userName, setUserName] = useState();
  //make an API call send userName and password while log in and in response we are getting the userName as response from server(simulating the condition with some fake data )
  useEffect(() => {
    //*fake data
    const data = {
      userName: "Anupam Boral",
    };
    //*updating the state
    setUserName(data.userName);
  }, []);
  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, greetingMessage: `Hello` }}
    >
      <div className="app ">
        <Header />
        <Outlet />
        {/* <Body /> */}
      </div>
    </UserContext.Provider>
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
