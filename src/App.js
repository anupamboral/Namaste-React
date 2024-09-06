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

//! Lesson - 12 - let's build our store
//*
//*My notes
//* First of all many companies start using deducts from day one even without understanding they need it or not and some developers even think that redux is part of react. but no , react and redux are two different libraries . redux is state management or data management tool , very poplar today.

//* about redux website:- If we go to the website of redux then after opening their website we will see the description written that Redux is a predictable state container for js apps so basically a state management library for js apps and we can also understand that Redux is not only specific to react but it can be also used with other js libraries and frameworks now redux Has two other libraries first one is react-react and the second one is Redux toolkit.There is a normal version of Redux which is the older version and it is also called vanilla redux.But we're not gonna use the older vanilla redux Because with time redux simplified things and they created Redux Toolkit which is new and  very easy to use then the older version also the react redux Which is like a bridge between react and redux. So we are gonna use react redux and redux toolkit in our project so we can understand the modern way of using Redux rather than the older version.
//*Purpose of redux toolkit when vanilla redux already existed
//*The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

//* "Configuring a Redux store was  too complicated"
//* "I have to add a lot of packages to get Redux to do anything useful"
//* "Redux(vanilla) requires too much boilerplate code"

//* because of these problems , developers developed a simpler version of writing redux which is react toolkit.

//* let us just use Redux Toolkit in our application
//* so first of all let's discuss what feature we are going to develop while we learn Redux ?
//* so let's  develop a feature that will use Redux in our application okay so let us build something known as shopping cart🛒 . so we already know the cart flow so let us build a cart flow .  what does it mean by a cart flow.  let's see  it first. so lets go to a restaurant  menu of any restaurant in our web app.  For example  Meghna Foods restaurant. so lets go to Meghna Foods's menu . Now what we are going to build  is that if I click on this add button of any menu item   then it  should go inside my cart🛒 (in the nav bar we will add the cart.  so it should go inside my cart and let us also be the "cart page" component.  so let us build a card page  we might have seen on the food ordering website right .we can see an example  what we are going to build. so in Swiggy.com if I go to swiggy.com , so if I add something into the cart by clicking on the add+ button ,  in the cart(on nav menu) it increase like this cart🛒(1) . it so if I another item to cart so the cart becomes 🛒(2) . so similarly what we are going to do is, we will add these items to the cart right so it should show on the top(nav menu) also .If I click on 🛒(1) (on the nav menu) we will go to a cart page , just like Swiggy has a cart page , where we see what all items are there in my cart  and and we can build this kind of feature using react toolkit.

//* And to store all these cart information, we will be using our Redux store , this is the feature we are going to build and let us just start building it but before we write any code 1st of all I will explain you the architecture of redux toolkit , so let us just see the architecture of redux,  so let us just start seeing what is the redux architecture all about , so we were building the cart feature so we will be building something like add to cart , if you click on the menu item it should added to the cart ,  so in our website  header, we have a our cart , the cart can have multiple , we can add items to the cart ok so suppose, this is the menu page right suppose this is a page of Meghna Biryani  and there is a menu of Meghna Biryani there are suppose 3 items right there are a lot of items right but suppose there are three items 4 items like there are tonnes of items which we can choose from right and these 3 items then we have a add button over here right suppose here is a add button over here right we have a add button here got it so what happens when we click on this add button right ,  I click on the add button how will this add button item send the items to the cart?
//* how will they go in the cart this is what I am going to explain redux store . in the cart as in when we add a item , if I click on add for the 1st item what should happen here cart🛒(1) should come up right if I add another item here cart🛒(2) should come up if I add another item here cart🛒(3) should come up . let us see how we can build this right so in this cart we also show the number of items.so now we will be using redux for our application for managing the data of our application , so what is redux store ?
//*  redux store is nothing but a big  object you can assume that redux store is a big object and it is kept in a central global place. Redux store is kind of like a very big javascript object with a lot of data inside it and it has kept in a global central place .
//*let us just try to visualize how my Redux store looks like right so suppose this is my Redux store right this is my Redux store assume that this is a central place right and any component can access it inside our application in a react application any component can access this redux store ,it can write data it can read data from that store and it is like a very big object and it is kept in a central place and we do not all the data but most of the major data of our application into this redux store .

const Grocery = lazy(() => import("./components/Groceries.js"));
const AppLayout = () => {
  //* state variable to save user's data coming from api(from lesson 11 to understand context Provider )
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
            <Grocery />
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
