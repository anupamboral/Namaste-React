import React from "react";
import ReactDOM from "react-dom/client";

//!Lesson 4 (Talk is cheap ,show me the code)16.9

/** ⁡⁣⁢⁣Decided component (see the PLanning img;- " Planning of Food Ordering App(lesson4).png")
 *
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 * - Search
 * - Cards Container
 * - - Restaurant Cards
 * - - - Img
 * - - - Name of restaurant,star rating,    cuisine,
 *
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact⁡
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

//*way of writing inline css in jsx
//* now we know how we create elements using jsx , now using the className we can give elements required style in a css file , but what if we want to write inline css like we write in html , then process is different, we will write the style attribute and it's value will not not be normal css, instead we have to write all css a object. and the style attributes value will be this object containing all the required properties as key value pairs. and as this a object so while we will write this inside jsx we have do that inside a {} because we know we can write javascript inside jx using {}.let's learn it using a example. we will first make the object which will contain the styles of the card and then pass that object as the value of style attribute of the card.
const cardStyles = {
  backgroundColor: "cyan",
};
const RestaurantCard = () => {
  return (
    <div className="res-card" style={cardStyles}>
      <img
        className="res-logo"
        alt="restaurant-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/0/59680/552e5c72c80fc7a70b0c416be77aa08c_featured_v2.jpg"
      />
      <h3 className="res-name">Meghana Foods</h3>
      <h4 className="cuisine-details">Biriyani,North Indian</h4>
      <h5 className="res-rating">⭐4.4 Rating</h5>
      <h5 className="delivery-time"> 38 minutes delivery</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="cards-container">
        {/* //* restaurant cards */}
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />{" "}
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />{" "}
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />{" "}
        <RestaurantCard />
      </div>
    </div>
  );
};

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

//*Props: props are short form of properties, to make a component reusable we have to pass the pass the dynamically so we can reuse a component to display different data.and to pass that data into components we use props. props are just arguments for functions. because at the end of the day functional components are just normal function and props are like arguments for functions.and like we usually say passing arguments to function , the same way we say in react that we pass props to a component.
