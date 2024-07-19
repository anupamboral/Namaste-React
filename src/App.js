import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//! Lesson - 8 - Lets get classy

//* (instructors subtitle)

//*My notes
//*Class based components:- till now we already learned so much about functional components, functional components are normal javascript function which returns a piece of jsx. on the other hand , ⁡⁣⁢⁣class based components are normal javascript class which extends React.Components and it has a render method which returns a piece of jsx⁡.
//*now inside our About us page we are gonna render a component which will display some information about the developer so that means we are gonna use our github account to fetch some data from github, and display that inside the component. So we are gonna name the component userClass. because it will be a class based component , and then after importing it inside the About.js file, we will render it inside our about component. So let's create our UserClass.js file first , and then inside this file we will create our first class based component.

//* So to create a class based component first we have to write the class keyword then the class name (here User), with first letter capitalized, because it is convention, and then extends React.Components. this `extends React.Components` tell React that this is a Class based react component ,so using `extends React.Components` is very much necessary. then inside a curly braces{} we have to write a function named render(){} and inside the render method we will write our jsx which we want to return. So inside a class based , there will be always a render function which will return the jsx.And as we are using React.Component so remember we have to also import React here in this file also.
//*But what is this React.Component? :- this is a javascript class which is provided to us by react . and by extending it we are inheriting some properties from it.

//*⁡⁣⁢⁣Passing props is Functional component v/s passing props in class based component⁡:- So when we do component compositioning basically rendering a component inside another component then sometimes we need to pass some data from the parent component to the child component and we do that using props. so for functional components passing props are just like passing arguments inside functions . To pass we do like <Comp name="anupam"/> ,and to receive the data in the child functional component , we have to mention a parameter "prop" in child functional component, or we can also destructure the data using {} curly braces, because props is a object which contains our passed data as properties..... On the other hand, when we want to pass data into a child class based component, the process is same , we can do it like :- <ClassComp name="anupam"/>, but to receive the data in the child class based component , first inside the and above the render function we have to create a constructor function and this constructor function will receive this props as a parameter,and inside this constructor function we have to call a method name super(), we have to also call this method and pass the props as a argument while calling this super method like :- super(props) , and now below below this super method call we can access our props object. and calling this super method with passing the props as argument is necessary unless it will throw an error.So inside the child class based component it will look like:-
/*class User extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() { return(`jsx we want to return`)}
}*/
//*⁡⁣⁢⁣But why calling this super method inside the constructor function is important and why we need to pass the props as argument inside the super function while calling it?⁡:- Basically when Super method calling ensures that the parent class's constructor is called and passing the props while calling super method ensures that the props are passed into parents class's constructor function.and that ensure that we can access the properties and methods of the parents class. Here the parent class is React.Component which looks like :-
/*Class Component() {
constructor(props, context, updater){
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}
}*/
//*So when we call super method with passing the props , that basically call the parent class's constructor function and set this.props= props; So we can inherit this props property in the child and use it . So that's why it is  always suggested to call the super method with passing the props ,so we can access the props property by inheriting it.and to read more You can go to this blog :- ` https://overreacted.io/why-do-we-write-super-props/ `. and now after calling the super method with passing the props. now we can use this keyword, and we have to also note that we can only use this keyword after calling the super method and that is because `this` keyword first need to access all the properties and methods from the parent class and so the child class's `this` keyword can contain all of the inherited methods and properties from the parent. So now using `this` keyword which basically points to `User` class . and it contains all of the inherited and present properties.So using the `this` keyword now we can access the props inside the render function because props is now a property inside this keyword.So Lets use this props to get the name from About.js and render it.
//* When we render a functional component then we are basically calling that function or we can say we are calling that functional component but in case of Class based components,So when we render a class based component then we are creating an instance of that class for example we will render this user class based component inside the about component Inside the about component we are creating an instance of this user class component.

