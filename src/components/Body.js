import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
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
//* so if want to explain it using react language we can say :- whenever a state variable updates react re-renders the component. if we were using javascript then we had to manually re-render the Ui when something updates.but as here using react state variable to store the data so when something gets updated in the data , react also re-render the component which is using that state variable's data.

//? ways of fetching data in react (when user first loads the page)
//* see image:- ( "ways of fetching data in react.png")
//* now let's make our web app more dynamic,till now we were copy pasted the api data from swiggy's api but it is not good practice , so now we will try to fetch the data directly from the api , now in react there mainly two ways of fetching data to render it on the ui.
//*1. loads => api call(500ms) => Render , in this when the user loads the page then browser immediately makes an api call and that api call takes 500 ms to retrieve the data , then immediately the bal;cnk Ui will be filled using the data, so the have to wait for 500ms with the blank page and then the data arrives and suddenly all the data will be displayed.
//*2. Loads => Render(just skeleton) => api call(500ms) => Rerender. in this approach when the user open the website immediately some skeleton data will be shown to the user not a a blank page, then immediately the browser makes an api call and then after 500ms when the arrives then it rerenders the Ui with the arrived data.
//* this second process may look complicated but this is actually better , user experience friendly approach, because in the first approach the user had to wait for 500ms to see the ui before that he was seeing the blank page but then suddenly the data arrives and the user sees the Ui and it is very bad for user experience, but in the second approach , as soon as the user opens the website, a Ui skeleton at least will be shown to him then the browser makes the api call and then when the data comes the rerenders the ui and display the data which very good for user Experience. because in this approach , the user doesn't sees the blank page when he open the website first time, so we will try to use use this second approach.
//* so in react we always use the second approach. and to use it we have learn about useEffect() hook.
//? What is a hook? => as we learned in the previous lesson that a hook is actually a javascript function(method) which has a specific usecase. and now we are gonna learn about useEffect() hook.

//? UseEffect() hook:- this hook is also a javascript function, and while calling this method we have to pass two arguments , first one is a callback function and second one is a dependency array. so the first argument is a callback function , and this callback function will be called be useEffect hook when the component is rendered on the Ui and then it calls the callback function. here we are gonna use this UseEffect() hook inside the body component , so that means when rendering of the Body component will be rendered on the Ui only then useEffect hook will call the callback function which we passed inside it.So now we can say that, when we need to do something after the component renders then we have to use useEffect hook.
//*we can also go to sources tab of the developer tools and inside Body.js we can add debugger(breakpoints) one front of useEffect and another front of return keyword where the component returns, we will see that useEffect hook will only call the callback function when the component rendering has been rendered.
//* but why are we learning useEffect() hook? because using it we can easily implement the second way of fetching data when the user opens the page, so first we will render the body component with skeleton data and then make the api call inside the useEffect hook, so the call will happen only when the component is rendered.and to do fetching let's go to swiggy's website and get the url they use for their api. and then using the fetch method(a browser api not part of javascript) we will try to fetch the same object from the api...
//*but after trying to fetch we will get an error in the console.The error is because of cors policy. so according to the this cors policy we can't make a api call to this api url because the origin is different, so we are making the call is localhost origin, but the api is from swiggy's origin, and to deal with this problem we can install an extension named "CORS: Access-Control-Allow-Origin" from chrome web store . then after activating this extension from extension tab, we will see that the error will be gone and we are able to fetch data from the swiggy's api url.
//* so till we were rendering from the mockData which we saved as the value of the state variable named `listOfRestaurants`. and then we were iterating this array of objects using map method. then rendering the cards from the mockData, but now we are gonna make it really dynamic, so to do that first we will render the the fake data from mockData and then after rendering it then we will make the api call to get the real data from api inside useEffect() hook so all of this can happen when the component is already rendered. then after the real data comes we will again change the value of the state variable, and this time the state variable's value will be the real data we just received from the api, and as the state variable's value changes so it will automatically re-render the UI. we can't pass directly json inside the setLisTOfRestaurants() beacuse we to pass the same format of array of objects as mockData. so to that inside the useEffect hook after fetching the data, we will pass this:-setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants); so to  keep the format same,  .
const Body = () => {
  //*useState Hook
  //* ℝ𝕖𝕒𝕔𝕥 𝕝𝕠𝕔𝕒𝕝 𝕤𝕥𝕒𝕥𝕖 𝕧𝕒𝕣𝕚𝕒𝕓𝕝𝕖.(using useState() hook)
  //*useState returns an Array and from the array using destructuring we get the state variable, and the second variable which we destructured starts with "set" word, because it is used to set or change the value of the state variable, and this setListOfRestaurants which is second parameter is actually a function and we call it and pass the new value of the state variable, after calling this function it immediately creates a virtual DOM and using Reconciliation algorithm it updates the UI so much faster.
  let [listOfRestaurants, setListOfRestaurants] = useState(resList); //* any default value will be written inside (), here reslist is default value .

  //* 𝕟𝕠𝕣𝕞𝕒𝕝 𝕛𝕤 𝕧𝕒𝕣𝕚𝕒𝕓𝕝𝕖.
  // let listOfRestaurants=[];//*[] is default value.

  //* ⁡⁣⁢⁣UseEffect(hook)⁡(import as named import from core REact file.)
  //*takes two arguments, first one is a callback function and second one is a dependency array.so the first argument is a callback function , and this callback function will be called be useEffect hook when the component is rendered on the Ui and then it calls the callback function

  useEffect(() => {
    //* making the aoi call when the cards components are already rendereed with some fake data, to make a better user experience.
    console.log(`useEffect called`);
    const fetchData = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.57400&lng=88.31910&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      console.log(json);

      setListOfRestaurants(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    };
    fetchData();
  }, []);
  console.log(`body rendered`); //*this will be printed before the above console.log() because it is inside useEffect method, but the above callback function will be called only when this whole body component rendering will be finished.

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
