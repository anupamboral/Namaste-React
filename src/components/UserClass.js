import React from "react";
//*from lesson 8
//*Class based components:- till now we already learned so much about functional components, functional components are normal javascript function which returns a piece of jsx. on the other hand , ⁡⁣⁢⁣class based components are normal javascript class which extends React.Components it which has a render method which returns a piece of jsx⁡.
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

//* way of creating state variables inside class based component:- So the process of creating state variables inside class based components are slightly different from the process of creating a state variable inside a functional component so when we create A state variable inside a function component then we use hooks to do that so as we already know that we use use state book to create a state variable inside a functional component and if we want to create multiple state variables then we have to create multiple constants to hold the value of that state variable so that basically means for each state variable we have to separately create a constant but on the other hand the process of creating a state variable inside a class based component is slightly different from it We already know that when we render a Class based component then an instance will be created from that class and when javascript create an instance from a class in that time it will first call the constructor function inside that class and that is why it is the best place to receive the props and to also call the Super method because this constructor function will be called at first, And this constructor function is also the best place to Create the state variable . So inside this constructor function below the super method call, First we have to create a property on this keyword and that property is state Value will be an object Which can contain multiple state variables as required so previously in case of functional components we had to create multiple variables to create multiple state variables but here in case of class based component we just need to create this one object and this one state object can contain multiple state variables in the form of properties so the property key is basically the state variable name and the properties value is the default value of the state variable. And as we created this object on this keyword so that means we can access it anywhere inside the class after the declaration of this.state object . state is a reserved keyword in react.so the state variable will look like:-
/*constructor(props) {
  super(props)
  this.state = {
    count1=0,//*state variable 1 
    count2=2,//*state variable 2 
    horse=`sherry`//*state variable 3 
  }
}
*/
//*updating state variable :-So previously when we updated state variables in site functional component then we used a function which usually starts with set so basically After restructuring the variable from the hook the second property destructure But in case of class based components if we want to change the value of a state variable then we can't do that by directly using the  = and assigning some value that is not allowed and it will create some inconsistency in your data so basically we can't do like:- this.state.count1=5;(new value);It is not allowed and it will not change your state variables value.
console.log(React.Component);
class User extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props); //*always use this after calling super, because super methods class parents class's constructor and inherit the properties and methods. So after inheriting them , we should only use this keyword.More detailed explanation in the above notes.
  }
  render() {
    console.log(this);
    const { name, location } = this.props; //*destructuring name and location from this.props to make our code cleaner.
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>Location:- {location}</h3>
        <h3>Twitter(X):- @AnupamBoral399</h3>
        <h3>Email:- anupamboral6889@gmail.com</h3>
      </div>
    );
  }
}
export default User;
