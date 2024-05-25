import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//! Lesson - 6 - Let's Explore the world

//*monolith architecture(used in old days):- Monolithic architecture is a type of software design where a single application contains all the necessary code and data for that application which includes code for api separately written for the app, user interface code , authentication code, code to retrieve data from database, code for sending messages to user and code to send mail to user, etc. . It's a traditional and simple approach, but can become complex to manage as the application grows in size and functionality so much bigger.

//* microservices architecture:- Microservice architecture is a design approach where an application is built as a collection of small services, each service running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. Each service is built around a specific business capability and can be deployed independently. This architecture is known for its flexibility and scalability, but it also requires more coordination and monitoring than monolithic architectures.
//* and one more advantage is that each of the services can be written in different in different languages, like ui microservice written in REACT, Backend microservice written in java, database written in python, sms microservice written in go lang. that's the independence we get when we use microservices.so depending on the the service they are building developer can choose we language will be best to do that. And the developers can upload there code to repositories which is separate for that service ,all of developers   don't need to  work on the same repository like they do while using monolith architecture     On the other hand , if we were using monolith architecture then we could use only one language to write all of these features.

//*difference between monolith and microservices :-Monolithic architecture is a single, self-contained application with tightly coupled components. In contrast, Microservices architecture breaks down the application into smaller, loosely coupled services that can be developed, deployed, and scaled independently.
//*This difference provides microservices with greater flexibility and scalability, but also introduces complexity in terms of service coordination and data consistency. The choice between the two often depends on the specific needs and context of the project.

//* Separation of concerns(SoC):- so while using microservices achitecture all of services (like api, database, sms, mail, ui) are divided into small services , for every service we create a separate small project, like for data base there will separate project or for the sms feature we will have a separate project, then we combine all of these microservices together and this services talk to each other depending on the use case and this design principle is know as separation of concerns. and this follows single responsibility principle where each and every service has its own job. This principle aims to improve the system's modularity, reducing the complexity and increasing the maintainability of the system. It's a key concept in both monolithic and microservice architectures, but it's more strictly enforced in microservices where each service handles a single concern or functionality.

//*⁡⁢⁣⁢but how these services are connected with each other?⁡
//* right now our website is running on localhost:1234 port(here 1234 is the port), similarly all of the services runs on their own specific port for example:-
//* on port :1234 - UI service is running
//* on port :1000 - Backend service is running
//* on port :3000 - SMS service is running
//* so on different ports we can deploy different services , and then all of this ports can be mapped  to one domain name.like :- www.anupam.com, then
//* port :1234 is mapped to just / (only slash because it will directly open when the user opens the website) then when the url is www.anupam.com/ then this 1234 port will run.
//* port :1000 is mapped to /api subdirectory then when the url is www.anupam.com/api then this 1000 port will run.
//* port :3000 is mapped to /sms subdirectory then when the url is www.anupam.com/sms then this 3000 port will run.
//* but then how this services interact ?
//* to interact with each other , the services make call to different urls like if the UI is hosted on "/" subdirectory and the Ui want to interact with the backend service then it call the url with /api subdirectory to reach :1000 port.
//* so basically all of the ports are mapped to the main url using different subdirectories like /api or /sms and when the service need to interact with another one then they make call to the port related to the service using this subdirectory names by placing after the main url like www.anupam.com/api or www.anupam.com/sms .

//? ways of fetching data in react (when user first loads the page)
//* see image:- ( "ways of fetching data in react.png")
//* now let's make our web app more dynamic,till now we were copy pasted the api data from swiggy's api but it is not good practice , so now we will try to fetch the data directly from the api , now in react there mainly two ways of fetching data to render it on the ui.
//*1. loads => api call(500ms) => Render , in this when the user loads the page then browser immediately makes an api call and that api call takes 500 ms to retrieve the data , then immediately the bal;cnk Ui will be filled using the data, so the have to wait for 500ms with the blank page and then the data arrives and suddenly all the data will be displayed.
//*2. Loads => Render(just skeleton) => api call(500ms) => Rerender. in this approach when the user open the website immediately some skeleton data will be shown to the user not a a blank page, then immediately the browser makes an api call and then after 500ms when the arrives then it rerenders the Ui with the arrived data.
//* this second process may look complicated but this is actually better , user experience friendly approach, because in the first approach the user had to wait for 500ms to see the ui before that he was seeing the blank page but then suddenly the data arrives and the user sees the Ui and it is very bad for user experience, but in the second approach , as soon as the user opens the website, a Ui skeleton at least will be shown to him then the browser makes the api call and then when the data comes the rerenders the ui and display the data which very good for user Experience. because in this approach , the user doesn't sees the blank page when he open the website first time, so we will try to use use this second approach.
//* so in react we always use the second approach. and to use it we have learn about useEffect() hook.
//? What is a hook? => as we learned in the previous lesson that a hook is actually a javascript function(method) which has a specific usecase. and now we are gonna learn about useEffect() hook.

//? UseEffect() hook:- this hook is also a javascript function, and while calling this method we have to pass two arguments , first one is a callback function and second one is a dependency array. so the first argument is a callback function , and this callback function will be called be useEffect hook when the component is rendered on the Ui and then it calls the callback function. here we are gonna use this UseEffect() hook inside the body component(to see go to Body.js) , so that means when rendering of the Body component will be rendered on the Ui only then useEffect hook will call the callback function which we passed inside it.So now we can say that, when we need to do something after the component renders then we have to use useEffect hook.
//*we can also go to sources tab of the developer tools and inside Body.js we can add debugger(breakpoints) one front of useEffect and another front of return keyword where the component returns, we will see that useEffect hook will only call the callback function when the component rendering has been rendered.
//* but why are we learning useEffect() hook? because using it we can easily implement the second way of fetching data when the user opens the page, so first we will render the body component with skeleton data and then make the api call inside the useEffect hook, so the call will happen only when the component is rendered.and to do fetching let's go to swiggy's website and get the url they use for their api. and then using the fetch method(a browser api not part of javascript) we will try to fetch the same object from the api..
//*but after trying to fetch we will get an error in the console.The error is because of cors policy. so according to the this cors policy we can't make a api call to this api url because the origin is different, so we are making the call is localhost origin, but the api is from swiggy's origin, and to deal with this problem we can install an extension named "CORS: Access-Control-Allow-Origin" from chrome web store . then after activating this extension from extension tab, we will see that the error will be gone and we are able to fetch data from the swiggy's api url.

//* so till we were rendering from the mockData which we saved as the value of the state variable named `listOfRestaurants`. and then we were iterating this array of objects using map method. then rendering the cards from the mockData, but now we are gonna make it really dynamic, so to do that first we will render the the fake data from mockData and then after rendering it then we will make the api call to get the real data from api inside useEffect() hook so all of this can happen when the component is already rendered. then after the real data comes we will again change the value of the state variable, and this time the state variable's value will be the real data we just received from the api, and as the state variable's value changes so it will automatically re-render the UI. we can't pass directly json inside the setLisTOfRestaurants() beacuse we to pass the same format of array of objects as mockData. so to that inside the useEffect hook after fetching the data, we will pass this:-setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants); so to  keep the format same,  .

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
