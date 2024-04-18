import React from "react";
import ReactDOM from "react-dom/client";
//! Lesson 1  (Inception)
//* subtitle
//* start from 5.25 minutes

////////////////////////////////////////////////////////!
////////////////////////////////////////?
//////////////////*
/////////
//*Separator
/////////
//////////////////*
////////////////////////////////////////?
//////////////////////////////////////////////////////!
//*My comments
//*Right now we know that how we can add a heading By just adding H1 tag inside our html file but we can do the same also using javascript so we can insert H1 tag using javascript so first we have to create a div and it will have id named root because inside this div we will insert or basically we will append the H1 element So basically first inside our javascript file we will create a constant with the name of heading and we will use the create element method on document and inside that method we will write H1 and basically what this method will do is that it will create an H1 element for us and then on the constant basically on the variable heading now we can call another method called innerhtml So we will use this method to write the html inside this heading so inside this inner html method we will just write Hello World and basically it will be the text inside the heading so now we have the heading ready which we can insert inside the root so basically the parent division we created with the id of root Now we need to first select the root element like we did and we will save its value inside a constant named root and then on this root element we will call a method named Appendchild and as the argument we will pass the heading variable we created so what this method will do is basically it will append or basically insert the heading Element as a child of the root element and right now if we open this html file on our browser then we will see that it will work fine and the heading will be inserted using the javascript.
//*⁡⁣⁢⁣now we will see how we can do the same thing using react. so let us just try to create this hello world from react⁡
//* ⁡⁢⁣⁣but how does this project understand that ,what is this document? what is this createElement() method? what is this innerhtml method? what is this getElementById(), how do my  code or how does a browser understand that what are these things?⁡
//* ⁡⁢⁣⁣these are the super powers which browsers already have in it, browsers have a javascript engine in it that executes these javascript⁡
//*⁡⁣⁢⁣But Does the browser know what is react?⁡
//*⁡⁢⁣⁢ no browser do not understand react code⁡
//*⁡⁢⁣⁢ our project is not configured to use react right now so what we have to do to use react is to 1st of all get react into our project ok the 1st thing that we will do now is to get that into our project⁡
//*let us just see how we can do that ok
//*⁡⁣⁢⁣ the first way of adding reacting to our project is via cdn⁡ ok

//* ⁡⁣⁣⁢What is cdn?
//*A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.
//*The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.
//*A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.⁡
//*⁡⁣⁣⁢At its core, a CDN is a network of servers linked together with the goal of delivering content as quickly, cheaply, reliably, and securely as possible. In order to improve speed and connectivity, a CDN will place servers at the exchange points between different networks.

//*These Internet exchange points (IXPs) are the primary locations where different Internet providers connect in order to provide each other access to traffic originating on their different networks. By having a connection to these high speed and highly interconnected locations, a CDN provider is able to reduce costs and transit times in high speed data delivery.

//* so let's write write cdn react on google

//* cdn are content delivery networks these are group of servers placed all over the world  where this react has been hosted and we are just pulling react from there into our project ok
//* so there are cdn links of react , in side the first website,  there we will find these cdn links ⁡⁣⁢⁣so basically cdn is a place where that react library is hosted⁡ got it so we are just getting that react putting it into our code using cdn links

//* So after copying the cdn links of React Library we just need to face them paste them inside our html file so we can also put that cdn links at the bottom portion of our body element but now we can also use the defer attribute which will do the same work for us so basically it will load the html first then it will load the script So that's why we will face the CDN links inside the head and we will also add the defer attribute on inside the cdn links so basically inside the script element.So let's first do that.
//*And now as we added this cdn links of react that means that we have injected the react inside our project so basically our project and our browser will be able to understand the react code we will write and basically we can now use the superpowers of react inside our project and that's really cool ⁡⁢⁣⁣We have injected react to our project And this is the first way of injecting react in our project using cdn links⁡.

