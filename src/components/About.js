import User from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
//*from 8th lesson
//*⁡⁣⁢⁣another way of importing React.Component⁡:- while importing React here so we can use React.Component, we imported react normally but while importing we can directly do destructuring and get the Component so then the the import will look like this:-import {Component} from "react"; ,so here we destructured the Component directly and now while extending it to create the class based component we don't need to write React.Component and we can write just"component" as we already destructured it. so it will look like:- class User extends Component{}

//*Life cycle of mounting react class based component(1 box in this image:-----` Life cycle of class-based components.png`):- So let's say we are rendering a class based component inside a functional component so basically the functional component is the parent component and the class based component is a child component so now while rendering the functional component the interpreted reaches to the line where the child component exists which is a class based component then immediately an instance will be created of that class and to create that instance that class based components constructor function will be called then at second number the render method will be called and if they are componentDidMount method is present inside the class that will be called at the third number because as the name says it will be called only when the component is mounted or rendered on the ui.
//* If both of the components so the parent component and the child component both are class based component then what will happen ? So basically a class based component inside another class based component in that scenario first the parent class based component's Call constructor will be called , Then at the second the render method will be called and as we can guess that the child component must be inside This render method so when the interpreter reaches to the child component which is also a class based component then it starts loading this child component so it will again create an instance of this child class based component and to create the instance it will first call the constructor function of the child component then it will call the render method of the child component and at this point as the child component is rendered now it will call componentDidMount(){} method of this child class based component as this component is already rendered and after that the interpreter will come back to the parent class based component and now the parent classes rendering is complete and that means it will now call componentDidMount(){} of this parent class based component at this point the parent class based component is also fully rendered.,

//*⁡⁣⁢⁣1.when rendering class based component inside functional component(1 child class comp. inside a parent functional comp.) --- first it will render the functional component's jsx and when it will reach to child class based component then it will create a instance of that class and the life cycle will be : 1. constructor => 2. render => 3. componentDidMount.⁡
//*⁡⁣⁢⁣2.when a rendering class based component inside another class based component (1 child class comp. inside a parent class comp. ): 1.parent class constructor => 2. parent class render (it returns jsx which contains child class component) 3.child class constructor =>4. child class render => 5. child class componentDidMount 6.parent class componentDidMount.(at 52 minutes in video)⁡

