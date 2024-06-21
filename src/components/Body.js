import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//* the restaurant data(object), logo img url, is some hardcoded data which we copied from the swiggy's api. but as it some hard coded data that's why we should never put these kind of data inside a component file like this snd best practice is create a separate file , for these kind of hard coded data , we usually name that kind of file config file or utils(utilities ) file or constants file. so here in this project we will create a separate folder inside the src folder and it's name will utils and inside utils folder we will create a config file. and inside config file we will put all of these data , because these kind of important data in gonna be used for many components like the logo can be used in the home page , in the header also the in the footer , so to keep these kinds of important data we make a separate file . and when ever some change happens then we don't need to go everywhere and change it we just need change it on the config file and it will be reflected in everywhere. so it also helps to make the data reusable.
//*so all the the constant dat will be inside config file like logo url. and the restaurant data will be inside a file called mockdata.js file in the same hierarchy level with config file.so let's create the mockdta file, and it also fine we would save the reslist data in the same config file..

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
//* so till we were rendering from the mockData which we saved as the value of the state variable named `listOfRestaurants`. and then we were iterating this array of objects using map method. then rendering the cards from the mockData, but now we are gonna make it really dynamic, so to do that first we will render the the fake data from mockData and then after rendering it then we will make the api call to get the real data from api inside useEffect() hook so all of this can happen when the component is already rendered. then after the real data comes we will again change the value of the state variable, and this time the state variable's value will be the real data we just received from the api, and as the state variable's value changes so it will automatically re-render the UI. we can't pass directly json inside the setLisTOfRestaurants() beacuse we to pass the same format of array of objects as mockData. so to that inside the useEffect hook after fetching the data, we will pass this:-setListOfRestaurants(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants); so to  keep the format same,  .
//* now our cards component is fully dynamic , and till now the default value of the state variable was resList(mockData) , and for testing purpose we were the cards components with the mockdata when the user loads the page then after rendering all the components , we were making api call then after receiving the data we are re rendering the cards, so the user will not see any blank page when he opens the page, and now it's time to complete it , after making the component dynamic we are now setting the state variable's  default value to an empty array, so first the the Ui will render but without the cards then the data comes from api then we display the cards. so the user will not see any blank page at first, instead he will see the the UI , with empty cards then when the datat arrives we display the cards.
//* so while changing the state variable data by this:- json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants , with this deep object , we should not directly write it instead we should optional chaining to write it , so any property doesn't exist then we can get undefined .so the current format should be :- json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.

//*So now our state variable's Default value is an empty array previously we were showing some fake cards for testing purposes and we were showing those fake cards before the api response so the user would not see any blank page ,But now as we set its value To an empty array that's why when the user loads the page immediately the ui will appear but inside the body no cards will appear But that's not what we wanted so while we were loading the data from the api then we could also show a loading spinner and to do that we just need to write a if condition inside the body component so actually what we need to do is actually inside the if condition we will just write that if the list of restaurant.length === 0; Then load a spinner and to load a spinner we would have to make another component which will be rendered when the api is loading the data
//*⁡⁣⁢⁣Shimmer Ui⁡:-but using a loading spinner is not a modern practise in today's world and in the current world scenario most of the popular websites use something called shimmer ui and to create a shimmer ui for our web app first we need to understand that what is it so previously before loading the data we were showing fake cards using mog data but when we use shimmer ui then we basically display some skeleton cards that means cards Which looks very similar to the actual cards but these skeleton cards does not contain any data inside them and usually developers use a grey color for this skeleton cards and all of this is created because when the data arrives and we render the actual cards with real data then it makes the user feel that the blank skeleton cards are getting filled with real data so some colorful cards so the user was not seeing any drunk page or some fake cards with some fake data or even not a loading spinner instead now he is gonna see some skeleton card which are gonna be filled up when the actual data arrives and it makes the user experience so much better and the user feels that the web app is loading so much faster.So let's create a shimmer Ui for our component.we will create a another file named Shimmer.js and then create a function component which resembles to our present component but with no data and greyish color. and we will render that when the listOfRestaurants is empty so basically before loading the page.
//*Conditional Rendering:- So conditional rendering just a fancy name of we just did right now so basically rendering on the basis of conditions so in the above example when our state variable was empty in that condition we rendered the shimmer ui so basically our skeleton ui which prevents the user to see a blank page and then whenever the real data response comes from the api then we save that inside the state variable and then instantly state variable will render the component and then these first condition becomes false Because now the state variable is not an empty array and now it is filled with the real data so now the real card components will be rendered so as a conclusion we can say that when we render components depending on different conditions that is then called a conditional rendering and as an example we can say that when a user loads a page at that time We display some fake components which are basically some skeleton components(shimmer ui) And then whenever the data comes as the response of the api then in that condition immediately we display the real data on the ui so depending on the condition we are rendering different things on the ui and this is called conditional rendering.
//*And to do this conditional rendering, it is not even necessary to use an if statement instead we can also use ternary operator which is more easier and clean way so let us also do that.

