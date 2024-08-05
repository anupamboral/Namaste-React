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
//*So in this lesson we're gonna learn about css framework named tailwind css it is very easy to use and when we open the website it says that without leaving the html we can write css so that means that even if we are writing J S X or we are in html file then we do not need to open the css file multiple times instead if we just use tailwind css then we can directly write the css so basically the styles for components using it so to use tailwind css first we have to go to their website and in the installation guide there is a section for frameworks we have to click on that and then as we are using parcel as a bundler so we have to choose parcel from the list it will tell us how to use it with parcel on the installation g the the first process is starting the project and in our case it is already done so now the second process is installing tailwind so we are going to instal tailwind Css using our terminal as the dev dependency And we will also instal post css using the below command
/*⁡⁣⁢⁡⁣⁢⁣npm install -D tailwindcss postcss
 */

//* because behind the scenes tailwind css uses post css to style the components and to use tailwind css it is not necessary to know postCSS in depth we just need to know that `post css is a tool for transforming CSS with JavaScript` And behind the scenes tailwind uses it now we have to initialize tailwind in our project so as usual using npx we will initialize tailwind in our project using the below command

//*⁡⁣⁢ ⁣npx tailwindcss init⁡
//* And after installing and initializing tailwind css a new file will be created at the top level named `tailwind.config.js`

//* And the next step is to create a  post css file at the top level(in the root folder) so an file for post css configuration  file in the project root level and  the file   name will be `.postcssrc`  inside the.postcssrc file we have to write the below code to enable the tailwindcss plugin.So then tailwind can use postcss as it's dependency.
/*{⁡⁣⁢⁣
  "plugins": {
    "tailwindcss": {}
  }
}⁡*/
//* we need to configure .postcssrc file because parcel need postcss to understand tailwindCss.
//* now the next step is to go to our tailwind css configuration file , and there is a content array , inside that array we have to mention where and in which files we can use tailwind css. so just write this:- content: ["./src/**/*.{html,js,ts,jsx,tsx}"], it means inside the src folder in any hierarchy(/**/*) level, in every html,js,ts,jsx,tsx extension file we can use tailwind css.we are telling this trough adding this line.
//* the next step is to go to our style.css file and write this:-
/*@tailwind base;
@tailwind components;
@tailwind utilitie
*/ //*this is importing tailwind inside our css file.
//*we can find all of the steps also in tailwind css documentation .
//*now setting up tailwind css is compolete and from now we use tailwind css in our project.
//* So tailwind css provides utility classes and these are very helpful so we do not need to go multiple times to our css file instead we can directly write some pre written class name In the html element or the react element directly . for margin of 4 px we just need to write 'm-1', it's that easy, Now we might think that we need to go multiple times to tailwindCss website to see the class names they provide and it can be very hectic to check the class names multiple times but there is an easy solution for it . So there is a extension we need to download in our vs code named 'Tailwind CSS IntelliSense' This gives us suggestion for all of the class names provided by Tailwind Css.So if we just write the css property we are finding it will automatically give us the suggestion of that and that's why it becomes very easy to use directly in the html or jsx.And after writing a utility class provided by tailwind css if we just hover our mouse over it we can see the actual css of that utility class.

const Grocery = lazy(() => import("./components/Groceries.js"));
const AppLayout = () => {
  return (
    <div className="app flex">
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
