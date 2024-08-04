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

//! Lesson - 10 - Jo dikhta hai wo bikta hai
//*
//*My notes
//*And now we have used normal css to style our components and all of our elements but in the industry level developers don't use normal css chloride large scale applications so instead of css there are some css preprocessors named sass and scss these are basically some advance way to write css which gives us some superpowers to css but in the industry level developers don't even use these preprocessors in the current scenario instead what developers use to style elements and components is called `styled components` and this is used with react very commonly.uber uses styled components to style their app components.there are also some css frameworks like tailwind.css amd css libraries like material ui , chakra ui ,ant design which are used to style the components,we also get pre-styled components from these libraries.
//*So in this lesson we're gonna learn about css framework named tailwind css it is very easy to use and when we open the website it says that without leaving the html we can write css so that means that even if we are writing J S X or we are in html file then we do not need to open the css file multiple times instead if we just use tailwind css then we can directly write the css so basically the styles for components using it so to use tailwind css first we have to go to their website and in the installation guide there is a section for frameworks we have to click on that and then as we are using parcel as a bundler so we have to choose parcel from the list it will tell us how to use it with parcel on the installation g the the first process is starting the project and in our case it is already done so now the second process is installing tailwind so we are going to instal tailwind Css using our terminal as the dev dependency And we will also instal post css because behind the scenes tailwind css uses post css to style the components and to use tailwind css it is not necessary to know postCSS in depth we just need to know that `post css is a tool for transforming CSS with JavaScript` And behind the scenes tailwind uses it now we have to initialize tailwind in our project so as usual using npx we will initialize tailwind in our project so the command to instal postCSS and talent css and also the command of initializing  and css in our project is below And the next step is to also initialise post css at the top level and we have to create an file for post css configuration ,So the file name will look like:-
/*{⁡⁣⁢⁣
  "plugins": {
    "tailwindcss": {}
  }
}⁡*/

/*⁡⁣⁢⁣npm install -D tailwindcss postcss
npx tailwindcss init⁡
*/
//* And after installing and initializing tailwind css a new file will be created at the top level named `tailwind.config.js`
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
