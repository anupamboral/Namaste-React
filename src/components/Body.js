import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
//* the restaurant data(object), logo img url, is some hardcoded data which we copied from the swiggy's api. but as it some hard coded data that's why we should never put these kind of data inside a component file like this snd best practice is create a separate file , for these kind of hard coded data , we usually name that kind of file config file or utils(utilities ) file or constants file. so here in this project we will create a separate folder inside the src folder and it's name will utils and inside utils folder we will create a config file. and inside config file we will put all of these data , because these kind of important data in gonna be used for many components like the logo can be used in the home page , in the header also the in the footer , so to keep these kinds of important data we make a separate file . and when ever some change happens then we don't need to go everywhere and change it we just need change it on the config file and it will be reflected in everywhere. so it also helps to make the data reusable.
//*so all the the constant dat will be inside config file like logo url. and the restaurant data will be inside a file called mockdata.js file in the same hierarchy level with config file.so let's create the mockdta file, and it also fine we would save the reslist data in the same config file.
//* Now we will do something with the search button so right now we have a search box which does nothing and beside that we will create a button which will filter out all of the restaurant which has rating above 4 star. so to that we usually a attach a eventlistener function after selecting that in javascript but in react it is more easier . so to attach a event listener to anu any element, we can directly add one attribute directly inside the element.like to add an click event listener we have to add an "onclick" attribute and it's value will be a callback where we can write what we want to do. and remember as the value of this attribute will be a javascript function so we have to write it inside {}.
//* now we want that whenever we will click on this top restaurant button, this should filter all the restaurants which has rating above 4 stars. now every react app we build , has an UI layer and a data layer, and whatever will come through this data layer that will be displayed through the UI layer, so the UI layer using the data layer to display the data dynamically. the data is nothing but the api data which is from the api, and right now we have that data hardcoded in the mockData.js file. so if we want to filter the top rated restaurants on click on the button then we just need to use filter method to filter all restaurant objects which has rating above 4 rating.  so let's do that, we are gonna filter the restaurant list array of object using filter method. and also print the resulting array to see if it is working. and now as a result it will print the filter array of objects which will only contain the restaurant object which has higher rating. so now we have the filter object, but it would have been better if the ui would be updated using this new updated data. till now that is not happening.

//* Power of React hooks:- to automatically change the UI using the the updated filtered data that we can use react hooks. react makes our app faster because it can do faster dom manipulation. right now our filtered data which newResList is a normal javascript variable , but to use the superpowers of react we can use react variable which is actually called state variable.and to create a state variable we have to use a react hook named useState() , there are also other hooks. Hooks are at end of of the day some javascript function. and these pre-written function has some super powers which is given to us by react.
//* ## React Hooks
//* - normal js utility function written by react developers
//* - important hook names
//* - useState() (super important react hook)
//* - useEffect()(another hook name)
//* - to use a hook we need to import it from the react file as named import (remember when we imported React itself from the react file it was a default import but in case of hooks we have to import them as named import using {})
//* - useState hooks is used to create state variables, and it is called state variable because it maintain's the state of our component, and if we create a state variable inside a component then we can say the scope of the state variable inside the component like we say a variable's scope is inside a function.now to create a state variable we have to call the useState () function and assign this as a value of a let variable and we are using let keyword because the state can be changed anytime. and the variable name should be inside an array [] like ,let [listOfRestaurants]=useState();. it is like we just declared a state variable not initializing its value .so basically similar to declaring a normal javascript variable like const listOfRestaurants;. but instead of declaring a normal javascript variable , we declared a react state variable which has some super powers.and if we want any default value then we can write that inside the () of useState function when we are calling the function. like in this case , list of restaurants is an  array of object. so then the initial default value should be an empty array , which will filled with objects when the api data will come, so we like write like this:-  let [listOfRestaurants]=useState([]) ; this [] empty array  is now the default value of the state variable we have created.and this variable also work like a normal variable.
//*Changing the value of a state variable and to change this state variable value we can't assign a another value normally we do like let listOfRestaurants= 2; even it's declared with let keyword.to change it's value we have to use another function which mention as another second parameter  inside the array beside the  variable name. and the convention is to start second name with set so in this case we will give name the second "setListOfRestaurants" so let's do it.and setListOfRestaurants is a function which will be used to update the state variable. so basically whenever we want to update the state variable we have to  call this setListOfRestaurants function and while calling we have to pass the new updated value; so in this case we will pass the filtered restaurants as argument inside this setListOfRestaurants function and this function call will be triggered when we will click on top rated restaurants button.and it's time to see the super powers of state variable, so let's to go our webpage , and click on the top rated restaurant button. and we will surprisingly see that listOfRestaurants array and the UI both are getting updated with the filtered high rated restaurants.
//* this happens because state variable will keep the data in sink with the UI layer. when are updating the data(array of restaurant objects) it will also update the UI automatically , we don't need to update the UI manually.And that makes this state variable so powerful because we don't need to update the data layer and the ui layer manually if we change one of them then the other one will be also changed because that state variable will maintain the state and whenever any change happens then that will be reflected also on the other part so some change happens on the ui layer then that will be also reflected on the data layer and vice versa so now as we are using the state variable we do not need to care about maintaining both the ui layer and the data layer manually the state variable will handle it as it maintains the state on Both Ui layer and data layer at the same time.

const Body = () => {
  //* React local state variable.
  let [listOfRestaurants, setListOfRestaurants] = useState(resList); //* any default value will be written inside (), here reslist is default value .

  //* normal js variable.
  // let listOfRestaurants=[];//*[] is default value.

  return (
    <div className="body">
      <div className="search-container">
        <div
          className="search"
          onClick={() => {
            {
              document.querySelector(`.search`).textContent = ``;
            }
          }}
        >
          Search
        </div>
        {/*// ** below button is for testing only */}
        <button
          className="btn-top-rated-restaurant"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => 4 < res.info.avgRating
            );
            // using the setListOfRestaurants method tyo change the state and this will triggered when the user will click on this button.
            //*updating the state
            setListOfRestaurants(filteredList);
            // console.log(filteredList);
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="btn-top-rated-restaurant"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => 40 > res.info.sla.deliveryTime
            );
            // using the setListOfRestaurants method tyo change the state and this will triggered when the user will click on this button.
            //*updating the state
            setListOfRestaurants(filteredList);
            console.log(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Quick Delivery Restaurants
        </button>
      </div>
      <div className="cards-container">
        {/* //* restaurant cards */}
        {/*//* Example of passing props to a functional component */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
