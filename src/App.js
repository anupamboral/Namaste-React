import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
//*⁡⁣⁢⁣Creating our own error page and displaying through react router dom(adding Error page route using errorElement property)⁡:- so let's first create a error.js file and create a functional component inside it for Error and import that. so now after importing the error page how will we use it , so then whenever the some wrong path http://localhost:1234/djr then our app would display the error page. and it's very easy. to do that we have go inside our path objects inside routing configuration appRouter. and there inside the home page object we need to add another property named `errorElement` and it's value be the error element <Error/>. and it;s completed. so from now whenever someone will search some wrong path like:- http://localhost:1234/djrfefe or anything then the error page will be displayed.but remember you should only mention this errorElement inside the homepage's object where the path is `/` , if you mention it inside another routes object like inside about or contact then it will not work. so always mention it inside the homepage's path object.

//*⁡⁣⁢⁣Other different routers⁡
//* So if we just go to react routers documentation page then in the sidebar we will see that there are many kind of routers so right now we just use createBrowserRouter() to basically write the routing configuration, but there are also different kind of routers for different kind of needs but if we check out the createBrowserRouter() by clicking on that then we can see that it is already written on the documentation page that this is the recommended router for all of the react router web projects and that is why we are using it but there are also different kind of routers which we can also check out so in the future when we would need to use one of them like createStaticHandler() or createStaticRouters() or createMemoryRouter() then we can also use those routers as our necessity.

//*⁡⁣⁢⁣Another important feature provided by react-router-dom related to error handling :- a hook named "useRouteError".⁡
//* so let's import it from react router dom in Error.js file as a named import. and how do we know that it is hook. so it is convention in the developer world that all hook names start with `use` like `useEffect`, `useState`. so now by looking at the name `useRouteError` we can easily understand that is a hook.so now let's import it first.

//*use of "useRouterError" hook:- using this hook we can get more information about error. so right now we are just displaying a simple message when error happens which is `oops something went wrong` but we can display a more information about the error which can improve the user experience.so depending on what kind of error has happened we can display detailed error message like if it is a network error,route fail error(entering some wrong path http://localhost:1234/djrfefe ) , server error.
//* so to use this hook , inside our Error component before returning anything at first we have to call this hook and save it's value inside a variable, because remember every hook is a function/method with a specific purpose.
//*now let's name this variable err. and now print it using a console.log(), then let's go to our app and enter some wrong path like localhost:1234/essfd , so the error can be displayed, and then if we go to our inspect tool , then in the console we will be able to see a object printed by the console.log(err) we just did. and inside the object this object there is a lot of information which we can use to display a better error message. so let's use this object's properties like err.status and err.statusTest to display a good error message so that we gonna add another heading element and inside that using template literal we will display some good error message.

//*⁡⁣⁢⁡⁣⁢⁣Developing children routes⁡
//* so right now except the home page, on other pages(about, contact) one functionality is missing and that is the header , so usually when we visit a website and go to their aboutUs page or contact us page then we see that the navigation header always stay on all of the pages so the user can navigate trough the all of the pages, and the same we want for all of our pages that the header remains available on all of the pages and the below part should get changes for different pages located on different paths/routes.
//* and to bring this functionality we have to create child routes for our AppLayout component.Becuse AppLayout will be same for but just below the Header , instead of Body component, the other components like About ,Contact will appear.
//* so right now inside our router configuration, we have multiple routes for different path Like:-
/*  [⁡⁢⁣⁣{
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
}],⁡
  */
