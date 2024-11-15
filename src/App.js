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
//* Testing is very very very very important in our application and you know well they are building a small applications we don't realize the importance of testing but when we work in a large scale company, testing is a must have thing, testing is very important because you never know what code you are changing and what all parts of your application it is impacting,  so this is the importance of testing, then there are multiple types of testing a developer can do, a manual testing or he can write code to test the application . So the developer can do 2 types of testing remember that 1 is manual testing right suppose if I want to test my cart flow , so what I will do is I will go there  if I want to see that my cart is working or not if I can if I am able to add items to cart or not so I will just go i'll click on the add button and I see that the item is updated , I can see two items and then if I go to the cart page I can see 2 items over here , we have got our card details so what I am trying to say this is manual testing, but there is something also known as which is known as writing the test code, writing the test cases,which will test our application automatically basically that is a code that will test our application so that is the type of testing we are going to focus on today in today's episode.
//* ⁡⁢⁣⁣we will start writing test cases but before that one more last thing, what are different types of test cases ? what are different type of testing that we get  in our react application as a developer ?⁡ =>there are three types of testing that we can do as a developer right by writing code . so now I want to tell you what are different types of testing that a developer can do . Because testing is a very vast domain so I am just focusing upon the developer what developers can do as a part of testing , so what are three types of testing the developer can do (lets keep separate manual testing), so first thing is 1.unit testing right so there are 3 types of testing 1st.unit testing, second testing that we can do is we can do is it is known as 2.integration testing and the 3rd type of testing is also known as end to end testing and this end to end testing is also known as e2e testing  somewhere will if you will see E2E testing that means end to end testing.

//* ⁡⁣⁢⁣So let's discuss these three types of testing .⁡
//*⁡⁣⁢⁣Unit Testing⁡:- Unit testing means that you test your react components in isolation, you test your react component in isolation so suppose let me give you an example suppose if I want to test my header component, only my header component, i'm not concerned about everything else in my app just the header component , so what I will do is I will do a unit testing of that header component , I will just try to render my header component and we will see whether it got rendered properly or not .Testing on Only one specific component that type of testing is known as unit testing . one unit of your code or 1 unit of your react application which is like one unit ,you can call it as component , you are testing a specific small unit of your react application not the whole application thats unit testing.

//* ⁡⁣⁢⁣Integration testing ⁡:- integration testing is testing the integration of the components , when we have a big large scale application, there are so many components and these components talk to each other, so let me give you an example so suppose if I do a search using our app's searching functionality if I write PIZZA and if I click on  search so when I did this so many components , so many components collaborated to make this feature work and display search results on the UI,  so it is an integration of so many components, so testing features like this is known as integration testing. integration testing means there are multiple components and they are talking to each other and we will develop a flow of an action in our react application. That we will test ,we will basically kind of test whether somebody is writing something inside the search box and somebody clicks on the search box then there should be three items(like three pizza related restaurants if user search for pizza) so basically what we will test if I have to say in theory . So what we will test is 1st of all, my application had like 20 restaurant cards initially , now I wrote PIZZA inside search box if I click on search btn, there are only three cards related to the search, so this type of testing  we will do from code, we will see it very soon, so this type of testing is known as integration testing on multiple components are involved in talking to each other there are events happening, there is a click event there is input changing, so we can do all this by code this is integration testing .

//* ⁡⁣⁢⁣End to end (e2e) Testing⁡:- the 3rd type of testing is end to end testing, End to end testing means testing a application as soon as the user lands on the website to the user leaves the website right and we will test all the flows , we will test different type of flows basically that end to end testing will start from user landing on to the page => clicking on the login button => you are entering the username password => going inside it finding the restaurant => adding items to the cart and then checking out basically kind of like simulating what the user will do throughout the app , basically how the user will flow across the application  that is end to end testing.

//*  End to end  testing requires different  type of tools , some tools like Cyprus, puppeteer, selenium these type of tools are needed to do end to testing , which will test your whole application flow but as a developer we are majorly concerned about the 1st 2 types of testing as a developer we are majorly concerned about unit testing and integration testing.In some companies testing is a part of development, you know there are some developers feel that developers just write code , they write features , they should not be testing, but ,no, testing is part of writing code, whenever you are writing ,you write test cases for that code  so make this your habit if you are not doing it already because when you will go in big companies, they will definitely want you to do that got . So in this episode we will be focusing upon the first two types of testing which is known as unit testing and integration testing we will not be doing end to end testing in this episode or in this series , we will not be covering that we will be focusing upon the major 2 types of testing that developers are responsible majorly responsible for that is unit testing and integration testing.