//* way of creating state variables inside class based component:- So the process of creating state variables inside class based components are slightly different from the process of creating a state variable inside a functional component so when we create A state variable inside a function component then we use hooks to do that so as we already know that we use use state book to create a state variable inside a functional component and if we want to create multiple state variables then we have to create multiple constants to hold the value of that state variable so that basically means for each state variable we have to separately create a constant but on the other hand the process of creating a state variable inside a class based component is slightly different from it We already know that when we render a Class based component then an instance will be created from that class and when javascript create an instance from a class in that time it will first call the constructor function inside that class and that is why it is the best place to receive the props and to also call the Super method because this constructor function will be called at first, And this constructor function is also the best place to Create the state variable . So inside this constructor function below the super method call, First we have to create a property on this keyword and that property is `state`and it's Value will be an object Which can contain multiple state variables as required so previously in case of functional components we had to create multiple variables to create multiple state variables but here in case of class based component we just need to create this one object and this one state object can contain multiple state variables in the form of properties so the property key is basically the state variable name and the properties value is the default value of the state variable. And as we created this object on this keyword so that means we can access it anywhere inside the class after the declaration of this.state object . state is a reserved keyword in react.so the state variable will look like:-
/*constructor(props) {
  super(props)
  this.state = {
    count1=0,//*state variable 1 
    count2=2,//*state variable 2 
    horse=`sherry`//*state variable 3 
  }
}
*/
//*updating state variable :-So previously when we updated state variables in site functional component then we used a function which usually starts with set so basically After restructuring the variable from the hook the second property destructure But in case of class based components if we want to change the value of a state variable then we can't do that by directly using the  = and assigning some value that is not allowed and it will create some inconsistency in your data so basically we can't do like:- this.state.count1=5;(new value);It is not allowed and it will not change your state variables value. instead we react gives us access to a method on this keyword name this.setState({}) , So lets's say we want to update the state on click on a button , so after creating a button , first we have attach a onClick handler on the button and then inside it as usual we have to create a callback function and now inside this callback function , we have to write code which will update our state variables , so will call the setState method on this keyword named and inside it we have to write another object and inside this object we can write the state variables names as keys and their value will be the updated value we want.And we can update multiple state variables at once if we want.So it will look like:
/* <h3>No. of year:: {count1}</h3>
    <h3>Total days: : {count2}</h3>
        <button
            onClick={() => {
              //*Don't update the state variable directly like below
              // this.state.count1 = count1+1; this is not allowed
              //*To update the state variable we have use another property   available on this keyword named setState and inside it we can   update multiple state variables at the same time if we want
              this.setState({
                count1: count1 + 1,
                count2: count2 + 365,
              });
            }}
        >
          Update count
        </button>
        */
//*Note: every time we update the state variable using this.setState({}) then the whole component will be re rendered with the updated values.And it follows the same reconciliation algorithm when the state variable changes.

//*⁡⁣⁢⁣another way of importing React.Component⁡:- while importing React here so we can use React.Component, we imported react normally but while importing we can directly do destructuring and get the Component so then the the import will look like this:-import {Component} from "react"; ,so here we destructured the Component directly and now while extending it to create the class based component we don't need to write React.Component and we can write just"component" as we already destructured it. so it will look like:- class User extends Component{}

//*Mounting ⁡⁣⁢⁣Life cycle of react class based component⁡:- So let's say we are rendering a class based component inside a functional component so basically the functional component is the parent component and the class based component is a child component so now while rendering the functional component the interpreted reaches to the line where the child component exists which is a class based component then immediately an instance will be created of that class and to create that instance that class based components constructor function will be called then at second number the render method will be called and if they are componentDidMount method is present inside the class that will be called at the third number because as the name says it will be called only when the component is mounted or rendered on the ui.
//*⁡⁣⁢⁣ If both of the components so the parent component and the child component both are class based component then what will happen⁡ ? So basically a class based component inside another class based component in that scenario first the parent class based component's Call constructor will be called , Then at the second the render method will be called and as we can guess that the child component must be inside This render method so when the interpreter reaches to the child component which is also a class based component then it starts loading this child component so it will again create an instance of this child class based component and to create the instance it will first call the constructor function of the child component then it will call the render method of the child component and at this point as the child component is rendered now it will call componentDidMount(){} method of this child class based component as this component is already rendered and after that the interpreter will come back to the parent class based component and now the parent classes rendering is complete and that means it will now call componentDidMount(){} of this parent class based component at this point the parent class based component is also fully rendered.,

//*⁡⁢⁣⁣1.when rendering class based component inside functional component(1 child class comp. inside a parent functional comp.) --- first it will render the functional component's jsx and when it will reach to child class based component then it will create a instance of that class and the life cycle will be : 1. constructor => 2. render => 3. componentDidMount.⁡
//*⁡⁢⁣⁣2.when a rendering class based component inside another class based component (1 child class comp. inside a parent class comp. ): 1.parent class constructor => 2. parent class render (it returns jsx which contains child class component) 3.child class constructor =>4. child class render => 5. child class componentDidMount 6.parent class componentDidMount.(at 52 minutes in video)⁡

