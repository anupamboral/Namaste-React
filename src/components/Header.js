import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/config";
//* ⁡⁣⁢⁣application of state variable to toggle log in to log out and log out to log in when ever the user the user clicks on the log in btn:-⁡ so in the header component we have to first create a log in btn , and then to change the button name dynamically on user click we will use a state variable. so we are gonna the save the btnName inside a state variable and when the use will click on the btn we will use onclick event listener and inside the the callback function of the onclick listener we are gonna toggle log in and log out by changing this button's name which is saved inside the state variable.

//*from 7th lesson(Finding the path)
//*//* So before moving further, we are gonna do deep dive in the concept :- ⁡⁣⁢⁣How useEffect() hook gets called when  we use it inside a component?⁡ Or ⁡⁢⁣⁣𝗕𝗲𝗵𝗮𝘃𝗶𝗼𝗿 𝗼𝗳 𝗨𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁() 𝗵𝗼𝗼𝗸....⁡

//* we already know that we first import it from core react file (we installed as a package from npm ) as named import, and now we can use the useEffect hook inside the component, now let's say we are using this useEffect hook inside the header component, so let's import it inside our  header.js and as a named import from react.
//*⁡⁢⁣⁣And now we are ready to use the use effect hook now while calling this hook it takes two arguments first one is the callback function and second one is the dependency array and the second argument is not mandatory we can mention it when it is actually needed let us learn the behaviour how this use effect hook gets called so to understand it we have to know about three conditions about use effect hook.⁡
//* 1:- ⁡⁣⁢⁣useEffect(()=>{})⁡ (this is also the default behavior):-When only the first argument - callback function is mentioned and no second argument is mentioned in that case the use effect hook will be called every time the whole component gets rendered That means because of any change whenever the component will be re rendered,every Time also the useEffect hook will be called.
//*2.⁡⁣⁢⁣useEffect(()=>{},[])⁡:- When the use effect has the first argument callback function and also the second argument which is actually the dependency array but the dependency array is an empty array in that scenario the use effect hook will be only called first time when the component renders and after loading the page when the component gets rendered only then this use effect hook will be called then even because of some change if the component gets re rendered still the use effect hook will not be called so the conclusion is when we mention the second argument dependency array as an empty array in that case the use effect hook will be only called once at the first time.
//*⁡⁣⁢⁣useEffect(()=>{},[loginBtnName])⁡:- Now the last condition we have to know is when we pass both the arguments the first one call back function and the second one dependency array But in this condition we mentioned one dependency inside the array but what is this dependency we mentioned so inside this dependency array we can mention any state variable we created inside the same component and we can mention more than one dependency so basically more than one state variables and then whenever one of these state variables changes so basically one of the dependencies value changes With every change the use effect hook will be called so in the example we mentioned `loginBtnName` as the dependency which is basically a state variable inside the header component and that means whenever these state variables value will be changed then with every change our use effect hook will be also called.

const Header = () => {
  //*state variable to toggle login and log out on click (using onClick event listener )
  const [loginBtnName, setLoginBtnName] = useState("Log In"); //*Default value is log in.
  useEffect(() => {
    console.log(`useEffect called`);
  }, [loginBtnName]); //*inside the dependency array we have only one dependency which is basically the loginBtnName state variable. which means after calling the useEffect hook first time after loading the page, this useEffect Hook will be onlu called when ever this loginBtnName state variables value changes. to know more about useEffect hook behavious please look at the notes above:-`⁡⁣⁢⁣Behavior of UseEffect() hook.⁡`

  //
  console.log(`header rendered`);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
