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

//* And to store all these cart information, we will be using our Redux store , this is the feature we are going to build and let us just start building it but before we write any code 1st of all I will explain you the architecture of redux toolkit(see image `redux-data-flow.png` ) , so let us just see the architecture of redux,  so let us just start seeing what is the redux architecture all about , so we were building the cart feature so we will be building something like add to cart , if you click on the menu item it should added to the cart ,  so in our website  header, we have a our cart , the cart can have multiple items, we can add items to the cart , in the image we have a  the menu page , suppose this is a page of Meghna Biryani  and there is a menu of Meghna Biryani there are suppose 3 items , there are a lot of items right but suppose there are three items ,which we can choose from and these 3 items then we have a add button on the menu, we have a add butto,so what happens when we click on this add button  ,  I click on the add button how will this add button item send the items to the cart?

//* how will they go in the cart this is what we are going to explain redux store . in the cart as in when we add a item , if I click on add for the 1st item what should happen ? cart🛒(1) should come up in the nav as we added one item, if I add another item here cart🛒(2) should come up if I add another item here cart🛒(3) should come up . let us see how we can build this , so in this cart we also show the number of items.so now we will be using redux for our application for managing the data of our application , so what is redux store ?

//*  redux store is nothing but a big  object you can assume that redux store is a big object and it is kept in a central global place. Redux store is kind of like a very big javascript object with a lot of data inside it and it has kept in a global central place .
//*let us just try to visualize how our Redux store looks like , suppose this is my Redux store(see image redux-data-flow.png) , assume that this is a central place  and any component can access it inside our application, in a react application any component can access this redux store ,it can write data it can read data from that store and it is like a very big object and it is kept in a central place and we do not keep all the data but most of the major data of our application into this redux store .
//*but  a question,is it a good is it a good practise to keep all the data inside a whole big object?
//*In the one big whole state object is it good to keep all the data inside it yes ,it is absolutely fine, there is no problem with keeping a very big object with a lot of data inside it it is completely absolutely fine but so that our redux tool does not becomes very big very clumsy, we have something known as slices inside our Redux store(see image redux-data-flow.png), so suppose this is our whole big Redux store(in the image) ,  we have parts/portions of our Redux store which is known as slices  , so you can assume a slice to be a small portion of a Redux store  and we create multiple slices inside our Redux store