//*To understand the below part I'm going to explain please watch from 1hour 11minutes.
//*Now we already have a understanding about what is the life cycle of class based component , but we are gonna see some strange behavior in the life cycle process if we just add one more child class based component(2 child class based component inside 1 parent class based component):- So if we make the about component A class based component and then in inside that we composition two child user components which are also class based components so basically inside a parent class based component we have two child class based components then how the life cycle method is going to work for these so we might think that according to our current understanding first the parent components constructor will be called then the parents render will be called and as inside this render method we have two child class based components So when react will reach to the first child class based component Then it will start the life cycle of this child class based component first so now it means the first child constructor will be called then the first child render will be called then the component did mount of the first child will be called and then react come backs to the parent class based component And sees that there is another child class based component so it will start the life cycle of the second child class based component so it will first execute the second child class based components constructor function then it will call the render function of the second child class based component and then it will call the component did mount of the second child class based component and then it will return to the parent class based component and then it will execute the parent class  based components component did mount method but it is wrong.
//* So if we use some console logs to see what will be the actual order according to the life cycle then we will be shocked to see that the order will be different and it is different because of react optimization Ant to see how this works we can Google react lifecycle and the first diagram(see this image- ` Life cycle of class-based components.png` in our project) we get if we just see the first box,We can clearly see that a component is mounted or rendered in two phases First one is the render phase and the second one is the commit phase So in the render phase there are two steps the first step is calling the constructor and the second step is calling the render function and then comes the second phase Which Is the commit phase so in this phase there are also two steps the first step is actually updating the real dom which will update the ui and the second step is calling Component did Mount Method and because of this process which includes two faces to render a component It actually makes the react so much faster So in the first phase the first step is calling the constructor function and the second step is calling the render method and in this render method the reconciliation process is actually happening which is so much fast so basically in this render method react creates a virtual dom aAnd then using the diff algorithm it compares the new virtual dom with the previous virtual dom and it basically finds the difference between two virtual doms And this process is so much fast javascript is comparing between two javascript objects in this process because both of the virtual domes are just javascript objects which represents the dom tree and then after finishing the comparison when the render function execution is completed then the second phase of mounting starts so this process is the most expensive process because in this process the first step is updating the actual dom Which will update the ui and updating the real dom is the most expensive process because it takes so much time and then after updating The real dom the second step begins which is calling the component did Mount Method And the Process of mounting the component into phases makes it so much faster because as we just learnt that the first phase is very fast because in that phase there is no costly operation which will take so much time and the second phase is bit costly so it will take bit more time than the first step So now as we understand the two phases of mounting a component so basically the two phases of the life cycle to mount a class based component Now we can easily understand why our guess was wrong about the order of the console log we did to see the order of lifecycle When we tried to composition two child class based components inside one parent class based component so when react starts executing first it will execute the constructor function of the parent class based component then it will start to execute the render function of the parent class and then when it will see that there are two siblings child based components Then it will try to do some optimization By batching/merging the first render phase of two child class based components Because the render phase is so much faster so that is why when it will enter to the first child class based component it will first execute its constructor and then the render function but then it will not execute the component didmount function because to optimize the process it will now first do the render phase of the second child class based component  so basically it will enter inside the second child component And then execute first the constructor function and then the render function so that means react is first completing the render phase for both of the child class based components because this phase is so much faster and now it will batch/merge The second phase for both of the child class based components so that means update the dom for both child components  and update the Ui in one batch  at same time then  calls its Component did mount function of first child And then it will call the componentDidMount of second child component and it returns to the parent and then call the  componentDidMount of parent class based function , so basically as the second process includes Costly operations which is basically changing the real dom and updating the ui so that's why react is merging or batching the first phase for both of the child components because the first phase is faster and after completion of the first phase it again batches the second Phase For both of the child components and that is why react is so much faster and we were not getting our expected output using console log because react did some optimization while rendering two sibling child class based components And finally the order we saw in the console because of this optimization:-
/*⁡⁣⁢⁣3.⁡
⁡⁣⁢⁣- parent's constructor
- parent's render

(first phase of mounting begins and react batches/merges the first phase for both child)
- - 1st child constructor
- - 1st child render
- - 2nd child constructor
- - 2nd child render

(second phase of mounting begins and react batches/merges the second phase for both child)
-- updates the real dom for both child

- - 1st child componentDidMount
- - 2nd child componentDidMount

- parent's componentDidMount⁡

*/
//* Use of componentDidMount method :- We already learnt in the life cycle methods that this component did mount function gets called at last even after the component is mounted or rendered on the ui so the last step of the last phase ,it happens. And the reason behind it that it is very similar to the use effect hook we use in functional component so we already know that when the user loads the page immediately we display fake Ui or shimmer ui So the user don't  see any delay when we are loading the data and whenever the data comes we update the state variable and that triggers react reconciliation process which render the whole component. So basically we use use effect hook So we can only make the api call Once the shimmer ui is already mounted on the ui so the user don't see any kind of delay when we are loading the data from the api and after displaying the shimmer ui as the useEffect hook will be called that's why we make the api call inside this useEffect hook. And we are going to use this component did Mount Method in the same way we use useEffect hook. So basically first we render some fake data and then inside this component did Mount Method we will make the api call and fetch some data from our github profile and then we will update the state which will trigger the react reconciliation algorithm and that will re render the whole component with updated data.
//* Till this point we were using the data we got from the props in in the user class base component, But now we are gonna fetch some data from our github profile so we can Google - github user api Then after clicking the first url in the right side we will see a lot of api url links From the table of api links we have to choose where written `Get a user` Then after clicking on that update will open and on the right side we will see the api url which is :- `  https://api.github.com/users/USERNAME` So here in this url in place of user name we have to place our name which is anupamboral in github. And after doing that If we make an api call to this url then as a result we will get an object which will contain all of the data we need from Github.
//* To store this data first we have to create a state variable and its default value will be an object which will contain some fake data which we are going to display until we get the data from the api and then when the data arrives then we will save that inside the state variable using the method set state And as we know when state variable changes then it will trigger the reconciliation process which will update the whole component or basically render the whole component with the updated data we got from the api.So let's Create the state variable first inside the constructor function Because it is the best place to put the state variable and as we know we have to use this.state To create the state variable and its value will be an object which will contain A property for each state variable we need so let us name the property user data Its value will be our object again because it is the default value where we can have some fake data to display until our data arrives so let's create it first and then inside the component did Mount Method we will make the api call till now we have seen that to make api calls we use async await The api will return and promise and to get the data from the promise we have to use await . But as the component did mount is already a function so we don't need to create another async function inside it instead we can just put the async keyword in front of component didmount method and then inside it we can directly fetch the data using await keyword and then after getting the data we will change the state using this.setState. And then we can use that data inside our render function to display the real data coming from the api.

