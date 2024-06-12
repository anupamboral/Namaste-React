import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//! Lesson - 7 - Finding the path

//* In this lesson we will create different web pages linked with with different url , for example it we click on www.ourapp.com/aboutUs then our browser will redirect the user to the About Us. so are gonna create this pages.

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