//* why do we need slices and what are these slices actually?
//*  so let us take an example of our application ,  this food ordering application which can have different slices inside our Redux store,  what can be slices to keep data separate?
//*  to we make logical partitions and these logical partitions are slices so assume that suppose if we want to add cart data into our redux store we will create a separate slice for a cart data, suppose if we want to keep logged in user info inside our redux store so we will create a user slice kind of thing  it's a user slice, we can create a card slice, themes slices for dark theme light theme and maybe theme colours and different type of logos and all that stuff ,theme related, ui related, so we can create a display card or maybe a user cart or a theme card , so whatever you need to create , we will create logical separations and we will make small slices inside our redux store so this is what is a slice ,  initially this cart🛒(0) can be empty , it can be an  empty array but later on as we put data inside it ,it can just modify the cart slice , data inside the cart slice , so this is the redux slice(see image redux-data-flow.png) now when I click on this add button, how does the data go inside this cart slice?
//*  it's not simple , we can't directly add data to the cart slice, 'redux says that you cannot directly modify your cart slice', you cannot directly modify your cart slice , there is a way we can do that, what is that way?
//* suppose if I click on this add button, then I will have to dispatch an action ,when you click on this add button it dispatches an action , it dispatches an action (see image redux-data-flow.png), what happens after dispatching an action?  then  it calls a function ,  so now first of all when you click on this add button over here it dispatches an action  and then it calls a function and this function modifies the cart, this function will actually modify the card, we can't directly actually modify this cart(that's why need the steps we just learnt),  so when you click on this add button it dispatches an action that calls a function and this function internally modifies the cart, now what is this function actually ?
//* this function is basically known as a reducer  , so we have learned some Jargons first is dispatch an action there is a reducer function so now if I have to say it again I will say when you click on this add button it dispatches an action which calls a reducer function and this reducer function modifies cart , so basically if I have to repeat it once again ,  when you call when you hit the add button when you press the add button it dispatches an action which calls the reducer function which updates the slice of our Redux store ,And then our slice will be updated, the data will be updated , this item will be added to our slice , we can't directly add it, we have to go through this part we have to go through this path when we are using redux, Why we do all this ? why are we doing why are we making things complicated? it is not complicated it is it makes our life easier but how we know later , when we will write code  But for now just learn that when we click on this add button it dispatches an action which calls the reducer function that modifies the slice of our Redux store  and we have written the data inside our cart slice ,  so this was how to write data
//*suppose I want to read data right suppose now I have added this cart item in redux store ,now I want to get this data in the nav bar like this cart🛒(1),  in the nav bar the number of items should change , suppose if we had three items before and I added 1 more item so it should change to cart🛒(4) right .how can I read data from redux store , so what we have seen how to write data using this action dispatch ,function reducer, now we will see how to read data redux store and get over here in the  cart🛒(4), how can we get data from this cart ?
//*for that we use something known as a selector, we use something known as a selector , so what will happen is we will use a selector to read the data from our store and the selector will modify our react component on the UI,  so this is how you read data , so  suppose if you want to read the data here cart🛒(1) component  from the cart slice . In this component in this header component how will you do that? you will use a selector and this selector will basically give you data and there is one more jargon , that is ` subscribing  to the store,when we use selector` , so we say that header component is subscribed to our redux store  and `when I say subscribe the store basically it is in sync with the store right`, `if the data inside my store changes my header component will update automatically`   redux will automatically update the data inside header as soon as my store changes that is why we call this as subscribing to the store so basically our header component over here has subscribed to the store and how do you subscribe? => using a selector, so this is all about redux, if we  understand this in theory writing code is very very easy  , so when you click on this add button it dispatches an action which calls the reducer function which modifies the slice of the store which modifies the slice of the store and this slice of the store and you know this header component is subscribed to this to this store using a selector , so this is how the whole flow works this is how the whole cycle works
//* so basically behind the scenes what is happening this is what I am trying to say when you click on this add button here the data will update but how that data will get update so when you click on this add button we will dispatch an action that will that will call the reducer function that reducer function will update the slice right and because this component is subscribed to the store right using a selector it will automatically update , all this is happening behind the scenes and we have to understand this properly.
//* so the whole process in a single line line looks like :- 1.click(add btn) => 2. dispatches an event =>   3. calls reducer function => 4. make changes on the redux store slice => 5. selector(subscribed with the slice) => 6. updates the Ui.

//* so now to understand everything by writing code let's write down the steps we are gonna follow:-
/*## Redux Toolkit
 - install @redux/toolkit and react-redux
 - build our store 
 - connect our store to app
 - dispatch(action)
 - selector*/

//* so lets first install the libraries by using the command
//* npm i @reduxjs/toolkit and npm i react-redux
//* and these two packages are added in our package.json file as dependencies

//* now let's create our store , so we will create our store in utils folder, lets name our store file appStore.js. and inside it to create a store first we need to import a function from @reduxjs/toolkit named configureStore, as we need it to create the store that why we rae importing it from the redux toolkit. and we are gonna create a constant named appstore and it's value will be this function call we just imported configureStore({}), for starting we just put an empty {} inside it. and finally we export it as default.

//* now we need to provide this store to our react application. and to provide it we need to go to our root file so app.js and inside it we need to import something called Provider from react-redux . this Provider is like a component very similar to context Provider we used to provide context but here this provider is to provide the redux store. we need to provide this store to our react application so it's kind a bridge between react and redux and that's why we are importing it from react-redux.  now our whole root component will go inside this provider component. like this:-
/*    <Provider store={appStore}>
      <UserContext.Provider
      value={{ loggedInUser: userName, greetingMessage: `Hello` }}
    >
      <div className="app ">
        <Header />
        <Outlet />
       
      </div>
    </UserContext.Provider>
  </Provider>*/
//* and mention the store attribute is necessary because here we have to mention our store name so first we need to import appStore from appStore.js and then as the value of store attribute we need to mention it.like above.

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
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