//* ⁡⁣⁣⁢⁡⁣⁢⁣𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗮 𝘀𝗲𝗮𝗿𝗰𝗵 𝗯𝗮𝗿 𝘁𝗼 𝘀𝗲𝗮𝗿𝗰𝗵 𝗿𝗲𝘀𝘁𝗮𝘂𝗿𝗮𝗻𝘁𝘀⁡

//* so now beside the top restaurants btn , we will create a restaurant searching btn, so let's go our body component and build the btn first.

//* so inside a div we created a text input element(for search box) and a search btn, now we want that when the user will click on the search btn , then on that click event , we get the inputted value from the input element, and then using that value we want to filter the restaurant cards and update the Ui after filtering, and a very important step is that we have to bind this input element with a local state variable to track what user is typing in the input box. now inside the body component we will first make a local stat variable named searchText. and no to bind this variable with the input element , we need to use an attribute inside the input element named "value" and this attributes value will be the state variable we created. and the state variable's default value will be empty string as at first the search input's value should be empty. and after this now our input element is connected with state variable "searchText". but now if we try to tyoe anything on the search box then we are gonna see that nothing is happening in the search box and the search box is not taking any input and we can't write anything inside the search box. and the reason behind this is that, as we previously set the value  ={setText} so the default value of the state variable which is empty string , is basically preventing the Ui to input any data , because value={setSearchText} so we have to do something which allows us to change the state variable's value when the user types something in the search box(input elm) and to do that we know we have to use the the function which we get as the 1st index of the state variable's array. so "setSearchText()" function. but how to use it? , so want that when the user inputs something in the input element then the state variable's value should change so to do that we have to use a event listener inside the input elm named onChange listener , it basically gets triggered when user inputs something . and inside this event listeners callback function first we will receive the event as parameter and then use this event to get the value from the input elm and then call the setSearchText function with this value . so this will also change the value of the state variable. and now user can input any value and when the user click on the search btn then we can access that value and let's print that in the console first.
//* and now we will be surprised to see that when ever we adding even a single letter the console.log() we did is gonna print so if we write pizza that will print 5 times in the console, many developer may think that when we writing something in the input field then only the input field is changing but the answer is no, because when a state variable's value change every time it triggers the re render process or react reconciliation process. and that means every time it re render the whole body component, so when have written pizza in that time the the whole body component re rendered 5 times.and this react reconciliation process  makes react dom manipulation so much faster.

//* so we want that whenever we click on search btn after we type something on the input box,then our restaurant cards name should filtered on the basis of what the user inputted. so now we are add onclick event listener in the search btn, and inside it's callback function we will write the logic to update the cards.to do that we are gonna use filter method to filter the restaurant name using the user input. so while filtering we will check if the listOfRestaurants.name includes the the user input or not, so let's the restaurant name is laddu coffee so even the user inputs only coffee in that case also laddu coffee will filtered because we are gonna use includes() method. but still we will face a problem which is our filtration process is still not Case insensitive so that means if the user inputs COFFEE or CoFFEe then the filtration  will not work and the solution is to use .toLowerCase() method on both user input and in the name property in our ListOfRestaurants. so that will make our filtration process case insensitive.so even the user inputs COFFEE or CoFFEe , still the laddu coffee restaurant will be shown.so after filtration we are gonna save this filtered array into a variable named filteredRestaurant and then we are now gonna call setListOfRestaurants(filteredRestaurant) with filteredRestaurant and as the value of the state variable changes , it will immediately re render the whole cody component with new filtered restaurants according to user input.

