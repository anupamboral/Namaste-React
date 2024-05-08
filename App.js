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
//*So the conclusion is when ever we need to pass in some data inside a component then pass that as a prop.
const cardStyles = {
  backgroundColor: "cyan",
};
const RestaurantCard = (prop) => {
  console.log(prop);
  return (
    <div className="res-card" style={cardStyles}>
      <img className="res-logo" alt="restaurant-logo" src={prop.imgsrc} />
      <h3 className="res-name">{prop.resName}</h3>
      <h4 className="cuisine-details">{prop.cuisine}</h4>
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
        {/*//* Example of passing props to a functional component */}
        <RestaurantCard
          resName="Foody Bites"
          cuisine="cakes"
          imgsrc="https://b.zmtcdn.com/data/pictures/chains/0/59680/552e5c72c80fc7a70b0c416be77aa08c_featured_v2.jpg"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Burger"
          imgsrc="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=42.9"
        />
        <RestaurantCard
          resName="Cherry Restaurant"
          cuisine="North Indian, Kebab, Mughlai,  Seafood, Chinese, Desserts"
          imgsrc="https://b.zmtcdn.com/data/reviews_photos/2dc/9b48954bfd86c61f0e4e006dfcadf2dc_1690441012.jpg?fit=around|300:273&crop=300:273;*,*"
        />
        <RestaurantCard
          resName="Honey World"
          cuisine="Asian, North Indian, Fast Food, Pizza, Biryani, Chinese, Desserts, Beverages"
          imgsrc="https://b.zmtcdn.com/data/pictures/7/20590317/d8d4fc60d288d7940b583d92d9c57a53.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        />
        <RestaurantCard
          resName="Cafe Coffee Day"
          cuisine="Cafe, Coffee, Tea, Fast Food, Desserts, Beverages, Sandwich, Shake"
          imgsrc="https://b.zmtcdn.com/data/pictures/chains/7/19053977/672c09efa508694844ff80e2ec20b6c8.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        />
        <RestaurantCard
          resName="Amazora - The Trippy Jungle"
          cuisine="Continental, Chinese"
          imgsrc="https://b.zmtcdn.com/data/pictures/7/20893787/865e320350914147a0e03ae398964260.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        />
        <RestaurantCard
          resName="Madam G"
          cuisine="Modern Indian, North Indian, South Indian, Goan, Mangalorean"
          imgsrc="https://b.zmtcdn.com/data/pictures/4/20872874/b8092f865c8091adb7a00f653d57d141.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        />
        <RestaurantCard
          resName="Five & Dime"
          cuisine="North Indian, Pasta, Continental, Oriental, Chinese, Kebab, Beverages"
          imgsrc="https://b.zmtcdn.com/data/pictures/5/20622955/9c5500f18e9498014ff5d6d3b1c9f9bd.png?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        />
        <RestaurantCard
          resName="Park Street Social"
          cuisine="North Indian, Fast Food, Biryani, Pasta, Burger, Kebab, Momos, Beverages"
          imgsrc="https://b.zmtcdn.com/data/pictures/6/20886726/a8e0fd88502cec1fe5ef8d11e41b010f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        />
        <RestaurantCard
          resName="Friday Release"
          cuisine="North Indian, Chinese, Mughlai, Kebab, Pizza, Fast Food, Sichuan, Desserts"
          imgsrc="https://b.zmtcdn.com/data/pictures/8/18751498/cb1b70e1c510ed9f95e14502f98d7d21.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        />
      </div>
    </div>
  );
}; //*Props: props are short form of properties, to make a component reusable we have to pass the pass the dynamically so we can reuse a component to display different data.and to pass that data into components we use props. props are just arguments for functions. because at the end of the day functional components are just normal function and props are like arguments for functions.and like we usually say passing arguments to function , the same way we say in react that we pass props to a component. so basically we render a component inside another component like this <RestaurantCard /> then we can use props to pass the data dynamically , like this :- <RestaurantCard resName="Foody Bites" cuisine="cakes" /> , and then RestaurantCard component will receive this prop as an object, and behind the scenes RestaurantCard is function and when we pass this props that is actually passing arguments RestaurantCard because it is actually a function and RestaurantCard will receive this prop data as an object an we check that if we mention the prop parameter in RestaurantCard functional component and then print that using console.log() we will see in the browser console that an object will be printed containing the prop data we have passed and the data is stored as properties.

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

//*config driven ui:- In today's time config driven ui is very much important for system design interviews and also for creating user interfaces for different locations at once which will be controlled or changed using the data coming from the backend api that data will drive or basically control the ui design or ui components so let us understand it using an example so let's say we have opened a food delivery website like swiggy and after opening below the heading there is a carousel Which contains multiple cards and the cards are showing multiple offers and discounts which are different for every location for example the restraints of Delhi can have different offers and discounts and the Hyderabad restaurants can have different offers and discounts and on the other hand Lucknow restaurants Can have no discounts and offers so in that case the developer will not develop different websites for every place instead he will build just one user interface which will be dynamic so basically dependent on the data it will change and that eventually will help to display different kind of offers and discounts for different places and that's why it is called config driven ui,Because the configuration are basically the data which is coming from backend api has some configurations for different places and that data will control or drive The components which will be displayed on the user interface so basically it will show different offers for Delhi and different offers for Hyderabad and for the Lucknow City it will show no carousal Because there are no offers for Lucknow City that's why it will remove the whole carousel component because there are no offers to display, so the carousal component is not needed for lucknow, any specific place, so basically the api data coming backend, depending on the data configuration the ui will be driven/controlled.This is very modern practice companies like uber, swiggy uses this.