//*And now after wasting the CTN links we can clearly see that these are basically two script tags which is basically some js files from some external links basically from the cdn server and from the links the script files will be downloaded from the other domains of cdn and if we notice the script tag then we will see that there is an attribute named cross origin and by default its value is set to anonymous and it has another value which is user credentials and this is an important attribute when we are fetching some resources like images or script files from some other servers.
/*
⁡⁣⁣⁢What is the purpose of crossorigin Attribute in HTML ?⁡
⁡⁣⁢⁣As we know that HTML introduces many elements and attribute that have some definition and specification that will be used for the enhancement of web development. In this article, we will learn how to use crossorigin attributes in HTML.

The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains. The resources may include Audio, Video, Images, Link or external script that specifies whether to support a cross-origin request or not.

CORS: It stands for cross-origin resource sharing. It is a mechanism by which one webpage requests to another domain for fetching out the resource like audio, video, script, etc. from the third party server without leaking their credentials information. 

Values: This attribute contains two values which are given below –

anonymous: It has a default value. It defines a CORS request which will be sent without passing the credential information.
use-credentials: A cross-origin request will be sent with credentials, cookies, and certificate.
 

Example: Below code demonstrates the use of crossorigin attribute in a <script> element. ⁡
*/
//* And now we know that what's the work of cross origin attribute but in the next 9 we can see the source attribute and its value is the link from where our javascript files will be downloaded and of course the cross origin Attribute will help to download the resources which in this case script file.
//*⁡⁣⁣⁢What is inside these links and we know that from this link some script file will be downloaded but what is inside that script file which will be downloaded from the cdn⁡
//* So if we open one of the links then we will see that inside the js file the react code is written so inside the js files which we will downloaded, these files contains react code and react code is nothing but javascript code Because at the end of the day react is nothing but javascript code and react is a javascript library so we can go to the documentation of the react and we will see that React is a javascript library so that means that all of the react code has been written using javascript.
//* But the question is who has been written this react code using javascript so who has written so much javascript functions which are the part of react library so they are some developers from Facebook like we and us they have written this react library using javascript.
//* And using the cdn links when we include the script tags with this link where react is hosted these are basically importing the react code into our project
//* And now we open our web page using live server and go to the console and just write react then magically we will see that we can now access react after writing we will see an object and inside this object all of the react code lives and this react is coming from the cdn links we just included and now we have the power of using react in our project
//* And if we expand this object then we will see that there are many properties and methods inside this object which are part of the react library and very much useful and this code is nothing but javascript code which has been written by Facebook developers and we can use this code to build our project.
//* Now if we notice clearly then we can see that we have downloaded two script files the first one we just opened contains the react code but then what is the work of the second file so if we notice the second link then it is react dom file, so the first file is the core react file it includes the code react functionality but the second file is react Dom file and this file helps us to manage dom related operations so basically it includes the code which helps to modify the dom of any web page so in short we can say the first one is for core react And the second file we downloaded is for manipulating the dom.

//* ⁡⁣⁣⁢Now the question is why react develop created two different files for using react could not they just include everything inside one file?⁡
//* ⁡⁣⁢⁣So the answer is react is not only used on browsers there are different uses of react like react is also used on apps so we have react native to build cross platform apps and also there is something called react 3D so there are different kind of react which are used for different places like browsers or some time in some app and that's why in different places different kind of react functions are used and that's why the developers created two different files to use react and the first file is for the core functionality of react and the second one is for making a bridge between the dom and react
//* And we included both of the files so the second file give us access to the ReactDom And in the console if we write ReactDom Then we will see another object which contains another kind of properties and methods so now we have the power of react and react dom and as a developer we can use these superpower of react and react Dom and build large scale applications and in both of the object of react and react dump there is something mysterious so there is a Property Named `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED` And it is very interesting but we will know about it later.

//* So till now we have created the hello world programme using the html and javascript but it's time to Create the same programme so basically creating a heading of hello world using the react,
//* Creating hello world program using React
//* So when we created the same programme using javascript then to create a element on the document node we used a method create element and then pass H1 tag as its value and then assigned this value to a variable and named that variable heading and then to insert the hello world text we use another method on the heading variable which was inner html method and while calling this we pass hello world that's how we created the H1 tag using javascript but when we will do the same thing so basically if we try to create the heading element using react then first of all we will create a variable and we will give it the same name heading and its value will be React.createElement('h1', {}, 'hello world')

//* now while we used javascript to create an element then we used the same create element method on the document Object but now we are doing the method call and react object and this time to insert the text of hello world we don't need to do another step so basically we don't need to use the inner html method to insert the hello world text instead it is not easier in react so this create element method in react takes three arguments so first one is the tag name so the element we want to create which in this case is h1 , The second one is an object and it has also some work but for now we will just use empty object and then the third value of this method is the text we want inside the element we are creating And now we created our H1 heading.⁡

//* But what about the empty object which we passed as the second argument so this object is basically used for giving the created element attribute so whatever attribute we want inside the The element which will be created we can mention all of the attributes as key value pairs inside this object like if we want to give this element a class heading then we can do that so basically we will write the className(Notice that we are using class name instead of class but when we will see inside our browser then the attribute name will be class but to mention the attribute we have to write className) as a key and its value will be heading and then if we cheque the browser and then from the inspect tool if we view our html file then we will see that inside the h1 tag there is an attribute with the class heading.And one more cool thing is now in the css file we can select this heading class and give it styles according to our choice.
const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World welcome to Namaste react"
);
//* ⁡⁣⁣⁢creating root on react⁡

//* So now as we have the H1 element so basically we have the heading but we want to insert it inside The root element so basically the div with the id of root But to insert anything using react first we have to create the root inside react because inside this root react will perform all of the operations and we create a root on react using create root method but an important thing is that creating root is a part of react dom It is not a part of core react .
//* ⁡⁣⁣⁢So when we created the H1 element we called the create element method on React , Because creating elements is a core functionality but this time we are creating a root And we will be inserting elements inside this root So basically we will insert some elements inside the dom Which is clearly a part of ReactDOM.
//*So that is why we will call this create root method on reactdom not on react and inside this method we will pass the Deep element with the id of root Because on this root element we want to create the react root.⁡

const root = ReactDOM.createRoot(document.getElementById("root"));
//* Now our root is created on the selected element which has the id of root. And now it's time to insert the heading inside the root, So basically we want to render the heading inside the root, And to render the heading inside the route it is very easy so when we are using react the method names are very much simple and easy to understand and to render the heading inside the root we just need to call a method named render on the root, And the argument we will pass inside it , Is the heading we created.

