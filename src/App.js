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
//*Some principles to optimize your code which can make your app faster

//*Single responsibility principle:- it says that each of the components (either functional component or class component) should have only responsibility.example:- if we are creating a component for restaurant menu then it should have only one responsibility to show the menu only.

//*this is a good way of maintaining the code in modular fashion.A lot of developers don't understand the concept of modularity.

//*Modularity:- it means you breakdown you code into small small components so that our code becomes more maintainable and testable and also reusable.And it also helps you to find bugs easily Because if you write too much code in just one file then if you introduce a bug it will very complicated to find that bug but if you divided all of your code into small pieces basically in small components then you can write test cases for every component and it will become very easy to find that bug.And as for every requirement we create a module that's why if we want to use that same component for another place then we can easily do that we have divided all of the components into small pieces and that's why our components are reusable.

//* custom hooks:- Till now we have learnt about some hooks provided to us by react development and hooks are nothing but some utility functions or basically some useful function with some specific use case and till now we have used use effect useState hook , But in this lesson we are gonna make some custom books for us, so basically from a component we will extract some functionality and put that inside a hook so our code become more modular and more readable.

//* Is it really necessary to create a custom hook? It is not a mandatory thing but it is very good to have because it makes your code more readable ,modular,maintainable and testable .

//* ⁡⁣⁢⁣creating a custom hook for Restaurant menu component:-⁡
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
//* Important:-Always try to create a separate file for a separate hook.
//* So as every hook is a helper/utility function , so the best place to create them inside utils folder, so lets create the hook to abstract the functionality of fetch the data from the api. now while creating the file for a hook we always start with the word 'use'(in small letters basically using camelCase) , and the file name should be same as the hook name. In this case, the hook name name will be useRestaurantMenu() , so the file name should be  'useRestaurantMenu.js ' . this `use` keyword helps React to understand that this is a hook.
//* while making a hook , first we should think that what's the contract, so contract means what the hook takes as input and what the hook giving as output, here our useRestaurantMenu(resId) takes the resId(restaurant id) as input while calling the function and it will return the resInfo(restaurant information) as output ,so this is the contract of this hook, so it will get the resId and fetch the Data and return the resInfo back to where it is called from. And also export it because we will use it inside RestaurantMenu.js so we need to import it there.
//* Now we know that we will receive the data resId as the parameter and it will return the resInfo after fetching the data and as usual we will use the use effect hook to fetch the data, Like we do in other components and we have to mention the empty dependency array[] as the second argument while calling the use effect hook because we want to call this hook only once in the initial render. And after fetching the data we will get the json . And now we know that we have to return resInfo , And rest info is basically a local variable inside this function so inside this hook so to save the data we just get from the api we will create a state variable named resInfo and its default state will be null And when we get the data we will update the state using setResInfo. And finally it will returned. So as conclusion at first This function will return null and because of that our restaurant menu function will first display the shimmer ui and then the use effect group will be called and it will fetch the data and update the straight variable so because of the change in state the whole component will be rendered so basically the function will be called again and this time it will return the restaurant information which contains the data we received from the api.

//* So now as we extracted the functionality of fetching the data to a custom hook named useRestaurantMenu(), So we do not even need to maintain the state in this component ,So don't need the useState hook and useEffect hook,We just need to get the race id and pass it as argument while calling the custom hook we made and in return it will give the data we need so now our component is very much lightweight and it is following the one responsibility principle so it has now only one responsibility to display the data.
//*So now our code is working like before and there is no change in the feature but this is a better way of writing code which is more cleaner and maintainable and testable.
//*  a lot of people can write code right a lot of junior developers can build the same thing and a lot of senior developers also can build the same thing but the difference between a junior developer and a senior developer is how you write the code right now if you will write the code in a modular fashion  and a more maintainable fashion , following  single responsibility fashion then your code will be much more good to maintain , when your project grows ,  your code should be clean ,your code should be readable, your code should be lightweight .
//* this is the wisdom , this is the decision that you have to take as a developer according to your wisdom let me tell you honestly that there are no issues if you if you make an api call over here but if you make your api call inside a different hook that makes much more sense and it makes it testable .
//*why I say it is testable? because now If I have to test the fetching data logic I just need to test my useRestaurantMenu() hook suppose if there is a issue in my fetching data logic I know that where I have to make the changes inside this hook . I don't have to like wrap up my head inside restaurantMenu component . because I know that fetching data logic is there in useRestaurantMenu() hook so if there is some issue right there is a bug relating to fetching data I have to go to use restaurant menu if there is some issue with displaying the data I have to come to restaurantMenu so restaurantMenu component now has one single major responsibility that is just displaying the data right fetching the data logic inside our custom hook so that is how we create an own custom hook.

