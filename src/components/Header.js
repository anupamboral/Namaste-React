import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/config";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"; //* from lesson 12 to access the redux store slice and read data
//* ⁡⁣⁢⁣application of state variable to toggle log in to log out and log out to log in when ever the user the user clicks on the log in btn:-⁡ so in the header component we have to first create a log in btn , and then to change the button name dynamically on user click we will use a state variable. so we are gonna the save the btnName inside a state variable and when the use will click on the btn we will use onclick event listener and inside the the callback function of the onclick listener we are gonna toggle log in and log out by changing this button's name which is saved inside the state variable.

//*from 7th lesson(Finding the path)
//*//* So before moving further, we are gonna do deep dive in the concept :- ⁡⁣⁢⁣How useEffect() hook gets called when  we use it inside a component?⁡ Or ⁡⁢⁣⁣𝗕𝗲𝗵𝗮𝘃𝗶𝗼𝗿 𝗼𝗳 𝗨𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁() 𝗵𝗼𝗼𝗸....⁡

//* we already know that we first import it from core react file (we installed as a package from npm ) as named import, and now we can use the useEffect hook inside the component, now let's say we are using this useEffect hook inside the header component, so let's import it inside our  header.js and as a named import from react.
//*⁡⁢⁣⁣And now we are ready to use the use effect hook now while calling this hook it takes two arguments first one is the callback function and second one is the dependency array and the second argument is not mandatory we can mention it when it is actually needed let us learn the behaviour how this use effect hook gets called so to understand it we have to know about three conditions about use effect hook.⁡
//* 1:- ⁡⁣⁢⁣useEffect(()=>{})⁡ (this is also the default behavior):-When only the first argument - callback function is mentioned and no second argument is mentioned in that case the use effect hook will be called every time the whole component gets rendered That means because of any change whenever the component will be re rendered,every Time also the useEffect hook will be called.
//*2.⁡⁣⁢⁣useEffect(()=>{},[])⁡:- When the use effect has the first argument callback function and also the second argument which is actually the dependency array but the dependency array is an empty array in that scenario the use effect hook will be only called first time when the component renders and after loading the page when the component gets rendered only then this use effect hook will be called then even because of some change if the component gets re rendered still the use effect hook will not be called so the conclusion is when we mention the second argument dependency array as an empty array in that case the use effect hook will be only called once at the first time.
//*⁡⁣⁢⁣useEffect(()=>{},[loginBtnName])⁡:- Now the last condition we have to know is when we pass both the arguments the first one call back function and the second one dependency array But in this condition we mentioned one dependency inside the array but what is this dependency we mentioned so inside this dependency array we can mention any state variable we created inside the same component and we can mention more than one dependency so basically more than one state variables and then whenever one of these state variables changes so basically one of the dependencies value changes With every change the use effect hook will be called so in the example we mentioned `loginBtnName` as the dependency which is basically a state variable inside the header component and that means whenever these state variables value will be changed then with every change our use effect hook will be also called.

//*from 7 th lesson
//* now let's make our navigation links in the header work properly
//* so if we click on one of the navigation link then it redirects us to that page or that route.
//* if we were not using react then we would use some anchor tags to do it and using the href attribute we would mention the path like :-
//*<li><a href="/about">About Us</a></li>
//* though in react it also works but we should not use anchor tag in react to redirect to some page /route, because if we do it then will see that will redirecting it refreshes the whole page , and that takes so much time, so in react we can redirect the user to a route without reloading the whole page, and here the refreshing the whole page is not even necessary because the header keeps intact for all pages and just the below part of the header component need to be changed.
//* ⁡⁢⁣⁣So with out refreshing the whole page can we load a different page /route?⁡
//* yes it is possible , and again it is possible because of react-router-dom , so react-router-dom gives us access to a component named "link" and we need to import it as named import . so let's go to the top of our header.js and import it. and this link component is very similar to anchor tag in terms of use, so we need write it inside our header component just like we write anchor tag but intend of the href attribute we have to use to attribute and mention the path. so it will look like:- <li><Link to="/about">About Us</Link></li>.
//* and after doing it if we go to our page we will see surprisingly the when we are clicking on one of the links , then the whole page is not getting refreshed, and like before the logo is not loading again instead within a blink of eye the new page is loaded without refreshing the whole page, and the logo is not even loading again, instead the outlet is just changed so much quickly without reloading the whole page. and that is power of Link component which is provided to us by react-router-dom .

//*from lesson 11 -data is new oil
//* solution of prop drilling(react context)
//*But sometimes when we have so much nested data And in the in between components we does not even need that prop we are just Passing the prop to send it to the next child.For example we have the data in the restaurant menu component and we need the data in the menu item component so we do not need to use this data in the in between component item category component but as react has only one way data flow that is why to reach to menu item first we need to pass the data to the item category component then only we can pass the data from there to menu item even we do not need to use the data in the item category but we are still passing through it and for one or two level it is ok to do it but when we have so much level of nesting like 10 levels of nesting and in between components does not need the data then it does not make any sense to use prop drilling through every step of the hierarchy to get the data at the deep level of the hierarchy.
//*To solve this problem we have something called react context.