root.render(heading);
//* And now if we open the live server then we will see that our first hello world programme is ready so we inserted the heading using the react. And that's really amazing.
//* So basically we created this root on react where all of our code will run inside this room and we created this root on the D which has the id of root.

//* So now we can see this heading on our web page but who is inserting this heading so it is the react code which is inserting this heading Inside our project inside the root And basically we used the render method to render the heading inside the root

//*⁡⁣⁣⁢What philosophy the developers follow when they create a framework or a library like react⁡
//* So one of the important thing about react that when this library was created or any other javascript library was created then they were created using a philosophy in mind that may have to optimize The Dom operations And that is because when the user is interacting with the user interface so basically clicking some button or doing something else at that time the Dom is constantly changing so basically like when someone clicks a button and then some pop up happens and then if he closes the pop up then the pop up goes away so that means that the Dom tree is constantly changing and that is the most costly operation for browser so all libraries are built using the philosophy that they will optimize this dom operations.So basically react changes the dom using javascript to be the very optimized and performant way.

//*Show on the above portion we used a method named React.createElement() like this:-
/*const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World welcome to Namaste react"
);
*/
//* But what if we try to console log this heading variable now the new developers in react may think that we will get H1 html element like we used to get on javascript But now we have to keep the fact in mind that now we are using react code, And we can also notice that we are not calling the method on the document object instead we are calling the method on React object, So this time the result will be different so if we really try to print it on the console then surprisingly we will get an object so let's do that.I have commented down the above port because it is already written in the above portion which is not commented out so that's why it's just a copy of that code and that's why we commented out this as an example.

console.log(heading); //* an object,Because this heading is a react element and at the end a react element is a javascript object and that is why we are getting an object as we try to print it on the console
//*And if we notice the object then we can see that the first parameter we pass inside the method h 1 it is the value of the type property inside this object And there is a property named props which is also a object and it contains the second and the third parameter we pass so the second one which is class name as a property and its value is heading And the third parameter we passed is saved as a Property value which has the property name children so basically the inside text is a children of this heading element and that's why the property name is children.
//*So we have to remember that at the end of the day a react element is a javascript object.

//*⁡⁢⁣⁣the render method in react⁡
//* Now to render the heading inside the root We use the render method on the root element like this:- root.render(heading);
//*But what does this render method actually do,So as the argument we are passing the heading inside this method and this heading is a javascript object so the work of this render method is to convert this object into an html element which the browser can understand and then put that element inside the root.
//*So many developers think that when we create the heading variable at that time it is already the H1 heading element but it's not the true at that time it is only a react element which is actually a javascript object and then the render method converts it into a html element which the browser can understand and then it pushes this element inside the dom so basically insert it inside the root element.

//* ⁡⁢⁣⁣Creating nested react elements⁡
//* So in the previous example we created a simple H 1 element which is not a nested element so it has no nested child elements inside it except only some text but using react we can also create nested elements like we create in Html so like this:-
/* <div id="parent">
      <div id="child">
        <h1 id="heading"></h1>
      </div>
    </div>
    */
//* Show to create this kind of nested react elements our create element method and its third parameter which is called the children will help us because the third parameter is basically the child element of the main element so it can be any text or it can be another element and that's why at the place of third parameter we can create another element in the same way and then again this Methods 3rd parameter expects our children so there we will pass another element which will be the H1 element and that how we can create nested react element so let us do that in practice.
const parent = React.createElement(
  `div`,
  { id: "parent" },
  React.createElement(
    `div`,
    { id: "child" },
    React.createElement(`h1`, { id: "heading" }, `nested heading using react`)
  )
);
root.render(parent); //*Now if we go to our inspect tool and even we look at the ui on our browser then we will see that this same nested element will be created as we wanted But the previous heading which we rendered will be removed and this new parent element is only present inside the root.
//*And remember that these parent element is a react element when it is created and not a html element and React element is just a javascript object and it is the render method which converts it to html element and then insert it inside the root.
console.log(parent);

//*⁡⁢⁣⁣Now we know that how to create a nested array but what if inside the nested element we want two sibling elements⁡,So to do that we have to again play with the third parameter so 3rd parameter represents children so in that place we can either pass a single child element which we already did above But if we want 2 nested sibling elements then in the place of the third parameter we have to write an array of children so let us first visualize what kind of structure we want to build then we will try to do that using our code
/* <div id="parent">
      <div id="child">
      ⁡⁣⁢⁣  <h1 id="heading">nested sibling heading using react</h1>
        <h2 id="heading2">nested sibling heading using react</h2>⁡
      </div>
    </div>
    */
//*Showing inside the child div two sibling heading elements so lets write this nested structure with some sibling elements using react and remember when we want two sibling elements as child of any element then in the place of 3rd parameter we have to pass an array of children elements.
const parent2 = React.createElement(
  `div`,
  { id: "parent" },
  React.createElement(`div`, { id: "child" }, [
    React.createElement(`h1`, { id: "heading" }, `nested heading using react`),
    React.createElement(
      `h2`,
      { id: "heading2" },
      `nested sibling heading using react`
    ),
  ])
);
root.render(parent2);
//*another example
/* <div id="parent">
      <div id="child">
      ⁡⁣⁢⁣  <h1 id="heading">nested sibling heading using react</h1>
        <h2 id="heading2">nested sibling heading using react</h2>⁡
      </div>
        <div id="child">
      ⁡⁣⁢⁣  <h1 id="heading">nested sibling heading using react</h1>
        <h2 id="heading2">nested sibling heading using react</h2>⁡
      </div>
    </div>
    */