//* ⁡⁣⁢⁣creating another custom hook to check the online status(internet on/off) of the user:⁡
//*In other chatting apps we have seen that when a user is online then a green dot gets shown to tell that he is active so he is Internet connexion i and and when he goes offline then it turns red so it means that his connexion is lost or he turned off the Internet so now we will create a feature like this by building another custom hook to make our understanding of custom hooks better.We already know that we have to create this book inside the util folder and we will name the file useOnlineStatus.js and also the hook name will be same so useOnlineStatus(), And to build this hook first we have to think about the contract so what this function will receive as input and what it will give in return as output so in case of this hook we do not need anything as input from where we will call this hook so there is no input required because using some event listeners provided by window object which browser gives us we can check if the user is online or not.And in return we will return a boolean value so if the user is active we will return true and if he is not active then we will return false and to know the event name we are going to use we can Google online status event listener and we will get the necessary event listener name so let us build the hook.
//*but how many times we need to add the event listener to browser?
//*:-- only once . but how we can add our event listener once? and we can do that using useEffect hook by mentioning the empty dependency array.And the event listeners job is to keep track when the user is online and when the user is offline and keep returning that status to us. so the event listener is window.addEventlistener(`online`,()=>{}),and window.addEventlistener(`offline`,()=>{}).
//* And whenever the status changes we have to return the Boolean value and to save that Boolean value so basically whenever the offline online status changes we can save that status somewhere we will create a state variable and whenever the status will change according to the event listener we will update this state variable and we will name this state variable online status and we will also return the state variable because it is the output of this hook.
//*default value of the state variable is true because when user will open the page we can assume he will be online.

//* And now we can use this custom hook anywhere in our app to display the status so first we will import this hook in our body component and before returning the shimmer ui we will just Write a if else statement ,We have to write it above the simmer ui condition because if it is true then the return will not happen and the below code will get executed to return the shimmer ui or actual data) : -
// if (OnlineStatus === false) return <h1>You are offline. Please check your internet connection</h1>
//*So whenever the user goes offline this message will be displayed in our body component and we can also test that out by stimulating offline condition using our network tab in the developer Console of the browser.

//* We know that when we go to  Other pages then our body component will not be visible but the header component will be visible so let us add another item on the navigation bar which will display the online status so it will become green when the user is online and it will display a red circle when the user gets offline so first lets import this hook on our header component.And now inside the header component first we have to create a constant variable named online status and as its value we will call our useOnlineStatus hook which will return the status after checking the browser Internet connection. And then inside the navigation bar we have to add another list item like this:-
//* <li>Online Status:{onlineStatus ? `🟢` :`🔴`}</li>
//*So here we used the ternary operator so if its value is true then it will show the green sign which means active Internet connection and if the user gets offline so his Internet connection is lost then it will show the red colour dot which means that his Internet connection is lost.
//* Now using the `use` keyword in front of custom hooks name is not mandatory but it is recommended by react developers because if someone uses a linter in their project then the linter will throw a error if you do not use this `use` keyword In front of the hook name and the another reason is if some other person cheques your code and you don't use this use keyword then he will think that it is just a normal  function and not a hook, But if they use keyword is written there then he can easily understand that it is a custom hook and it has its own state and own life cycle and it is written using some react logic, so using useState or useEffect inside the hook.
//* It is the convention in developers world to be specific when we are writing code right it should be readable also so thats why we should try to follow .

