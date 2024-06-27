import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

//! Lesson - 7 - Finding the path

//* (instructors subtitle)

//*My notes
//* In this lesson we will create different web pages linked with with different url , for example if we click on www.ourapp.com/aboutUs then our browser will redirect the user to the About Us. so are gonna create this pages.

//* So before moving further, we are gonna do deep dive in the concept :- ⁡⁣⁢⁣How useEffect() hook gets called when  we use it inside a component⁡?

//* we already know that we first import it from core react file (we installed as a package from npm ) as named import, and now we can use the useEffect hook inside the component, now let's say we are using this useEffect hook inside the header component, so let's go to header.js and import it from react.
//*And now we are ready to use the use effect hook now while calling this hook it takes two arguments first one is the callback function and second one is the dependency array and the second argument is not mandatory we can mention it when it is actually needed let us learn the behaviour how this use effect hook gets called so to understand it we have to know about three conditions about use effect hook.
//* 1:- useEffect(()=>{}) (this is also the default behavior):-When only the first argument - callback function is mentioned and no second argument is mentioned in that case the use effect hook will be called every time the whole component gets rendered That means because of any change whenever the component will be re rendered,every Time also the useEffect hook will be called.
//*2.useEffect(()=>{},[]):- When the use effect has the first argument callback function and also the second argument which is actually the dependency array but the dependency array is an empty array in that scenario the use effect hook will be only called first time when the component renders and after loading the page when the component gets rendered only then this use effect hook will be called then even because of some change if the component gets re rendered still the use effect hook will not be called so the conclusion is when we mention the second argument dependency array as an empty array in that case the use effect hook will be only called once at the first time.
//*useEffect(()=>{},[loginBtnName]):- Now the last condition we have to know is when we pass both the arguments the first one call back function and the second one dependency array But in this condition we mentioned one dependency inside the array but what is this dependency we mentioned so inside this dependency array we can mention any state variable we created inside the same component and we can mention more than one dependency so basically more than one state variables and then whenever one of these state variables changes so basically one of the dependencies value changes With every change the use effect hook will be called so in the example we mentioned `loginBtnName` as the dependency which is basically a state variable inside the header component and that means whenever these state variables value will be changed then with every change our use effect hook will be also called.

//*⁡⁣⁢⁣Mistakes developers sometimes do but we should never do ⁡:- sometimes developers create the state variables outside of the component, but that makes no sense,so always create the state variable inside the component, because the useState() hook to create local state variables so we can maintain the state inside a particular component. and don't create a useState() hook inside an if else statement , it creates inconsistency and even the react documentation prohibit to write a state variable inside a condition or a for loop, or inside another normal function because they are meant to be declared at the top portion of a functional component.

//*And a good practice is to always put all of your state variables declarations at the top portion inside the component so in future you do not face any problem to find them.

//*⁡⁣⁢⁣REACT ROUTER⁡(first creating routing config using createBrowserRouter() and then proving it using RouterProvider)
//* Now we are gonna learn how we can learn different routes inside our react application : and  for that we are gonna use a npm javascript library named "React Router" . let's install it as a npm package and the command is :- npm i react-router-dom .
//* and after installing it we can go to our package.json file and see it is added as dependency and it's version is 6.23.1. and it's the latest version for now.
//*⁡⁢⁣⁣creating routing config⁡:- and now let's create a route or basically a about us page so when we will go to localhost:1234/aboutUs then we will see the About Us page.

//* now to create route first we have to create a routing configuration, basically when ever we want to develop routes , we have to create routing configuration. and so to create that routing configuration we have to import something named createBrowserRouter as a named import from react-router-dom.so let's import it first at the top of this file.
//*and now we will create the routing configuration inside a variable named as  appRouter and should be positioned below the AppLayout component because while writing the routing configuration we have to mention the the element name and that's why if we want to to use the AppLayout component inside the routing configuration then we have to write the AppRouter variable after the AppLayout variable.Configuration basically means information  that will define what will happen on a specific route.A information that will tell the browser router what will happen on a specific route/path.  like we are calling  localhost:1234/aboutUs then it should go to AboutUs page or on `/` route it should display the AppLayout component basically the home page that't why it necessary to create the AppRouter variable after the AppLayout component  . so the configuration we are gonna pass is as argument inside createBrowserRouter() method.
//* so createBrowserRouter() is actually a method which we imported react-router-dom package, and this method takes a list of paths(configuration) or array of objects  as argument. Each path is an object, and inside those objects we write on which path which page should be displayed like on /aboutus path the About Us page should be displayed or on / path the home page should be displayed which we named AppLayout.and we already know a page is just a composition of multiple small components.so let's create our router configuration inside appRouter but before that let's first create a normal About us page and to do that let's create a new js file named About.js file inside components folder and and just create a normal About functional component and export it so we can import that here in this file so we can use that to write the configuration.
//* and now inside the configuration we will write that if our path is /about then load our about component which we imported. and the path object will look like :- { path: `/about`,element: <About />,} . and now our AppRouter configuration is ready.

