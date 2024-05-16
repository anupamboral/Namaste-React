import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//!Lesson 5 (Let's get hooked)

//! whatever we do using react we can also do that using html ,css,javascript so then why do we use use a library like react or framework?
//* because it makes your developer experience easy and fast. it makes you write less code and do more on the webpage.

//* some of the best practices in react world:- until now we have written all the components like - header,body, footer in the same file, and now our file looks ugly because of so much code in just one file and it is not a good practice. and the best practice in the industry is to create separate files for separate components.so we will not restructure our code and create files for separate components.though it is not mandatory to structure like this , we can even put all the code in a single file, but it is good practice to have good structure.and when evr we create a file for a component we should always name that file in the name of the component.
//* let's also know about a convention in the developer world which is to put all of the source code in the src folder.so all of the important files will be kept inside the src folder so let's create this src folder and move the app.js file inside it.and for adding components we will create also components folder inside src folder. so app.js is direct child of src folder which contains root level code and now whatever components we need inside App.js we will put those inside the components folder.

//* right now our javascript files has .js extension but as we are writing jsx inside this file that's why as the extension many developers .jsx extension. like App.jsx or when someone is writing typescript with jsx the they use .tsx extension. but it doesn't effect our app so we can use any of them.

//* the restaurant data(object), logo img url, is some hardcoded data which we copied from the swiggy's api. but as it some hard coded data that's why we should never put these kind of data inside a component file like this snd best practice is create a separate file , for these kind of hard coded data , we usually name that kind of file config file or utils(utilities ) file or constants file. so here in this project we will create a separate folder inside the src folder and it's name will utils and inside utils folder we will create a config file. and inside config file we will put all of these data , because these kind of important data in gonna be used for many components like the logo can be used in the home page , in the header also the in the footer , so to keep these kinds of important data we make a separate file . and when ever some change happens then we don't need to go everywhere and change it we just need change it on the config file and it will be reflected in everywhere. so it also helps to make the data reusable.
//*so all the the constant dat will be inside config file like logo url. and the restaurant data will be inside a file called mockdata.js file in the same hierarchy level with config file.so let's create the mockdata file, and it also fine we would save the reslist data in the same config file.
//* Now we will do something with the search button so right now we have a search box which does nothing and beside that we will create a button which will filter out all of the restaurant which has rating above 4 star. so to that we usually a attach a eventlistener function after selecting that in javascript but in react it is more easier . so to attach a event listener to anu any element, we can directly add one attribute directly inside the element.like to add an click event listener we have to add an "onclick" attribute and it's value will be a callback where we can write what we want to do. and remember as the value of this attribute will be a javascript function so we have to write it inside {}.
//* now we want that whenever we will click on this top restaurant button, this should filter all the restaurants which has rating above 4 stars. now every react app we build , has an UI layer and a data layer, and whatever will come through this data layer that will be displayed through the UI layer, so the UI layer using the data layer to display the data dynamically. the data is nothing but the api data which is from the api, and right now we have that data hardcoded in the mockData.js file. so if we want to filter the top rated restaurants on click on the button then we just need to use filter method to filter all restaurant objects which has rating above 4 rating.  so let's do that, we are gonna filter the restaurant list array of object using filter method. and also print the resulting array to see if it is working. and now as a result it will print the filter array of objects which will only contain the restaurant object which has higher rating. so now we have the filter object, but it would have been better if the ui would be updated using this new updated data. till now that is not happening.

//* Power of React hooks:- to automatically change the UI using the the updated filtered data that we can use react hooks. react makes our app faster because it can do faster dom manipulation. right now our filtered data which newResList is a normal javascript variable , but to use the superpowers of react we can use react variable which is actually called state variable.and to create a state variable we have to use a react hook named useState() , there are also other hooks. Hooks are at end of of the day some javascript function. and these pre-written function has some super powers which is given to us by react.
// * ## React Hooks
// * - normal js utility function written by react developers
// * - important hook names
// * - useState() (super important react hook)
// * - useEffect()
// * - to use a hook we need to import it from the react file as named import (remember when we imported React itself from the react file it was a default import but in case of hooks we have to import them as named import using {})
//* - useState hooks is used to create state variables, and it is called state variable because it maintain's the state of our component, and if we create a state variable inside a component then we can say the scope of the state variable inside the component like we say a variable's scope is inside a function.now to create a state variable we have to call the useState () function and assign this as a value of a let variable and we are using let keyword because the state can be changed anytime. and the variable name should be inside an array [] like ,let [listOfRestaurants]=useState();. it is like we just declared a state variable not initializing its value .so basically similar to declaring a normal javascript variable like let listOfRestaurants;. but instead of declaring a normal javascript variable , we declared a react state variable which has some super powers.

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