//* a bug we introduced:- But do our searching functionality is working right now but still we have introduced a new bug So the bug is that if we search second time some other restaurant From all of the restaurants list we received from the api Then we'll see that it is not working and we're not getting our assumed result and it is happening because while doing our first search we updated the list of restaurants State variable and now second time when we are searching then we are using the filtered Restaurant list We filtered some time ago and not the real data we got from the api so we can clearly see the problem that while doing the search updating the original listOfRestaurants State variable caused the problem and the solution of this problem is basically creating another state variable which we are gonna name filteredRestaurants These state variables value will be an empty array as default value and then when the user search something by clicking on the search button then we will update this filtered restaurant state variable and now we will use this state variable to basically display the restaurant  cards Inside the cards container so basically we will use this filteredRestaurants instead of listOfRestaurants State variable To display all of the cards inside the cards container so now one problem is solved because we are not directly updating the list of restaurant state variable and that eventually will help us to keep all of the restaurant data inside our state variable so now the user will search then we can use this list of restaurants state variable as it has all of the required restaurants which we received from the api But doing this will cause another bug And the work is as we're using the filtered restaurants state variable to display all of the cards So now when the user opens our website for the first time he will not be able to see any of the cards when we are receiving the data from the api then we are saving the that data inside list of restaurants state variable but while rendering we are using filtered restaurants state variable but at the beginning it is just an empty array So the solution is that inside the use effect when we are receiving the data from the api at the beginning then We have to update both of the state variables listOfRestaurants and filteredRestaurants And that will eventually help us to solve this problem now at the beginning the real data is also gonna be saved inside the filtered restaurant's state variable and as our component uses this state variable to display all of the cards so it will be able to display all of the cards at the beginning when we receive the data from the api and another state variable which is list of restaurants we will keep it unchanged because All data which we received from the api is saved inside this list of restaurants state variable so whenever the user will search something then we will use this list of restaurants state variable So he can search from all of the restaurants we received at the first place from the api.
//* and every thing will work as we wanted, and the search feature is finally implemented properly.

//* CORS plug in issue:- Right now we're using a chrome extension for the Cross origin resource sharing (Cors) Problem and the problem was happening because we are trying to fetch data between two different origins It means basically from between two different domains like one is local host and another one is Swiggy's api so the domain of both of the websites are different because of that the browser basically prevents to fetch the data from different origin/ domain. And to tackle this problem we were using home extension named allow Cors, But that is not enough because if we host our website on some hosting service like Netlify or some other place which will help us to show our proj to to different persons using the url then when they will open our website then there is no guarantee that they will have the same extension already downloaded in their sys so so then because of the cors ,that user's browser Will be unable to fetch data from swiggy's api ,so to tackle this problem We can use a website named https://cors-anywhere.herokuapp.com/(or we can also search cors proxy sites) Why you just need to go to their website and then we will find a link in their website which is just need to copy that link (like:-https://cors-anywhere.herokuapp.com/)and then paste that link before our own link of Swiggy and and that is all now anybody can use our website and they will not face any cors issue .now our browser not directly fetch the data from the Swiggy's api instead our browser will make the api call to this website and this website behind the scenes take the data from the api and then give it to us that's why we are not gonna face any issue of the cors. I remembered that there is a limit which is we can only make 30 requests per minute which is enough for our development use so we cannot use this to build a real user app because if the app is used by so many users then because of the limit the website is giving us it will through some error to the user .
//*Another solutions
//* but if we paste this below link before the swiggy api link then it will also by pass the cors issue but it has a limit till 5 dollars so till 5 dollars usage it's free:-https://web-production-910a.up.railway.app( see the youtube video to see how we did it :-https://youtu.be/eO-ya4I1LzQ?si=PySWFug3QR3KMyvE)
//* the next remaining option was to copy all the files from github of corsanywhere.com and then build a clone of it on heroku , but after logging in heroku they aksed for credit card so we quit the option to use heroku.
//* there is an alternative of heroku which is glitch.com, so can clone coranywhere.com here ,but if we don't want spend so much time then inside this glitch website , we have a search bar, there we need to search cors, and we will see some developer already built corsanywhere.com clone to tackle the proxy issue, so we can just use one of them . so we copied the link from of them , we just need to paste it before the swiggy api link. the link is :- https://richie-cors-proxy.glitch.me/  .