//*⁡⁣⁢⁣Updating Life Cycle of React Class based component(second box in this image :- ` Life cycle of class-based components.png`)⁡:- Till now we have learnt the mounting process of react class based component so basically when we first time Mount our component file the user load our page(first box in this image` Life cycle of class-based components.png`), But we just used component did Mount Method to make an api call from Github api and then we update the state variable using this.setState({}). But when we update the state variable it will trigger react reconciliation algorithm Two basically rerender The component and here in class based component we call this rerender as updating the component so when the state variable updates it starts the update life cycle (second box in this image :- ` Life cycle of class-based components.png`) And in the updating lifecycle there are also two phases In the first phase there is only one step because there is no need to call the constructor as it was already called in the first render so in the mounting life cycle now in the update life cycle the only step is render step so in this step as the state variable is updated that means the reconciliation algorithm will be triggered and after comparing the old virtual dom and new virtual dom This first phase will finish now the second phase begins update lifecycle and this second phase have two steps first is updating the real dom Which basically updates the ui and then the second step is calling another method which is componentDidUpdate() .This method sounds very similar to component did mount but there is some differences because component did mount gets called only after the component is mounted first time but on the other hand this component did update Will be called after we update the component using setState or Nwe props, or forceUpdate(). So basically one of these can trigger the update life cycle and at the end of this update life cycle the component did update method will be called.1.55.34
/* ⁡⁢⁣⁣1st time loading the class component-
Mount life cycle start
1st phase
- constructor called
- render called (returns jsx with dummy data)
2nd phase
- updates in real DOM (Ui renders with the returned jsx containing dummy data)
- componentDidMount called(Api call made)
Mounting phase finished

- Data comes and setState called which updates the state variable

⁡⁣⁢⁣Triggers Update Life Cycle⁡

⁡⁣⁢⁣1st phase(only  one step no constructor gets called as it was already got called in mounting phase)
- render called(reconciliation happens - and returns jsx with updated values)
2nd phase
- Updates real DOM (updates the Ui - Html is loaded in the webpage with new Data)
- ComponentDidUpdate() called⁡

*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: `/`,
    element: <AppLayout />,
    children: [
      {
        path: `/`,
        element: <Body />,
      },
      {
        path: `/about`,
        element: <About />,
      },
      {
        path: `contact`,
        element: <Contact />,
      },
      {
        path: `/restaurants/:resId`,
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