//* optimizing large scale applications:- So when we build real world applications which are having so many components for example a 1000 components that makes the file size so much heavy so when we create a large scale application for example makeMyTrip if we go to their website we will see that there are so many components and as we use a bundle like parcel it will bundle all of the modules into just one file so it will bundle all of the javascript files and Just create one javascript file, And when we are working with a large scale application when the bundler Bundle all of the files into just one file and that file contains thousands of components that makes the file size so much heavier and eventually that cause Slow down of the app because of the big file size and that is why we need to know that how we can optimize the large scale applications containing a huge amount of components.
//*  you have to keep this in mind and when you are developing a large scale application you have to break your app down into smaller pieces , this is the possible solution,but can I break my app down into smaller pieces? can I do something that my application will not just a 1 javascript file after bundling but smaller javascript files , so there are two things right either we can bundle or we cannot, should we do bundling? yes of course if suppose we have thousands of components we don't need 1000 files loading into our web page, That's like useless ,  that will be a lot of work for browsers to do , making 1000 calls .... for 1000 files and we do not want to put like 1000 files into one file right both of these solutions are not true, so what we have to do is we will try to make smaller bundles of these files, we will make smaller smaller bundles,this process is known as chunking ,also known as code splitting, also known as dynamic bundling, different words for the same thing __chunking, code splitting ,dynamic bundling ,if your interviewer ever ask you he is talking about the same thing  ,if you will go on the web there are different names for the same thing, basically what they are trying to solve by saying this that you have to chunk your application ,you have to make your application into smaller chunks, you have to do codes splitting ,you have to do bundling in a dynamic way,  `so these are the  same things right` for the same process , to breakdown your app into smaller logical chunks
//* got it let me take example of makemytrip once again
//* What should be there in these smaller bundles so suppose I was doing a system design of makemytrip ,`⁡⁣⁢⁣ I want to do a logical separation of my bundles when I do a logical separation of bundles that means a bundle should have enough code for a feature ⁡`, a bundle should have enough code for a major feature in the website and then we can split our bundles into these logical terms over here in Makemytrip it is very clear that I can make a bundle of components just for my flights, isn't it?, just for my flights I can make a bundle ,just for the cabs and the components of `home stays`, I can just make a bundle for holiday packages ,I can just make a bundle for train components, so there are various ways you can make bundles but over here I can see this options, so this is a good use case , suppose this whole application of thousands of bundles right and suppose there are 10 things over here and each flight has 100 hundred components so that 100 components can form one bundle ,hotels can form one bundle, homestays can form 1 bundle with all the components, so similarly you can logically break your application into smaller smaller applications, so if you will see these are smaller applications within a big application isn't it so this is how you can logically split your website into smaller bundles.so you don't put so much load in a single bundle so that request for the js file  does not become so heavy that it takes a lot of time to get into the browser ,so that is why we do this dynamic bundling ,code splitting, chunking .

//* To understand the concept of chunking let's try to understand it using an example so we are currently trying to make a clone of swiggy and we already know that swiggy has another named instamart For delivering groceries so in our app if we try to replicate that structure this is one separate section for groceries then we can assume that that groceries section will also have so many components like our current version of this swiggy app Has nine components in the components folder and including app.js it has total 10 components so if we add a separate section for groceries then we can assume that it will have another 10 components at least like homepage for groceries contact page for groceries add to cart page for groceries and many others.And now using it we will try to make a separate bundle for groceries and a separate bundle for our main app Basically we will be making a separate Bundle containing all of the components of groceries section to basically understand the process of chunking or code splitting or dynamic bundling.
//*Now first we will make a component for groceries inside our components folder where our other components are existing and as we know that a function component is nothing but a normal javascript function which returns some piece of Jsex now we can assume that these groceries component will contain so many child components relating to groceries like right now our body component has so many components like the restaurant card menu etc and finally we want that all of the files for groceries will come from a different bundle so as we have not applied the concept of code splitting right now so after creating the groceries folder if we go to our browser and and see the network tab then we will see that only 1 javascript is fetched as the bundler bundled all of the files into just one javascript file and inside the javascript file our groceries component will be also present but instead of that we want to make a different bundle which will contain all of the files so basically all of the components related to the groceries.
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
