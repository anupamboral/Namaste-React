import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//! Lesson - 8 - Lets get classy

//* (instructors subtitle)

//*My notes
//*Class based components:- till now we already learned so much about functional components, functional components are normal javascript function which returns a piece of jsx. on the other hand , ⁡⁣⁢⁣class based components are normal javascript class which extends React.Components and it has a render method which returns a piece of jsx⁡.
//*now inside our About us page we are gonna render a component which will display some information about the developer so that means we are gonna use our github account to fetch some data from github, and display that inside the component. So we are gonna name the component userClass. because it will be a class based component , and then after importing it inside the About.js file, we will render it inside our about component. So let's create our UserClass.js file first , and then inside this file we will create our first class based component.

//* So to create a class based component first we have to write the class keyword then the class name (here User), with first letter capitalized, because it is convention, and then extends React.Components. this `extends React.Components` tell React that this is a Class based react component ,so using `extends React.Components` is very much necessary. then inside a curly braces{} we have to write a function named render(){} and inside the render method we will write our jsx which we want to return. So inside a class based , there will be always a render function which will return the jsx.And as we are using React.Component so remember we have to also import React here in this file also.
//*But what is this React.Component? :- this is a javascript class which is provided to us by react . and by extending it we are inhering some properties from it.
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
