import React from "react";
import ReactDOM from "react-dom/client";

//!Lesson 4 (Talk is cheap ,show me the code)16.9

/** Decided component (see the PLanning img;- " Planning of Food Ordering App(lesson4).png")
 *
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 * - Search
 * - Cards Container
 * - - Restaurant Cards
 *
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
//*First we will create the top level component which is a big component and inside this all of the other components will reside, we are naming this component "AppLayout" so basically like a big div elm inside which all components will reside. and then we will create the header component because inside the AppLayout component we will render the first component which is header component.and then the next component will be the body component which will contain searchbar and cards container(inside this card container there will be many restaurant cards) components inside it.so whenever we need to make a component which will be repeated multiple times like the restaurant cards which will be repeated multiple times then we will make a separate component for that like for cards. we create a function so then we can use that function multiple times , and in case of building reusable components the same thing happens so we create separate component for any feature so we can use that multiple times, like here we need multiple card components.
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIG4._yMW4TQkfDwvxq0ZdxId?pid=ImgGn"
        />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

const body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-cards-container">//* restaurant cards</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);
