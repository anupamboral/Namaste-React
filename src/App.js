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
//* and mention the store attribute is necessary because here we have to mention our store name so first we need to import appStore from appStore.js and then as the value of store attribute we need to mention it.

//* now the next step is to creating the slices.

//* to create  a cart slice , again inside the utils folder we are gonna make another file named cartSlice.js and inside it we will create the slice . so inside this file we need to first import a function from @reduxjs/toolkit named createSlice()  as it is related with creating the slice in redux  . and now we will create a constant named cartSlice , and it value will the createSlice() function call and now this function takes some configuration to  create the slice . first inside the function we have write a object because we have to give the configuration as key value pairs of the object. now inside the braces first we need mention the name property and it's value will be `cart` as we are making this slice for a cart. the second configuration is initialState .it is a object and inside it we have to mention the initial state of our cart. let keep the initial state - items:[]; an empty array.
//* now the next property we need to mention is `reducers` and it's again an object and inside it we need to write reducer functions corresponding to each action. so what are the actions inside a cart? we can add an item , remove an item , clear the cart etcetera.
/* reducer:{
addItem:(state,action)=>{
  state.items.push(action.payload)
  }; here addItem is an action which mapped to the reducer function  which will modifies the data inside the slice.  so we already learned it in the theory. 

  removeItem(state,action)=>{
    state.items.pop()
    }

  clearCart:(state)=>{
    state.items.length = 0;
    }  
}*/
//*  So the above is the list of reducer functions we need for our car so the first action is add item and when this action will dispatch Then the reducer function attached with it/mapped to it , will be called and these function get access to the two parameters first one is the state so this is the same state as the initial state but to get access inside the function we need to mention it as the parameter then only we can access it inside the function and the second parameter is the action so depending on this action we will modify our slice so as we can see in the first reducer function that we received these two parameters and then inside the function we have selected the state and inside it we selected the items and as th proper property is an empty array so we use the push method to add the item inside there and then inside the push method we pass action.payload. here payload is the item which we will get from the action.

//*The second reducer function is for removing an item the action name is removeItem and And it gets access to the same parameters first one is the state and second one is the action and inside the function we simply use the pop method to remove the last item but in the future we will modify it more because the pop method is not the correct one to use here because pop method is gonna just remove the last item but actually here we need to select the index of the removed item and using that index we have to remove that particular index item

//*And the third reducer function is emptyCart and as the parameter we will receive the state and here we do not need the action because inside the function we are just deleting all of the items of the array that's why we don't need the action though we can still receive it using the parameter.

//* and now we will export the reducers functions and also the actions from from cartSlice (inside cartSlice.js), like below
//*1. exporting actions
/*export const { addItem, removeItem, clearCart } = cartSlice.actions; //* exporting actions after destructuring, and this weird syntax is given by redux, and I'm saying it weird because their is no action property inside cartSlice, instead, inside the reducer object we write all of the action names(like property names) which are pointed towards their reducer functions, but as redux given us this syntax that's why we have to follow it.
//* 2. exporting reducer function 
export default cartSlice.reducer; //* exporting reducers functions
*/
//* so let's understand what is happening behind the scenes,so while we call createSlice() method to create the slice, and assign this function call to the constant named cartSlice, that's from the function call returns an object in this cartSlice constant. and that object will look like:-
/*
{
  actions: {
    addItem, removeItem, clearItem, clearCart;
  }
  reducers
}
*/
//* and that's why when we export the actions and reducer, we need to do the destructuring like that.

//* and now we need to add this slice into our store( appStore we built for redux store) , and to add the slice to store we first exported the actions and reducer from the cartSlice. and we need import this actions and reducer into our store(appStore), and one more important thing is that, the store also has its own reducer(an object which contains all the reducers of different slices like a big reducer which contains all of the reducers of different slices.) , so now inside the appStore we need to import the reducer and as the the reducer export was a default export like this:-export default cartSlice.reducer , so we can change the name while importing it in the appStore like cartReducer. so let's import it first. then we will add the cartSlice's reducer inside the reducer object of the store. and now our store and the cart slice is connected.

//* and now let's try to read the data from the store, and to read the data remember what we need to do? let's go back to the diagram of redux-data-flow.png. in the diagram we can see that the cart(in our header section of our ui) should be subscribed to the redux store cartSlice through a selector.
//* using the selector we want to show how many items inside the cartSlice of the store.
//* the selector we are talking about is hook inside react. and the hook's name is useSelector() hook. and remember hook is just a normal javascript function/method. and this hook helps any part of our Ui (in this case `cart`) to subscribe to the store. so let's go out header.js file because there our cart is located, and there first we are gonna import the useSelector hook from react-redux as a named import.
//* and we need to use it like this:-
/*
const cartItems = useSelector((store) => { store.cart.items});//* inside this hook we write a callback function where as the parameter we get access to the whole store , and inisde the braces we have write which part/portion of the store we want to subscribe. like here we want the cart to be subscribed with the cart slice and our cartItems constant will get access to the all items inside the cartSlice. and now we just need to use it wherever needed. so now inside our cart element of the header , we will use this cartItems ro show the number of items.*/
//* and then we can use the length property on this cartItems to show the number of items like this:-<Link to="/contact">Cart🛒({cartItems.length})</Link>.

