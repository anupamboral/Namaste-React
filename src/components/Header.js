import { useState } from "react";
import { LOGO_URL } from "../utils/config";
//* ⁡⁣⁢⁣application of state variable to toggle log in to log out and log out to log in when ever the user the user clicks on the log in btn:-⁡ so in the header component we have to first create a log in btn , and then to change the button name dynamically on user click we will use a state variable. so we are gonna the save the btnName inside a state variable and when the use will click on the btn we will use onclick event listener and inside the the callback function of the onclick listener we are gonna toggle log in and log out by changing this button's name which is saved inside the state variable.
const Header = () => {
  //*state variable to toggle login and log out on click (using onClick event listener )
  const [loginBtnName, setLoginBtnName] = useState("Log In"); //*Default value is log in.
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
