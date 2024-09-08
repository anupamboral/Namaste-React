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
//*let us just try to visualize how our Redux store looks like right so suppose this is my Redux store right this is my Redux store assume that this is a central place right and any component can access it inside our application in a react application any component can access this redux store ,it can write data it can read data from that store and it is like a very big object and it is kept in a central place and we do not all the data but most of the major data of our application into this redux store . Got it and you know this this is a reject store but I want to ask you a question I want to ask you a question is it a good is it a good practise to keep all the data inciting whole big object right in the one big whole state object is it good to keep all the data inside it yes let me tell you my dear friends it is absolutely fine there is no problem with keeping a very big object with a lot of data inside it it is completely absolutely fine but so that our redux tool does not becomes very big very clumsy we have something known as slices inside our Redux store right so think of it right so suppose this is our whole big Redux store right which we have which I have made from the red pen right so we have this we have parts of our Redux store which is known as slices right so what I am what I am drawing right now are these slices of our Redux store so you can assume a slice to be a small portion of a Redux store ok small portion of a Redux store right and we create multiple slices inside our Redux store this is one slice ok this is a slice inside our Redux store got it so now I want to ask you that why do we need slices and what are these slices actually right so let us take an example of our application right this this food ordering application what can be different slices inside our Redux store let me tell you what can be slices to keep data separate right to we make logical partitions and these logical partitions are slices so assume that suppose if we want to add car data into our redux store we will create a separate slice for a card data suppose if we want to keep logged in user info inside our redux store so we will create a user slice kind of thing right it's a user slice we can create a card slice what else data can we keep inside our store we can keep information about like something like themes right dark theme light theme and maybe theme colours and different type of logos and all that stuff right theme related ui related so we can create a display card or maybe a user cart or a theme card so so whatever you need to create right we will create logical separations and we will make small slices inside our reduction store so this is what is a slice keep taking down notes right this is a slice right what can be a slice there can be a card slice right there can be a user slice there can be different type of slices right there can be theme slice there can be more right whatever you want to do right there can be a slice for it got it but so we will create a cart slice right and it this cart slice will now hold all the data of the cart right initially initially this card can be empty right it can be an empty empty array but later on as we put data inside it it can just modify the card slice right data inside the card slice got it so this is the redox slice now when I click on this add button right when I click on this add button how does the data go inside this card slice how will the data go it's not simple right we can't directly add data to the card slice redux says that you cannot directly modify your card slice you cannot directly modify your card slice ok there is a way we can do that what is that way let me just explain it to you so but suppose if I click on this add button I will have to dispatch an action ok listen to be carefully there will be a lot of jargons which will be coming up keep taking now notes its really very important so when you click on this ad button right when you click on this add button it dispatches an action right it dispatches an action let me write it down it dispatches this patch action this patches and action right this patches an action what happens after dispatching an action right it calls a function right it calls a function right it calls a function I am trying to make a function over here or let me just make a beautiful thing right this is an action lets call this as action and here I have a function fn right so now first of all when you click on this add button over here it dispatches an action right note the word dispatch note the word action right and then it calls this function and this function modifies the card let me repeat it once again when you click on this add button it will dispatch an action right and then this action will then call a function and this function will actually verify the card we can't directly actually modify this card redux says that whenever you have to modify your cart right I am repeating it once again right please take keeping keep taking down notes please keep drawing along with me okay when you click on this ad button listen to me very carefully when you click on the if you understand this thing right what am I teaching right now writing code is very easy very very easy trust me right so when you click on this ad button it dispatches an action that calls a function and this function internally modifies the cart this function internally modifies the card let me just show it to you like this right let me just make it a little soon right let me make it a little zoom ok so let me make it a little zoom over here right so when you click on this add button it dispatches an action and it dispatches an action this action calls a function and this function modifies the cart got it now what is this function actually right what is this function this function is basically known as a reducer ok what is this function known as it is known as a reducer correct so we have learned some Jargons first is dispatch an action there is a reducer function so now if I have to say it again I will say when you click on this add button it dispatches an action calls a reducer function and this Producer function modifier cart right so basically if I have to repeat it once again listen to this very carefully right you know understand this if you understand this it will become very easy for you I am repeating it once again note down this line proper line right I am repeating this line please note down this line when you call when you hit the add button when you press the add button it dispatches an action which calls the reducer function which updates the slice of our Redux store listen to be very carefully once again when we click on this add button it dispatches an action which calls the reducer function which modifies the slaves which updates the slice of our head up store got it which updates the slice of our Redux store let me repeat it once again write 1 last time for you write one last time for you right when we click on this add button it dispatches an action which calls a reducer function which updates the slice of our Redux store easy right if you will see it it's very very easy dispatch an action reducer function modifies the slice of a redux store there are a lot of jargons I know this patch action reducer and then slice and then store and all that stuff but it's very easy make this diagram with you it's very easy it will understand this it life will become very easy for you right reducts using Redux will become very easy for you right now this is kind of like And then arc slice will be updated right and then our slice will be updated the data will be updated right this item will be added to our slice right we can't directly add it we have to go through this part we have to go through this path when we are using redux, Why we do all this right now a question would be coming to your head why are we doing why are we making things complicated it is not complicated it is it makes our life easier right I will tell you the answer to this later on right when we will write code okay so dont worry about it but for now just learn that when we click on this add button it dispatches an action which calls the reducer function that modifies the slice of our Redux store very easy and we have written the data inside it now our cart slice right the cart will have this redux store cart portion will have the card slice will have some data inside it not it so this was how to write data suppose I want to read data right suppose now I have added this cart item now I want to get this data over here right this item over here the number over here should change right suppose if we had three items before and I added 1 more item so it should change to 4 right how can I read data right so what we have seen how to write data using this action dispatch function reducer now we will see how to read data sorry we have seen how to write data now we will see how to read data from this card and get over here right how can we get data from this cart over here how can we get data from this card over here I will see for that we use right for that we use something known as a selector so listen to very carefully we use something known as a selector so note it down selector so what will happen is we will use a selector to read the data from our store and the selector will modify our react component right so this is how you read data let me repeat it once again so you will suppose if you want to read the data over here from the cart slice over here right in this component in this header component how will you do you will use a selector and this selector will basically give you data over here selector will give you data over here right and there is one more jargon right the last one trust me it's the last one that is the one as when we use selector right so this phenomenon Today is known as subscribing to the  subs subscribing to the store subscribing to the store note it down right so basically now let me let me revise the read now right let me revise the read now once again right so we say that header component is subscribed to our store right subscribe to our store and when I say subscribe the store basically it is in sync with the store right if the data inside my store changes my header component will update automatically right react will react this redux will auto magically update the data inside header as soon as my store changes that is why we call this as subscribing to the store so basically our header component over here has subscribed to the store right and how do you subscribe using a selector using a selector note down this keyword selector so this is all is redux my dear friend if you understand this in theory writing code is very very easy my dear friends very very very very very easy i'm telling you it will be very easy ok so let me just repeat everything once again hold read write everything once again okay so when you click on this add button it dispatches an action which calls the reducer function which modifies the slice of the store which modifies the slice of the store and this slice of the store and you know this header component is subscribed to this to this store right header component subscribe to this store using a selector right so this is how the whole flow works this is how the whole cycle works right so when I click on this add button right see what we will see on the screen right our screen will be this only right we will only be able to see this we wont see all this right we wont see Redux store we will just see this so what will happen is we will click on this add button and this will update right the data over there will be update to 4 how so basically behind the scenes what is happening this is what I am trying to say when you click on this add button here the data will update but how that data will get update so when you click on this add button we will dispatch an action that will that will call the reducer function that reducer function will update the slice right and because this component is subscribed to the store right using a selector it will automatically update so when you click on this add button in the and the data on the top will change all this is happening behind the scenes and you have to understand this properly I want to make it very easy for you you know a lot of you a lot of people use reducts they dont understand how they use reducts they just copy paste code here in their right stuff make it work but now I want to actually tell you what actually reducts is right how do we how do we write and read from Redux how what happens behind the scenes ok so you don't just have to copy paste I want you to know what is happening behind the scenes ok so once again right once again let us just revise it for the last time and then we will go and write code for all of that and let me tell you my dear friends it will become very easy to write code if you understand this ok so if you understand this it will become very easy to write code now again right so let me tell you let me write it once again right so first of all if you click on the add button right if you click on this add button right if you click on this add button right if you click on this add button what happens if you click on this add button it will  dis dispatch an action what will happen it will dispatch action I am writing it once again it will dispatch an action what will happen after that it will call a reducer function right I want to go slow you must be thinking that Akshay repeating again because it is important my dear friends when we click on this add button it dispatches an action right which calls this function what is this function this is a reducer function which calls a reducer function which updates which updates the This is a reader store right this is which updates the slice of our store right so basically slice of our stores let me write it down like this slice of our Redux store right this is our store this reducer function will update the slice of a reduct store.
//* recheck above
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
