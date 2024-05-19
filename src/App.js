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

//*⁡⁢⁣⁢but how these services are connected?⁡
//*
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