//* part2
//*let's explore new libraries  and we will install them 1 by 1 into the code and we will also set up our whole our whole project to be to be able to do testing , so let just get started so the first library that I want to introduce you to is known as react testing library , so we are going to use react testing library to write our test cases in our react applications , so this is the library we are going to use for testing ,there are more libraries but this is the one of the most standard library , this is the most standard library which is used to write test cases in react, a lot of big companies use this library and this is the most standard way of writing test cases right
//*so let's known a little bit of history about react testing library so there used to be a dom testing library(old) , what I am trying to say is its very old , its its been its been a long time since testing library exist  and this testing library has come up with something known as a react testing library and they also have testing library for other frameworks and libraries also like angular testing library, vue testing library , you can see react testing library
//*React testing library is built on top of Dom testing library , so this dom testing library is the base of all these testing libraries , all the other libraries and frameworks testing libraries are  built on top of dom testing library.  React testing library adds like is a wrapper around dom testing library and it adds more feature , it adds more react features into it , so that you can test your react components , so now one more thing to note over here is if you create your project using npm create-react-app command , a lot of people use create-react-app to build their react application, so when you will build a create react app  so then testing library already exists inside it , it already uses  it, react testing library comes out of the box along with create react app, but in our case , in our application we are not using create react app , we have built our application right from scratch remember. Since all these 12 episodes we have written each single line of code by ourselves, we have not used any command to auto generate a repository or something, we have written everything right from scratch , from the first line till here , so basically we are not using create react app, we have built our own application using parcel , parcel is the bundler and we are building it on top of it , so with parcel, react testing library  not integrated by default , so what I am trying to say is if you are using a create react app then react testing library already is integrated to your app but for us we will have to integrate it by , we will have to integrate the react testing library into our code.

//*  if you have to build a large scale application from scratch .There are lots of libraries and frameworks which are required to build a large scale application remember for routing we use what react router , for testing we are using react testing library ,for state management we are using redux  , what I am trying to say it involves so many things , for bundling we are using parcel so many libraries we are using to make our own big application if you will start from create react app  , everything is come out of the box , it is integrated with testing already it is integrated with bundlers already it is integrated with so many things already .As a developer that you should exactly know what it takes to set up your own test cases in your application.

//*we are gonna learn ,how do you integrate react testing library from scratch in your application? this is what we are go learn , otherwise we could have just started writing test cases very early,   but we should first know how to set up our project to be able to add test cases and you know it sounds very easy but it is very complicated process . We will encounter a lot of works ,  we will see that so many places we will get stuck and then we will step by step overcome it and we will enable our project to write test cases, so let us just get started so we have seen react testing library , it is built on top of dom testing library ,
//*one more thing is react testing library uses something known as jest, so jest is a delightful javascript testing framework which is focused on simplicity ,jest is a standard to write test cases wherever it comes to javascript, it is basically a javascript testing framework and the dom testing library or the react testing library uses jest behind these scenes so basically what happens is react testing library needs jest in our project also .

//* we should know all these basic things that what all libraries are involved into it, using these we are enabling testing into our application jest another library that we are going to use and jest uses Babel ( Jest supports TypeScript, via Babel) ,so we will be using babel  so we are already using babel  along with Parcel, jest is a different testing library and react testing library uses jest behind the scenes. so we need both react testing lightly as well as jest into our application .  lets now instal these things into our application.
//* command for installing react testing library:- npm i -D @testing-library/react .
//* in the above command `-D` is used because react testing library is dev-dependency.
//*  command for installing jest:- npm i -D jest .
//* In the website of Jest Library they have mentioned that if you're going to use jest along with Babel ,then you have to instal some extra dependencies and in this project we are already using Babel as we installed it while installing parcel that's why we also need to use instal these extra dependencies so we can go to jest testing library's website and copy the command to instal these extra dependencies and just install , so the command is :-
//* npm install --save-dev babel-jest @babel/core @babel/preset-env

//* So far we have installed react testing libraries we have installed jest we are now installing the dependencies which are required to use Babel right because we are using jest along with Babel.
//* you will see these three dev dependencies will be added after this:- babel-jest,babel/preset-env,babel/core .

//* after installing these now in website , it is mentioned that we have to config babel. so on the root level of our project  we have to create a babel.config.js file(they say in their website -Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:). and paste this code:-
/*module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};*/
/* so we have already done all these four steps:-
- installing react testing library
- installing jest
- installing babel dependencies
- configured babel*/

//*Note:- parcel automatically has Babel inside it. right parcel uses Babel behind the scenes , so what I told you that parcel uses babel behind the scenes  and babel is a transpiler  and parcel uses babel but now when we are using jest and when we are using these dependencies manually so when we do this so `these dependencies will interfere with parcel's babel configuration,  parcel also uses Babel and now we are trying to configure Babel according to us , we are trying to configure Babel according to us so what will happen is there will be a conflict between Babel and parcel .Parcel will say that I have my own internal Babel configuration and we have also added a new babel configuration which we copied from jest's website. so this will kind of try to overwrite  the existing Babel configuration that parcel has set for us. parcel has its own configuration for babel now we are trying to add extra configuration so parcel will get confused and parcel's configuration will create conflict with this configuration `babel.config.js`.  So we will have to change parcel's behavior  to accommodate(to work together) to use babel along with jest. we will have to accommodate, we will have to make some changes in our parcel configuration.
//* what are those changes
//*if I will go to  parcel's website  docs now search for jest in the search box, click on this javascript right so if you will search for justice over here go here right javascript this transpilation right or you can go in a different way click on get started on this homepage just scroll down you will see javascript over here right if you will see javascript and inside javascript who go to this part go to this Bible right go to this baybill and try to read this up right now you would be thinking Akshay there is so much complicated things you are telling me it is going over the head do not worry my dear friends try to read this up from the official documentation I have read it myself that is why I am able to do this no teacher will teach you all this let me tell you my dear friends no teacher will teach you all this go nobody will tell you how to set up testing right all many teachers right I am not saying no teacher will teach you there would be teachers who would be teaching it right I am sorry for if I have like mistakenly said said something wrong right for teachers right I respect all of the teachers but I am telling you that most teachers they do not talk about all this stuff right because these are like complicated stuff but I want you all to understand that there are lots of efforts required to make testing code what did along with- check this para
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
