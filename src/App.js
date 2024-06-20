import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);