//*But just creating the configuration is not enough, we have to provide this information to render it
//*⁡⁢⁣⁣Proving routing config to the app using RouterProvider component⁡
//* and to provide this information we have to import a component from`react-router-dom` as a named RouterProvider .Previously we imported createBrowserRouter() method from `react-router-dom` to create the router configuration but this time it is not method instead RouterProvider is a component which we are now gonna import from `react-router-dom`. so let's do that.
//* so now as we imported `RouterProvider` component which will help us to provide the router configuration to our app .
//* ⁡⁣⁢⁣but how this `RouterProvider` is gonna provide the routing config to the app?⁡
//* so till now we were directly rendering the AppLayout component inside our root element like this :- root.render(<AppLayout />) but noe instead of directly passing the <AppLayout/> component inside root.render() , now we are gonna pass the RouterProvider component inside it as a argument like this:-root.render(<RouterProvider  router="AppRouter"/>) , and notice that with the RouterProvider component we also mentioned a attribute named router and it's value is "appRouter". and this is how we provide our routing configuration to our app. and now our routes  like / or /about should properly work. so let's check that. so now if we search on browser :- http://localhost:1234/about then it will open our about page and if we search http://localhost:1234/ then it will open the homepage , because that's information we provided through routing configuration. and remember on http://localhost:1234 port the / is not present at the last but still it will open homepage because the browser will assume the /. so don't get confused.

//* ⁡⁣⁢⁣Shortcut to create boilerplate for components⁡:- iso first let's create our contact us page , so let's create a file for it and go inside it. and as usual we can write the whole component by ourselves but if we want to do it fast then we can use a snippet :- rafce , and then enter, and immediately a react basic boilerplate will be present, it is a shorter way but we shoulf only use it when it is needed and it is always a good practice to write our components by ourselves. and if you want to to know other snippets:-https://github.com/r5n-dev/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
//*so now our contact page is ready and we imported it and added it's path inside our routing configuration.and now if we search http://localhost:1234/contact then our contact will appear. and one more beautiful thing is that we just random thing instead of one the correct paths    ,like http://localhost:1234/djr , then surprising we will see that on the ui a nice error page will be shown and not the usual red error page we see. and this nice error page is created by `react-router-dom` for us to display the error nicely.But on the inner page they have suggested to create our own error page and we should do that for better user experience so let's create our own error page.
//*⁡⁣⁢⁣Creating our own error page(adding Error page route using errorElement property)⁡:- so let's first create a error.js file and create a functional component inside it for Error and import that. so now after importing the error page how will we use it , so then whenever the some wrong path http://localhost:1234/djr then our app would display the error page. and it's very easy. to do that we have go inside our path objects inside routing configuration appRouter. and there inside the home page object we need to add another property named `errorElement` and it's value be the error element <Error/>. and it;s completed. so from now whenever someone will search some wrong path like:- http://localhost:1234/djrfefe or anything then the error page will be displayed.but remember you should only mention this errorElement inside the homepage's object where the path is `/` , if you mention it inside another routes object like inside about or contact then it will not work. so always mention it inside the homepage's path object.

//*⁡⁣⁢⁣Other different routers⁡
//* So if we just go to react routers documentation page then in the sidebar we will see that there are many kind of routers so right now we just use createBrowserRouter() to basically write the routing configuration, but there are also different kind of routers for different kind of needs but if we check out the createBrowserRouter() by clicking on that then we can see that it is already written on the documentation page that this is the recommended router for all of the react router web projects and that is why we are using it but there are also different kind of routers which we can also check out so in the future when we would need to use one of them like createStaticHandler() or createStaticRouters() or createMemoryRouter() then we can also use those routers as our necessity.
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: `/`,
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: `/about`,
    element: <About />,
  },
  {
    path: `contact`,
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
