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

//* custom hooks:- Till now we have learnt about some hooks provided to us by react development and hooks are nothing but some utility functions or basically some useful function with some specific use case and till now we have used use effect useState hook , But in this lesson we are gonna make some custom books for us so basically from a component we will extract some functionality and put that inside a hook so our code become more modular and more readable.

//* Is it really necessary to create a custom hook? It is not a mandatory thing but it is very good to have because it makes your code more readable ,modular,maintainable and testable .
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