//* but now to create child routes , first inside the homePage("/" ) route object we are now adding new property named children, and it's value will be again a list of paths or array of objects . and now inside this children property's array , we will put the other different route objects we created for about and contact.so now all of the other routes are the children routes of the main route (`/` route). and we want that inside the AppLayout component , depending on different paths different children Elements(About, Contact) should be displayed and header will present for every route / path, like :-
/*const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      //*on / Route(for homePage) - Body component should be displayed
      <Body />
      //*on /about Route(for AboutUs) - About component should be displayed
      <About />
      //*on /Contact Route(for Contact) - Contact component should be displayed
      <Contact />
    </div>
  );
};
*/
//*though we added the other child routes but as children but we have to remember that on "/" route the body should be displayed but on other route it should not be displayed, so first we have to remove the Body Component from the AppLayout Component, and then to display the body component on / route , we have to add another child route object for this / (homePage) route , which will display the Body component on / route below the header component. so let's remove the Body component and then add a child route for displaying the body.
//*so now creating all of the child routes is complete , but we want a way to display this different child routes below the Header component depending on the path. like on / route the Body element should Appear below the Header component.and to do that React Router Dom gives us another solution which is basically a another component which we have to import as named import form react-router-dom and the component's name is <Outlet/>. so let's import is first.
//* now inside our AppLayout component, below the header we have placed this OutLet component.And this OutLet component is just like an empty box which will be filled with a element depending on the path, so when path will be / this Outlet component will be filled with <Body/> component , when the path will be /about then it will be filled with the <About/> component.and that'show we can implement this functionality.so the header will be keep intact and the outlet is changing with children components  depending on the path .
//* ⁡⁣⁣⁢if we go to our webpage and inspect it as html then will we be able to see this outlet component?⁡
//*no, because every time depending on the path the the outlet component will be replaced with one of the children route component , like on / route the outlet component will be replaced with the <AppLayout/> component. so in the inspect tool we will not be able see that the developer used a outlet component there.

//* now let's make our navigation links in the header work properly
//* so if we click on one of the navigation link then it redirects us to that page or that route.
//* if we were not using react then we would use some anchor tags to do it and using the href attribute we would mention the path like :-
//*<li><a href="/about">About Us</a></li>
//* though in react it also works but we should not use anchor tag in react to redirect to some page /route, because if we do it then will see that will redirecting it refreshes the whole page , and that takes so much time, so in react we can redirect the user to a route without reloading the whole page, and here the refreshing the whole page is not even necessary because the header keeps intact for all pages and just the below part of the header component need to be changed.
//* ⁡⁢⁣⁣So with out refreshing the whole page can we load a different page /route?⁡ ⁡⁣⁢⁣and why react applications are called single page applications?⁡
//* yes it is possible , and again it is possible because of react-router-dom , so react-router-dom gives us access to a component named "link" and we need to import it as named import . so let's go to our header.js the import it. and this link component is very similar to anchor tag in terms of use, so we need write it inside our header component just like we write anchor tag but intend of the href attribute we have to use to attribute and mention the path. so it will look like:- <li><link to="/about">About Us</link></li>
//* and after doing it if we go to our page we will see surprisingly the when we are clicking on one of the links , then the whole page is not getting refreshed, and like before the logo is not loading again instead within a blink of eye the new page is loaded without refreshing the whole page, and the logo is not even loading again, instead the outlet is just changed so much quickly without reloading the whole page and this basically not reloading the whole page instead it just refresh the necessary components. and that is power of Link component which is provided to us by react-router-dom .and if we goto our inspect tool and try to see what is happening while we click on one of the nav links then we will see that the component which is below the header component, that component is only changing, and we will also see that while clicking the nav link, the div with the className 'app' also blinking in the inspect tool, that is happening because the hierarchy of the components in changing inside this div, so it doesn't indicate that the whole page is reloading. So it makes our app so much fast and also makes the user experience very better because while he is going to another page of our website then very smoothly other page reloads immediately without any lag because there is a lot difference between reloading the whole page and only refreshing the necessary components.and that is Why reacts webApps are called single page applications.beacuse the App.js is the contains the main component AppLayout and this contains all of the components and according to the path it just refresh the components. so whe we are going to a page , the website is just changing some components according to the path and not reload the whole page. Basically when we go another page we are not reloading a new page we are just changing/refreshing some components.

//*Types of routing:- there are types of routing which we can use in any kind of web application, not only on react webApps but on any webApp we can use two types of routing :-1.server side routing and 2. client side routing