//* till now we were adding fake items to the cart , but now it's time to add real items from restaurant menu list. and remember to mutate the state basically add some data on click of the add btn(inside every menu item), we have to dispatch an action on the btn click,that will call the call the mapped reducer function with the action, and finally the reduce function ill update the state , and as the cart is in sink with the cart slice so it will be automatically updated.
//* now to dispatch an action on add btn click , we have to go to menuitem.js file because there our add btn exists, on click of this btn we will call a function which will dispatch an action//* now let's name that function handleAddItem(see below the function), the function will be called on add btn click, now first to dispatch a action we need another function ,we will get it from a hook named useDispatcher, so we need to import it first from react-redux, and then call it and save its returned value inside a constant, it basically returns the dispatch function, so that's why we also named the constant dispatch, and it is function which we will use to inside dispatch a action inside the handlerAddItem(), so inside the handleAddItem function first we will call this function , but we need to pass some arguments while calling this dispatch function, so first of all we need import the action we need , so this handler is for adding the item and that's why we need addItem action , and remember we already created it inside our cartSlice, so lets import it first , now inside the dispatch function call we need to call this addItem action like a function call , and inside it we have to pass an argument and this argument is basically the  menu Item,for now let's just write `pasta` as argument and test it , if the cart is updating or not.and now we go to to any restaurant's menu page and just click the add button then we will see the cart item numbers are increasing with every click and even we can see the added items in the rray if we open the console, and this is happeniung because the cart is in sink in the cart slice the cart is subscribed to the cart slice, that's why it's is automatically updating. so let's analyse what's happening behind the scenes.so when we dispatch the action like this:-  dispatch(addItem(`pasta`)); then it creates, an object like:-
/***⁡⁣⁢⁣{
    payload: `pasta`;
    type: "cart/addItem";
}⁡*/
//* and this is the object which goes inside the reducer function as the second parameter action
/*⁡⁣⁢⁣addItem: (state, ​‌‍‌‍𝗮͟𝗰͟𝘁͟𝗶͟𝗼͟𝗻​) => {
      //* the below code will mutate the state
      state.items.push(action.payload);
    }⁡,*/
//* this action is the object returned by the dispatch function , and this object has an payload property which contains the actual data which we want to push,that's why when we push the data we write action.payload. because payLoad property contains the actual data.
/*
 ⁡⁣⁢⁣ const dispatch = useDispatch(); //*Returns the dispatch function from the Redux store.

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };//*called on click of the add btn⁡
*/
//* so for testing we used just pasta but let's pass real data inside the payload like this, onClick={()=>handleAddItem(item)}, and then we get it as a parameter and inside addItem action call we pass this item.
//* and when the user clicks on the cart, we want to show a cart page so lets build it.and also don't forget to add the path of the page in App.js in router configuration.
//* now let's build our cart.js page , so first we built a normal cart page and as we need to display the added cart items, we can reuse our MenuItem component because it is a similar component as we need. so first to reed data we useSelector hook, as we want our cart component to be subscribed with the cart slice. and after the getting the data from it we saved it inside a constant named cartItems, and now this cartItems is an array of objects and each object represents a different restaurant. now we have to use this data to pass inside MenuItem component. but MenuItem takes item as prop not the whole ItemList as prop. that why we iterated the array of restaurant objects using mapmethod and each iteration we passed the item from the Itemlist.
//* we also used ternary operator to show the cart items when it is not empty but when it is empty we will display a empty cart message

//* now let's add a empty card btn, so let's first create the btn on ui, and then to make the cart empty on this btn click , we need to attach an handler function with it, and remember to mutate some data in the cart slice of redux store, first we need to dispatch an action, so first import useDispatch hook from react-redux . and now call this hook and saved the returned function into a constant named dispatch  . and now we will this dispathch function inside our handleCart function, but before that we need to import the clearCart action from cartSlice.and now inside the handler function first we need dispatch function inside itand then the clearCart action , we need to caal both like this:- dispatch(clearCart().)

//*  we also created a  the handleSearch function in body.js file for adding restaurant searching feature using the keyboard enter btn because we need to use it twice , once  when the user clicks on the search btn after entering the restaurant name in the input feild and second when the user search through the clicking enter on keyboard and that handler we need to attach on the input element .and to call the handlerSearch callback function on enter key press we need attach a handler on the search input element like this:-onKeyDown={(e) => e.key === "Enter" && handleSearch()}.

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