const parent3 = React.createElement(`div`, { id: "parent" }, [
  React.createElement(`div`, { id: "child" }, [
    React.createElement(`h1`, { id: "heading" }, `nested heading using react`),
    React.createElement(
      `h2`,
      { id: "heading2" },
      `nested sibling heading using react`
    ),
  ]),
  React.createElement(`div`, { id: "child" }, [
    React.createElement(`h1`, { id: "heading" }, `nested heading using react`),
    React.createElement(
      `h2`,
      { id: "heading2" },
      `nested sibling heading using react`
    ),
  ]),
]); //*It will work fine and create our desired html structure but there will be a warning in the console:- Warning: Each child in a list should have a unique "key" prop. So we will solve this problem in the upcoming course but this is only to demonstrate how we can create sibling elements easily and the warning is about unique key prop , But we will learn about it in the upcoming lessons.
root.render(parent3);

//! But if we actually think about the readability of this code then we can clearly see that the html version is much more understandable we can easily understand that how the code is nested if we look at the html version but if we see this react version we just written then it is more complex to understand that which element is inside which element and which one is the sibling of another one and that is why when we need to create html element in react then we can use jsx it is very helpful when we need to create html tags in react we will learn about jsx in the latter less but jsx will help us to solve this readability problem and many developers think that only jsx can be used to develop react website but it is not the truth and we can also use react without Jsx It only helps when we need to create html elements .

//! One more important thing is that we have to always put our CDN link before our script file link because how in our script file we will use react so that's why to use react the react files should be downloaded first only then we can use react inside our script files so that's why the cdn links should be always above our normal script file.

//* And I have already talked about the replacement of any present element in the html when we render anything using render method so basically the fact is that whatever is present inside the root that does not matter that will be replaced by the elements we render using the render method so react will basically replace all of the previous elements which already exist inside the root and then put the new elements we are passing inside the render method.

//*Now we know that react will replace everything which is inside the root and place whatever we pass inside the render method but what if We had some elements outside of the root element and to see that we have created another two heading elements outside of the root And now if we run the code then we will see that these outsider elements will be kept inside the ui so these will not be replaced.
//*So we can understand after seeing it that here is only working inside the route we created and the root is actually the root element so react is basically handling everything inside the root and outside of the root element everything remains same.
//*⁡⁣⁢⁣It also helps us to understand that react is a javascript library and not a framework because react can - used in a smaller portion of a website we don't need to use react in every portion we can just use react in the header or in the footer or in the sidebar whatever will be the root element only there the react code will work only and that's what makes it a javascript library and not a framework.So basically we can implement react in a smaller portion of our website we don't need to use it all over the website and to do that we just need to select that part as the root of the reactDom.⁡

//* So this is why react is a library because it can work in a small portion of your app independently, And the rest of the app can use Javascript or any other framework.
//*Show other frameworks are not like this if you use a framework then you have to create a full fledged application using that framework but in case of react this is not the case when we use react it gives us so many helpful javascript functions or basically methods using which we can easily develop our website and even we can use react in existing application in just a small portion we don't even need to create the whole application using this. So basically when we use a framework then we have to create a full app or website using that framework but in case of react we can use react in a already existing application which way using some other framework or normal javascript but we can inject react inside that website using some cdn links and then use react in a small portion of that website or app and that's why it's a library and not a framework.
//*So when we are using react then we have to keep always in mind that the Order of script tags does matter because the normal script files should be always placed after the cdn links of react.
//*And the next important thing is which element is the root element that will always matter so if we set the header element to the root element of react then the react will only work inside the header element so whatever we set equals to root element of react only inside that element react will work and that is why the root element is so much important.

//*
//! Lesson 2  (Igniting the app)
//* subtitle

////////////////////////////////////////////////////////!
////////////////////////////////////////?
//////////////////*
/////////
//*Separator
/////////
//////////////////*
////////////////////////////////////////?
//////////////////////////////////////////////////////!
//*My comments
//* So in this lesson we are going to ignite our app so first of all we know that react is gonna make our app faster but to a extent so beside react we need more things to make our app production ready to push a app to production we need many more things to do like bundling and dead code elimination, Transpiling poly filling and many more things and we have to instal many more packages to do these things.
//* And to instal any kind of package first of all we need to initialize npm In our project now one more cool thing about npm is that many people Think that NP M represents node package manager but it's not its full form and we can also see that in its official website that nowhere is written that it has the full form of node package manager . Obviously it manages all of the packages so basically all of the packages are hosted inside npm but what I want to say is that its full form is not node package manager.

