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
import { Provider, Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
//! Lesson - 13 - Time for the test
//*
//*My notes
//* We will learn how to write test cases and get confident when we are building or developing new features in our application we will see all of this in this lesson.
//*Before writing test cases first of all why do we even write test cases? what is the importance of test cases?  what are types of testing? what are different types of testing that we can do as a developer?
//*    So I am just talking about from a developer's point of view right so see let me tell you that testing is a huge  domain in itself right, I mean there is QA testing, there are different type of application testing which goes on  . But we are only concerned about developer testing  , as a developer , I am not concerned about  a testing team or a qa team is just testing the stuff , if you will see what are the types of testing of a application then you will find there are so many types of testing but I in this in this episode I am just concerned about developer testing so this is the thing which we have to keep in mind for now
//* types of testing:- 1.manual testing
//* what is manual testing?
//* Manual testing means so as a developer when I develop some feature suppose if I develop the new page which is known as contact page right so if I go to contact a page I saw that a contact page got rendered so this is kind of manual testing . So I am just testing whatever I have developed,  for example suppose if I develop this search functionality so what I will do is as a developer I will go to the website I will try to write write something in the search input field , I will try to filter items using it  , suppose if I search for pizza and  it just gave me two results so this is called developer's manual testing.  I am manually testing stuff  but this is not very efficient  , this is not very efficient because suppose if I made a change in my code .Am I going to test my all the features of the app once again?  so suppose if I am building this search feature where I go and check, but will I check whether contact the page is fine whether my card is fine whether my login logout is fine I am not going to test everything in my application
//*basically what I am trying to say is every time I am writing a new code into my application,  first of all just understand a very small concept  whenever we add even a single line to our code , suppose I am a developer suppose if I am writing some code even if I write a single line of our code that can introduce bugs in our application anywhere , why am I saying that first of all let us understand that when our react application grows big it has so many components , more than 10 or 15 components we already have and when we make up large scale production application then our react application has like hundreds of components so suppose your application has hundreds of components and these components are talking to each other , so we have a body component we have a restaurantCard component, we have a header component ,we have a cart component so many components we have a restaurant menu component and these components are talking to each other they are dependent on each other
//* so basically wherever I am changing something in my application suppose if I change the logic of the search over here right it can introduce bugs inside different parts of our application , suppose let me give you an example if I change the functionality of add button , this is the rest of menu if I click on this add button it adds item to the card suppose if I change some portion of code inside the click handler of this addBtn, it will impact so many components ,it it will impact this accordion component, it will impact the cart page  because they are somewhat related to each other , so what I am trying to say is even if you make a small change in your application that can introduce bugs anywhere in your app you know you must have heard of some people, they say it's just a 1 line of code, what what impact it will create it's very small change, it will not like introduce any bugs, no my dear friend even a single line of code can mess up everything in your application can mess up everything in your application don't be in this myth that it's just a single line of code we don't need to worry about we should worry about every line of code that we write.

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
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: userName, greetingMessage: `Hello` }}
      >
        <div className="app ">
          <Header />
          <Outlet />
          {/* <Body /> */}
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: `/cart`,
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