//* 1.server side routing:- it means we have different file like index.html, about.html , contact.html , and when we click on one anchor tag  then the browser makes network call to server and and fetch that html file from the server then render it on the webpage.and that's  how the old websites use to work.So basically while using server side routing you make a network call to server and request the page and then it comes to the browser and then browser renders it.
//*2.client side routing:- we just use this client side routing , so while using this routing, when the user first time loads the page at time the browser downloads all of the components for About page , contact page, etc, and then whenever the user goes to another page then it immediately displays that component because all of components are already downloaded and the browser is just changing the components according to the path.the only network call will be happening when the user fetch something from the api, but it will not reload the page because all of the components are already present.and that is why client side routing is so popular and fast.

//*Now let's build a new feature for webApp which will us to learn dynamic routing(till now we only learned basic routing), so when we visit a food ordering website and then click on one of the restaurants option then a restaurant page opens where we can see all of the foods that the restaurant is selling and also details about that restaurant.... so now are gonna try to build this feature.
//*Dynamic Route:- dynamic route means that the path will change according to data (like:- id or name), till now we were using static routes which we were hard coded by us and doesn't change with the data example:- like :- localhost:1234/about , /contact . but incase of dynamic routes , the route/path  will not be hardcoded,instead it will change according to the data for example :- localhost:1234/restaurants/meghna-foods , is this example, meghna-foods is dynamic , basically the part after restaurants/ , so for different restaurants is will be different , and we will not hard code it , instead it will change depending on the data for different restaurants. This dynamic portion of the path can be any unique data which is different for every restaurant , it can be id or the unique name that restaurant .So to create a dynamic path we have use this `:` colon , and the part after this colon will be dynamic so this part of the path will change for every different restaurant. a dynamic path look like this localhost:1234/restaurants/:id and this id will change for every restaurant . So let's first create a basic restaurant menu page and import that here so we can work with that. because ultimately we are gonna display a restaurant menu page for every restaurant . and then using dynamic routing we will display the restaurant menu page , so whenever the dynamic path changes then this restaurant menu component can be loaded, and this restaurant menu page will be also dynamic, so this component will be also dynamic, so it will able to display menus for different restaurants using the same component like we did for restaurant cards , so this whole restaurant menu component will be also dynamic. lets's create a basic restaurant menu page first then we will try make it dynamic. and now we imported the RestaurantMenu component (at the top of this file). so let's go inside our router configuration and create a dynamic route , so the id will be dynamic here because we know every restaurant object will have a different and unique id.and this will also a child route inside the main route.So right now our dynamic route looks like :-{path:`/restaurants/:resId`} , here the portion after the : is dynamic , so the resId will for change for every restaurant. and now let's add the element property inside our dynamic route object, and it's value will be <RestaurantMenu /> because on /restaurants/:resId path we want to display this component.Now let's go to our webpage and test the path with some fake id so the id can be any number so let's use some fake number in place of id , so the url will look like :-{localhost:1234/restaurants/6789} and as soon as we type this path on the search bar then immediately we can see that the <RestaurantMenu /> page is appearing, till now the page is not dynamic but our goal is whenever the id changes depending on that id ,our <RestaurantMenu /> component dynamically display the restaurants menu which will be different for every restaurant, So whenever the dynamic path will change then we will fetch data from the api related to the restaurant using the id and then display that.

//*⁡⁣⁢⁣Displaying restaurant menu data from Swiggy's api⁡
//* let's go to swiggy's website and open the network tab select xhr request and then open a restaurant card, then we will see that while we click on restaurant card at that time browser makes a network call to swiggy's api to request the restaurant menu data , so do it and get the api url. now we just copied a api url for one restaurant which is :- `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=385752&catalog_qa=undefined&submitAction=ENTER` and we can go to our RestaurantMenu.js and inside the component we will write all the code to make the component dynamic. so similaly we did in the restaurantCard component, first will render the Shimmer Ui before making the network call so the user doesn't see the blank page while making the network call, and then once the component is loaded then we have to make the api call to request the data , so as we need to do it after rendering the component that's why we will use UseEffect hook,and while mentioning the arguments we will also mention the second argument as empty array, so then this useEffect can be called only once when the component renders first time, because we would not mention this second argument dependency array then this useEffect hook would be called every time the component re-renders.and we don't want because there is no need to get the data from the api every time it re-renders, we just need do it once.and then to save data we are again gonna use the useState hook , so the default value of the hook will be null first and the as we get the data from the api then we will change the state, and as we know the when ever the state variable will change the it will trigger react's reconciliation algorithm which will re-render the whole component with updated data which we got from the api.