//*To understand the below part I'm going to explain please watch from 1hour 11minutes.
//*Now we already have a understanding about what is the life cycle of class based component , but we are gonna see some strange behavior in the life cycle process if we just add one more child class based component(2 child class based component inside 1 parent class based component):- So if we make the about component A class based component and then in inside that we composition two child user components which are also class based components so basically inside a parent class based component we have two child class based components then how the life cycle method is going to work for these so we might think that according to our current understanding first the parent components constructor will be called then the parents render will be called and as inside this render method we have two child class based components So when react will reach to the first child class based component Then it will start the life cycle of this child class based component first so now it means the first child constructor will be called then the first child render will be called then the component did mount of the first child will be called and then react come backs to the parent class based component And sees that there is another child class based component so it will start the life cycle of the second child class based component so it will first execute the second child class based components constructor function then it will call the render function of the second child class based component and then it will call the component did mount of the second child class based component and then it will return to the parent class based component and then it will execute the parent class  based components component did mount method but it is wrong.
//* So if we use some console logs to see what will be the actual order according to the life cycle then we will be shocked to see that the order will be different and it is different because of react optimization Ant to see how this works we can Google react lifecycle and the first diagram(see this image- ` Life cycle of class-based components.png` in our project) we get if we just see the first box,We can clearly see that a component is mounted or rendered in two phases First one is the render phase and the second one is the commit phase So in the render phase there are two steps the first step is calling the constructor and the second step is calling the render function and then comes the second phase Which Is the commit phase so in this phase there are also two steps the first step is actually updating the real dom which will update the ui and the second step is calling Component did Mount Method and because of this process which includes two faces to render a component It actually makes the react so much faster So in the first phase the first step is calling the constructor function and the second step is calling the render method and in this render method the reconciliation process is actually happening which is so much fast so basically in this render method react creates a virtual dom aAnd then using the diff algorithm it compares the new virtual dom with the previous virtual dom and it basically finds the difference between two virtual doms And this process is so much fast javascript is comparing between two javascript objects in this process because both of the virtual domes are just javascript objects which represents the dom tree and then after finishing the comparison when the render function execution is completed then the second phase of mounting starts so this process is the most expensive process because in this process the first step is updating the actual dom Which will update the ui and updating the real dom is the most expensive process because it takes so much time and then after updating The real dom the second step begins which is calling the component did Mount Method And the Process of mounting the component into phases makes it so much faster because as we just learnt that the first phase is very fast because in that phase there is no costly operation which will take so much time and the second phase is bit costly so it will take bit more time than the first step So now as we understand the two phases of mounting a component so basically the two phases of the life cycle to mount a class based component Now we can easily understand why our guess was wrong about the order of the console log we did to see the order of lifecycle When we tried to composition two child class based components inside one parent class based component so when react starts executing first it will execute the constructor function of the parent class based component then it will start to execute the render function of the parent class and then when it will see that there are two siblings child based components Then it will try to do some optimization By batching/merging the first render phase of two child class based components Because the render phase is so much faster so that is why when it will enter to the first child class based component it will first execute its constructor and then the render function but then it will not execute the component didmount function because to optimize the process it will now first do the render phase of the second child class based component  so basically it will enter inside the second child component And then execute first the constructor function and then the render function so that means react is first completing the render phase for both of the child class based components because this phase is so much faster and now it will batch/merge The second phase for both of the child class based components so that means update the dom for both child components  and update the Ui in one batch  at same time then  calls its Component did mount function of first child And then it will call the componentDidMount of second child component and it returns to the parent and then call the  componentDidMount of parent class based function , so basically as the second process includes Costly operations which is basically changing the real dom and updating the ui so that's why react is merging or batching the first phase for both of the child components because the first phase is faster and after completion of the first phase it again batches the second Phase For both of the child components and that is why react is so much faster and we were not getting our expected output using console log because react did some optimization while rendering two sibling child class based components And finally the order we saw in the console because of this optimization:-
/*⁡⁣⁢⁣3.
- parent's constructor
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

//* from lesson 11 data is new oil
//*accessing context inside class based component
//* ⁡⁣⁢⁣we have talked about one way of consuming/using the context data which is by using the useContext() hook , but what if we need to use this context data inside  a class based component .As class based components does'nt have access to hooks. so how can we access the context data inside a class based component?⁡

//*to understand it let's got to a class based component in our project About component , now to use the context data without using the hook, we have to do it using a property named consumer which works like component, so after importing the context file in 'About.js , now we need to go inside the render method where we are returning jsx. now to use the context we need write first the context name which we imported following with the property consumer and we have to write it like a component , now inside the somponent , we have to write a callback function , in this callback function we get access to the data , we can directly destructure it, and inside the callback function we can return any jsx using the context data like this:-
/* <h1>About</h1>

        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return <h1>Hello {loggedInUser}</h1>;
          }}
        </UserContext.Consumer>

        <h2>This is Namaste React</h2>
*/
//* now we know two ways of consuming the context data , one is using the useContext hook second is using consumer property (writing it like a component).

class About extends Component {
  constructor() {
    super();
    // console.log(`parent constructor `);
  }
  componentDidMount() {
    // console.log(`parent mounted`);
  }
  render() {
    // console.log(`parent render`);

    return (
      <div className="bg-starry text-white ">
        <h1 className="text-center text-2xl font-bold underline">About</h1>
        {/* using react context in class based component without any hook, explanation is in notes above */}
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return <h1>Hello {loggedInUser}</h1>;
          }}
        </UserContext.Consumer>
        <h2> Namaste </h2>
        <User name="Anupam Boral" location="kolkata" id="001" />
        {/* <User name="Akshay Saini" location="Bangalore" id="002" /> //*used this to underStand how life cycle of class based components work and how react optimizes it */}
      </div>
    );
  }
}
export default About;