const Body = () => {
  //*useState Hook
  //* ℝ𝕖𝕒𝕔𝕥 𝕝𝕠𝕔𝕒𝕝 𝕤𝕥𝕒𝕥𝕖 𝕧𝕒𝕣𝕚𝕒𝕓𝕝𝕖.(using useState() hook)
  //*useState returns an Array and from the array using destructuring we get the state variable, and the second variable which we destructured starts with "set" word, because it is used to set or change the value of the state variable, and this setListOfRestaurants which is second parameter is actually a function and we call it and pass the new value of the state variable, after calling this function it immediately creates a virtual DOM and using Reconciliation algorithm it updates the UI so much faster.
  let [listOfRestaurants, setListOfRestaurants] = useState([]); //* any default value will be written inside (), here reslist was default value but after making the component dynamic we are now setting this default value to an empty array, so first the the Ui will render but without the card then the data comes from api then we display the cards.
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //* this state variable is to solve the filtration bug.Explained here :- "a bug we introduced" find it above.
  //* 𝕟𝕠𝕣𝕞𝕒𝕝 𝕛𝕤 𝕧𝕒𝕣𝕚𝕒𝕓𝕝𝕖.
  // let listOfRestaurants=[];//*[] is default value.

  //* local state variable for restaurant search (to keep track what the user is inputting)
  const [searchText, setSearchText] = useState("");

  //* ⁡⁣⁢⁣UseEffect(hook)⁡(import as named import from core REact file.)
  //*takes two arguments, first one is a callback function and second one is a dependency array.so the first argument is a callback function , and this callback function will be called be useEffect hook when the component is rendered on the Ui and then it calls the callback function

  useEffect(() => {
    //* making the aoi call when the cards components are already rendereed with some fake data, to make a better user experience.
    // console.log(`useEffect called`);
    const fetchData = async () => {
      const data = await fetch(
        `https://richie-cors-proxy.glitch.me/https://www.swiggy.com/api/seo/getListing?lat=22.599975775748607&lng=88.38302497384348`
      );
      // console.log(data);
      const json = await data.json();
      // const json = await axios.get(
      //   `https://www.swiggy.com/api/seo/getListing?lat=22.599975775748607&lng=88.38302497384348`,
      //   {
      //     //
      //     "Access-Control-Allow-Credentials": "true",
      //     "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      //     "Access-Control-Allow-Headers":
      //       "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      //   }
      // ); //* when we were using fetch method to retrieve data from the api , then after getting the data we had to use .json() method to access the data. but because of the cors issue , we finally found a solution , which is use to axios package , and to use it we need install this package first :- using this command:-npm install axios, and then instead of fetch method we can use axios.get() method to retrieve data from the api without facing any cors issue. and as we are using axios , it  automatically transforms for JSON data, so we don't event need to use .json() method.

      // console.log(json);

      setListOfRestaurants(
        json.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ); //*because we are using filteredRestaurants state variable to display the data in the cards container so when we get the data it is also necessary to update this so we can also use it display the data when we receive the data first time.
    };
    fetchData();
  }, []);
  // console.log(`body rendered`); //*this will be printed before the above console.log() because it is inside useEffect method, but the above callback function will be called only when this whole body component rendering will be finished.
  // console.log(searchText);
  //*Conditional Rendering (for rendering shimmer Ui when browser is loading data from api but when api data has arrived then render the real component) ⁡⁣⁢⁣using ternary operator⁡

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="cafe.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              ); //*converting both side to lowercase and using includes method important to mke this filtration case insensitive and in between searchable from restaurant names.
              //* changing the state variable
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
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
            setFilteredRestaurants(filteredList);
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
            setFilteredRestaurants(filteredList);
            console.log(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Quick Delivery Restaurants
        </button>
      </div>
      <div className="cards-container">
        {/* //* restaurant cards */}
        {/*//* Example of passing props to a functional component(instead of listOfRestaurants state variable we are using filteredRestaurants state variable to display the restaurant cards but tyo know find this paragraph above :- "a bug we introduced") */}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