//* So as we know that we Initialize npm using the command npm in it we will do it in our terminal and then we know the rest process but only one thing will be different so when it will ask us for test case then in that place we have to mention jest so in future we will learn about how to use just so jest is basically used to write test cases for reap applications or we can say javascript applications because behind the scenes react is also javascript and then after initializing the npm we will get the package.json file. This file is basically the configuration of Npm inside this file we will get all of the information about Npm, Like what's our project name what's the endpoint of our project and the main information we get from this file is that what packages we are using in our project so basically Which Dependencies, And DevDependencies we're using inside our project.
//*So the first package we're gonna instal is a bundler, And we already know What is the bundler so it basically bundles all of the modules and all of the files at one place and while bundling it optimizes the code it does the date code elimination And transpiling which basically makes our code understandable for old browsers and also polyfill which basically converts the modern functionalities like async await of javascript into old code.So then all of the old browsers can easily understand our code.Now in the market there are so many bundles.
//*So there is another way of using react which is create react app Which by default uses webpack as its bundle and there are so many bundles in the market like webpack parcel and vite, All of these bundlers are very famous and there are more bundlers but eventually these packages help us to bundle optimize and compress our code which is very important to push our code to production, This different bundler may use different kind of algorithms to bundle our files but eventually they compromise optimize and transpile our code so we can push our code to production so in this course we are going to use parcel bundler and that is why we are going to instal it.
//* And before installing it we have to keep that in mind that there are basically two kind of packages we can instal first one is normal dependency and second one is dev dependency , So the dev dependency is basically used for development purpose but normal dependence is are gonna use also in production code and basically what I want to say is that.
//*⁡⁣⁣⁢difference between dev dependency and normal dependency⁡
//*⁡⁣⁢⁣Dependencies are the packages that are required for your application to run properly.
//*DevDependencies are the packages that are required for development and testing purposes only. These packages are not required for the application to run properly, but they are needed for tasks such as building, testing, and linting the code.⁡

//* ⁡⁣⁢⁣Now as parcel is a dev dependency that's why the command to install this package is npm i -D parcel, here -D is parameter which is used because we are installing a dev dependency. so let's install this package.⁡

//* ⁡⁢⁣⁡⁢⁣⁢what is  caret `^` and tilde `~` notation ?⁡⁡
//* ⁡⁢⁣⁣So inside the package json file when we look inside the dependency properties they are like a nested object and inside them all of the dependencies name and versions are saved but if we notice the version, there is ^ sign, "parcel": "^2.12.0", like this , this ^ sign is called caret notation and there is another ~ and this one is called tilde notation.⁡

/*⁡⁣⁢⁣Difference between tilde ( ~ ) and caret ( ^ ) in package.json
When we open our package.json file and search for the dependency property and in there we find the packages that are listed as a nested object of the dependency property like - "parcel": "^2.12.0" (package-name:package-version). Now look at the package version, we find some numbers separated by three dots. 

NPM versions follow a three-number format, separated by dots. The leftmost number signifies the major release, the second one represents the minor release, and the third number denotes the patch release of the package.

Syntax: The syntax of the npm version looks like the following.

Major.Minor.Patch ( in this version ^2.12.0")


Tilde (~) notation
Caret (^) notation
Difference between tilde (~) and caret (^) in package.json
Tilde (~) notation:
The tilde (~) notation is used to automatically update the package version to the latest patch version while freezing the major and minor versions updates. This notation is useful for automatically accepting bug fixes, considering that patch updates primarily address bugs.

Example: The ~1.2.0 will update all the future patch updates. We have to write just ~1.2.0 and all the next patch update dependencies. For example, 1.2.1, 1.2.2, 1.2.5……………1.2.x. but it will not update the package if some minor update like 1.3.0 or above version come and also not update when any ,major update comes like 2.0.0 or above. It will only update the patch versions. 
Note: Patch updates are very small security changes in a package that is why the patch update ~version is approximately equivalent to the  current version.

Caret (^) notation:
It automatically updates both minor and patch updates.

Example: The ^1.2.4 will update all the future Minor and patch updates, for example, ^1.2.4 will automatically change the dependency to any patch update like 1.2.5 ore more and also update when any minor update comes like 1.3.2 ore 1.5.8 or above if any update occurs, but if any major update comes like 2.0.0 or above version come. 
while Using caret notation it is important to look at our code regularly if it is compatible with the newest version or not.Because sometimes when some minor update occurs that can also break our code because of the new changes they implemented in the minor version so we have to cheque the code constantly if we use ^ notation.

//* ⁡⁢⁢⁡⁣⁣⁢so usually it is more safe when we are using tilde notation`~` because it will only update for patch updates.⁡⁡
*/

