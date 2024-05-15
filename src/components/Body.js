import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
//* the restaurant data(object), logo img url, is some hardcoded data which we copied from the swiggy's api. but as it some hard coded data that's why we should never put these kind of data inside a component file like this snd best practice is create a separate file , for these kind of hard coded data , we usually name that kind of file config file or utils(utilities ) file or constants file. so here in this project we will create a separate folder inside the src folder and it's name will utils and inside utils folder we will create a config file. and inside config file we will put all of these data , because these kind of important data in gonna be used for many components like the logo can be used in the home page , in the header also the in the footer , so to keep these kinds of important data we make a separate file . and when ever some change happens then we don't need to go everywhere and change it we just need change it on the config file and it will be reflected in everywhere. so it also helps to make the data reusable.
//*so all the the constant dat will be inside config file like logo url. and the restaurant data will be inside a file called mockdata.js file in the same hierarchy level with config file.so let's create the mockdta file, and it also fine we would save the reslist data in the same config file.
//* Now we will do something with the search button so right now we have a search box which does nothing and beside that we will create a button which will filter out all of the restaurant which has rating above 4 star. so to that we usually a attach a eventlistener function after selecting that in javascript but in react it is more easier . so to attach a event listener to anu any element, we can directly add one attribute directly inside the element.like to add an click event listener we have to add an "onclick" attribute and it's value will be a callback where we can write what we want to do. and remember as the value of this attribute will be a javascript function so we have to write it inside {}.
//* now we want that whenever we will click on this top restaurant button, this should filter all the restaurants which has rating above 4 stars. now every react app we build , has an UI layer and a data layer, and whatever will come through this data layer that will be displayed through the UI layer, so the UI layer using the data layer to display the data dynamically. the data is nothing but the api data which is from the api, and right now we have that data hardcoded in the mockData.js file. so if we want to filter the top rated restaurants on click on the button then we just need to use filter method to filter all restaurant objects which has rating above 4 rating.  so let's do that, we are gonna filter the restaurant list array of object using filter method. and also print the resulting array to see if it is working. and now as a result it will print the filter array of objects which will only contain the restaurant object which has higher rating. so now we have the filter object, but it would have been better if the ui would be updated using this new updated data. till now that is not happening.

//* Power of React hooks:- to automatically change the UI using the the updated filtered data that we can use react hooks. react makes our app faster because it can do faster dom manipulation. right now our filtered data which newResList is a normal javascript variable , but to use the superpowers of react we can use react variable which is actually called state variable.and to create a state variable we have to use a react hook named useState() , there are also other hooks. Hooks are at end of of the day some javascript function. and these pre-written function has some super powers which is given to us by react.
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <div
          className="search"
          contentEditable="true"
          onClick={() => {
            {
              document.querySelector(`.search`).textContent = ``;
            }
          }}
        >
          Search
        </div>
        <button
          className="btn-top-rated-restaurant"
          onClick={() => {
            let newResList = resList.filter((res) => 4 < res.info.avgRating);
            console.log(newResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="cards-container">
        {/* //* restaurant cards */}
        {/*//* Example of passing props to a functional component */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