//*Placing the destructuring code  below the if Statement(for Shimmer UI) is important because as we are gonna destructure the needed properties from the data , if we would place it above the if statement then at the first render when the resInfo value is null then our variables will try to get the data from null, and that will throw an error so when the value is null then it should render the Shimmer Ui and that's why we placed the if statement above so the after the return the below lines would not execute, but when the data will arrive after the useEffect hook call then it's value will be filled with the data so then the if statement will not execute and the return will happen at that line, and the below lines execution will continue . and here we have not used ternary operator also because of this reason because we need to do some destructing here. and  this destructuring should only happen after the data arrives, and also because we can't do this destructuring inside the fetchMenu function because as it is inside the useEffect hook, and we mention the second parameter in the UseEffect hook that's why it will execute once in the first render.

//*⁡⁣⁢⁣making the restaurant menu dynamic⁡
//* now one more important thing is that our api url is :-https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=407669&catalog_qa=undefined&submitAction=ENTER ; and from this we are getting the restaurant menu data in restaurantMenu.js. and this url contains the restaurant id - 407669 ; and the amazing thing is that if we just change this restaurant id and put some other restaurant's id then then this url will load that other restaurant's menu data. So using it we can make our restaurant menu dynamic, so it can load any restaurants menu data.

//* So to get restaurant id dynamically, we have to send it through the route , so when the user clicks on any restaurantCard, any he will be redirected to restaurantMenu , and beside that the route url will send the resId , as we are using dynamic route for restaurant menu , So the dynamic part of the url (example:- /restaurants/:resId -this resId) will help to send the restaurant id through the route url, So that means for every restaurant it will send that restaurant's unique restaurant's id ,which we can use to load any  restaurant's menu. But even we send the id dynamically through route url, but still we need a way to get that id in restaurantMenu.js from the route url. So basically we need a way to read this id from the url in restaurantMenu.js.

//*and to solve this problem we react router dom gives us another function named useParams.
//*⁡⁣⁢⁣useParams⁡:- this hook helps us to get the parameters from the url/route. So sent the resId as a parameter when the user clicked the restaurant component , and now we are receiving the param(the dynamic part of the route/url) through this useParams hook. so when we call this hook then in return it gives us a object which contains the parameters as properties. and we can directly use destructuring to take the param(here resId) and use it.and remember we have to use the same param name which we used while passing this param through route which is resId. so let's  import this hook as named import from react router dom. then inside this RestaurantMenu component we will call this and destructure the `resId` param, and then in the api url we will use this resId to dynamically load any restaurant's menu.and also put the api url in the config file, because we should always this ind of important hard coded data in the config file.and then after importing the MENU_API_URL from the config file in restaurantMenu.js we will concat the MENU_API_URL with resId inside the fetch function, and now we can load any restaurants's menu just by changing the resId param in the url/path.
//*and now depending on the url(resId param of the url/route/path) our resMenu will be loaded which is really amazing.

//*and now let's go to our body component, so we can make our restaurant card components clickable.so in Body.js in the body components we are use map  method to render all the restaurant cards. but we want that when ever we click on one of the restaurant cards then it should redirect us to the restaurant menu page, basically load the restaurant menu page with that selected restaurant's menu. So , in javascript we would use anchor tag, but here in react we already know that we have use the link component provided by  react-router-dom. because it not reload the page instead it will just refresh the components from the memory, so basically interchange the components. and and instead of the href attribute we have to use the to attribute to provide the url.and remember this url will be dynamic because with path we have to also provide the resId ,which is dynamic. So to dao that we have to use string concatenation, and as we are doing this concatenation inside the jsx so we have use {} so we can write javascript. and the key prop we  provided as the attribute inside the <RestaurantCard /> component has to be shifted as the attribute of the link component, ⁡⁢⁣⁣the key should be present in parent jsx component which is being mapped⁡, so finally the mapped component will look like:-
/*   {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/` + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        */

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