//* ⁡⁢⁣⁢there is another file which is package-lock.json. but what is it? and what's the difference package.json and package-lock.json file? why this package-lock.json file is so important to solve the very common problem which is "why my code is running on my local system but not running on the production"?⁡⁡
/*
⁡⁣⁢⁣The Role of package.json:
1. Project Configuration:

package.json serves as a manifest file for Node projects, containing metadata about the project and its dependencies.
It includes information such as the project name, version, entry point, scripts, and dependencies.
2. Dependency Management:

Dependencies are listed in the “dependencies” section, specifying the packages required for the project to run.
Developers can use the npm install command to install dependencies listed in the package.json.
3. Version Management:

Versions of dependencies may be specified with semantic versioning (SemVer) rules in the package.json.
This file is typically committed to version control systems (e.g., Git) to share project configurations.
As we can see above, a package.json file contains metadata about the project and also the functional dependencies that is required by the application.

The Role of package-lock.json:
1. Dependency Locking:

package-lock.json is an auto-generated file that provides a detailed, deterministic record of the dependency tree.
It locks down the specific versions of every installed package, preventing unintended updates.
2. Version Consistency:

This file ensures that every developer working on the project, as well as the CI/CD system, uses the exact same versions of dependencies.
Guarantees consistent builds across different environments, avoiding “it works on my machine” issues.
3. Improved Installation Speed:

package-lock.json optimizes dependency installation by storing a flat node_modules structure, reducing the need for deep dependency resolution during installation.
This results in faster and more reliable installations.
`package-lock.json` is crucial for locking dependencies to specific versions, ensuring consistent installations across different environments. Without it, variations in installed versions may occur. This file guarantees reproducibility by specifying exact versions, preventing discrepancies. Including both `package.json` and `package-lock.json` in source control ensures that collaborators install the exact dependencies, maintaining uniformity.⁡
*/
//! what is node_module folder?
//*⁡⁣⁢⁣So besides the package Json file we have another folder which is created after we instal the first dependency which is person so the folder which is created is node modules and this folder is very important because all of the data for the packages is inside this folder so basically it is a database for all of the packages which we will instal using npm and package dot json file is a configuration file for all of the packages which we instal from npm so we can see that what are the packages we are using inside our project inside the package json file but the packages we installed using npm that packages data is actually saved inside this node modules folders so it is like a database for all of the dependencies or packages

//*⁡⁢⁣⁢transitive dependencies⁡:-⁡⁢⁣⁣Now if we look at the node modules folder then inside that there are so many other folders and one of that is also parcel but we only installed parcel package not all of these folders so from where we got this so the answer is that as a project parcel has its own dependencies and those dependencies may have their own dependencies so basically one dependency is dependent on other dependencies so to use a dependency we have to instal the other dependencies on which our required dependency is dependent.And when a dependency dependent on other dependencies then other dependencies are  called transitive dependencies.⁡
//! Do a project contains only  package.json file?
//* No, So if we open the node modules folder then click any of the folder of any package then inside every packages folder there is a package json file for each package and that is because inside these package dot Json file the package itself keeps track What are its own dependencies so as a example if we open the parcel folder then inside that there is a package.Json file and if we open it then we will see that there are many dependencies or we can say parcel package has its own dependencies and the configuration for all of the packages on which parcel is dependent is recorded in its own package json file so that's why the answer is a project can have so many package.Json files

//* ⁡⁢⁣⁢should we put node_modules folder into github?
//* no, there is no need⁡, ⁡⁢⁣⁣because if we upload package.json and package-lock.json file then we can re-generate all of the node_modules files using package.json file and package-lock.json file.⁡

//* ⁡⁢⁣⁢Should we put package.json and package-lock.json into github and why integrity property inside the package-lock.json file is so important?⁡
//* ⁡⁣⁢⁣yes always, becuase package.json is the configuration file for npm , so using it we cam can know waht packages we are using, and package-lock.json is also important because it locks the exact version of each and every dependencies, even it has saved the exact version's of every transitive dependencies, so it will help to ensure that the version we are using on system that same version gets deployed on the production and we don't face any issue like the code is running on the sydtem but it is not running on the production.and to ensure that , inside the parcel depoendency object there is property called integrity and it;s value is called hash , and this hash ensures that what ever is in our local exactly same version gets deployed on production.⁡

//* when we install a package from npm , we use npm command line to install any package, so npm is software and using it's command line we can install any package which are hosted on npm, so it is also place here all of the packages are hosted, and using it's command line we can install any package from it .

//! But what is npx?
//*⁡⁣⁢⁣NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.but here we already installed the package so we can run that using npx⁡
//* now let's create our build using parcel, so it will create a development server with a live connection on localhost running on port 1234. and the create the development build the command is - npx parcel index.html.

//!Best way to get react in our project - ( not using cdn link )
//* ⁡⁣⁢⁣So right now we're getting the react code return javascript files from cdn links and it is  not the best way to getting react in our project when we get react using cdn links we fetch the react files from the cdn links and it is a costly operation because we are fetching the data of react from some other server So I it is not the best way to getting react in our project and the best way of getting the react code Is as a javascript package from npm, Because at the end of the day reap is just javascript code and we can also get that react code as a package which we can download using npm because react is also a javascript package so basically we are installing react as a package from npm and it is the best way because if we instal react using npm then after downloading the react package the package data will be saved inside the node modules folder and from there we can easily get the react code we don't need to then do a network request every time to get react from another server because it will be already present inside our node modules folder so that's why using N PM and downloading react as a package is more efficient way than using cdn links to download it because every time downloading it using cdn links will be a more costly operation.

//* ⁡⁣⁢⁣And the another important point is that whenever a new update comes from react then we have to change the link every time whenever our update comes but in case of installing react as a package from npm we don't need to do it manually every time instead the caret^ which is present in front of the version number will automatically update the minor and patch updates⁡

//* so let's install react and react-dom using npm and it's is a normal dependency so the command to install react and react-dom is :- npm i react and npm i react-dom