//* and many times in large scaled applications we need some global data which we access anywhere in our webapp no matter how much nested our component is. Now sometimes people think that they will keep some global data at the top level and then they will pass that data through props but it is very foolish to pass any data 10 level deeper using props if there is no need of that data in between components.
//* so the solution of this problem is context which is like an global place where you data is kept and anybody can access it.so no need to do prop drilling. when you are using react context.
//* there are some scenarios when we need this kind of global space where need to put some data which should be accessible from everywhere.like- user credentials of a logged in user,it can be needed in places all over the app.
//* so first of all we can create ,multiple context, basically multiple global spaces for keeping data.
//* so lets create our first react context, where we will keep information of a logged in user.
//* we will create our context file inside our utils folder, as it will keep the information of a logged in user so we will name the file UserContext.js. so let's create the file inside utils folder. and context files names also start with capital letter like react components.
//* to create a context we need to import a function from react library named createContext(). inside it we will pass a object which will keep the data so here inside the object we are gonna put some information which it will hold , as properties and we will set some default value to it. this createContext function call will be assigned as the value of a variable. and at last we need it export it.
//* now to use the context react gives us access to a hook named useContext, we need to import it in our Header.js file  from react as named import because we rae gonna display the information in the navigation. and we also need to import the context `UserContext` we created.
//* now inside our Header component, we will call the hook useContext and assign it as value of a constant , and as this will return a object so we are gonna directly destructure loggedInUser form it, because we are getting the data of the logged in user inside it. and inside the the hook userContext(UserContext) , we need to pass UserContext , which we imported form utils folder so the context we created.
//* like this :-  const {loggedInUser} = useContext(UserContext);
//* ⁡⁣⁢⁣but why are we passing the UserContext inside the hook useContext?⁡
//* ⁡⁢⁣⁣because there can be multiple contexts we can create, and to tell react which context we need to use we have to pass the context name as a argument inside useContext() function.⁡
//* so let's add another nav item and use loggedInItem data(coming from context) there and display it.
//* and we can access this context data in any file in this way.
const Header = () => {
  //*using context to display the logged in user data
  const { loggedInUser, greetingMessage } = useContext(UserContext);

  //* state variable for responsive menu
  const [isOpen, setIsOpen] = useState(false);

  //*state variable to toggle login and log out on click (using onClick event listener )
  const [loginBtnName, setLoginBtnName] = useState("Log In"); //*Default value is log in.
  useEffect(() => {
    // console.log(`useEffect called`);
  }, [loginBtnName]); //*inside the dependency array we have only one dependency which is basically the loginBtnName state variable. which means after calling the useEffect hook first time after loading the page, this useEffect Hook will be only called when ever this loginBtnName state variables value changes. to know more about useEffect hook behavious please look at the notes above:-`⁡⁣⁢⁣Behavior of UseEffect() hook.⁡`

  const onlineStatus = useOnlineStatus(); //*using custom hook useOnlineStatus to show the online status of the user.to know more see useOnlineStatus.js
  // console.log(`header rendered`);

  //*//* from lesson 12 to access the redux store slice and read data
  //*subscribing to the store slice using selector
  const cartItems = useSelector((store) => {
    // console.log(store);
    return store.cart.items;
  }); //* inside this hook we write a callback function where as the parameter we get access to the whole store , and inside the braces we have write which part/portion of the store we want to subscribe. like here we want the cart to be subscribed with the cart slice and our cartItems constant will get access to the all items inside the cartSlice. and now we just need to use it wherever needed. so now inside our cart element of the header , we will use this cartItems ro show the number of items.
  console.log(cartItems);
  const navItemStyles =
    "text-[1.3rem] font-bold m-2 p-2 list-none max-w-[15rem] cursor-pointer [transition:all_900ms] hover:border-cyan-600  hover:shadow-cyan-600 hover:shadow-lg  rounded-lg  no-underline"; //* as we are gonna use this same styling for every nav link that's why we just make a string which will contain the styles and now we can use it as value of class names of every nav link.

  //*To make the design responsive for smaller screens we have added a menu icon which will be visible for smaller screens and all of the navigation items will get hidden but when the user will click on the menu icon then all of the navigation links should get displayed and to keep track Of the navigation menu is open or not we have created a state variable named isOpenItIts default state will be false because by default it should be hidden but when the user will click on the menu button then on click event this state variables value will be changed and it will get true,And when it gets true then we have used an operator and as soon as it gets true on click of the menu button we display all of the menu items so the navigation items in a column format for bigger screens we were displaying it in a row format but for responsiveness Small screens we will show all of the navigation items in a column format so we have created a div which will be only displayed when the state variables value gets true which will happen on click event But inside the div if we would create the same navigation items again then it will be duplication of code which is not allowed that's why we have created this  constant named navLinks which is containing all of the navigation items so then we can use same navigation links To display for bigger screens in the row format and also in the smaller screens in the column format and that is how we are dealing with the problem of duplication of code.to know more see this video:-(https://www.youtube.com/watch?v=iq-7qRUYsTI)
  const navLinks = (
    <>
      <li className={navItemStyles}>
        Online Status:{onlineStatus ? `🟢` : `🔴`}
      </li>
      <li className={navItemStyles} onClick={() => setIsOpen(!isOpen)}>
        <Link to="/groceries">Grocery</Link>
      </li>
      <li className={navItemStyles} onClick={() => setIsOpen(!isOpen)}>
        <Link to="/">Home</Link>
      </li>
      <li className={navItemStyles} onClick={() => setIsOpen(!isOpen)}>
        <Link to="/about">About Us</Link>
      </li>
      <li className={navItemStyles} onClick={() => setIsOpen(!isOpen)}>
        <Link to="/contact">Contact</Link>
      </li>
      <li className={navItemStyles} onClick={() => setIsOpen(!isOpen)}>
        <Link to="/cart">Cart🛒({cartItems.length})</Link>
      </li>
      <button
        className="login-btn text-[1.6rem] m-2 p-2 list-none cursor-pointer bg-transparent border-cyan-600  border-2 border-[solid]  max-w-[15rem] [transition:all_500ms] shadow-cyan-600 shadow-lg  rounded-lg"
        onClick={() => {
          loginBtnName === "Log In"
            ? setLoginBtnName("Log Out")
            : setLoginBtnName("Log In");
        }}
      >
        {loginBtnName}
      </button>
      <li className={navItemStyles} onClick={() => setIsOpen(!isOpen)}>
        <Link to="/">{`${greetingMessage} ${loggedInUser}`}</Link>
      </li>
    </>
  );
  return (
    <div
      onClick={() => {
        //*The below ternary operator is used because when in the small screen the user already opened the navigation menu at that time if he clicks on the header anywhere the navigation menu should be closed and that's what is written in the below condition so if it is already open then make it false to close the navigation bar.
        isOpen ? setIsOpen(false) : ``;
      }}
      className="header p-4 flex justify-between border-[2px] border-[solid] border-[rgb(0,0,0)] bg-black text-white font-bold relative "
    >
      <div className="logo-container">
        <Link className="no-underline" to="/">
          <img
            className="logo h-16  shadow-cyan-600 shadow-lg mt-1"
            src={LOGO_URL}
          />
        </Link>
      </div>
      {/* //*nav for medium and bigger devices */}
      <nav className="nav-items sticky hidden lg:block">
        <ul className="flex">{navLinks}</ul>
      </nav>
      {/* //* nav for smaller screens */}
      <div className="lg:hidden w-48  text-white mr-2 z-20">
        <div className="flex">
          {/*  {
          " only the cart link will be shown with the menu btn for small and medium screens that's why we added only cart link below and other nav links will be only open on click of menu btn "
        } */}
          <li className="text-2xl font-bold m-2 p-2 list-none max-w-[15rem] cursor-pointer [transition:all_900ms] hover:border-cyan-600   hover:shadow-cyan-600 hover:shadow-lg  rounded-lg  no-underline pt-7">
            <Link className="w-6" to="/cart">
              Cart🛒({cartItems.length})
            </Link>
          </li>
          <button onClick={() => setIsOpen(!isOpen)} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="5px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              className="w-12  content-center"
            >
              <linearGradient
                id="9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1"
                x1="12.066"
                x2="34.891"
                y1=".066"
                y2="22.891"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".237" stopColor="#3bc9f3"></stop>
                <stop offset=".85" stopColor="#1591d8"></stop>
              </linearGradient>
              <path
                fill="url(#9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1)"
                d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"
              ></path>
              <linearGradient
                id="9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2"
                x1="12.066"
                x2="34.891"
                y1="12.066"
                y2="34.891"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".237" stopColor="#3bc9f3"></stop>
                <stop offset=".85" stopColor="#1591d8"></stop>
              </linearGradient>
              <path
                fill="url(#9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2)"
                d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"
              ></path>
              <linearGradient
                id="9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3"
                x1="12.066"
                x2="34.891"
                y1="24.066"
                y2="46.891"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".237" stopColor="#3bc9f3"></stop>
                <stop offset=".85" stopColor="#1591d8"></stop>
              </linearGradient>
              <path
                fill="url(#9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3)"
                d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" flex flex-col lg:hidden sm:px-6 z-20 absolute list-none gap-y-5   m-8 py-16 items-center w-72 right-6 top-16 rounded-lg bg-starry border-rose-300 border-2">
          {navLinks}
        </div>
      )}
    </div>
  );
};

export default Header;
