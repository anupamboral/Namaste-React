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
//* Now we will do something with the search button so right now we have a search box which does nothing and beside that we will create a button which will filter out all of the restaurant which has rating above 4 star. so to that we usually a attach a eventlistener function after selecting that in javascript but in react it is more easier . so to attach a event listener to anu any element, we can directly add one attribute directly inside the element.like to add an click event listener we have to add an "onclick" attribute and it's value will be a callback where we can write what we want to do. and remember as the value of this attribute will be a javascript function so we have to write it inside {}.