//* And as the react code is Already present as a package inside the node modules folder that's why we can now remove the cdn links we put inside the index html file previously because we don't need them as we already have the react files and react-dom also as npm packages which are inside the node modules folder.

//* So now inside the node modulus folder we have the react files but our project does not know that where the react files are and to use react now we have to tell our javascript file that where the react and react-dom code is present , And to do that we have to import react and react dome using import keyword and it is basically telling our project that from where it has to get the react code so inside our project where the react and react dom code is present.So let's import react and react Dom at the top of our these javascript file.

//!converting the script file a module.
//* But then if we open the live server and see our page then it will give us a error so basically if we start a development server using parcel then it will show a error on the browser that scripts cannot use import or export and that is because till now our script file is a normal javascript file and inside normal javascript files we cannot use import and export keyword to use import or export we have to first convert this normal javascript file into a module and inside a module we can use imports and exports and to convert our normal skip file into a module we have to go back to the index .html file and inside the script file link we have to mention the type attribute and its value will be module and this will basically tell the browser that it is not a normal javascript file and it is a javascript module and that's why if after saving it we go to the browser then we will see that now our code will work and now we are basically using react from the npm package we installed.

//!Power of parcel
//* ⁡⁣⁢⁣1. Dev build and production build - ⁣And parcel gives us the functionality to create the development build and also the production build and both are different because production build needs more optimisations to be created than development build and whenever we create a development build or a production build then after building the build parcel puts that build inside a folder named dist And basically it's a short form of distribution and inside this dist folder the build is located and then using this folder parcel host it on the local host⁡. ⁡⁣⁣⁢Command to create production build:- npx parcel build index.html⁡

//* 2. HMR(hot module replacement) :- As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.
//*hot activate HMR we need to write this
if (module.hot) {
  module.hot.accept();
} //* it will maintain the state of our app and then when ever it creaes a new build it will not refresh the whole page , it will only change the portion of the page where any change happened , so it will keep the state where nothing has changes and not refresh the whole page.

//* 3. file watching algorithm - To support an optimal caching and development experience Parcel utilizes a very fast watcher written in C++ that integrates with low-level file watching functionality of each operating system. Using this watcher Parcel watches every file in your project root (including all node_modules). Based on events and metadata from these files, Parcel determines which files need to be rebuilt. So whenever you save the files this file watch will watch all of the files very fast Detect the changes and then rebuild the app and also keep the changes in the cache files so then in the next build using the cache file it can create the build more faster.
//*4.caching:-Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes. For example, if you change a configuration file, all of the source files that rely on that configuration will be rebuilt.

//*By default, the cache is stored in the .parcel-cache folder inside your project. You should add this folder to your .gitignore (or equivalent) so that it is not committed in your repo. You can also override the location of the cache using the --cache-dir CLI option.

//*Caching can also be disabled using the --no-cache flag. Note that this only disables reading from the cache – a .parcel-cache folder will still be created.⁡

//* ⁡⁣⁣⁢5.Image optimization :- So loading images is one of the most costly operations for a browser and parcel also does image optimization for us.
//*minification:-Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box. Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.

//*By default, minification is enabled when using the parcel build command. You can use the --no-optimize CLI flag to disable minification and other optimizations if needed.

//*Parcel uses SWC to minify JavaScript, lightningcss for CSS, htmlnano for HTML, and svgo for SVG. If needed, you can configure these tools using a .terserrc, .htmlnanorc, or svgo.config.json config file. More details in documentation.⁡

//*⁡⁢⁣⁣6.bundling:- So if we have multiple javascript modules in our project then the parcel will bundle all of the modules and create 1 javascript file after merging all of those modules.⁡

//*⁡⁣⁢⁣7.Compressing:- Parcel supports compressing bundles using Gzip and Brotli. While many servers compress data on the fly, others require you to upload pre-compressed payloads ahead of time. This may also allow for better compression, which would be too slow to do on every network request.

//*Because not everyone needs it, compression is not enabled by default. To enable it, add @parcel/compressor-gzip and/or @parcel/compressor-brotli to your .parcelrc.
//* in this project we have not created that file.

//*⁡⁣⁣⁢8.Content hashing:-Parcel automatically includes content hashes in the names of all output files, which enables long-term browser caching. Whenever the contents of a bundle changes, the hash included in the filename will be updated, triggering invalidation of CDN and browser caches.

//*By default, all bundles include a content hash except entries and certain dependency types that require names to be stable. For example, service workers require a stable file name to work properly, and <a> tags in HTML reference user readable URLs.

//*You can also disable content hashing using the --no - content - hash CLI flag.Note that the name will still include a hash, but it will not change on each build.You can customize bundle naming completely using Namer plugins.⁡

//*⁡⁢⁣⁣9.Code Splitting:-Parcel supports zero configuration code splitting out of the box. This allows you to split your application code into separate bundles which can be loaded on demand, resulting in smaller initial bundle sizes and faster load times.

//*Code splitting is controlled by use of the dynamic import() syntax, which works like the normal import statement, but returns a Promise. This means that the module can be loaded asynchronously⁡.

