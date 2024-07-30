import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/config";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

const Header = () => {
  //*state variable to toggle login and log out on click (using onClick event listener )
  const [loginBtnName, setLoginBtnName] = useState("Log In"); //*Default value is log in.
  useEffect(() => {
    // console.log(`useEffect called`);
  }, [loginBtnName]); //*inside the dependency array we have only one dependency which is basically the loginBtnName state variable. which means after calling the useEffect hook first time after loading the page, this useEffect Hook will be onlu called when ever this loginBtnName state variables value changes. to know more about useEffect hook behavious please look at the notes above:-`⁡⁣⁢⁣Behavior of UseEffect() hook.⁡`

  const onlineStatus = useOnlineStatus(); //*using custom hook useOnlineStatus to show the online status of the user.to know more see useOnlineStatus.js
  // console.log(`header rendered`);
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <nav className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? `🟢` : `🔴`}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtnName === "Log In"
                ? setLoginBtnName("Log Out")
                : setLoginBtnName("Log In");
            }}
          >
            {loginBtnName}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
