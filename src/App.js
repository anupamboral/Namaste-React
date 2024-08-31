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

//* about redux website:- If we go to the website of redux then after opening their website we will see the description written that Redux is a predictable state container for js apps so basically a state management library for js apps and we can also understand that Redux is not only specific to react but it can be also used with other js libraries and frameworks now redux Has two other libraries first one is react-react and the second one is Redux toolkit.There is a normal version of Redux which is the older version and it is also called vanilla redux.But we're not gonna use the older vanilla redux Because with time redux simplified things and they created Redux Toolkit which is very easy to use then the older version also the react redux Which is like a bridge between react and redux. So we are gonna use react redux and redux toolkit in our project so we can understand the modern way of using Redux rather than the older version.

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