//*⁡⁣⁢⁣10.“Differential bundling” is the idea of shipping multiple versions of your code for different targets, and allowing the browser to choose the most optimal one to download. When you use a <script type="module"> element in an HTML file, and some of the browsers specified by the environment do not support ES modules natively, Parcel will automatically generate a <script nomodule> fallback as well.
/*
<script type="module" src="app.js"></script>
is compiled to:

<script type="module" src="app.c9a6fe.js"></script>
<script nomodule src="app.f7d631.js"></script>
*/
//*This allows modern browsers that support ES modules to download a much smaller bundle, while legacy browsers are still supported using a fallback. This can significantly reduce bundle sizes and improve load times by avoiding transpilation of modern JavaScript syntax like classes, arrow functions, async/await, and more.

//*This happens automatically based on your browser targets, as declared in the "browserslist" field in your package.json. If no browserslist is declared, or all browser targets support ES modules natively, then a nomodule fallback will not be generated.⁡

//*⁡⁢⁣⁣11.Error handling using Diagnostics:- Parcel includes support for rich diagnostics that are used to describe errors and warnings in a format-agnostic way. It also includes a built in logging system that allows Reporter plugins to handle all logs and errors and present them to the user.
//*A Diagnostic is a JavaScript object with a set of properties that are required to create a useful log message. This can be anything from a verbose message to a warning or error. Diagnostics can include a message, information about the file being processed, a code frame, error information, hints on how to potentially resolve the issue, and a link to documentation to learn more.⁡

//*⁡⁣⁢⁣12.tree shaking:- it will automatically remove any unused code like any function or any other unused data which is not necessary to build the code.⁡

/*⁡⁢⁣⁣13.HTTPS
Sometimes, you may need to use HTTPS during development. For example, you may need to use a certain hostname for authentication cookies, or debug mixed content issues. Parcel’s dev server supports HTTPS out of the box. You can either use an automatically generated certificate, or provide your own.

To use an automatically generated self-signed certificate, use the --https CLI flag. The first time you load the page, you may need to manually trust this certificate in your browser.

parcel src/index.html --https
To use a custom certificate, you’ll need to use the --cert and --key CLI options to specify the certificate file and private key respectively.

parcel src/index.html --cert certificate.cert --key private.key⁡
*/
//*⁡⁣⁢
//* ⁡⁢⁣⁣So we have to put the node modules, the dist folder and the .parcel-cache folder inside the .gitignore file because we should not put any file onto the git hub which can be regenerated because inside the package.json and package-lock.json file we have enough data to regenerate node modules ,dist folder and parcel cache folder so that's why we can put these files inside the git ignore file so then this will not be uploaded to git because we don't need to upload these files onto github because these files can be easily regenerated so there is no need to upload these files on github.⁡

//*So after knowing this lot of specifications of parcel bundler we can clearly understand that it is not only the react which is making our app faster obviously react has a good amo;unt of role to make it faster but there are also other things which helps to make a big production ready app faster and bundlers are one of the very important piece of that parcel like bundlers do these all of the things to make the code optimized compressed and a lot more which also eventually helps to make the app faster.
//*Browserlist package:- Now when we installed parcel at that time parcel installed another transitive dependency which is so much useful and its name is browser list and it basically helps us to Ensure that our website will be working on most of the existing browsers and to use this package we basically need to do some configuration in our package .Json file so first of all we have to create a property named browser list and its value will be a array and inside this array we can write any configuration we need and this configuration is nothing but the information about the browsers on which we want to make our website work so if we mention last two browsers of chrome then this configuration will definitely ensure that our website will definitely work in the last two versions of chrome and we can also mention other browser names like Firefox or even we can just write last two versionInIn that case it will support the last two versions of all of the browsers available and if we mention some browser name inside the array like if we mention two last versions of chrome it just means that it will definitely support the last two versions of chrome but it does not mean that it will not work on any other browsers so it may or may not work on other browsers but it will definitely support the last two versions of chrome and using, we can pass as many configurations as we want but we should keep that in mind that if we write so much configuration then for each of the versions our app bundler will create different bundles and eventually that makes our files size heavy so we should always try that we mention a kind of configuration that covers most of the part of browsers which the users are using like if we just covered the 90 or 95% of users then it will be enough because that will mean that our website will be accessible for 95% of the people of the world and that's really a good accessibility score but remember that if we are creating a website for government then we should always keep that in mind that our website should be accessible for every user so in that case the browsers support should be 100 percent but if we are just building a normal website then 90% user support is enough and that is because if we try to make our website work on every old browser then it will eventually add more and more food inside the bundles to support the old browsers and that eventually makes the code so much bigger and we do not want to make the file size so much bigger so that's why we should always write the configuration very carefully to make the bundle size  compact,And make the website accessible As much possible. So if we just write last 10 versions then it will be enough to support above 90% of the total user and if we go to browserlist.dev then we can also cheque that if we mention a configuration value last two versions for any other configuration then we can see that how many percent of users will be able to access our website in the world so that's why these browser list is very important website to make our website accessible for the users who are using very old versions., So let's add this browser list property in our package json file and as the value we will just write last two versions and if we go to the browser list website and write this configuration value then it is showing that it will make our website accessible for 80% of the users worldwide and right now it's enough because we want to make our website compact not so much heavy so that's why we are gonna go ahead with these configuration.⁡
