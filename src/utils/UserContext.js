import { createContext } from "react";
//* to create a context we need to import a function from react library named createContext(). inside it we will pass a object which will keep the data so here inside the object we are gonna put some information which it will hold , as properties and we will set some default value to it. the createContext function call will be assigned as the value of a variable. and at last we need it export it.inside header component we will use it..

const UserContext = createContext({
  // default value
  loggedInUser: "default user",
  greetingMessage: "Welcome",
});
export default UserContext;
