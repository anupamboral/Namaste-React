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

Values: This attribute can have  two values which are given below –

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
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
//* Now our root is created on the selected element which has the id of root. And now it's time to insert the heading inside the root, So basically we want to render the heading inside the root, And to render the heading inside the route it is very easy so when we are using react the method names are very much simple and easy to understand and to render the heading inside the root we just need to call a method named render on the root, And the argument we will pass inside it , Is the heading we created.

root.render(heading);
*/
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
/*
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
*/
//*⁡⁢⁣⁣Now we know that how to create a nested array but what if inside the nested element we want two sibling elements⁡,So to do that we have to again play with the third parameter so 3rd parameter represents children so in that place we can either pass a single child element which we already did above But if we want 2 nested sibling elements then in the place of the third parameter we have to write an array of children so let us first visualize what kind of structure we want to build then we will try to do that using our code
/* <div id="parent">
      <div id="child">
      ⁡⁣⁢⁣  <h1 id="heading">nested sibling heading using react</h1>
        <h2 id="heading2">nested sibling heading using react</h2>⁡
      </div>
    </div>
    */
//*Showing inside the child div two sibling heading elements so lets write this nested structure with some sibling elements using react and remember when we want two sibling elements as child of any element then in the place of 3rd parameter we have to pass an array of children elements.
/*
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
*/
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

/*
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
*/
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

//!Lesson 3 - Laying the foundation

//*⁡⁣⁢⁣Using npm scripts:- So until now to starting parcel development server we have used npx in the terminal but it is not the standard way of starting a development build or starting a production build and the standard way of starting a development server or a production build is basically using npm scripts So its a convention in developers to use npm scripts for starting development server and it is basically a smarter and smaller way of starting a development server so basically it is just running the same command but we will actually give it a name a smaller name which will be basically a shorter form of that whole command so to write in NPM scripts We have to go to our package dot Jason file and already there is a property written named script and its value is basically a object and as we can guess the scripts will be the key value pairs So basically we will first write the development script and its name will be start so the key name will be start and its value will be the command We return to start the development server except the npx keyword so basically its value will be parcel index.html . And whenever in the future we want to run this script so basically we want to start our development server then we just need to write the key name after npm run so the whole command will be npm run start To start the development build and the next script we will add is for production build so in this case the key name will be build and its value will be parcel build index .html and again to run this script in the terminal we have to write npm run build and in case of the development build we can skip the run keyword and Just write npm start, but in case of production build we have to write npm run build.⁡
//* ⁡⁢⁣⁢jsx⁡ - we created elements using createElement method in react till now but it is not the easiest way to create  elements inside react because when we create nested elements using this createElement method then it becomes very hard to read them but we have another easier way of creating elements in react and that is using JSX.Example:-
const jsxHeading = <h1 className="heading">Namaste react using JSX 🚀🚀</h1>; //!many people think that this is html inside javascript but it is not html inside javascript .
//*it is html like syntax and not html inside javascript.and using this jsx syntax we created a react element.and it is way more simpler to create react elements using jsx.
//* many developers think that jsx is part of react but no if we want to use core react to create elements then we have to use methods which are aprt of core react like createElement method. But as it is very difficult to create nested elements using core react , that's why we use jsx syntax to create react elements because it is easier and readable. but remember jsx is not part of core react and it is different syntax which very similar to html but not html inside javascript.
//* and the rendering process is same . so first we have to create the root using reactDom and then using the render method we can render this react element in the browser and remember this react element is a object and when it will enter inside the browser then it will be converted into html.
/*
const root = ReactDOM.createRoot(document.getElementById(`root`));

root.render(jsxHeading);
*/
//*⁡⁢⁣⁢ ⁡⁢⁣⁢now we may ask a simple question which is really a very very important, that, is JSX a valid syntax inside javascript which the javascript engine inside the browser can understand ?⁡

//*No, javascript engine can't understand jsx, but then how it is working? so the answer is because of parcel. because before the code enters into the browser before that the code has to be transpiled, transpiling means converting the code which the browser can understand, and because first the code will be transpiled by parcel then only it will enter inside the browser that's why the browser can understand jsx. now one more interesting thing is that parcel is not itself doing the transpiling, parcel has it's own dependencies, and parcel is like a manager of all this different dependencies, and of them is babel, so while we installed parcel at that time parcel itself installed babel and many other transitive dependencies which are needed.and Babel does the transpiling for us. and then the converted understandable code enters into browser which javascript engine can understand.

//* ⁡⁢⁣⁢but what happen when babel transpile jsx?⁡

//* after transpile jsx becomes=> React.createElement() then => javascript object => htmlElement(while rendered) and that's why browser can understand jsx.

// * while we write react elements using jsx, then when we write attributes for elements then we have to use camelCase, example we write html attribute tabindex using snakecase but when we write this attribute using jsx then we have to use camelCase like - tabIndex only then it will work. and in html we write class but jsx we have to write className.

//*⁡⁢⁣⁢ writing multiple lines of jsx⁡:- to write multiple lines of jsx we have use( parenthesis) and inside it we have to write all the jsx, but if we are writing just one line then it is not required.

//* ⁡⁣⁢⁣Everything is a component inside react ⁡:- we heard this statement many times that everything is a component inside react. and that's a a true statement. So if it is a header , footer or search whatever iut is , it will be a component, if it is created with react.now there a two kind of components inside react.1Class based components and 2. functional components. Now in the present time nobody uses class bases components because it is older way of creating components and it is more hectic , class based components were craeted using javascript classes. in the other hand the modern way and easier way to create components is functional components and as we can guess that using javascript functions functional components are created .
//* ⁡⁣⁣⁢Functional components⁡:-Functional components are just normal javascript functions which return some jsx/react element or more than one element. because at the end of the day jsx will be transpiled into react element so we can use either jsx or react element to explain it. remember the convention that we should always start the functional component name with capital letter like "HeadingComponent" neither it will through an error.
//* example (using arrow functions)(remember if we want to return multiple lines of jsx of multiple react elements then we have to use (parenthesis))

const Title = () => (
  <h1 className="title" tabIndex="5">
    Namaste React{" "}
  </h1>
); //*now this also a functional component but if we want to render it inside the below heading functional component then inside the below HeadingFunctionalComponent named component we need to write it like <title/> .let's do that

const elm = <span>hello</span>; //*this is a normal react element not a functional component and now we will also try to render this inside the below component,

const HeadingFunctionalComponent = () => (
  <div className="container">
    {/* //*3 ways of inserting a functional component inside another functional component which is also called component composition(described below) */}
    <Title />

    <Title></Title>
    {/**the above line and this line will produce the same result */}
    {Title()}
    {/**at the end of the day every functional component a normal javascript function so this is the third way of inserting a functional component inside other functional component */}
    {console.log(2 + 4)}
    {/*//*the above line  of writing javascript inside jsx using {} is the example how we write jsx inside a functional component*/}
    {elm}
    {/*this is how we insert a react elm inside a functional component*/}
    <h1>Namaste React functional component</h1>
  </div>
);
//*remember because of implicit return of arrow functions we can  remove the {} and return keyword.and if we want multiple line of jsx then we can put that all jsx inside ().like above.

//* ⁡⁢⁣⁢rendering a functional component⁡:- to render this functional component again we will use render method on root but inside the render method we will not directly write the component name instead we have to write it inside < compo />.

// root.render(<HeadingFunctionalComponent />);
//* ⁡⁢⁣⁢Component ⁡⁢⁣⁢composition⁡⁡ :-like above when example when we render a component inside another component that is called component composition because we are composing a component inside another component

//* ⁡⁢⁣⁢writing javascript inside jsx⁡:- when we write a functional component using jsx ,then to write multiple lines of jsx we use () and inside it we write all the jsx we want but inside it if want to write any javascript expression we can also write that we just need to that inside {curly brackets}.

//* ⁡⁢⁣⁢cross site scripting(XSS) attack prevention by jsx⁡:- we know that if we want to run any piece javascript code inside jsx then inside {} we can do that but let's say we are receiving some data from some api and we put that inside jsx using {data}, but what if the api is sending some malicious code or bad data which can run inside user's browser and hack user information, but because of jsx we can get rid of this problem because whenever we write some javascript inside jsx using {} then before execution that jsx will perform data sanitization which prevent these kind of attacks so we don't need to think about these kind of attacks.
//!Lesson 4 (Talk is cheap ,show me the code)

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
/*
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
*/
//*way of writing inline css in jsx
//* now we know how we create elements using jsx , now using the className we can give elements required style in a css file , but what if we want to write inline css like we write in html , then process is different, we will write the style attribute and it's value will not not be normal css, instead we have to write all css a object. and the style attributes value will be this object containing all the required properties as key value pairs. and as this a object so while we will write this inside jsx we have do that inside a {} because we know we can write javascript inside jx using {}.let's learn it using a example. we will first make the object which will contain the styles of the card and then pass that object as the value of style attribute of the card.
//*So the conclusion is when ever we need to pass in some data inside a component then pass that as a prop.
/*
const cardStyles = {
  backgroundColor: "cyan",
};
const RestaurantCard = (prop) => {
  //*to use the data coming from the prop , we need to destructure it first and while destructuring we have to use the same name we used while passing the prop , in this case resData.
  const { resData } = prop;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info; //* ? mark is used is called optional chaining, so if the property exist it will read property and if does not exist then it will return undefined.
  const { deliveryTime } = resData?.info.sla;

  console.log(resData);
  return (
    <div className="res-card" style={cardStyles}>
      <img
        className="res-logo"
        alt="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="cuisine-details">{cuisines.join(", ")}</h4>
      <h5 className="res-rating">⭐{avgRating} Rating</h5>
      <h5 className="delivery-time"> {deliveryTime} minutes delivery</h5>
    </div>
  );
};
*/
//*using real api data from swiggy to make the card components dynamic. reslist is an array of objects and every object is for one restaurant
/*
const resList = [
  {
    info: {
      id: "27112",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Near Honda Showroom",
      areaName: "Shibpur",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-05-10 00:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-near-honda-showroom-shibpur-kolkata-27112",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "651011",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "New Market",
      areaName: "Esplanade Kolkata",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "45-50 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-new-market-esplanade-kolkata-kolkata-651011",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "392663",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Avni Mall",
      areaName: "Howrah",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "45-50 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-avni-mall-howrah-kolkata-392663",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "3078",
      name: "Balwant Singh's Eating House",
      cloudinaryImageId: "oshzewpdqvmphedhkxgt",
      locality: "Bhawanipur",
      areaName: "Bhawanipur",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Beverages",
        "Snacks",
        "Chinese",
        "Continental",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "6143",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "45-50 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 04:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/balwant-singhs-eating-house-bhawanipur-kolkata-3078",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "192815",
      name: "A1 Ajooba Biryani center",
      cloudinaryImageId: "sg319veq0rjbsytlqdib",
      locality: "Jadavpur",
      areaName: "Regent Park",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani"],
      avgRating: 3.5,
      parentId: "25013",
      avgRatingString: "3.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 73,
        lastMileTravel: 13.5,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "70-75 mins",
        lastMileTravelString: "13.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-16 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/a1-ajooba-biryani-center-jadavpur-regent-park-kolkata-192815",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "252048",
      name: "Food Peddler Sandwiches",
      cloudinaryImageId: "otxx7vyajludhn1nhkol",
      locality: "Kalighat (Hazra)",
      areaName: "Kalighat",
      costForTwo: "₹150 for two",
      cuisines: [
        "Continental",
        "Beverages",
        "Snacks",
        "Salads",
        "Healthy Food",
      ],
      avgRating: 4.6,
      parentId: "81834",
      avgRatingString: "4.6",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 62,
        lastMileTravel: 9.5,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "60-65 mins",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 03:30:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/food-peddler-sandwiches-hazra-kalighat-kolkata-252048",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "691558",
      name: "ELAHI LUXURY DINING",
      cloudinaryImageId: "4a25600fed5ae7a75ee70a91e0a885cd",
      locality: "Ripon Street",
      areaName: "Central Kolkata",
      costForTwo: "₹1000 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani",
        "Kebabs",
        "Seafood",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "76982",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 8.5,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "50-55 mins",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 04:01:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/elahi-luxury-dining-ripon-street-central-kolkata-kolkata-691558",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "13571",
      name: "Haji Saheb Park Circus",
      cloudinaryImageId: "bedbbaa7543c3d70d7a01b02046ee86e",
      locality: "Ballygunge",
      areaName: "Ballygunge",
      costForTwo: "₹800 for two",
      cuisines: ["Mughlai", "North Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "18627",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "55-60 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/haji-saheb-park-circus-ballygunge-kolkata-13571",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "19515",
      name: "Mezban Ripon Street",
      cloudinaryImageId: "jaj2dspo6b2pfvflxiap",
      locality: "Wellesley",
      areaName: "Wellesley",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Biryani", "Chinese", "Tandoor"],
      avgRating: 4.3,
      parentId: "135608",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 60,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "55-60 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-05-10 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-65716741-6953-447a-8bd8-b799435720b4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mezban-ripon-street-wellesley-kolkata-19515",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
*/
// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="cards-container">
//         {/* //* restaurant cards */}
//         {/*//* Example of passing props to a functional component */}
//         {resList.map((restaurant) => (
//           <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//         ))}
//         {/*  // *above reslist is an array of objects and every object is for one restaurant, and as we using reslist array inside jsx that's why we are putting that inside {} because to write javascript inside jsx we have to use {}. */}
//         {/*//*⁡⁢⁣⁢Importance of key prop⁡:- now after doing all of this we will see a warning in the console, many of developers can ignore this warning because it is not an error, but if we want to to be good developer then we should never ignore warnings, so the warning is " Warning: Each child in a list should have a unique "key" prop." and this warning means that each of list item so each of the  RestaurantCard component should uniquely presented, so each of the restaurant cards should have a unique "key" property , so we have pass an unique key prop for every RestaurantCard component . remember this "key" is a reserved keyword in React. and this key prop should have a unique value. so to pass an unique value in the data we have an id property in every restaurants object so we can use that as unique key.after doing this , the warning will be disappeared*/}
//       </div>
//     </div>
//   );
// };
//*Props: To make a component reusable we have to pass  the data dynamically so we can reuse a component to display different data with same component .and to pass that data into components we use props. props are just arguments for functions. because at the end of the day functional components are just normal function and props are like arguments for functions.and like we usually say passing arguments to function , the same way we say in react that we pass props to a component. so basically we render a component inside another component like this <RestaurantCard /> then we can use props to pass the data dynamically , like this :- <RestaurantCard resName="Foody Bites" cuisine="cakes" /> , and then RestaurantCard component will receive this prop as an object, and behind the scenes RestaurantCard is function and when we pass this props that is actually passing arguments RestaurantCard because it is actually a function and RestaurantCard will receive this prop data as an object an we check that if we mention the prop parameter in RestaurantCard functional component and then print that using console.log() we will see in the browser console that an object will be printed containing the prop data we have passed and the data is stored as properties.

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(<AppLayout />);

//*config driven ui:- In today's time config driven ui is very much important for system design interviews and also for creating user interfaces for different locations at once which will be controlled or changed using the data coming from the backend api that data will drive or basically control the ui design or ui components so let us understand it using an example so let's say we have opened a food delivery website like swiggy and after opening below the heading there is a carousel Which contains multiple cards and the cards are showing multiple offers and discounts which are different for every location for example the restraints of Delhi can have different offers and discounts and the Hyderabad restaurants can have different offers and discounts and on the other hand Lucknow restaurants Can have no discounts and offers so in that case the developer will not develop different websites for every place instead he will build just one user interface which will be dynamic so basically dynamic means dependent on the data it will change and that eventually will help to display different kind of offers and discounts for different places and that's why it is called config driven ui,Because the configuration are basically the data which is coming from backend api has some configurations for different places and that data will control or drive The components which will be displayed on the user interface so basically it will show different offers for Delhi and different offers for Hyderabad and for the Lucknow City it will show no carousal Because there are no offers for Lucknow City that's why it will remove the whole carousel component because there are no offers to display, so the carousal component is not needed for lucknow, any specific place, so basically the api data coming backend, depending on the data configuration the ui will be driven/controlled.This is very modern practice companies like uber, swiggy uses this.

//*This is the beauty of react, when react was built it was built with a fundamental that in javascript file only we will kind of build our markup as well as logic, earlier we used to have our html file different for markup and different javascript files for logic now we can run loop in jsx right inside our javascript file and we can put in markup ,pass in classnames ,div ,id properties ,H1 tag , everything we can do in the same place in the js file.

//* now after doing all of this we will see a warning in the console, many of developers can ignore this warning because it is not an error, but if we want to to be good developer then we should never ignore warnings, so the warning is " Warning: Each child in a list should have a unique "key" prop." and this warning

//*⁡⁢⁣⁡⁢⁣⁢Importance of key prop⁡⁡:- now after creating the dynamic card component using map method, we will see a warning in the console, many of developers can ignore this warning because it is not an error, but if we want to to be good developer then we should never ignore warnings, so the warning is " Warning: Each child in a list should have a unique "key" prop." and this warning means that each of list item so each of the  RestaurantCard component should uniquely presented, so each of the restaurant cards should have a unique "key" property , so we have pass an unique key prop for every RestaurantCard component . remember this "key" is a reserved keyword in React. and this key prop should have a unique value. so to pass an unique value in the data we have an id property in every restaurants object so we can use that as unique key.after doing this , the warning will be disappeared.

//*⁡⁢⁣⁢ But why we need to use this key prop and give every component an unique id⁡:- Because like RestaurantCard component , when we have multiple components at the same hierarchy level, let's say we have 100 RestaurantCard components, and all of them have no ids, and then we add another RestaurantCard component then react will not know which of the component is newly added , and then it will re render all of components which increase the loading time and make the code un-optimized and decrease the performance, and there is no need to re-render all of the components from scratch.that's why to tell react which components is newly added we have provide a unique key to every component.and this unique key also helps to place the components in proper order one after according to the id number.and Many developers say that if we don't have any unique as key then we can use the second parameter of the map method, which is index, so we can also use indexes to create an unique id for components.but react documentation mentions that we should  use indexes as the key.they say "Index as a key is an anti-pattern" to know why go to this link "https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/"

//!Lesson 5 - Let's get hooked

//! whatever we do using react we can also do that using html ,css,javascript so then why do we use use a library like react or framework?
//* because it makes your developer experience easy and fast. it makes you write less code and do more on the webpage.

//* some of the best practices in react world:- until now we have written all the components like - header,body, footer in the same file, and now our file looks ugly because of so much code in just one file and it is not a good practice. and the best practice in the industry is to create separate files for separate components.so we will now restructure our code and create files for separate components.though it is not mandatory to structure like this , we can even put all the code in a single file, but it is good practice to have good structure.and when evr we create a file for a component we should always name that file in the name of the component.
//* let's also know about a convention in the developer world which is to put all of the source code in the src folder.so all of the important files will be kept inside the src folder so let's create this src folder and move the app.js file inside it.and for adding components we will create also components folder inside src folder. so app.js is direct child of src folder which contains root level code and now whatever components we need inside App.js we will put those inside the components folder.

//* right now our javascript files has .js extension but as we are writing jsx inside this file that's why as the extension many developers .jsx extension. like App.jsx or when someone is writing typescript with jsx the they use .tsx extension. but it doesn't effect our app so we can use any of them.

//* the restaurant data(object), logo img url, is some hardcoded data which we copied from the swiggy's api. but as it some hard coded data that's why we should never put these kind of data inside a component file like this snd best practice is create a separate file , for these kind of hard coded data , we usually name that kind of file config file or utils(utilities ) file or constants file. so here in this project we will create a separate folder inside the src folder and it's name will utils and inside utils folder we will create a config file. and inside config file we will put all of these data , because these kind of important data in gonna be used for many components like the logo can be used in the home page , in the header also the in the footer , so to keep these kinds of important data we make a separate file . and when ever some change happens then we don't need to go everywhere and change it we just need change it on the config file and it will be reflected in everywhere. so it also helps to make the data reusable.

//*so all the the constant data will be inside config file like logo url. and the restaurant data will be inside a file called mockdata.js file in the same hierarchy level with config file.so let's create the mockdata file, and it also fine we would save the reslist data in the same config file.
//* Now we will do something with the search button so right now we have a search box which does nothing and beside that we will create a button which will filter out all of the restaurant which has rating above 4 star. so to that we usually a attach a eventlistener function after selecting that in javascript but in react it is more easier . so to attach a event listener to anu any element, we can directly add one attribute directly inside the element.like to add an click event listener we have to add an "onclick" attribute and it's value will be a callback where we can write what we want to do. and remember as the value of this attribute will be a javascript function so we have to write it inside {}.
//* now we want that whenever we will click on this top restaurant button, this should filter all the restaurants which has rating above 4 stars. now every react app we build , has an UI layer and a data layer, and whatever will come through this data layer that will be displayed through the UI layer, so the UI layer using the data layer to display the data dynamically. the data is nothing but the api data which is from the api, and right now we have that data hardcoded in the mockData.js file. so if we want to filter the top rated restaurants on click on the button then we just need to use filter method to filter all restaurant objects which has rating above 4 rating.  so let's do that, we are gonna filter the restaurant list array of object using filter method. and also print the resulting array to see if it is working. and now as a result it will print the filter array of objects which will only contain the restaurant object which has higher rating. so now we have the filter object, but it would have been better if the ui would be updated using this new updated data. till now that is not happening.

//* Power of React hooks:- to automatically change the UI using the the updated filtered data that we can use react hooks. react makes our app faster because it can do faster dom manipulation. right now our filtered data which newResList is a normal javascript variable , but to use the superpowers of react we can use react variable which is actually called state variable.and to create a state variable we have to use a react hook named useState() , there are also other hooks. Hooks are at end of of the day some javascript function. and these pre-written function has some super powers which is given to us by react.
// * ## React Hooks
// * - normal js utility function written by react developers
// * - important hook names
// * - useState() (super important react hook)
// * - useEffect()
// * - to use a hook we need to import it from the react file as named import (remember when we imported React itself from the react file it was a default import but in case of hooks we have to import them as named import using {})

//* - useState hooks is used to create state variables, and it is called state variable because it maintain's the state of our component, and if we create a state variable inside a component then we can say the scope of the state variable inside the component like we say a variable's scope is inside a function.now to create a state variable we have to call the useState () function and assign this as a value of a let variable and we are using let keyword because the state can be changed anytime. and the variable name should be inside an array [] like ,let [listOfRestaurants]=useState();. it is like we just declared a state variable not initializing its value .so basically similar to declaring a normal javascript variable like const listOfRestaurants;. but instead of declaring a normal javascript variable , we declared a react state variable which has some super powers.and if we want any default value then we can write that inside the () of useState function when we are calling the function. like in this case , list of restaurants is an  array of object. so then the initial default value should be an empty array , which will filled with objects when the api data will come, so we like write like this:-  let [listOfRestaurants]=useState([]) ; this [] empty array  is now the default value of the state variable we have created.and this variable also work like a normal variable.

//*Changing the value of a state variable and to change this state variable value we can't assign a another value normally we do like let listOfRestaurants= 2; even it's declared with let keyword.to change it's value we have to use another function which mention as another second parameter  inside the array beside the  variable name. and the convention is to start second name with set so in this case we will give name the second "setListOfRestaurants" so let's do it.and setListOfRestaurants is a function which will be used to update the state variable. so basically whenever we want to update the state variable we have to  call this setListOfRestaurants function and while calling we have to pass the new updated value; so in this case we will pass the filtered restaurants as argument inside this setListOfRestaurants function and this function call will be triggered when we will click on top rated restaurants button.and it's time to see the super powers of state variable, so let's to go our webpage , and click on the top rated restaurant button. and we will surprisingly see that listOfRestaurants array and the UI both are getting updated with the filtered high rated restaurants.
//*and remember even we declare a state variable using const , then we can still change it's value, because when the we use the set... function(second param got from the destruactured array ) to the change state variable's value, it immediatelly trigers the react reconciliation algorithm, and it re-renders the whole component , at that time it creates a new state Variable with the same previous name and updates it's value and also updates the whole component with the state variables's updated value. So after the re render it is a whole new variable , and the previous one. and that;s why we can still change a constant variable value in react, because behind the scenes we are actually not changing a contant's value instead we are creating a new constant with the previous name.
//* this happens because state variable will keep the data in sink with the UI layer. when are updating the data(array of restaurant objects) it will also update the UI automatically , we don't need to update the UI manually.And that makes this state variable so powerful because we don't need to update the data layer and the ui layer manually if we change one of them then the other one will be also changed because that state variable will maintain the state and whenever any change happens then that will be reflected also on the other part so some change happens on the ui layer then that will be also reflected on the data layer and vice versa so now as we are using the state variable we do not need to care about maintaining both the ui layer and the data layer manually the state variable will handle it as it maintains the state on Both Ui layer and data layer at the same time.
//* so if want to explain it using react language we can say :- whenever a state variable updates react re-renders the component. if we were using javascript then we had to manually re-render the Ui when something updates.but as here using react state variable to store the data so when something gets updated in the data , react also re-render the component which is using that state variable's data.
//*and that's why the main super power of react is that it can update the DOM faster. but how React can do all of this so fast ? the answer is below

//* ⁡⁣⁢⁣Reconciliation algorithm(also called ⁡⁣⁢⁣React Fiber⁡)⁡ :- React developer came up with algorithm in react16 update, it's work is to update the DOM faster, so when ever something changes on Ui , react will immediately create a virtual DOM , virtual DOM is just Representation of the real DOM, so after creating a virtual DOM which has updated data , react uses a algorithm called "diff algorithm" to compare the difference between the old virtual DOM which was created before updating the state variable and the newly updated virtual, then after finding the difference them will update it on the real DOM. we know that every react element is actually a javascript object , and virtual dom is representation of real dom.so the Real DOM contains multiple react elements and all the react elements area objects, so that's why virtual virtual DOM is actually a object which is representation/copy of real DOM object (react elements), so after every change react create a virtual dom which is basically an object and the diff algorithm checks the difference between the old virtual DOM  (object) and new virtual DOM (object) and then after finding the difference between two objects(new virtual DOM and old virtual DOM) then reconciliation algorithm changes the Real DOM. This  whole process happens very fast and eventually it helps to modify the browser DOM faster which is the super power of react. one of main reasons behind making it faster is that react reconciliation algorithm/react fiber compares two objects (virtual DOM) not two html elements and that makes it faster , then when the browser converts this objects into html elements them render it on UI.to know more see this link:-"https://www.geeksforgeeks.org/reactjs-reconciliation/".

//* so if someone asks why react is fast when what should be the answer? the answer is because react does efficient DOM manipulation. and that's because REACT has virtual DOM. TO know more  about virtual DOM please the check the same link of above :- "https://www.geeksforgeeks.org/reactjs-reconciliation/".

//*virtual DOM is not a new concept. it was already existing in programming for long time. it is basically a object representation of real DOM . but React developer took this concept and using it they developed this fast algorithm called React Fiber.
//* Official Documentation of react fiber:- "https://github.com/acdlite/react-fiber-architecture".

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(<AppLayout />);
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
//* so till we were rendering from the mockData which we saved as the value of the state variable named `listOfRestaurants`. and then we were iterating this array of objects using map method. then rendering the cards from the mockData, but now we are gonna make it really dynamic, so to do that first we will render the the fake data from mockData and then after rendering it then we will make the api call to get the real data from api inside useEffect() hook so all of this can happen when the component is already rendered. then after the real data comes we will again change the value of the state variable, and this time the state variable's value will be the real data we just received from the api, and as the state variable's value changes so it will automatically re-render the UI. we can't pass directly json inside the setLisTOfRestaurants() beacuse we to pass the same format of array of objects as mockData. so to that inside the useEffect hook after fetching the data, we will pass this:-setListOfRestaurants(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants); so to  keep the format same,  .
//* now our cards component is fully dynamic , and till now the default value of the state variable was resList(mockData) , and for testing purpose we were the cards components with the mockdata when the user loads the page then after rendering all the components , we were making api call then after receiving the data we are re rendering the cards, so the user will not see any blank page when he opens the page, and now it's time to complete it , after making the component dynamic we are now setting the state variable's  default value to an empty array, so first the the Ui will render but without the cards then the data comes from api then we display the cards. so the user will not see any blank page at first, instead he will see the the UI , with empty cards then when the datat arrives we display the cards.
//* so while changing the state variable data by this:- json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants , with this deep object , we should not directly write it instead we should optional chaining to write it , so any property doesn't exist then we can get undefined .so the current format should be :- json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.

//*So now our state variable's Default value is an empty array previously we were showing some fake cards for testing purposes and we were showing those fake cards before the api response so the user would not see any blank page ,But now as we set its value To an empty array that's why when the user loads the page immediately the ui will appear but inside the body no cards will appear But that's not what we wanted so while we were loading the data from the api then we could also show a loading spinner and to do that we just need to write a if condition inside the body component so actually what we need to do is actually inside the if condition we will just write that if the list of restaurant.length === 0; Then load a spinner and to load a spinner we would have to make another component which will be rendered when the api is loading the data
//*⁡⁣⁢⁣Shimmer Ui⁡:-but using a loading spinner is not a modern practise in today's world and in the current world scenario most of the popular websites use something called shimmer ui and to create a shimmer ui for our web app first we need to understand that what is it so previously before loading the data we were showing fake cards using mog data but when we use shimmer ui then we basically display some skeleton cards that means cards Which looks very similar to the actual cards but these skeleton cards does not contain any data inside them and usually developers use a grey color for this skeleton cards and all of this is created because when the data arrives and we render the actual cards with real data then it makes the user feel that the blank skeleton cards are getting filled with real data so some colorful cards so the user was not seeing any drunk page or some fake cards with some fake data or even not a loading spinner instead now he is gonna see some skeleton card which are gonna be filled up when the actual data arrives and it makes the user experience so much better and the user feels that the web app is loading so much faster.So let's create a shimmer Ui for our component.we will create a another file named Shimmer.js and then create a function component which resembles to our present component but with no data and greyish color. and we will render that when the listOfRestaurants is empty so basically before loading the page.
//*Conditional Rendering:- So conditional rendering just a fancy name of we just did right now so basically rendering on the basis of conditions so in the above example when our state variable was empty in that condition we rendered the shimmer ui so basically our skeleton ui which prevents the user to see a blank page and then whenever the real data response comes from the api then we save that inside the state variable and then instantly state variable will render the component and then these first condition becomes false Because now the state variable is not an empty array and now it is filled with the real data so now the real card components will be rendered so as a conclusion we can say that when we render components depending on different conditions that is then called a conditional rendering and as an example we can say that when a user loads a page at that time We display some fake components which are basically some skeleton components(shimmer ui) And then whenever the data comes as the response of the api then in that condition immediately we display the real data on the ui so depending on the condition we are rendering different things on the ui and this is called conditional rendering.
//*And to do this conditional rendering, it is not even necessary to use an if statement instead we can also use ternary operator which is more easier and clean way so let us also do that.

//* now let's refresh our knowledge about react state variables
/*
⁡⁣⁢⁣What is State in React?⁡
⁡⁢⁣⁣In React, state(react state variable) is actually a JavaScript object that holds data that can be used to influence the rendering of a component. In simple terms, think of it as any piece of information that can change over time and impact how your component appears or behaves. The state allows developers to create dynamic and interactive UIs by enabling components to respond to user input, API responses, or other events.

Why is State Important in React?
The state is a cornerstone of React development for several reasons:

Dynamic UIs: State allows you to create dynamic, data-driven UIs. Whether it’s updating a counter, displaying a list of items, or toggling between different views, the state enables your UI to respond to user interactions and changing data.
User Input Handling: React components can capture and respond to user input, such as clicks, keyboard events, and form submissions, by updating their state. This interaction is what makes web applications interactive and user-friendly.

Data Persistence: The state is essential for managing and persisting data within a component. For example, when a user fills out a form or interacts with a complex UI element, React components can store and manage this data using state.
Efficient Updates: React’s virtual DOM and reconciliation algorithm work hand in hand with the state to ensure that only the necessary parts of the UI are updated when the state changes. This efficiency is crucial for maintaining good performance in React applications.⁡
*/
//* So in simple words we can say that a state variable may look like a normal javascript variable but actually behind the scenes These state variable gives us so much control on our ui That we don't need to update the ui manually whenever something changes in the data because of the user's interaction so when the user interact with the ui Then react components keep track of all of the user's interactions Clicking on any button or hovering on any button or many other and because of this interactions whenever some data change in the state variable It will immediately trigger the react reconciliation algorithm And this algorithm is going to create immediately a virtual dom a virtual dom is basically a copy of the real dom so it is just a copy object of the real dom object and then with this updated virtual dom react uses it's diff algorithm And this diff algorithm basically compares the new virtual dom with the old virtual dom It is comparing the old component With the new updated component And then after finding the differences then it actually changes the real dom and basically re render the whole component(call the functional component again using new data) using the new virtual dom So after comparing two virtual dom and finding the updated difference then react changes the real dom And this happens every time we change something in the state variable and this process happens so much fast which makes react so much faster in dom manipulation And it makes easier to make a component dynamic so basically depending on the change of data the behaviour of the ui will change or we can say the ui will be rendered Depending on the change of the data because of the user interaction if we would use a normal javascript variable instead of react state variable then even after changing the value of the javascript variable we are would have no way to know that something has changed in the data level and it needs to re render the component to display the change on the ui but as we are using a react state variable Now it is so much easier for react to know that because of some user interaction the data is manipulated And as soon as any state variables data is manipulated it immediately triggers the react reconciliation algorithm and updates the whole component inside which the state variable is located so the state variable helps us so much to make the user experience so much better by keeping the data layer in sink With the ui layer and because of the user interaction on the ui layer if something changes in the data layer then it will immediately also re render the ui layer By using reconciliation process.And even we use the const keyword To create the state variable we can still change the value of the state variable now we may think that how it is possible to change a constant variable but behind the scenes A react street variable is actually a javascript object and whenever this re render process happens because of change in the state variables value then at that time react actually creates a new instance so a new react state variable with the updated value and the old constant variable and this new constant variable which is created after changing the value of the state variable is not the same this is actually a new react state variable with the updated value and that is why we can also change a constant variables value when we use the const keyword to create a react state variable.

//* ⁡⁣⁢⁣application of state variable to toggle log in to log out and log out to log in when ever the user the user clicks on the log in btn:-⁡ so in the header component we have to first create a log in btn , and then to change the button name dynamically on user click we will use a state variable. so we are gonna the save the btnName inside a state variable and when the use will click on the btn we will use onclick event listener and inside the the callback function of the onclick listener we are gonna toggle log in and log out by changing this button's name which is saved inside the state variable.
//* so let's go to the our header component and apply the above plan.

//* ⁡⁣⁢⁣important note about learning anything:- how is it working and why do we need to use it? and when to use it.⁡

//* ⁡⁣⁣⁢𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗮 𝘀𝗲𝗮𝗿𝗰𝗵 𝗯𝗮𝗿 𝘁𝗼 𝘀𝗲𝗮𝗿𝗰𝗵 𝗿𝗲𝘀𝘁𝗮𝘂𝗿𝗮𝗻𝘁𝘀⁡

//* so now beside the top restaurants btn , we will create a restaurant searching btn, so let's go our body component and build the btn first.
//* so inside a div we created a text input element(for search box) and a search btn, now we want that when the user will click on the search btn , then on that click event , we get the inputted value from the input element, and then using that value we want to filter the restaurant cards and update the Ui after filtering, and a very important step is that we have to bind this input element with a local state variable to track what user is typing in the input box. now inside the body component we will first make a local stat variable named searchText. and no to bind this variable with the input element , we need to use an attribute inside the input element named "value" and this attributes value will be the state variable we created. and the state variable's default value will be empty string as at first the search input's value should be empty. and after this now our input element is connected with state variable "searchText". but now if we try to tyoe anything on the search box then we are gonna see that nothing is happening in the search box and the search box is not taking any input and we can't write anything inside the search box. and the reason behind this is that, as we previously set the value  ={setText} so the default value of the state variable which is empty string , is basically preventing the Ui to input any data , because value={setSearchText} so we have to do something which allows us to change the state variable's value when the user types something in the search box(input elm) and to do that we know we have to use the the function which we get as the 1st index of the state variable's array. so "setSearchText()" function. but how to use it? , so want that when the user inputs something in the input element then the state variable's value should change so to do that we have to use a event listener inside the input elm named onChange listener , it basically gets triggered when user inputs something . and inside this event listeners callback function first we will receive the event as parameter and then use this event to get the value from the input elm and then call the setSearchText function with this value . so this will also change the value of the state variable. and now user can input any value and when the user click on the search btn then we can access that value and let's print that in the console first.
//* and now we will be surprised to see that when ever we adding even a single letter the console.log() we did is gonna print so if we write pizza that will print 5 times in the console, many developer may think that when we writing something in the input field then only the input field is changing but the answer is no, because when a state variable's value change every time it triggers the re render process or react reconciliation process. and that means every time it re render the whole body component, so when have written pizza in that time the the whole body component re rendered 5 times.and this react reconciliation process  makes react dom manipulation so much faster.
//* so we want that whenever we click on search btn after we type something on the input box,then our restaurant cards name should filtered on the basis of what the user inputted. so now we are add onclick event listener in the search btn, and inside it's callback function we will write the logic to update the cards.to do that we are gonna use filter method to filter the restaurant name using the user input. so while filtering we will check if the listOfRestaurants.name includes the the user input or not, so let's the restaurant name is laddu coffee so even the user inputs only coffee in that case also laddu coffee will filtered because we are gonna use includes() method. but still we will face a problem which is our filtration process is still not Case insensitive so that means if the user inputs COFFEE or CoFFEe then the filtration  will not work and the solution is to use .toLowerCase() method on both user input and in the name property in our ListOfRestaurants. so that will make our filtration process case insensitive.so even the user inputs COFFEE or CoFFEe , still the laddu coffee restaurant will be shown.so after filtration we are gonna save this filtered array into a variable named filteredRestaurant and then we are now gonna call setListOfRestaurants(filteredRestaurant) with filteredRestaurant and as the value of the state variable changes , it will immediately re render the whole cody component with new filtered restaurants according to user input.
//* a bug we introduced:- But do our searching functionality is working right now but still we have introduced a new bug So the bug is that if we search second time some other restaurant From all of the restaurants list we received from the api Then we'll see that it is not working and we're not getting our assumed result and it is happening because while doing our first search we updated the list of restaurants State variable and now second time when we are searching then we are using the filtered Restaurant list We filtered some time ago and not the real data we got from the api so we can clearly see the problem that while doing the search updating the original listOfRestaurants State variable caused the problem and the solution of this problem is basically creating another state variable which we are gonna name filteredRestaurants These state variables value will be an empty array as default value and then when the user search something by clicking on the search button then we will update this filtered restaurant state variable and now we will use this state variable to basically display the restaurant  cards Inside the cards container so basically we will use this filteredRestaurants instead of listOfRestaurants State variable To display all of the cards inside the cards container so now one problem is solved because we are not directly updating the list of restaurant state variable and that eventually will help us to keep all of the restaurant data inside our state variable so now the user will search then we can use this list of restaurants state variable as it has all of the required restaurants which we received from the api But doing this will cause another bug And the work is as we're using the filtered restaurants state variable to display all of the cards So now when the user opens our website for the first time he will not be able to see any of the cards when we are receiving the data from the api then we are saving the that data inside list of restaurants state variable but while rendering we are using filtered restaurants state variable but at the beginning it is just an empty array So the solution is that inside the use effect when we are receiving the data from the api at the beginning then We have to update both of the state variables listOfRestaurants and filteredRestaurants And that will eventually help us to solve this problem now at the beginning the real data is also gonna be saved inside the filtered restaurant's state variable and as our component uses this state variable to display all of the cards so it will be able to display all of the cards at the beginning when we receive the data from the api and another state variable which is list of restaurants we will keep it unchanged because All data which we received from the api is saved inside this list of restaurants state variable so whenever the user will search something then we will use this list of restaurants state variable So he can search from all of the restaurants we received at the first place from the api.
//* and every thing will work as we wanted, and the search feature is finally implemented properly.
//* CORS plug in issue:- Right now we're using a chrome extension for the Cross origin resource sharing (Cors) Problem and the problem was happening because we are trying to fetch data between two different origins It means basically from between two different domains like one is local host and another one is Swiggy's api so the domain of both of the websites are different because of that the browser basically prevents to fetch the data from different origin/ domain. And to tackle this problem we were using home extension named allow Cors, But that is not enough because if we host our website on some hosting service like Netlify or some other place which will help us to show our proj to to different persons using the url then when they will open our website then there is no guarantee that they will have the same extension already downloaded in their sys so so then because of the cors ,that user's browser Will be unable to fetch data from swiggy's api ,so to tackle this problem We can use a website named https://cors-anywhere.herokuapp.com/(or we can also search cors proxy sites) Why you just need to go to their website and then we will find a link in their website which is just need to copy that link (like:-https://cors-anywhere.herokuapp.com/)and then paste that link before our own link of Swiggy and and that is all now anybody can use our website and they will not face any cors issue .now our browser not directly fetch the data from the Swiggy's api instead our browser will make the api call to this website and this website behind the scenes take the data from the api and then give it to us that's why we are not gonna face any issue of the cors. I remembered that there is a limit which is we can only make 30 requests per minute which is enough for our development use so we cannot use this to build a real user app because if the app is used by so many users then because of the limit the website is giving us it will through some error to the user .
//*Another solutions
//* but if we paste this below link before the swiggy api link then it will also by pass the cors issue but it has a limit till 5 dollars so till 5 dollars usage it's free:-https://web-production-910a.up.railway.app( see the youtube video to see how we did it :-https://youtu.be/eO-ya4I1LzQ?si=PySWFug3QR3KMyvE)
//* the next remaining option was to copy all the files from github of corsanywhere.com and then build a clone of it on heroku , but after logging in heroku they aksed for credit card so we quit the option to use heroku.
//* there is an alternative of heroku which is glitch.com, so can clone coranywhere.com here ,but if we don't want spend so much time then inside this glitch website , we have a search bar, there we need to search cors, and we will see some developer already built corsanywhere.com clone to tackle the proxy issue, so we can just use one of them . so we copied the link from of them , we just need to paste it before the swiggy api link. the link is :- https://richie-cors-proxy.glitch.me/  .
/*
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
*/
//! Lesson - 7 - Finding the path

//*My notes
//* In this lesson we will create different web pages linked with with different url , for example if we click on www.ourapp.com/aboutUs then our browser will redirect the user to the About Us. so are gonna create this pages.

//* So before moving further, we are gonna do deep dive in the concept :- ⁡⁣⁢⁣How useEffect() hook gets called when  we use it inside a component⁡?

//* we already know that we first import it from core react file (we installed as a package from npm ) as named import, and now we can use the useEffect hook inside the component, now let's say we are using this useEffect hook inside the header component, so let's go to header.js and import it from react.
//*And now we are ready to use the use effect hook now while calling this hook it takes two arguments first one is the callback function and second one is the dependency array and the second argument is not mandatory we can mention it when it is actually needed let us learn the behaviour how this use effect hook gets called so to understand it we have to know about three conditions about use effect hook.
//* 1:- useEffect(()=>{}) (this is also the default behavior):-When only the first argument - callback function is mentioned and no second argument is mentioned in that case the use effect hook will be called every time the whole component gets rendered That means because of any change whenever the component will be re rendered,every Time also the useEffect hook will be called.
//*2.useEffect(()=>{},[]):- When the use effect has the first argument callback function and also the second argument which is actually the dependency array but the dependency array is an empty array in that scenario the use effect hook will be only called first time when the component renders and after loading the page when the component gets rendered only then this use effect hook will be called then even because of some change if the component gets re rendered still the use effect hook will not be called so the conclusion is when we mention the second argument dependency array as an empty array in that case the use effect hook will be only called once at the first time.
//*useEffect(()=>{},[loginBtnName]):- Now the last condition we have to know is when we pass both the arguments the first one call back function and the second one dependency array But in this condition we mentioned one dependency inside the array but what is this dependency we mentioned so inside this dependency array we can mention any state variable we created inside the same component and we can mention more than one dependency so basically more than one state variables and then whenever one of these state variables changes so basically one of the dependencies value changes With every change the use effect hook will be called so in the example we mentioned `loginBtnName` as the dependency which is basically a state variable inside the header component and that means whenever these state variables value will be changed then with every change our use effect hook will be also called.

//*⁡⁣⁢⁣Mistakes developers sometimes do but we should never do ⁡:- sometimes developers create the state variables outside of the component, but that makes no sense,so always create the state variable inside the component, because the useState() hook to create local state variables so we can maintain the state inside a particular component. and don't create a useState() hook inside an if else statement , it creates inconsistency and even the react documentation prohibit to write a state variable inside a condition or a for loop, or inside another normal function because they are meant to be declared at the top portion of a functional component.

//*And a good practice is to always put all of your state variables declarations at the top portion inside the component so in future you do not face any problem to find them.

//*⁡⁣⁢⁣REACT ROUTER⁡(first creating routing config using createBrowserRouter() and then proving it using RouterProvider)
//* Now we are gonna learn how we can learn different routes inside our react application : and  for that we are gonna use a npm javascript library named "React Router" . let's install it as a npm package and the command is :- npm i react-router-dom .
//* and after installing it we can go to our package.json file and see it is added as dependency and it's version is 6.23.1. and it's the latest version for now.
//*⁡⁢⁣⁣creating routing config⁡:- and now let's create a route or basically a about us page so when we will go to localhost:1234/aboutUs then we will see the About Us page.

//* now to create route first we have to create a routing configuration, basically when ever we want to develop routes , we have to create routing configuration. and so to create that routing configuration we have to import something named createBrowserRouter as a named import from react-router-dom.so let's import it first at the top of this file.
//*and now we will create the routing configuration inside a variable named as  appRouter and should be positioned below the AppLayout component because while writing the routing configuration we have to mention the the element name and that's why if we want to to use the AppLayout component inside the routing configuration then we have to write the AppRouter variable after the AppLayout variable.Configuration basically means information  that will define what will happen on a specific route.A information that will tell the browser router what will happen on a specific route/path.  like we are calling  localhost:1234/aboutUs then it should go to AboutUs page or on `/` route it should display the AppLayout component basically the home page that't why it necessary to create the AppRouter variable after the AppLayout component  . so the configuration we are gonna pass is as argument inside createBrowserRouter() method.
//* so createBrowserRouter() is actually a method which we imported react-router-dom package, and this method takes a list of paths(configuration) or array of objects  as argument. Each path is an object, and inside those objects we write on which path which page should be displayed like on /aboutus path the About Us page should be displayed or on / path the home page should be displayed which we named AppLayout.and we already know a page is just a composition of multiple small components.so let's create our router configuration inside appRouter but before that let's first create a normal About us page and to do that let's create a new js file named About.js file inside components folder and and just create a normal About functional component and export it so we can import that here in this file so we can use that to write the configuration.
//* and now inside the configuration we will write that if our path is /about then load our about component which we imported. and the path object will look like :- { path: `/about`,element: <About />,} . and now our AppRouter configuration is ready.

//*But just creating the configuration is not enough, we have to provide this information to render it
//*⁡⁢⁣⁣Proving routing config to the app using RouterProvider component⁡
//* and to provide this information we have to import a component from`react-router-dom` as a named RouterProvider .Previously we imported createBrowserRouter() method from `react-router-dom` to create the router configuration but this time it is not method instead RouterProvider is a component which we are now gonna import from `react-router-dom`. so let's do that.
//* so now as we imported `RouterProvider` component which will help us to provide the router configuration to our app .
//* ⁡⁣⁢⁣but how this `RouterProvider` is gonna provide the routing config to the app?⁡
//* so till now we were directly rendering the AppLayout component inside our root element like this :- root.render(<AppLayout />) but noe instead of directly passing the <AppLayout/> component inside root.render() , now we are gonna pass the RouterProvider component inside it as a argument like this:-root.render(<RouterProvider  router="AppRouter"/>) , and notice that with the RouterProvider component we also mentioned a attribute named router and it's value is "appRouter". and this is how we provide our routing configuration to our app. and now our routes  like / or /about should properly work. so let's check that. so now if we search on browser :- http://localhost:1234/about then it will open our about page and if we search http://localhost:1234/ then it will open the homepage , because that's information we provided through routing configuration. and remember on http://localhost:1234 port the / is not present at the last but still it will open homepage because the browser will assume the /. so don't get confused.

//* ⁡⁣⁢⁣Shortcut to create boilerplate for components⁡:- iso first let's create our contact us page , so let's create a file for it and go inside it. and as usual we can write the whole component by ourselves but if we want to do it fast then we can use a snippet :- rafce , and then enter, and immediately a react basic boilerplate will be present, it is a shorter way but we shoulf only use it when it is needed and it is always a good practice to write our components by ourselves. and if you want to to know other snippets:-https://github.com/r5n-dev/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
//*so now our contact page is ready and we imported it and added it's path inside our routing configuration.and now if we search http://localhost:1234/contact then our contact will appear. and one more beautiful thing is that we just random thing instead of one the correct paths    ,like http://localhost:1234/djr , then surprising we will see that on the ui a nice error page will be shown and not the usual red error page we see. and this nice error page is created by `react-router-dom` for us to display the error nicely.But on the inner page they have suggested to create our own error page and we should do that for better user experience so let's create our own error page.
//*⁡⁣⁢⁣Creating our own error page and displaying through react router dom(adding Error page route using errorElement property)⁡:- so let's first create a error.js file and create a functional component inside it for Error and import that. so now after importing the error page how will we use it , so then whenever the some wrong path http://localhost:1234/djr then our app would display the error page. and it's very easy. to do that we have go inside our path objects inside routing configuration appRouter. and there inside the home page object we need to add another property named `errorElement` and it's value be the error element <Error/>. and it;s completed. so from now whenever someone will search some wrong path like:- http://localhost:1234/djrfefe or anything then the error page will be displayed.but remember you should only mention this errorElement inside the homepage's object where the path is `/` , if you mention it inside another routes object like inside about or contact then it will not work. so always mention it inside the homepage's path object.

//*⁡⁣⁢⁣Other different routers⁡
//* So if we just go to react routers documentation page then in the sidebar we will see that there are many kind of routers so right now we just use createBrowserRouter() to basically write the routing configuration, but there are also different kind of routers for different kind of needs but if we check out the createBrowserRouter() by clicking on that then we can see that it is already written on the documentation page that this is the recommended router for all of the react router web projects and that is why we are using it but there are also different kind of routers which we can also check out so in the future when we would need to use one of them like createStaticHandler() or createStaticRouters() or createMemoryRouter() then we can also use those routers as our necessity.

//*⁡⁣⁢⁣Another important feature provided by react-router-dom related to error handling :- a hook named "useRouteError".⁡
//* so let's import it from react router dom in Error.js file as a named import. and how do we know that it is hook. so it is convention in the developer world that all hook names start with `use` like `useEffect`, `useState`. so now by looking at the name `useRouteError` we can easily understand that is a hook.so now let's import it first.

//*use of "useRouterError" hook:- using this hook we can get more information about error. so right now we are just displaying a simple message when error happens which is `oops something went wrong` but we can display a more information about the error which can improve the user experience.so depending on what kind of error has happened we can display detailed error message like if it is a network error,route fail error(entering some wrong path http://localhost:1234/djrfefe ) , server error.
//* so to use this hook , inside our Error component before returning anything at first we have to call this hook and save it's value inside a variable, because remember every hook is a function/method with a specific purpose.
//*now let's name this variable err. and now print it using a console.log(), then let's go to our app and enter some wrong path like localhost:1234/essfd , so the error can be displayed, and then if we go to our inspect tool , then in the console we will be able to see a object printed by the console.log(err) we just did. and inside the object this object there is a lot of information which we can use to display a better error message. so let's use this object's properties like err.status and err.statusTest to display a good error message so that we gonna add another heading element and inside that using template literal we will display some good error message.

//*⁡⁣⁢⁡⁣⁢⁣Developing children routes⁡
//* so right now except the home page, on other pages(about, contact) one functionality is missing and that is the header , so usually when we visit a website and go to their aboutUs page or contact us page then we see that the navigation header always stay on all of the pages so the user can navigate trough the all of the pages, and the same we want for all of our pages that the header remains available on all of the pages and the below part should get changes for different pages located on different paths/routes.
//* and to bring this functionality we have to create child routes for our AppLayout component.Becuse AppLayout will be same for but just below the Header , instead of Body component, the other components like About ,Contact will appear.
//* so right now inside our router configuration, we have multiple routes for different path Like:-
/*  [⁡⁢⁣⁣{
    path: `/`,
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: `/about`,
    element: <About />,
  },
  {
    path: `contact`,
    element: <Contact />,
}],⁡
  */
//* but now to create child routes , first inside the homePage("/" ) route object we are now adding new property named children, and it's value will be again a list of paths or array of objects . and now inside this children property's array , we will put the other different route objects we created for about and contact.so now all of the other routes are the children routes of the main route (`/` route). and we want that inside the AppLayout component , depending on different paths different children Elements(About, Contact) should be displayed and header will present for every route / path, like :-
/*const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      //*on / Route(for homePage) - Body component should be displayed
      <Body />
      //*on /about Route(for AboutUs) - About component should be displayed
      <About />
      //*on /Contact Route(for Contact) - Contact component should be displayed
      <Contact />
    </div>
  );
};
*/
//*though we added the other child routes but as children but we have to remember that on "/" route the body should be displayed but on other route it should not be displayed, so first we have to remove the Body Component from the AppLayout Component, and then to display the body component on / route , we have to add another child route object for this / (homePage) route , which will display the Body component on / route below the header component. so let's remove the Body component and then add a child route for displaying the body.
//*so now creating all of the child routes is complete , but we want a way to display this different child routes below the Header component depending on the path. like on / route the Body element should Appear below the Header component.and to do that React Router Dom gives us another solution which is basically a another component which we have to import as named import form react-router-dom and the component's name is <Outlet/>. so let's import is first.
//* now inside our AppLayout component, below the header we have placed this OutLet component.And this OutLet component is just like an empty box which will be filled with a element depending on the path, so when path will be / this Outlet component will be filled with <Body/> component , when the path will be /about then it will be filled with the <About/> component.and that'show we can implement this functionality.so the header will be keep intact and the outlet is changing with children components  depending on the path .
//* ⁡⁣⁣⁢if we go to our webpage and inspect it as html then will we be able to see this outlet component?⁡
//*no, because every time depending on the path the the outlet component will be replaced with one of the children route component , like on / route the outlet component will be replaced with the <AppLayout/> component. so in the inspect tool we will not be able see that the developer used a outlet component there.

//* now let's make our navigation links in the header work properly
//* so if we click on one of the navigation link then it redirects us to that page or that route.
//* if we were not using react then we would use some anchor tags to do it and using the href attribute we would mention the path like :-
//*<li><a href="/about">About Us</a></li>
//* though in react it also works but we should not use anchor tag in react to redirect to some page /route, because if we do it then will see that will redirecting it refreshes the whole page , and that takes so much time, so in react we can redirect the user to a route without reloading the whole page, and here the refreshing the whole page is not even necessary because the header keeps intact for all pages and just the below part of the header component need to be changed.
//* ⁡⁢⁣⁣So with out reloading the whole page can we load a different page /route?⁡ ⁡⁣⁢⁣and why react applications are called single page applications?⁡
//* yes it is possible , and again it is possible because of react-router-dom , so react-router-dom gives us access to a component named "link" and we need to import it as named import . so let's go to our header.js the import it. and this link component is very similar to anchor tag in terms of use, so we need write it inside our header component just like we write anchor tag but instead of the href attribute we have to use `to` attribute and mention the path. so it will look like:- <li><link to="/about">About Us</link></li>
//* and after doing it if we go to our page we will see surprisingly the when we are clicking on one of the links , then the whole page is not getting refreshed, and like before the logo is not loading again instead within a blink of eye the new page is loaded without reloading the whole page, and the logo is not even loading again, instead the outlet is just changed so much quickly without reloading the whole page and this basically not reloading the whole page instead it just refresh the necessary components. and that is power of Link component which is provided to us by react-router-dom .and if we goto our inspect tool and try to see what is happening while we click on one of the nav links then we will see that the component which is below the header component, that component is only changing, and we will also see that while clicking the nav link, the div with the className 'app' also blinking in the inspect tool, that is happening because the hierarchy of the components in changing inside this div, so it doesn't indicate that the whole page is reloading. So it makes our app so much fast and also makes the user experience very better because while he is going to another page of our website then very smoothly other page reloads immediately without any lag because there is a lot difference between reloading the whole page and only refreshing the necessary components.and that is Why reacts webApps are called single page applications.beacuse the App.js is the contains the main component AppLayout and this contains all of the components and according to the path it just refresh the components. so whe we are going to a page , the website is just changing some components according to the path and not reload the whole page. Basically when we go another page we are not reloading a new page we are just changing/refreshing some components.

//*Types of routing:- there are types of routing which we can use in any kind of web application, not only on react webApps but on any webApp we can use two types of routing :-1.server side routing and 2. client side routing

//* 1.server side routing:- it means we have different file like index.html, about.html , contact.html , and when we click on one anchor tag  then the browser makes network call to server and and fetch that html file from the server then render it on the webpage.and that's  how the old websites use to work.So basically while using server side routing you make a network call to server and request the page and then it comes to the browser and then browser renders it.
//*2.client side routing:- we just use this client side routing , so while using this routing, when the user first time loads the page at time the browser downloads all of the components for About page , contact page, etc, and then whenever the user goes to another page then it immediately displays that component because all of components are already downloaded and the browser is just changing the components according to the path.the only network call will be happening when the user fetch something from the api, but it will not reload the page because all of the components are already present.and that is why client side routing is so popular and fast.

//*Now let's build a new feature for webApp which will us to learn dynamic routing(till now we only learned basic routing), so when we visit a food ordering website and then click on one of the restaurants option then a restaurant page opens where we can see all of the foods that the restaurant is selling and also details about that restaurant.... so now are gonna try to build this feature.
//*Dynamic Route:- dynamic route means that the path will change according to data (like:- id or name), till now we were using static routes which we were hard coded by us and doesn't change with the data example:- like :- localhost:1234/about , /contact . but incase of dynamic routes , the route/path  will not be hardcoded,instead it will change according to the data for example :- localhost:1234/restaurants/meghna-foods , is this example, meghna-foods is dynamic , basically the part after restaurants/ , so for different restaurants is will be different , and we will not hard code it , instead it will change depending on the data for different restaurants. This dynamic portion of the path can be any unique data which is different for every restaurant , it can be id or the unique name that restaurant .So to create a dynamic path we have use this `:` colon , and the part after this colon will be dynamic so this part of the path will change for every different restaurant. a dynamic path look like this localhost:1234/restaurants/:id and this id will change for every restaurant . So let's first create a basic restaurant menu page and import that here so we can work with that. because ultimately we are gonna display a restaurant menu page for every restaurant . and then using dynamic routing we will display the restaurant menu page , so whenever the dynamic path changes then this restaurant menu component can be loaded, and this restaurant menu page will be also dynamic, so this component will be also dynamic, so it will able to display menus for different restaurants using the same component like we did for restaurant cards , so this whole restaurant menu component will be also dynamic. lets's create a basic restaurant menu page first then we will try make it dynamic. and now we imported the RestaurantMenu component (at the top of this file). so let's go inside our router configuration and create a dynamic route , so the id will be dynamic here because we know every restaurant object will have a different and unique id.and this will also a child route inside the main route.So right now our dynamic route looks like :-{path:`/restaurants/:resId`} , here the portion after the : is dynamic , so the resId will for change for every restaurant. and now let's add the element property inside our dynamic route object, and it's value will be <RestaurantMenu /> because on /restaurants/:resId path we want to display this component.Now let's go to our webpage and test the path with some fake id so the id can be any number so let's use some fake number in place of id , so the url will look like :-{localhost:1234/restaurants/6789} and as soon as we type this path on the search bar then immediately we can see that the <RestaurantMenu /> page is appearing, till now the page is not dynamic but our goal is whenever the id changes depending on that id ,our <RestaurantMenu /> component dynamically display the restaurants menu which will be different for every restaurant, So whenever the dynamic path will change then we will fetch data from the api related to the restaurant using the id and then display that.

//*⁡⁣⁢⁣Displaying restaurant menu data from Swiggy's api⁡
//* let's go to swiggy's website and open the network tab select xhr request and then open a restaurant card, then we will see that while we click on restaurant card at that time browser makes a network call to swiggy's api to request the restaurant menu data , so do it and get the api url. now we just copied a api url for one restaurant which is :- `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=385752&catalog_qa=undefined&submitAction=ENTER` and we can go to our RestaurantMenu.js and inside the component we will write all the code to make the component dynamic. so similaly we did in the restaurantCard component, first will render the Shimmer Ui before making the network call so the user doesn't see the blank page while making the network call, and then once the component is loaded then we have to make the api call to request the data , so as we need to do it after rendering the component that's why we will use UseEffect hook,and while mentioning the arguments we will also mention the second argument as empty array, so then this useEffect can be called only once when the component renders first time, because we would not mention this second argument dependency array then this useEffect hook would be called every time the component re-renders.and we don't want because there is no need to get the data from the api every time it re-renders, we just need do it once.and then to save data we are again gonna use the useState hook , so the default value of the hook will be null first and the as we get the data from the api then we will change the state, and as we know the when ever the state variable will change the it will trigger react's reconciliation algorithm which will re-render the whole component with updated data which we got from the api.

//*Placing the destructuring code  below the if Statement(for Shimmer UI) is important because as we are gonna destructure the needed properties from the data , if we would place it above the if statement then at the first render when the resInfo value is null then our variables will try to get the data from null, and that will throw an error so when the value is null then it should render the Shimmer Ui and that's why we placed the if statement above so the after the return the below lines would not execute, but when the data will arrive after the useEffect hook call then it's value will be filled with the data so then the if statement will not execute and the return will happen at that line, and the below lines execution will continue . and here we have not used ternary operator also because of this reason because we need to do some destructing here. and  this destructuring should only happen after the data arrives, and also because we can't do this destructuring inside the fetchMenu function because as it is inside the useEffect hook, and we mention the second parameter in the UseEffect hook that's why it will execute once in the first render.

//*⁡⁣⁢⁣making the restaurant menu dynamic⁡
//* now one more important thing is that our api url is :-https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=407669&catalog_qa=undefined&submitAction=ENTER ; and from this we are getting the restaurant menu data in restaurantMenu.js. and this url contains the restaurant id - 407669 ; and the amazing thing is that if we just change this restaurant id and put some other restaurant's id then then this url will load that other restaurant's menu data. So using it we can make our restaurant menu dynamic, so it can load any restaurants menu data.

//* So to get restaurant id dynamically, we have to send it through the route , so when the user clicks on any restaurantCard, any he will be redirected to restaurantMenu , and beside that the route url will send the resId , as we are using dynamic route for restaurant menu , So the dynamic part of the url (example:- /restaurants/:resId -this resId) will help to send the restaurant id through the route url, So that means for every restaurant it will send that restaurant's unique restaurant's id ,which we can use to load any  restaurant's menu. But even we send the id dynamically through route url, but still we need a way to get that id in restaurantMenu.js from the route url. So basically we need a way to read this id from the url in restaurantMenu.js.

//*and to solve this problem we react router dom gives us another function named useParams.
//*⁡⁣⁢⁣useParams⁡:- this hook helps us to get the parameters from the url/route. So sent the resId as a parameter when the user clicked the restaurant component , and now we are receiving the param(the dynamic part of the route/url) through this useParams hook. so when we call this hook then in return it gives us a object which contains the parameters as properties. and we can directly use destructuring to take the param(here resId) and use it.and remember we have to use the same param name which we used while passing this param through route which is resId. so let's  import this hook as named import from react router dom. then inside this RestaurantMenu component we will call this and destructure the `resId` param, and then in the api url we will use this resId to dynamically load any restaurant's menu.and also put the api url in the config file, because we should always this ind of important hard coded data in the config file.and then after importing the MENU_API_URL from the config file in restaurantMenu.js we will concat the MENU_API_URL with resId inside the fetch function, and now we can load any restaurants's menu just by changing the resId param in the url/path.
//*and now depending on the url(resId param of the url/route/path) our resMenu will be loaded which is really amazing.

//*and now let's go to our body component, so we can make our restaurant card components clickable.so in Body.js in the body components we are use map  method to render all the restaurant cards. but we want that when ever we click on one of the restaurant cards then it should redirect us to the restaurant menu page, basically load the restaurant menu page with that selected restaurant's menu. So , in javascript we would use anchor tag, but here in react we already know that we have use the link component provided by  react-router-dom. because it not reload the page instead it will just refresh the components from the memory, so basically interchange the components. and and instead of the href attribute we have to use the to attribute to provide the url.and remember this url will be dynamic because with path we have to also provide the resId ,which is dynamic. So to dao that we have to use string concatenation, and as we are doing this concatenation inside the jsx so we have use {} so we can write javascript. and the key prop we  provided as the attribute inside the <RestaurantCard /> component has to be shifted as the attribute of the link component, ⁡⁢⁣⁣the key should be present in parent jsx component which is being mapped⁡, so finally the mapped component will look like:-
/*   ⁡⁢⁣⁣{filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/` + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}⁡
        */

//*⁡⁣⁢⁣Interesting fact about link component provided by react router dom(link component is just wrapper over anchor tag)⁡:-even we use a link component instead of anchor tags for the navigation links, but if we go to the browser and open the inspect tool and see the nav links in the html then surprisingly we will see that instead of the link tag the browser is showing that it is a anchor tag, but we used Link tag right? that is happening because behind the scenes react router dom converting the link tag into anchor tag because browser doesn't understand link component because it is not a part included in html . and also react router dom keep track of every link which is created using the link component , and because of that , it doesn't reload the page, instead just refresh the components. So the conclusion is that we use link component because behind the scenes though it will be converted into anchor tag but react router dom will keep track that it is a special link, so there is no need to reload the page instead it just need to refresh the components .So we can say that link tag is just a wrapper over anchor tag.

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet />
//       {/* <Body /> */}
//     </div>
//   );
// };
// const appRouter = createBrowserRouter([
//   {
//     path: `/`,
//     element: <AppLayout />,
//     children: [
//       {
//         path: `/`,
//         element: <Body />,
//       },
//       {
//         path: `/about`,
//         element: <About />,
//       },
//       {
//         path: `contact`,
//         element: <Contact />,
//       },
//       {
//         path: `/restaurants/:resId`,
//         element: <RestaurantMenu />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);
// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(<RouterProvider router={appRouter} />);

//! Lesson - 8 - Lets get classy

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
//*So In the whole life cycle of class based components there are three types of life cycles . first mounting life cycle happens => then 2.update life cycle happens => 3. Unmounting life cycle
//*⁡⁣⁢⁣Unmounting life cycle of class based components⁡(third box in this image :- ` Life cycle of class-based components.png`):- unmounting means When a component gets removed from the page so as we know that mounting means displaying the component on the user interface and the opposite of that is unmounting which means removing the component from the web page and these unmounting happens when the user opens another page at that time the current component will be disappear from the page and a new component will appear so for example from the about page the user clicks on the contact page and when the contact page appears or basically mounted we showed that the previous about page gets unmounted or removed from the ui and when this component gets removed or unmounted from the user interface at that time this unmounting life cycle happens .Unmounting life cycle only have one step which is calling the componentWillUnmount() method.Before rendering the new component this method will be called.
//*⁡⁣⁢⁣Unmounting only step => componentWillUnmount()⁡

//* We may think that component did mount and use effect are same but we should never compare life cycle methods of class based components with functional components because their mechanism is completely different Though we use both of them to make api call and they get called once the component is already rendered but still we cannot say that they are same. We can only say that their work is similar but their behind the scenes mechanism is completely different so they are not same.
//*use case of componentWillUnmount()⁡:We might think that there is no use case of this method but thats not true because it is used to clear setIntervals() or setTimeout(), So let us say we have written a set interval inside component did update method and that means that whenever our Component will get updated every time component did update will be called we know that react creates single page application And that is a very good thing but it has some bad effects also so we know that when we go from a page to another page react is just interchanging some component it is not loading components every time we go to another page instead it already loaded all of the components at the initial render after that whenever the user goes to a different page react is just interchange the component so that means if we open a component which is the class based component and inside its component did update method we created setinterval function which prints something using console.log() ,Then after the first update of that page this set interval function will get started and let us say it has a timer of one second now when the user go to another page from this page In the console we will surprisingly see that the console log because of that set interval function are still getting printed after every second even we unmounted that component but as react is a single page application and it just interchange the components because of that the set interval is still running because behind the scenes that component still exists and that is the problem because if it keeps running in the background that will create a performance issue and now let us say the user again opens that class based component so that will again trigger the component did update method Which will again start another set interval function and the behind the scenes the previous interval is still running and now because of re rendering that component another interval gets started And if the user opens the page for three or four times that means it will run three or four interval functions behind the scenes which can decrease the performance so much without any reason so it is a problem of having a single page application and that is why whenever the user leaves a page specially a class based component where inside component did update function we created a set Interval or set timeout function Then whenever the user leaves that page we should always clear those intervals or set time o un unless they will run behind the scenes and decrease the performance And that is where the work of component will unmount function Comes into play so basically whenever the user will leave the page this component will unmount function will get called. And that's why inside this function we can clear the intervals and timeouts and it is very much necessary to clear your mess if you have created any and that is what makes you a senior developer because you know what will decrease your performance and how you should improve that but one question arrives that if we create a set interval inside component did update then how we will reference that same interval inside component will unmount Because we have to clear that same interval so we have to select the same interval so we can clear that so its solution is using this keyword as this keyword is accessible inside the whole class that is why when we are creating that interval first we have to create a property on this keyword like this.timer=setinterval(); So now this interval is a property inside this keyword and as we can access this keyword anywhere inside the class now clearing the interval is now easy so now inside the component will unmount function we can just do clearInterval(this.timer). And that is why component will unmount function is also an important method which helps the developers to clear the mess they create sometimes. And after doing this if we go to the console then we'll see that whenever we leave the page basically the class based component where we created the interval to print something after every second, That set interval will be stopped every time we are unmounting that component so basically leaving that component and that is why it is very necessary to do.

//*clearing intervals in useEffectHook:- Till now we have learned the use case of component will unmount function which basically helps us to clear intervals or timeouts when the user moves to another page Basically when that class based component get unmounted.But how can we do that in UseEffect hook which we use in functional components?
//*So if we write a set interval function inside a useEffect hook, Then The process of clearing the interval is to use a return callback function at the last bottom portion of that use effect hook because these return call back function will be only called when the functional component will get unmounted or basically removed from the ui by interchanging another component at that time this return callback function will be called so that is why we can clear the interval inside this return callback function and remember we have to put that at the bottom portion because whenever we return something then after that nothing will execute so return should be done at the last portion only And one more important thing that if we use a empty dependency array for that use effect hook that means that it will only Called in the initial/first render. We may think that it means when our app is first loaded that only means the initial render but no initial render actually means whenever the user opens the component or basically the page and then the component of that page is refreshed and that component appears every time the initial render will happen so initial render does not mean First time opening of the website instead it means when ever that component will be loaded,that useEffect hook hook will be called once, so even user goes to another page of our website, then again comeback to the page where useEffect is present, then the useEffect hook will be called again , because that component is again loaded and in this render also the UseEffect will be called, but because of any state variable's update, if rerender happens then useEffect will not be called because we used an empty dependency array. So initial render actually means whenever that component is loaded in the page every time initial render is happening for that component ,behind the scenes the that component is loaded/present when the user loaded our website but whenever is going to a page and that page's component is rendering(from interchanging the component) , every time initial render is happening except when the state variable updates and it re-renders the component.
/*⁡⁣⁢⁣example
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(`1 sec passed`);
    }, 1000);
//*below return will only happen when the components gets unmounted.
    return () => {
      clearInterval(timer);
    };
  }, []);⁡
  */

//*⁡⁣⁢⁣Important details about useEffect() Hook⁡
//* if we can  write async componentDidUpdate() to make it a async function then why can't we do it useEffect() hook like this :-
/*⁡⁣⁢⁣useEffect(async () => {
    
   })⁡*/
//*instead we have to do like this :-
/*⁡⁣⁢⁣useEffect(() => {
  const fetchData = async () => {
    
  }
})⁡*/
//*⁡⁣⁢⁣but why can't we make the parent callback inside useEffect directly async⁡??
//*Because useEffect expects its callback to either return nothing or a cleanup function.
//*So, basically React.js useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using async here will cause a bug as cleanup function will never get called. to know more read this blog:-`https://shubhambhoj.hashnode.dev/useeffect-async`.

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet />
//       {/* <Body /> */}
//     </div>
//   );
// };
// const appRouter = createBrowserRouter([
//   {
//     path: `/`,
//     element: <AppLayout />,
//     children: [
//       {
//         path: `/`,
//         element: <Body />,
//       },
//       {
//         path: `/about`,
//         element: <About />,
//       },
//       {
//         path: `contact`,
//         element: <Contact />,
//       },
//       {
//         path: `/restaurants/:resId`,
//         element: <RestaurantMenu />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);
// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(<RouterProvider router={appRouter} />);

//! Lesson - 9 - Optimizing our app
//*
//*My notes
//*Some principles to optimize your code which can make your app faster

//*Single responsibility principle:- it says that each of the components (either functional component or class component) should have only responsibility.example:- if we are creating a component for restaurant menu then it should have only one responsibility to show the menu only.

//*this is a good way of maintaining the code in modular fashion.A lot of developers don't understand the concept of modularity.

//*Modularity:- it means you breakdown you code into small small components so that our code becomes more maintainable and testable and also reusable.And it also helps you to find bugs easily Because if you write too much code in just one file then if you introduce a bug it will very complicated to find that bug but if you divided all of your code into small pieces basically in small components then you can write test cases for every component and it will become very easy to find that bug.And as for every requirement we create a module that's why if we want to use that same component for another place then we can easily do that we have divided all of the components into small pieces and that's why our components are reusable.

//* custom hooks:- Till now we have learnt about some hooks provided to us by react development and hooks are nothing but some utility functions or basically some useful function with some specific use case and till now we have used use effect useState hook , But in this lesson we are gonna make some custom books for us, so basically from a component we will extract some functionality and put that inside a hook so our code become more modular and more readable.

//* Is it really necessary to create a custom hook? It is not a mandatory thing but it is very good to have because it makes your code more readable ,modular,maintainable and testable .

//*before building the custom hook , our restaurantCard component was this(expand it to see) as we are gonna shift the functionality of fetching the data in to custom hook that's why the previous version's copy is below for reference:-
// const RestaurantMenu = () => {
//   //*below state variable is named resInfo because it will contain info about a restaurant
//   const [resInfo, setResInfo] = useState(null); //default value is null

//   const { resId } = useParams();
//   console.log(resId);
//   //*the second argument is also mentioned which is a empty dependency array,and because of it the useEffect hook will be only called in the first render.
//   useEffect(() => {
//     const fetchMenu = async () => {
//       const data = await fetch(MENU_API_URL + resId);
//       const json = await data.json();
//       console.log(json);
//       setResInfo(json);
//     };
//     fetchMenu();
//   }, []);

//   if (resInfo === null) return <Shimmer />;

//   //*Placing the destructuring code  below the if Statement(for Shimmer UI) is important because as we are gonna destructure the needed properties from the data , if we would place it above the if statement then at the first render when the resInfo value is null then our variables will try to get the data from null, and that will throw an error so when the value is null then it should render the Shimmer Ui and that's why we placed the if statement above so the after the return the below lines would not execute, but when the data will arrive after the useEffect hook call then it's value will be filled with the data so then the if statement will not execute and the return will happen at that line, and the below lines execution will continue . and here we have not used ternary operator also because of this reason because we need to do some destructing here. and  this destructuring should only happen after the data arrives, and also because we can't do this destructuring inside the fetchMenu function because as it is inside the useEffect hook, and we mention the second parameter in the UseEffect hook that's why it will execute once in the first render.

//   const { avgRatingString, name, id, cuisines, costForTwoMessage } =
//     resInfo?.data?.cards[2]?.card?.card?.info;

//   const { itemCards: itemList1, title: title1 } =
//     resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card;

//   console.log(resInfo?.data.cards[4]?.groupedCard);
//   if (itemList1) {
//     return (
//       <div className="res-menu">
//         <h1>{name}</h1>
//         <p>
//           {cuisines.join(`,`)} <span>{avgRatingString}⭐</span>
//         </p>
//         <h3>{costForTwoMessage}</h3>
//         <ul>
//           <h3>{title1}</h3>
//           {itemList1.map((item) => {
//             return (
//               <li key={item.card.info.id}>
//                 {item.card.info.name} - Rs.
//                 {item.card.info.price / 100 ||
//                   item.card.info.defaultPrice / 100}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   } else {
//     //*this is created because of inconsistency in swiggy's api data
//     const { itemCards: itemList2, title: title2 } =
//       resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//         ?.card.categories[0];
//     console.log(
//       resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//         ?.card.categories
//     );
//     return (
//       <div className="res-menu">
//         <h1>{name}</h1>
//         <p>
//           {cuisines.join(`,`)} <span>{avgRatingString}⭐</span>
//         </p>
//         <h3>{costForTwoMessage}</h3>
//         <ul>
//           <h3>{title2}</h3>
//           {itemList2.map((item) => {
//             return (
//               <li key={item.card.info.id}>
//                 {item.card.info.name} - Rs.
//                 {item.card.info.price / 100 ||
//                   item.card.info.defaultPrice / 100}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// };

//*    So right now our RestaurantMenu component has multiple responsibilities which are basically fetching the data maintaining its state and displaying the jsx on the ui, But According to the one responsibility principle this restaurant menu component should have only one responsibility which is to basically display the data on the ui so to do that we can abstract or basically take out all of the other functionalities inside a custom hook so right now the other responsibilities are basically how to fetch the data and maintaining the state using the state variable these are other responsibilities the component is handling so we will try to build a hook named useRestaurantMenu(), This book will handle all of these other responsibilities so the data will be fetched and how the state will be maintained when the data comes we just need to pass the parameter resid which is basically the dynamic parameter different for every restaurant so while calling the hook we will just pass this restaurant id and in return this hook will give us the restaurant data directly so we do not need to Do all of the other things inside this restaurant menu component instead our custom hook will handle all of the other responsibilities and directly give us our data so let's build the hook.So the only responsibility of the restaurant menu component is to get the data and display it and the other responsibilities it had which was how to fetch the data is now abstracted into another custom book named Hughes useRestaurantMenu(resId).

//*Hooks are nothing but utility functions / helper functions. and the best place to create hooks id utils folder. and we already  have this folder.
//* Important:-Always try to create a separate file for a separate hook.
//* So as every hook is a helper/utility function , so the best place to create them inside utils folder, so lets create the hook to abstract the functionality of fetch the data from the api. now while creating the file for a hook we always start with the word 'use'(in small letters basically using camelCase) , and the file name should be same as the hook name. In this case, the hook name name will be useRestaurantMenu() , so the file name should be  'useRestaurantMenu.js ' . this `use` keyword helps React to understand that this is a hook.
//* while making a custom hook , first we should think that what's the contract, so here contract means what the hook takes as input and what the hook giving as output, here our useRestaurantMenu(resId) takes the resId(restaurant id) as input while calling the function and it will return the resInfo(restaurant information) as output ,so this is the contract of this hook, so it will get the resId and fetch the Data and return the resInfo back to where it is called from. And also export it because we will use it inside RestaurantMenu.js so we need to import it there.
//* Now we know that we will receive the data resId as the parameter and it will return the resInfo after fetching the data and as usual we will use the use effect hook to fetch the data, Like we do in other components and we have to mention the empty dependency array[] as the second argument while calling the use effect hook because we want to call this hook only once in the initial render. And after fetching the data we will get the json . And now we know that we have to return resInfo , And rest info is basically a local variable inside this function so inside this hook so to save the data we just get from the api we will create a state variable named resInfo and its default state will be null And when we get the data we will update the state using setResInfo. And finally it will returned. So as conclusion at first This function will return null and because of that our restaurant menu function will first display the shimmer ui and then the use effect group will be called and it will fetch the data and update the straight variable so because of the change in state the whole component will be rendered so basically the function will be called again and this time it will return the restaurant information which contains the data we received from the api.

//* So now as we extracted the functionality of fetching the data to a custom hook named useRestaurantMenu(), So we do not even need to maintain the state in this component ,So don't need the useState hook and useEffect hook,We just need to get the race id and pass it as argument while calling the custom hook we made and in return it will give the data we need so now our component is very much lightweight and it is following the one responsibility principle so it has now only one responsibility to display the data.
//*So now our code is working like before and there is no change in the feature but this is a better way of writing code which is more cleaner and maintainable and testable.
//*  a lot of people can write code right a lot of junior developers can build the same thing and a lot of senior developers also can build the same thing but the difference between a junior developer and a senior developer is how you write the code right now if you will write the code in a modular fashion  and a more maintainable fashion , following  single responsibility fashion then your code will be much more good to maintain , when your project grows ,  your code should be clean ,your code should be readable, your code should be lightweight .
//* this is the wisdom , this is the decision that you have to take as a developer according to your wisdom let me tell you honestly that there are no issues if you if you make an api call over here but if you make your api call inside a different hook that makes much more sense and it makes it testable .
//*why I say it is testable? because now If I have to test the fetching data logic I just need to test my useRestaurantMenu() hook suppose if there is a issue in my fetching data logic I know that where I have to make the changes inside this hook . I don't have to like wrap up my head inside restaurantMenu component . because I know that fetching data logic is there in useRestaurantMenu() hook so if there is some issue right there is a bug relating to fetching data I have to go to use restaurant menu if there is some issue with displaying the data I have to come to restaurantMenu so restaurantMenu component now has one single major responsibility that is just displaying the data right fetching the data logic inside our custom hook so that is how we create an own custom hook.

//* ⁡⁣⁢⁣creating another custom hook to check the online status(internet on/off) of the user:⁡
//*In other chatting apps we have seen that when a user is online then a green dot gets shown to tell that he is active so he is Internet connexion i and and when he goes offline then it turns red so it means that his connexion is lost or he turned off the Internet so now we will create a feature like this by building another custom hook to make our understanding of custom hooks better.We already know that we have to create this book inside the util folder and we will name the file useOnlineStatus.js and also the hook name will be same so useOnlineStatus(), And to build this hook first we have to think about the contract so what this function will receive as input and what it will give in return as output so in case of this hook we do not need anything as input from where we will call this hook so there is no input required because using some event listeners provided by window object which browser gives us we can check if the user is online or not.And in return we will return a boolean value so if the user is active we will return true and if he is not active then we will return false and to know the event name we are going to use we can Google online status event listener and we will get the necessary event listener name so let us build the hook.
//*but how many times we need to add the event listener to browser?
//*:-- only once . but how we can add our event listener once? and we can do that using useEffect hook by mentioning the empty dependency array.And the event listeners job is to keep track when the user is online and when the user is offline and keep returning that status to us. so the event listener is window.addEventlistener(`online`,()=>{}),and window.addEventlistener(`offline`,()=>{}).
//* And whenever the status changes we have to return the Boolean value and to save that Boolean value so basically whenever the offline online status changes we can save that status somewhere we will create a state variable and whenever the status will change according to the event listener we will update this state variable and we will name this state variable online status and we will also return the state variable because it is the output of this hook.
//*default value of the state variable is true because when user will open the page we can assume he will be online.

//* And now we can use this custom hook anywhere in our app to display the status so first we will import this hook in our body component and before returning the shimmer ui we will just Write a if else statement ,We have to write it above the simmer ui condition because if it is true then the return will not happen and the below code will get executed to return the shimmer ui or actual data) : -
// if (OnlineStatus === false) return <h1>You are offline. Please check your internet connection</h1>
//*So whenever the user goes offline this message will be displayed in our body component and we can also test that out by stimulating offline condition using our network tab in the developer Console of the browser.

//* We know that when we go to  Other pages then our body component will not be visible but the header component will be visible so let us add another item on the navigation bar which will display the online status so it will become green when the user is online and it will display a red circle when the user gets offline so first lets import this hook on our header component.And now inside the header component first we have to create a constant variable named online status and as its value we will call our useOnlineStatus hook which will return the status after checking the browser Internet connection. And then inside the navigation bar we have to add another list item like this:-
//* <li>Online Status:{onlineStatus ? `🟢` :`🔴`}</li>
//*So here we used the ternary operator so if its value is true then it will show the green sign which means active Internet connection and if the user gets offline so his Internet connection is lost then it will show the red colour dot which means that his Internet connection is lost.
//* Now using the `use` keyword in front of custom hooks name is not mandatory but it is recommended by react developers because if someone uses a linter in their project then the linter will throw a error if you do not use this `use` keyword In front of the hook name and the another reason is if some other person cheques your code and you don't use this use keyword then he will think that it is just a normal  function and not a hook, But if they use keyword is written there then he can easily understand that it is a custom hook and it has its own state and own life cycle and it is written using some react logic, so using useState or useEffect inside the hook.
//* It is the convention in developers world to be specific when we are writing code right it should be readable also so thats why we should try to follow .

//* optimizing large scale applications:- So when we build real world applications which are having so many components for example a 1000 components that makes the file size so much heavy so when we create a large scale application for example makeMyTrip if we go to their website we will see that there are so many components and as we use a bundle like parcel it will bundle all of the modules into just one file so it will bundle all of the javascript files and Just create one javascript file, And when we are working with a large scale application when the bundler Bundle all of the files into just one file and that file contains thousands of components that makes the file size so much heavier and eventually that cause Slow down of the app because of the big file size and that is why we need to know that how we can optimize the large scale applications containing a huge amount of components.
//*  you have to keep this in mind and when you are developing a large scale application you have to break your app down into smaller pieces , this is the possible solution,but can I break my app down into smaller pieces? can I do something that my application will not just a 1 javascript file after bundling but smaller javascript files , so there are two things right either we can bundle or we cannot, should we do bundling? yes of course if suppose we have thousands of components we don't need 1000 files loading into our web page, That's like useless ,  that will be a lot of work for browsers to do , making 1000 calls .... for 1000 files and we do not want to put like 1000 files into one file right both of these solutions are not true, so what we have to do is we will try to make smaller bundles of these files, we will make smaller smaller bundles,this process is known as chunking ,also known as code splitting, also known as dynamic bundling, different words for the same thing __chunking, code splitting ,dynamic bundling ,if your interviewer ever ask you he is talking about the same thing  ,if you will go on the web there are different names for the same thing, basically what they are trying to solve by saying this that you have to chunk your application ,you have to make your application into smaller chunks, you have to do codes splitting ,you have to do bundling in a dynamic way,  `so these are the  same things right` for the same process , to breakdown your app into smaller logical chunks
//* got it let me take example of makemytrip once again
//* What should be there in these smaller bundles so suppose I was doing a system design of makemytrip ,`⁡⁣⁢⁣ I want to do a logical separation of my bundles when I do a logical separation of bundles that means a bundle should have enough code for a feature ⁡`, a bundle should have enough code for a major feature in the website and then we can split our bundles into these logical terms over here in Makemytrip it is very clear that I can make a bundle of components just for my flights, isn't it?, just for my flights I can make a bundle ,just for the cabs and the components of `home stays`, I can just make a bundle for holiday packages ,I can just make a bundle for train components, so there are various ways you can make bundles but over here I can see this options, so this is a good use case , suppose this whole application of thousands of bundles right and suppose there are 10 things over here and each flight has 100 hundred components so that 100 components can form one bundle ,hotels can form one bundle, homestays can form 1 bundle with all the components, so similarly you can logically break your application into smaller smaller applications, so if you will see these are smaller applications within a big application isn't it so this is how you can logically split your website into smaller bundles.so you don't put so much load in a single bundle so that request for the js file  does not become so heavy that it takes a lot of time to get into the browser ,so that is why we do this dynamic bundling ,code splitting, chunking .

//* To understand the concept of chunking let's try to understand it using an example so we are currently trying to make a clone of swiggy and we already know that swiggy has another named instamart For delivering groceries so in our app if we try to replicate that structure this is one separate section for groceries then we can assume that that groceries section will also have so many components like our current version of this swiggy app Has nine components in the components folder and including app.js it has total 10 components so if we add a separate section for groceries then we can assume that it will have another 10 components at least like homepage for groceries contact page for groceries add to cart page for groceries and many others.And now using it we will try to make a separate bundle for groceries and a separate bundle for our main app Basically we will be making a separate Bundle containing all of the components of groceries section to basically understand the process of chunking or code splitting or dynamic bundling / lazy loading /on demand loading /dynamic importing(because import will happen only it is necessary).
//*Now first we will make a component for groceries inside our components folder where our other components are existing and as we know that a function component is nothing but a normal javascript function which returns some piece of Jsex now we can assume that these groceries component will contain so many child components relating to groceries like right now our body component has so many components like the restaurant card menu etc and finally we want that all of the files for groceries will come from a different bundle so as we have not applied the concept of code splitting right now so after creating the groceries folder if we go to our browser and and see the network tab then we will see that only 1 javascript is fetched as the bundler bundled all of the files into just one javascript file and inside the javascript file our groceries component will be also present but instead of that we want to make a different bundle which will contain all of the files so basically all of the components related to the groceries.

//* Show the grocery section we have added a navigation link named grocery Will take the user to the grocery page once the user click on the grocery navigation link as we discussed that we will use dynamic bundling to load these grocery page so basically a different bundle will be created which will contain all of the files relating to the groceries Our browser will download all of the components related to the groceries from this bundle and now we have imported the groceries component here in app js so we can mention the groceries component in the router configuration but to create a different bundle for the groceries section we are not gonna mention directly the groceries component link in the router configuration unlike we did for the other component because we will load these groceries component using lazy loading and these lazy loading is another name of dynamic loading and it is also called on demand loading and the reason for the name lazy loading is that we don't want to load this Grocery component in the initial render We want that if the user only clicks on the groceries link and opens the groceries page only then the groceries components should load so basically only on demand these grocery component should be loaded and that is why we will use lazy loading or on demand loading or dynamic bundling For these groceries component.

//*Now to use lazy loading or basically creating a separate bundle for the grocery component we can't import the groceries component like a normal import we usually do like this:-`import { Groceries } from "./components/Groceries";`
//*Instead we have to import a function named lazy from the react library and remember that we have to import it as a named import from react so let us first import this function from the React.
//*Now this lazy function Will help us to use lazy loading and creating a different bundle for groceries so first we have to create a variable and its name will be groceries because using this variable we will import groceries and these variables value will be the lazy function and this lazy function takes a call back function as argument and inside that callback function where to use another function named import and this import is not a normal import which we use normally to import components instead it is also a function and we have to call this import function and as argument this import function takes the path of the component we want to import using lazy loading so the whole code will look like this.
//* But after doing this the browser will throw an error like this:`A component suspended while responding to synchronous input.` And in this error we can see that it is showing that the component is suspended And it is happened because while loading the component so basically while the browser is fetching The bundle which contains the code of groceries it takes some time in some milliseconds and react is so fast so when we click on the groceries link in the navigation tab react immediately tries to render that component but at that time the browser is still downloading that component so in that middle time when react is trying to render that component and that component is not present that's why react throws this error Of suspending the component and it suspended because at the time of rendering the component the component was not downloaded or fetched.One important thing is using this one line of code we have created a separate bundle for groceries so when we do the initial render at that time the main bundle which gets downloaded that bundle will not contain the code of groceries component and that is because of the lazy function we used and even we if we want to cheque that we can go to the dist folder And there we can see that previously there was only one javascript file which was made after bundling all of the files but now there is another javascript file for groceries and that is because we are importing the gross risk component using the lazy function provided by react so we may think that this lazy function and this one line of code using this lazy function may not have a lot of impact but that's not true this one line of code is providing us now the functionality of lazy loading and separate bundling which we call dynamic bundling so this bundle will be only downloaded when we will open that page so basically when we click on the groceries navigation link.
//* But now we have to solve the error we got so basically the time between Making the call and downloading that component react to render the component when it is not present and that is why we saw the error of suspending the component but we can tackle this problem easily using a component which is also provided by react. The component's name is `Suspense`, And remember that as it is a component so it starts with a capital letter and we also have to import the suspense component from react library as a named import and this component works as a fall back or a placeholder for our component so when our browser is downloading our component at that time react will display this component As the substitute and that is why we are calling it the placeholder so basically the placeholder or the suspense component will be displayed till our component is not fetched and as soon as the bundle gets downloaded the placeholder or basically the suspense component will get filled with the necessary component we were trying to download which is in this case the grocery component. And to use this suspense component after importing it as a name import Write the router configuration we wrote usually for any component and the elements properties value will be the suspense component and inside this component we will write our groceries component like this:-
/*   ⁡⁣⁢⁣{
        path: `/groceries`,
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },⁡
      */
//*And in the suspense component we have to mention our attribute named Fallback and its value will be the component we want to show as the fall back so basically this suspense component will be these fall back component which we will mention here so we can mention here the shimmer ui component we created so then while downloading the groceries component our shimmer ui component will be displayed and if we want then we can even show a normal  element heading element like this: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>; So basically these fall back will take the place of the groceries component until it gets downloaded and displayed on the browser and we can even cheque that by slowing the browser in the network tab because usually the downloading time will be in milliseconds so that's why in normal Internet speed it will vary difficult to see the suspense component and that is why to see it we have to slow the Internet speed so we can increase the downloading time and see the suspense component for more time and now after writing these two or three lines we have implemented lazy loading or dynamic bundling and that means these groceries bundle will be a separate bundle which will be only downloaded if there is demand so if the user opens the groceries page only then this groceries bundle will be downloaded and shown to the user and as we are not downloading it in the initial render so because of that our main js file So much so that will not make the main jazz file size heavier and that will increase our website speed when our application grow larger . And one more thing is that you have to export groceries as default export from groceries.js.
//*If you are checking in the network tab to see the downloading of the separate bundle then remember to choose the js file because usually in the network tab we select the fetch or xhr request which is basically fetching from other servers and that will not show the download of this js files so remember to select js file so you can see the downloading of js files basically the bundle which contains the code of the groceries component.
//* About the fallback:- remember that that fallback can be any piece of jsx,so you can write just a react element like a heading as the fallback, ot even a whole component (like shimmerUi) because at the end of day a component also returns jsx.
//* and this three or four lines of code have written can make your large scale application very fast , very performant and lightweight, optimized

//* the most important thing, you know why we have system design rounds? in your system design rounds your interviewer will ask you these things when you go into the interview and then tell  your interviewer that I can use lazy loading when my application grows, suppose if your interviewer asked to develop an E Commerce website so you should tell him that I can use lazy loading to  distribute my code into different chunks. Do you know these  architects that work on these big companies, that tech architects , front end lead, the project manager ,  they take these decisions that  our app is taking a lot of time to load and our app is bloating ,when an app is bloating or we also say that our app bundle size is increasing, so to reduce the bundle size we do this code splitting, we do this chunking,  we do this loading lazy loading , we do this  dynamic loading , this is known as dynamic loading ,on demand loading we also call this as dynamic import right this is known as `dynamic import` also right we are dynamically importing it , so when it is necessary to load.so when we use it then all the code will not come at once,instead it will only come when it is requested.
//*if you tell these things to your interviewer he will be impressed.
//* ⁡⁣⁢⁣all of the names used in the industry for lazy loading:- chunking, lazy loading, code splitting, dynamic bundling, dynamic import, on demand loading.⁡

//! Lesson - 10 - Jo dikhta hai wo bikta hai
//*
//*My notes
//*And now we have used normal css to style our components and all of our elements but in the industry level developers don't use normal css chloride large scale applications so instead of css there are some css preprocessors named sass and scss these are basically some advance way to write css which gives us some superpowers to css but in the industry level developers don't even use these preprocessors in the current scenario instead what developers use to style elements and components is called `styled components` and this is used with react very commonly.uber uses styled components to style their app components.there are also some css frameworks like tailwind.css amd css libraries like material ui , chakra ui ,ant design which are used to style the components,we also get pre-styled components from these libraries.
//*So in this lesson we're gonna learn about css framework named tailwind css it is very easy to use and when we open the website it says that without leaving the html we can write css so that means that even if we are writing J S X or we are in html file then we do not need to open the css file multiple times instead if we just use tailwind css then we can directly write the css so basically the styles for components using it so to use tailwind css first we have to go to their website and in the installation guide there is a section for frameworks we have to click on that and then as we are using parcel as a bundler so we have to choose parcel from the list it will tell us how to use it with parcel on the installation g the the first process is starting the project and in our case it is already done so now the second process is installing tailwind so we are going to instal tailwind Css using our terminal as the dev dependency And we will also instal post css using the below command
/*⁡⁣⁢⁡⁣⁢⁣npm install -D tailwindcss postcss
 */

//* because behind the scenes tailwind css uses post css to style the components and to use tailwind css it is not necessary to know postCSS in depth we just need to know that `post css is a tool for transforming CSS with JavaScript` And behind the scenes tailwind uses it now we have to initialize tailwind in our project so as usual using npx we will initialize tailwind in our project using the below command

//*⁡⁣⁢ ⁣npx tailwindcss init⁡
//* And after installing and initializing tailwind css a new file will be created at the top level named `tailwind.config.js`

//* And the next step is to create a  post css file at the top level(in the root folder) so an file for post css configuration  file in the project root level and  the file   name will be `.postcssrc`  inside the.postcssrc file we have to write the below code to enable the tailwindcss plugin.So then tailwind can use postcss as it's dependency.
/*{⁡⁣⁢⁣
  "plugins": {
    "tailwindcss": {}
  }
}⁡*/
//* we need to configure .postcssrc file because parcel need postcss to understand tailwindCss.
//* now the next step is to go to our tailwind css configuration file , and there is a content array , inside that array we have to mention where and in which files we can use tailwind css. so just write this:- content: ["./src/**/*.{html,js,ts,jsx,tsx}"], it means inside the src folder in any hierarchy(/**/*) level, in every html,js,ts,jsx,tsx extension file we can use tailwind css.we are telling this trough adding this line.
//* the next step is to go to our style.css file and write this:-
/*@tailwind base;
@tailwind components;
@tailwind utilitie
*/ //*this is importing tailwind inside our css file.
//*we can find all of the steps also in tailwind css documentation .
//*now setting up tailwind css is compolete and from now we use tailwind css in our project.
//* So tailwind css provides utility classes and these are very helpful so we do not need to go multiple times to our css file instead we can directly write some pre written class name In the html element or the react element directly . for margin of 4 px we just need to write 'm-1', it's that easy, Now we might think that we need to go multiple times to tailwindCss website to see the class names they provide and it can be very hectic to check the class names multiple times but there is an easy solution for it . So there is a extension we need to download in our vs code named 'Tailwind CSS IntelliSense' This gives us suggestion for all of the class names provided by Tailwind Css.So if we just write the css property we are finding it will automatically give us the suggestion of that and that's why it becomes very easy to use directly in the html or jsx.And after writing a utility class provided by tailwind css if we just hover our mouse over it we can see the actual css of that utility class.

//* now let's say you need a value 200 px but it is available , so you can right it inside [ ] like this, m-[200px], taiwind will treat it like a hardcoded value.
//*Advantages of tailwind css
//*One more advantage about tailwind css is that it makes the css bundle size so much lightweight because it will only import the utility classes you have used in your code so for example if you have not used shadows for any element then it will not import the code of shadows from the server and that is why the eventual bundle size will only include the code which is required to display the ui and that's why it is a very important advantage of tailwind css.
//*It does not limit your boundaries to make beautiful designs you can even make complex ui using it like if you are trying to give a hover effect in the normal state your colour is bg-gray-50 to write hover state you need to just write hover:bg-gray-400.
//* It also offers you pre-styled components which looks elegant and beautiful.
//*Disadvantages of tailwind
//*there is initial learning curve but after some time you will get used to it.
//* If you need to write many properties of css just for one element and you are doing it using tailwind css then eventually the element will look ugly because you are just cutting out all of the css from the css files and putting it inside the html or jsx files that is why while creating the element when you write all of the styles at once in the one hand it is an advantage but if you need to write multiple properties of styles for justice 1 element then that element will look so much ugly and that makes the code not readable and that is a disadvantage of using tailwind css.
//* now let's Convert all of the normal css into tailwind css.
//* All of the previous css we written is kept inside the css file and it is commented out, we kept it for future reference.

//! Lesson - 11 - data is new oil
//*
//*My notes
//* higher order component :- a higher order component is function which takes a component as input and returns another component as output.So it is like a enhancer/modifier function. It takes an existing component and enhances/modifies it then return it.
//*If we go to Swiggy's website then we will see that on some restaurant cards there is a promoted level on top of the card very similar to sponsor tags or labels we see on many websites so how we can also add these kind of promoted labels on top of our restaurant cards so first of all if we cheuck the data and we will see that there is a property named promoted and its value is either false or true so we can use this property from the data to show the promoted label on top of the restaurant cards. Through inside the restaurantCard.js file we already have a restaurant card component which returns the jsx of a restaurant card and the restaurant card component is basically a function which is returning this jsx now we will create another functional component which will take this normal restuarant card component and modifies it to add the promoted level and then it will return a restaurant card with the promoted label.
//*⁡⁣⁢⁣Creating a higher order component to add promoted(discount percentages) label tag on restaurantCards⁡(⁡⁣⁢⁣as promoted property was not available in the swiggy's new api data so we are gonna use isOpen property so if the restaurant is opened so we will display this label.⁡ ⁡)
//*So as a conclusion we are gonna create a higher order component inside restaurantCard.js this component will take the previous normal restaurantCard Component as input and it will modify this component so it will add the promoted level depending on the data and then as the output it will return the enhanced restuarant card component with promoted label.
//* so let's build that higher component first which we will name it `withPromotedLabel` then we will export it as named export as we already have an default export which is normal restaurantCard component and as we are gonna use it inside body component so we have to import it there.

//* now inside Body.js's body component , we will call this function with passing the argument which is normal RestaurantCard. and save it's returned value inside a constant named Restaurant card promoted.
//*higher order component for promoted label feature(takes an component as input and returns  the functional component after enhancing it like adding some features without changing the previous component )

//* input= normal restaurantCard
//* output(return)= enhanced  restaurantCard with promoted label(discount percentage)
//* and now below where are rendering the normal restaurantCard.js there we have to write a condition to use it. the condition is :-
//* if discount is present then use then use <RestaurantCardPromoted /> else use <RestaurantCard/ >

//* using ternary operator :-   {restaurant.info.aggregatedDiscountInfoV3 ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}

//* and also pass the props resdata="restaurant".
//* but where we will receive this props?
//*=> withPromotedLabel() returning a functional component which is actually a function, we have receive the props in that returning function and as inside returning function we have a child component(we received as input) the <RestaurantCard/> , so finally there we have to pass the props again. like <RestaurantCard {...props}/> so we are spreading all props using spread operator , in this way we passing all of the received props inside the child component <RestaurantCard/>  at once. so the higher order component  will look like:-

// export const withPromotedLabel = (RestaurantCard) => {
//*returned functional component
/*   return (props) => {
    //*destructuring the discounts
   const discountPercentageSubHeader =
      props.resData.info.aggregatedDiscountInfoV3.subHeader;

    const discountPercentageHeader =
      props.resData.info.aggregatedDiscountInfoV3.header;
//* returning the enhanced component with promoted discount label
    return (
      <div className="relative">
        {/* Promoted discount label */
//         <label className="absolute top-0.5 text-yellow-50 bg-cyan-800 m-1 p-1 z-10 rounded-lg ">
//           {`${discountPercentageHeader} ${discountPercentageSubHeader}`}
//         </label>
{
  /** received component  */
}
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };
// }
//* ⁡⁣⁢⁣when we are using spread operator to spread the props  inside <RestaurantCard {...prop} /> , so it is passing all received props into   <RestaurantCard {...prop} /> component. but why are we need to pass the props using spread operator here and not like what we do normally (like this resData="props")? And what is a Pure Function? why higher order components are called pure functions?⁡
//* because Higher order components are pure functions as they receive a component but it does not modify the received component's actual features it just adds some another feature on top of it without modifying the actual component ,so it is just enhancing the component. that's why here we were passing the props using spread operator.
//* higher order function is pure function so it takes a functional component as input so as output it also has to return another functional component . a functional component is a javascript function which returns a peice of jsx. that's why inside this higher order component we have to return keyword one inside another, because it is returning a functional component that returns a peice of jsx.  that returning functional component can recive the receive the prop which we will pass into the original restaurant card component which we are using while returning the jsx.

//* An important part about react applications is that it has mainly two layers one is the ui layer and another one is the data layer so the UI layer is usually static because whatever jsx we write that will be rendered on the ui but on the other hand Data layer management is so much important because this data layer will control the ui layer so whatever states props everything is inside this data layer and it will control the ui layer so if you know how to manage your data better then you can make better performant react applications.

//* ⁡⁣⁢⁣Rebuilding restaurant menu⁡
//* So in the swiggy website if we open any restaurant card and see its menu then we will see that at the top there is some restaurant information like the name and its location and below that there are many kind of categories like recommended ,burgers, pizzas, And many other categories and every category is an accordion so we can expand and collapse the accordion by clicking on it and when we click on any category then all of the items related to that category appear as a list and if we again click on the accordion then it will collapse so basically on toggle it will expand and collapse so let's build the restaurant menu section beautifully using tailwind css.
//*Every accordion has two main parts first one is accordion Header and second one is accordion description the accordion header gets shown all the time and when we click on the accordion then the accordion expands and it shows the description and if we again click on the accordion then the description will collapse and the header will get displayed only.
//* let's go to restaurant menu first and start rebuilding it.
//*but before building the restaurant menu below if have kept the previous version of restaurant menu for future reference as we gonna delete the previous returning jsx part and rebuild it properly , the new version will contain the accordion menu . the previous version is below:-
// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   //* getting data from the custom hook built to fetch the data for restaurant menu
//   const resInfo = useRestaurantMenu(resId);
//   console.log(resInfo);

//   if (resInfo === null) return <Shimmer />;

//   //*Placing the destructuring code  below the if Statement(for Shimmer UI) is important because as we are gonna destructure the needed properties from the data , if we would place it above the if statement then at the first render when the resInfo value is null then our variables will try to get the data from null, and that will throw an error so when the value is null then it should render the Shimmer Ui and that's why we placed the if statement above so the after the return the below lines would not execute, but when the data will arrive after the useEffect hook call then it's value will be filled with the data so then the if statement will not execute and the return will happen at that line, and the below lines execution will continue . and here we have not used ternary operator also because of this reason because we need to do some destructing here. and  this destructuring should only happen after the data arrives, and also because we can't do this destructuring inside the fetchMenu function because as it is inside the useEffect hook, and we mention the second parameter in the UseEffect hook that's why it will execute once in the first render.

//   const { avgRatingString, name, cuisines, costForTwoMessage } =
//     resInfo?.data?.cards[2]?.card?.card?.info;

//   const { itemCards: itemList1, title: title1 } =
//     resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card;

//   // console.log(resInfo?.data.cards[4]?.groupedCard);
//   //* swiggy's data has some inconsistency in property names that's why we had to create below if else statement
//   if (itemList1) {
//     return (
//       <div className="res-menu pl-8 bg-[url('src/imgs/background3.jpg')] text-yellow-50  h-[50rem] min-h-dvh max-h-full">
//         <h1 className="border-b-[1px_solid_black] text-4xl font-bold">
//           {name}
//         </h1>
//         <p className="text-[1.2rem] mb-4">
//           {cuisines.join(`,`)} <span>{avgRatingString}⭐</span>
//         </p>
//         <h3>{costForTwoMessage}</h3>
//         <ul>
//           <h3 className="mx-2 my-4 text-[1.8rem] font-semibold">{title1}</h3>
//           {itemList1.map((item) => {
//             return (
//               <li className="font-semibold" key={item.card.info.id}>
//                 {item.card.info.name} - Rs.
//                 {item.card.info.price / 100 ||
//                   item.card.info.defaultPrice / 100}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   } else {
//     //*this is created because of inconsistency in swiggy's api data
//     const { itemCards: itemList2, title: title2 } =
//       resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//         ?.card.categories[0];
//     console.log(
//       resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//         ?.card.categories
//     );
//     return (
//       <div className=" res-menu pl-8 bg-[url('src/imgs/background3.jpg')] text-yellow-50  min-h-dvh max-h-full ">
//         <h1 className="border-b-[1px_solid_black] text-4xl font-bold">
//           {name}
//         </h1>
//         <p className="text-[1.2rem] mb-4">
//           {cuisines.join(`,`)} <span className="ml-4">{avgRatingString}⭐</span>
//         </p>
//         <h3>{costForTwoMessage}</h3>
//         <ul>
//           <h3 className="mx-2 my-4 text-[1.8rem] font-semibold">{title2}</h3>
//           {itemList2.map((item) => {
//             return (
//               <li className="font-semibold" key={item.card.info.id}>
//                 {item.card.info.name} - Rs.
//                 {item.card.info.price / 100 ||
//                   item.card.info.defaultPrice / 100}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// };
//* now let's go to RestaurantMenu component file and build it beautifully.

//* after building the header section, first we filter the data depending on itemCategory , and got a array out of it named `itemCategories ` and we will now iterate it using map method and for every category we will have a accordion , so first we have to create that `ItemCategory` file which will have the code for every category accordion . and every accordion has a accordion header and a accordion description. And this description section is collapsible so when we click on the header the accordion description will appear and then if you again click on it then it will disappear . And when the description will get opened then we will see all of the items belong to that category So for every item inside the category we will render `MenuItem` component So let's create the file menu item so we can display a menu item for each of the items of a category so we will just loop over the item card array, And then for each item we will display one menu item.
//* now every thing is ready but how do we implement the expand and collapse feature of the accordion?
//*=> below code and explanation
/*  const [showItems, setShowItems] = useState(false);

  const accordianToggle = () => {
    //*implementing toogle functionality using not`!` operator
    setShowItems(!showItems); //* if showItem's current state is false then because of not operator it will be changed to true and if it is true then it will be changed to false
  };
   <button onClick={accordianToggle}>🔽</button>

      <div>
        {showItems &&
          data.card.card.itemCards.map((item) => (
            <MenuItem key={item.card.info.id} item={item} />
          ))}
      </div>
  */
//* so on the 🔽 Button we have attached a onclick handler and inside that we have put a call back function which will be executed when the user will click on this button and inside that function where to write the logic of displaying or hiding accordian description so to save the state of Showing and hiding the items first we will create a state variable named show items and its initial value will be false because initially we want to hide the accordion description and now inside that function which will be called on users click we will change the state of that state variable using setShowItem function so here we want a toggle feature so basically if its value is true then we want to make it false and if it is false then we want to make it true and to do that we will use the not operator and inside the set show item function first we will put the not operator and then show item state variable so because of the not operator when its value is false then on click it will become true and when its value is true then on click it will become false and that's how we are gonna implement the toggle feature but it is still not complete. So now inside the where we are displaying all of the item there we will use the && operator And before the end of later we'll put our show item variable and after it we will put the description component which will contain all of the items and because of the end operator When the value of show item state variable is true then only the after portion of the and operator will be executed and that's how implementing the hiding and displaying functionality of accordion works.show the above code for example .

//*⁡⁣⁢⁣React dev tools chrome extension⁡
//*We already installed the react dev tools chrome extension in our chrome browser but what it does is basically in the developer console it adds 2 new tabs phonics 1 is react component second one is react profiler so react component tab is very important because it shows you the uil layer and the data layer side by side so you will be able to see the virtual dom of the ui layer so all of the components which are already rendered on the ui and also if you click on any of the components then you will be able to also see the data layer of the component and now the second tab which is called profiler it is basically for recording the actions and optimizing your app so if you start recording then it will start basically profiling and it will record all of the steps the user is doing so like the user clicking on a button or going to some other page and so many other steps the user can perform on your website so after you stop the recording and cheque it then you will be able to see all of the actions of the user performed and even what was the time gap of loading any component and how much time the user stayed on any page and many other things so using this profiler you can justify what are the components which are taking so much time to load when your app grows so much bigger.

//* Controlled and uncontrolled components and lifting the state up
//* So right now each of the item category has its own state inside them so every item category component has a show item state variable inside it and we want to implement a feature that if we click on one category then it will be expanded and all of the other categories should be collapsed but as every component of category has its own state that's why it is not possible to do and the solution of this problem is that we shift the state variable show items to its parent which is restaurant menu so basically we want to control this item category child component from its parent component restaurant menu that means this child component will not have the show items state variable instead it will receive show item value as a probe from the parent restaurant menu so lets lift the state up.
//*but before that the previous version of itemCategory function is kept below for future reference
// const ItemCategory = ({ data }) => {
//   console.log(data);

//   const [showItems, setShowItems] = useState(false);//*commented out when lifting the state up to the it's parent RestaurantMenu for building the feature when we click on any category then all other will collapse.see above notes about it.

//   const accordianToggle = () => {

//     //*implementing toogle functionality using not`!` operator
//     setShowItems(!showItems); //* if showItem's current state is false then because of not operator it will be changed to true and if it is true then it will be changed to false

//   };

//   return (
//     <div className="text-white cursor-pointer ">
//       <div
//         onClick={accordianToggle}
//         className="flex justify-between p-4 text-4xl my-4 shadow-md shadow-slate-400"
//       >
//         <div className="font-bold">{data.card.card.title}</div>
//         <span>🔽</span>
//       </div>
//       <div>
//         {showItems
//           ? data.card.card.itemCards.map((item) => (
//               <MenuItem key={item.card.info.id} item={item} />
//             ))
//           : ``}
//       </div>
//     </div>
//   );
// };

//* From this example we can also understand the concept of controlled and uncontrolled components so previously when item category child component has its own state at that time it was an uncontrolled component because its parent component was not controlling its state but when we are lifting the state up and its parent is controlling its state that means we are transferring the control to the parent so now the parent is controlling its child components,That's why all of the child components will become controlled components because they are being controlled by the parent restaurant menu now.

//* Now first to all to lift up the state,We commented out the local state variable and then went to restaurant menu component and inside that where we are mapping all of the item category components using map method there we have created a new prop named showItems,Because we want to pass show items from the parent restaurant card component as we have commented out the state variable here and first we will taste it with true and if we go to the ui then we will see that all of the components itemCategory are visible because we set it true for all itemCategory components We want to control it depending on the index Only using the index it is possible to track which itemCategory is closing and opening so that's why when we are using the map method inside that map methods callback function we have to mention the second parameter which is index,And now the prop we made Named Show items its value will be dependent on the index So first we will create another state variable where we will keep track of the index and the state variables name will be showIndex,And the probe set item's value will be :-showItems={index === showIndex ? true : false};So the first index is coming from the map method and the second one is the state variable we created and the condition is basically saying that if the components index is equal to our state variable then return true either return false and we will keep the state variables default value to zero as we want to keep the first itemCategory Expanded by default but now we want that this show index state variable which is present in the parent component its value should be changed when the user clicks on any of the item category so if he clicks on the second item card then That item category index should be passed inside this state variable so basically change the value of the state variable which will make that card open but to do that as the index will be accessible inside the child because it is only possible to know which category is being clicked inside that category only and from that we can get index but to do that the main problem is we need to control the state variable from the child component so basically we need to pass the control of the parent to the child component which is directly not possible and it is only possible to pass the control of the child to the parent but passing the control from the parent to the child is not possible so how can we do that so as we cannot do it directly we have to do it indirectly so we will create another prop which will be passed inside all item cards like this:- setShowIndex={() => setShowIndex(index)} ,and See closely that we have not called setShowIndex(index) While passing it as the probe instead we passed it inside a callback function and we passed it with the index so that means while mapping all of the item cards we'll get this probe with their own index number and as we have not called the setShowIndex(index) function,Instead passed it inside a callback function that means when we will call it inside the child then only the insider function will get executed So basically setShowIndex(index) Is passed inside the child component but it is not called But it is passed with the index of that component and it will be only called inside the child if we call it there inside the child,So now we have to receive this probe also inside the child and then inside the toggle function we made inside our child component there we just need to call this set show index function,So the feature is now almost complete,Basically at the first the first item category will keep expanded and then when we will click on some other category then the other categories should be collapsed so only one should be opened at a time but one more bug is that what if we want to close or collapse that only one opened category so if only one category is opened and we also want to collapse that and don't want to expand any other category then how is that possible so basically the toggle feature we implemented back how can we do that now so to do that the solution is very similar to what we just did so we just need to create another prop and pass it which will look like this :collapseItem={() => setShowIndex(false)} ;In this probe we are setting Show index value to false,But again we're not directly calling it we're just passing it inside a callback function and we'll call it inside the child component so again we need to receive it and now inside the accordion toggle function inside the child component we just need to use the ternary operator and write the condition that if it is already opened so if any category is already opened then call these collapse item function and if it is not open then call sets show index function which will expand that category like this:-    showItems ? collapseItem() : setShowIndex(); .

//*Prop drilling:- Sometimes in our File hierarchy there is so much nesting basically that means we have nested components one inside another very deeply and in large scale applications it is very obvious to happen so in these kind of scenario when we have very nested component structure and we want some data at the top level of the hierarchy and also at the bottom level of the hierarchy so that means the top parent needs the same data and very much nested a child component needs the same data so in that condition we have to remember that react has one way flow of data so data flows from the top to bo bas basically from the parent to child then to its child from the top to the bottom and that's why if we have some data at the top level of the hierarchy and we want to access that data at the most nested level of the hierarchy then we have to use the props and pass the data at each level of the hierarchy to maintain the flow of the data ,We have restaurant menu component inside it we have item category component and inside the item category component we have menuItem Component and we have some data in the top level so in the restaurant menu component and we want to access that data in the menu item component As we know react has one way data flow that means to get the data in the menu item component first we have to pass the data through the Item category as prop and then from the item category component we have to pass that data to menu item component Category component is the parent of menu item and category components parent is restaurant menu that's why to get the data in the menu item component we first need to maintain the data flow to get the data at the deepest level of the hierarchy and that is called prop drilling.Because we are drilling the components to access the prop at the deepest level in another words we are passing the props at each level of hierarchy to maintain the data flow and get the data at the deepest level of the hierarchy and this concept of passing the props or drilling the props through each level of the hierarchy of the dom structure is called prop drilling.

//*But sometimes when we have so much nested data And in the in between components we does not even need that prop we are just Passing the prop to send it to the next child.For example we have the data in the restaurant menu component and we need the data in the menu item component so we do not need to use this data in the in between component item category component but as react has only one way data flow that is why to reach to menu item first we need to pass the data to the item category component then only we can pass the data from there to menu item even we do not need to use the data in the item category but we are still passing through it and for one or two level it is ok to do it but when we have so much level of nesting like 10 levels of nesting and in between components does not need the data then it does not make any sense to use prop drilling through every step of the hierarchy to get the data at the deep level of the hierarchy.
//*To solve this problem we have something called react context.

//* and many times in large scaled applications we need some global data which we access anywhere in our webapp no matter how much nested our component is. Now sometimes people think that they will keep some global data at the top level and then they will pass that data through props but it is very foolish to pass any data 10 level deeper using props if there is no need of that data in between components.
//* so the solution of this problem is context which is like an global place where you data is kept and anybody can access it.so no need to do prop drilling. when you are using react context.
//* there are some scenarios when we need this kind of global space where need to put some data which should be accessible from everywhere.like- user credentials of a logged in user,it can be needed in places all over the app.
//* so first of all we can create ,multiple context, basically multiple global spaces for keeping data.
//* so lets create our first react context, where we will keep information of a logged in user.
//* we will create our context file inside our utils folder, as it will keep the information of a logged in user so we will name the file UserContext.js. so let's create the file inside utils folder. and context files names also start with capital letter like react components.
//* to create a context we need to import a function from react library named createContext(). inside it we will pass a object which will keep the data so here inside the object we are gonna put some information which it will hold , as properties and we will set some default value to it. this createContext function call will be assigned as the value of a variable. and at last we need it export it.
//* now to use the context react gives us access to a hook named useContext, we need to import it in our Header.js file  from react as named import because we rae gonna display the information in the navigation. and we also need to import the context `UserContext` we created.
//* now inside our Header component, we will call the hook useContext and assign it as value of a constant , and as this will return a object so we are gonna directly destructure loggedInUser form it, because we are getting the data of the logged in user inside it. and inside the the hook userContext(UserContext) , we need to pass UserContext , which we imported form utils folder so the context we created.
//* like this :-  const {loggedInUser} = useContext(UserContext);
//* ⁡⁣⁢⁣but why are we passing the UserContext inside the hook useContext?⁡
//* ⁡⁢⁣⁣because there can be multiple contexts we can create, and to tell react which context we need to use we have to pass the context name as a argument inside useContext() function.⁡
//* so let's add another nav item and use loggedInItem data(coming from context) there and display it.
//* and we can access this context data in any file in this way.

//* ⁡⁣⁢⁣should we put all of the data in context?⁡
//* no we should only put that kind of in context which can be useful in many places all over the webapp.

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

//* ⁡⁣⁢⁣making the navigation bar responsive in header.js(not from this course learnt from youtube link is included below if needed)⁡
//*To make the design responsive for smaller screens we have added a menu icon which will be visible for smaller screens and all of the navigation items will get hidden but when the user will click on the menu icon then all of the navigation links should get displayed and to keep track Of the navigation menu is open or not we have created a state variable named isOpenItIts default state will be false because by default it should be hidden but when the user will click on the menu button then on click event this state variables value will be changed and it will get true,And when it gets true then we have used an operator and as soon as it gets true on click of the menu button we display all of the menu items so the navigation items in a column format for bigger screens we were displaying it in a row format but for responsiveness Small screens we will show all of the navigation items in a column format so we have created a div which will be only displayed when the state variables value gets true which will happen on click event But inside the div if we would create the same navigation items again then it will be duplication of code which is not allowed that's why we have created this  constant named navLinks which is containing all of the navigation items so then we can use same navigation links To display for bigger screens in the row format and also in the smaller screens in the column format and that is how we are dealing with the problem of duplication of code.to know more see this video:-(https://www.youtube.com/watch?v=iq-7qRUYsTI)

//* ⁡⁣⁢⁣changing the data of context from anywhere⁡
//* till now we know we know how to create context using createContext() and how to use using useContext hook and .Consumer property (see about.js) and now we are using the context data in our about.js and also in Header.js and the property loggedInUser Has a default value which is default user but now lets say in this App.js file so in the root file We have some authentication code written and when the user sign up or sign in then we send that data to our server and in response we get some data which contains the username so as we are sending data to our server and getting some response from it so definitely we are gonna do it inside use effect hook Because it should execute after the component is rendered and we already know the reason of using use effect hook but now as when the user do sign in we send some password and his name and in response we get the user name from the server but now we want this received name should be updated in the context so we want to send this data or provide this data to our context and update the context data so basically we want to provide the data to our context named UserContext , from here App.js.but before let's create some fake data inside a useEffect hook in our AppLayout component so we can simulate that we are getting some data from the server. and now we also have to create a variable to save this data we are getting from server (simulated ) . so we are gonna name that state variable UserName. so now we are gonna get that  data in the state variable , now, we need a way to pass or provide this data to the context and also update the loggedInUser property in the context with this data , but how can we do that?
//* - .Provider property - this property will help us to provide this data and update the loggedInUser property in the context, it's very similar to Consumer property we learnt few times ago but it's work is different, so first we do not need to import this property from react because when we created the context we already got access of this property like Consumer property. but we need to import our context file named UserContext. so let's import it. and after importing we need to use this Provide property after the context and like a component and we are gonna put our whole returning jsx (of this AppLayout component) inside this component.like this:-
/*  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, greetingMessage: `Hello` }}
    >
      <div className="app">
        <Header />
        <Outlet />
        </div>
        </UserContext.Provider>
      );
 */
//* but why we are we putting the whole appLayout component inside this </UserContext.Provider> component?
//* because  this component is providing this new data to the context and updating it's properties but it will Provide this data only for those components which are inside it and that's why we are putting the whole AppLayout component inside it. so all of the components get access to the updated context data.
//* what if we only included only the Header component inside this     </UserContext.Provider> component?like below
/*  return (
   
      <div className="app">
//* only header is inside 
         <UserContext.Provider
         value={{ loggedInUser: userName, greetingMessage: `Hello` }}
          >
          <Header />
         </UserContext.Provider>

        <Outlet />
        </div>
        
      );
 */
//* then only the header component could get access to to this new updated data through the context and all of the other components would get the default data we set as default. because in this scenario the new data would be only given to the Header component.
//* so now know we can create multiple contexts , access it anywhere, control where to access updated context and where just need default data.

//* Can we use two context providers at same time? and if we pass different data for both then what will happen ? and is it even possible to do? see below example:-
/*  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, greetingMessage: `Hello` }}
    >
      <div className="app">

      <UserContext.Provider
      value={{ loggedInUser: `krishna`, greetingMessage: `Hi` }}
    >
        <Header />
      </UserContext.Provider>

        <Outlet />
        </div>
        </UserContext.Provider>
      );
 */
//*Yes it is very much possible to use two context providers at same time, In the above example Our whole app layout gsx is inside one context provider to add the value is userName(Anupam) of  loggedInUser But our header component is inside another contact provider where the value of loggedInUser Is Krishna so in this case only inside the header component wherever the context is used it will display Krishna as the value of loggedInUser, But accept the header component anywhere inside our app wherever we use our context the value of loggedInUser will be Anupam Boral.

//*Changing context values from other component
//* Now lets know about some of the other powers of context so right now we are changing the value of the context Using the state variable named userName,But let's say we want to have another input box inside our body component like the search box and we want that whatever we type in that input box that will update the value of the context's loggedInUser property.but loggedInUser property's value is set to userName (state variable). but if we want to change it's value from the Header.js. but then we need to access the setUserName() function in Header.js but how can we access setUserName in Header.js?

//* So like we are updating the value of loggedInUser property here:- <UserContext.Provider value={{ loggedInUser: userName }}> , in the same way we can also pass this function into context, just like we are creating a new property inside the context , and the property is this setUserName() function like this:-
//*<UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
//* so now inside our context this setUserName property will be also available. and as we can access the context any where so noe we can also access this function anywhere through the context, and to access it inside Header.js we just need to import our context file file then using useContext hook we can access the function like this:-
// const { loggedInUser, setUserName } = useContext(UserContext);//* we need to do it inside header component.

//*and now just add the input element and when onChange event happens we will receive the value from the event and the pass that inside our setUserInfo function
//*<input value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}></input>;
//* And that's all so now whatever we will type inside the input element that will be the value of loggedInUser, So wherever this loggedInUser Property is used in whatever component everywhere the value of this property will be whatever we will type inside the input box because on change event we are updating the state variables value which is provided to the context and updating its properties value so even we used this property in any component like in the header or the about section everywhere the value will change when the user will type something in this input box and the more amazing thing is that even we are loading some component using lazy loading like we are loading the grocery component using the lazy loading right now so if we use the loggedInUser Property inside grocery component then also inside the grocery component we will see the updated value of loggedInUser property, And it is amazing because as we are using lazy loading to load the grocery component that means in the initial load we did not have the files of grocery component but in spite of that when we load the grocery component later then also we get the updated value of context. and that is power of react context.
//*So many people in the industry talk about some data management libraries or so called state management libraries like redux But React context Does the same thing for us so it creates a global space where we can store any data we want and react context is so much powerful that you don't even need to use Redux when you are building a small or mid size application because redux will do the same thing basically creating a global space for us where we can put data but if you are building a large scale application then you might need to use a data management tool like redux, But if you are building a small or midsize application then there is no need to import a third party library like redux from npm because we get react context with react already so most of the time we do not even need to import this kind of state management libraries from npm and most of the developers don't know that they don't even need to use redux every time, it is only needed when it is necessary.
/*
const Grocery = lazy(() => import("./components/Groceries.js"));
const AppLayout = () => {
  //* state variable to save user's data coming from api
  const [userName, setUserName] = useState();
  //make an API call send userName and password while log in and in response we are getting the userName as response from server(simulating the condition with some fake data )
  useEffect(() => {
    //*fake data
    const data = {
      userName: "Anupam Boral",
    };
    //*updating the state
    setUserName(data.userName);
  }, []);
  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, greetingMessage: `Hello` }}
    >
      <div className="app ">
        <Header />
        <Outlet />*/
{
  /* <Body /> */
}
/*     </div>
    </UserContext.Provider>
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
        path: `/groceries`,
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />{" "}
          </Suspense>
        ),
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
*/

//! Lesson - 12 - let's build our store
//*
//*My notes
//* First of all ,many companies start using redux from day one even without understanding they need it or not and some developers even think that redux is part of react. but no , react and redux are two different libraries . redux is state management or data management tool , very poplar today.

//* about redux website:- If we go to the website of redux then after opening their website we will see the description written that Redux is a predictable state container for js apps so basically a state management library for js apps and we can also understand that Redux is not only specific to react but it can be also used with other js libraries and frameworks now redux Has two other libraries first one is react-redux and the second one is Redux toolkit.There is a normal version of Redux which is the older version and it is also called vanilla redux.But we're not gonna use the older vanilla redux Because with time redux simplified things and they created Redux Toolkit which is new and  very easy to use then the older version also the react-redux Which is like a bridge between react and redux. So we are gonna use react-redux and redux toolkit in our project so we can understand the modern way of using Redux rather than the older version.
//*Purpose of redux toolkit when vanilla redux already existed
//*The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

//* "Configuring a Redux store was  too complicated"
//* "I have to add a lot of packages to get Redux to do anything useful"
//* "Redux(vanilla) requires too much boilerplate code"

//* because of these problems , developers developed a simpler version of writing redux which is react toolkit.

//* let us just use Redux Toolkit in our application
//* so first of all let's discuss what feature we are going to develop while we learn Redux ?
//* so let's  develop a feature that will use Redux in our application okay so let us build something known as shopping cart🛒 . so we already know the cart flow we usually see in many websites like flipkart, swiggy. so let's build a cart flow .
//*What does it mean by a cart flow ?
//*let's see  it first. so lets go to a restaurant  menu of any restaurant in our web app.  For example  Meghna Foods restaurant. so lets go to Meghna Foods's menu.Now what we are going to build  is that if I click on this add button of any menu item   then it  should go inside my cart🛒 (in the nav bar we will add the cart navigation .So it should go inside my cart and let us also build the "cart page" component.so let us build a cart page  ,we might have seen on the food ordering website right .we can see an example  what we are going to build.so in Swiggy.com if I go to swiggy.com, so if I add something into the cart by clicking on the add + button,  in the cart(on nav menu) it increase like this:- cart🛒(1).it so if I add another item to cart so the cart becomes 🛒(2).so  what we are going to do is, we will add these items to the cart , so it should show on the top(nav menu) also.If I click on 🛒(1)(on the nav menu) we will go to a cart page, just like Swiggy has a cart page, where we see what all items are there in my cart  and and we can build this kind of feature using react toolkit.

//* And to store all these cart information, we will be using our Redux store , this is the feature we are going to build and let us just start building it but before we write any code 1st of all I will explain you the architecture of redux toolkit(see image `redux-data-flow.png` ) , so let us just see the architecture of redux,  so let us just start seeing what is the redux architecture all about , so we were building the cart feature so we will be building something like add to cart , if you click on the menu item's add btn it should added to the cart ,  so in our website  header, we have a our cart , the cart can have multiple items, we can add items to the cart , in the image we have a  the menu page , suppose this is a page of Meghna Biryani restaurant  and there is a menu of Meghna Biryani,  there are a lot of items right but suppose there are three items which we are gonna choose from the menu and each of these 3 items  have a add button inside their item component,
//*so what should happen when we click on this add button of any item? and  when the user clicks on the add button how will this add button item can send the items to the cart ?

//* how will they go in the cart? this is what we are going to explain in redux store . in the cart  when we add a item , if I click on add for the 1st item what should happen ? cart🛒(1) should come up in the nav as we added one item, if I add another item here cart🛒(2) should come up, if I add another item here cart🛒(3) should come up . let us see how we can build this , so in this cart we also show the number of items.So now we will be using redux for our application for managing the data of our application , so what is redux store ?

//*  redux store is nothing but a big  object you can assume that redux store is a big object and it is kept in a central global place. Redux store is kind of like a very big javascript object with a lot of data inside it and it has kept in a global central place .
//*let us just try to visualize how our Redux store looks like , suppose this is my Redux store(see image redux-data-flow.png) , assume that this is a central place  and any component can access it inside our application, in a react application any component can access this redux store ,we can write data (change) in the store, we can read data from that store and it is like a very big object and it is kept in a central place and **we will not keep all the data but a big part  of the whole data of our application inside this redux store .
//*but  a question,is it a good is it a good practise to keep all the data inside a whole big object?
//*is it good to keep all the data inside  one big  state object?
//* Its answer is yes, it is absolutely fine, there is no problem with keeping a very big object with a lot of data inside it it is completely absolutely fine but so that our redux tool does not becomes very big very clumsy, we have something known as slices inside our Redux store(see image redux - data - flow.png), so suppose this is our whole big Redux store(in the image), we have parts / portions of our Redux store which is known as slices, so you can assume a slice to be a small portion of a Redux store  and we can create multiple slices inside our Redux store

//* why do we need slices and what are these slices actually?
//*  so let us take an example of our application ,for  this food ordering application we may need different slices inside our Redux store,  but why  we need slices to keep data separate?
//* => to create logical partitions and these logical partitions are slices so assume that suppose if we want to add cart data into our redux store we will create a separate slice for a cart data, suppose if we want to keep logged in user info inside our redux store so we will create a user slice kind of thing,  like a user slice, we can create a card slice, themes slices for dark theme light theme and maybe theme colours and different type of logos and all that stuff ,theme related, ui related, so we can create a display card or maybe a user cart or a theme card , so whatever you need to create , we will create logical separations and we will make small slices inside our redux store so this is what is a slice ,  initially this cart🛒(0) can be empty , it can be an  empty array but later on as we put data inside it ,so we can just modify data inside the  cart slice ,  so this is the redux slice(see image redux-data-flow.png) now when I click on this add button, how does the data go inside this cart slice?
//*  it's not simple , we can't directly add data to the cart slice, 'redux says that you cannot directly modify your  slice inside the store',so we cannot directly modify your cart slice ,but there is a way we can do that, what is that way?
//* suppose if I click on this add button, then I will have to dispatch an action ,so when you click on this add button it dispatches an action  (see image redux-data-flow.png), what happens after dispatching an action?  then  it calls a function ,  so now first of all when you click on this add button over here it dispatches an action  and then it calls a function and this function modifies the cart, this function  actually modifies the cart slice, we can't directly actually modify this cart(that's why need the steps we just learnt),  so when you click on this add button it dispatches an action that calls a function and this function internally modifies the cart slice inside your redux store, now what is this function actually ?
//* this function is basically known as a reducer  , so we have learned some Jargons first is 'dispatch an action', next there is a reducer function so now if I have to say it again I will say when you click on this add button it dispatches an action which calls a reducer function and this reducer function modifies the cart slice , so basically if I have to repeat it once again ,  when you call when you hit the add button when you press the add button it dispatches an action which calls the reducer function which updates the slice of our Redux store ,And then our slice will be updated, the data will be updated , this item will be added to our slice , we can't directly add it, we have to go through this  path when we are using redux, Why we do all this ? why are we doing why are we making things complicated? actually it is not complicated, it makes our life easier but how we will know later , when we will write code  But for now just learn that when we click on this add button it dispatches an action which calls the reducer function that modifies the slice of our Redux store  and this is the process of writing  the data inside our cart slice ,  so this was how to write data
//*suppose I want to read data fro the store right suppose now I have added this cart item in redux store ,now I want to get this data in the nav bar like this cart🛒(1),  in the nav bar the number of items should change , suppose if we had three items before and I added 1 more item so it should change to cart🛒(4) right .how can I read data from redux store , so what we have seen how to write data using this action dispatch ,function reducer, now we will see how to read data redux store and get over here in the  cart🛒(4), how can we get data from this cart ?
//*for that we use something known as a selector, we use something known as a selector , so what will happen is we will use a selector to read the data from our store and the selector will modify our react component on the UI,  so this is how you read data , so  suppose if you want to read the data here cart🛒(1) component  from the cart slice . In this component in this header component how will you do that? you will use a selector and this selector will basically give you data and there is one more jargon , that is ` subscribing  to the store,when we use selector` , so we say that header component is subscribed to our redux store  and `when I say subscribe the store basically it is in sync with the store right`, `if the data inside my store changes my header component will update automatically`   redux will automatically update the data inside header as soon as my store changes that is why we call this as subscribing to the store so basically our header component over here has subscribed to the store and how do you subscribe? => using a selector, so this is all about redux, if we  understand this in theory writing code is very very easy  , so when you click on this add button it dispatches an action which calls the reducer function which modifies the slice of the store which modifies the slice of the store  and you know this header component is subscribed to this to this store using a selector , so this is how the whole flow works this is how the whole cycle works
//* so basically behind the scenes what is happening this is what I am trying to say when you click on this add button here the data will update but how that data will get update so when you click on this add button we will dispatch an action that will that will call the reducer function that reducer function will update the slice right and because this component is subscribed to the store right using a selector it will automatically update , all this is happening behind the scenes and we have to understand this properly.
//* so the whole process in a single line line looks like :- 1.click(add btn) => 2. dispatches an event =>   3. calls reducer function => 4. make changes on the redux store slice => 5. selector(subscribed with the slice) => 6. updates the Ui.

//* so now to understand everything by writing code let's write down the steps we are gonna follow:-
/*## Redux Toolkit
 - install @redux/toolkit and react-redux
 - build our store 
 - connect our store to app
 - dispatch(action)
 - selector*/

//* so lets first install the libraries by using the command
//* npm i @reduxjs/toolkit and npm i react-redux
//* and these two packages are added in our package.json file as dependencies

//* now let's create our store , so we will create our store in utils folder, lets name our store file appStore.js. and  to create  a store inside it, first we need to import a function from @reduxjs/toolkit named configureStore, as we need it to create the store that why we are importing it from the redux toolkit. and we are gonna create a constant named appstore and it's value will be this function call we just imported configureStore({}), for starting we just put an empty {} inside it. and finally we export it as default.

//* now we need to provide this store to our react application. and to provide it we need to go to our root file so app.js and inside it we need to import something called Provider from react-redux . this Provider is like a component very similar to context Provider we used to provide context but here Provider is used to provide the redux store to the app. we need to provide this store to our react application so it's kind a bridge between react and redux and that's why we are importing it from react-redux.  now our whole root component will go inside this provider component. like this:-
/*    <Provider store={appStore}>
      <UserContext.Provider
      value={{ loggedInUser: userName, greetingMessage: `Hello` }}
    >
      <div className="app ">
        <Header />
        <Outlet />
       
      </div>
    </UserContext.Provider>
  </Provider>*/
//* and mention the store attribute is necessary because here we have to mention our store name so first we need to import appStore from appStore.js and then as the value of store attribute we need to mention it.

//* now the next step is to creating the slices.

//* to create  a cart slice , again inside the utils folder we are gonna make another file named cartSlice.js and inside it we will create the slice . so inside this file we need to first import a function from @reduxjs/toolkit named createSlice()  as it is related with creating the slice in redux  . and now we will create a constant named cartSlice , and its value will the createSlice() function call and now this function takes some configuration to  create the slice . first inside the function we have write a object because we have to give the configuration as key value pairs of the object. now inside the braces first we need mention the name property and it's value will be `cart` as we are making this slice for a cart. the second configuration is initialState .it is a object and inside it we have to mention the initial state of our cart. let keep the initial state - items:[]; an empty array.
//* now the next property we need to mention is `reducers` and it's again an object and inside it we need to write reducer functions corresponding to each action. so what are the actions inside a cart? we can add an item , remove an item , clear the cart etcetera.
/* reducers:{
addItem:(state,action)=>{
  state.items.push(action.payload)
  }; here addItem is an action which mapped to the reducer function  which will modifies the data inside the slice.  so we already learned it in the theory. 

  removeItem(state,action)=>{
    state.items.pop()
    }

  clearCart:(state)=>{
    state.items.length = 0;
    }  
}*/
//*  So the above is the list of reducer functions we need for our cart so the first action is add item and when this action will dispatch Then the reducer function attached with it/mapped to it , will be called and these function get access to the two parameters first one is the state so this is the same state as the initial state but to get access of it inside the function, we need to mention it as the parameter then only we can access it inside the function and the second parameter is the action so depending on this action we will modify our slice so as we can see in the first reducer function that we received these two parameters and then inside the function we have selected the state and inside it we selected the items and as the items property is an empty array so we use the push method to add the item inside there and then inside the push method we pass action.payload. here payload is the item which we will get from the action.

//*The second reducer function is for removing an item the action name is removeItem and And it gets access to the same parameters first one is the state and second one is the action and inside the function we simply use the pop method to remove the last item but in the future we will modify it more because the pop method is not the correct one to use here because pop method is gonna just remove the last item but actually here we need to select the index of the removed item and using that index we have to remove that particular index item

//*And the third reducer function is emptyCart and as the parameter we will receive the state and here we do not need the action because inside the function we are just deleting all of the items of the array that's why we don't need the action though we can still receive it using the parameter.

//* and now we will export the reducers functions and also the actions from from cartSlice (inside cartSlice.js), like below
//*1. exporting actions
/*export const { addItem, removeItem, clearCart } = cartSlice.actions; //* exporting actions after destructuring, and this weird syntax is given by redux, and I'm saying it weird because their is no action property inside cartSlice, instead, inside the reducer object we write all of the action names(like property names) which are pointed towards their reducer functions, but as redux given us this syntax that's why we have to follow it.
//* 2. exporting reducer function 
export default cartSlice.reducer; //* exporting reducers functions
*/
//* so let's understand what is happening behind the scenes,so while we call createSlice() method to create the slice, and assign this function call to the constant named cartSlice,  the function call returns an object in this cartSlice constant. and that object will look like:-
/*
{
  actions: {
    addItem, removeItem, clearItem, clearCart;
  }
  reducer
}
*/
//* and that's why when we export the actions and reducer, we need to do the destructuring like that.

//* and now we need to add this slice into our store( appStore we built for redux store) , and to add the slice to store we first exported the actions and reducer from the cartSlice. and we need import this actions and reducer into our store(appStore), and one more important thing is that, the store also has its own reducer(an object which contains all the reducers of different slices like a big reducer which contains all of the reducers of different slices.) , so now inside the appStore we need to import the reducer and as the the reducer export was a default export like this:-export default cartSlice.reducer , so we can change the name while importing it in the appStore like cartReducer. so let's import it first. then we will add the cartSlice's reducer inside the reducer object of the store. and now our store and the cart slice is connected.like below:-
/*import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});*/

//* and now let's try to read the data from the store, and to read the data remember what we need to do? let's go back to the diagram of redux-data-flow.png. in the diagram we can see that the cart(in our header section of our ui) should be subscribed to the redux store cartSlice through a selector.
//* using the selector we can show how many items inside the cartSlice of the store.
//* the selector we are talking about is actually a hook inside react. and the hook's name is useSelector() hook. and remember hook is just a normal javascript function/method. and this hook helps any part of our Ui (in this case `cart`) to subscribe to the store. so let's go out header.js file because there our cart is located, and there first we are gonna import the useSelector hook from react-redux as a named import as it is like making a bridge between redux store and our app.
//* and we need to use it like this:-
/*
const cartItems = useSelector((store) => { store.cart.items});//* inside this hook we write a callback function where as the parameter we get access to the whole store , and inisde the braces we have write which part/portion of the store we want to subscribe. like here we want the cart to be subscribed with the cart slice and our cartItems constant will get access to the all items inside the cartSlice. and now we just need to use it wherever needed. so now inside our cart element of the header , we will use this cartItems to show the number of items.*/
//* and then we can use the length property on this cartItems to show the number of items like this:-<Link to="/contact">Cart🛒({cartItems.length})</Link>.

//* till now we were adding fake items to the cart , but now it's time to add real items from restaurant menu list. and remember to mutate the state basically add some data on click of the add btn(inside every menu item), we have to dispatch an action on the btn click,that will call the call the mapped reducer function with the action, and finally the reduce function will update the state , and as the cart is in sink with the cart slice so it will be automatically updated.
//* now to dispatch an action on add btn click , we have to go to menuitem.js file because there our add btn exists, on click of this btn we will call a function which will dispatch an action//* now let's name that function handleAddItem(see below the function):-
/*  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };*/
//* the function will be called on add btn click so when onClick event happens, now first to dispatch an action we need another function ,we will get it from a hook named useDispatch, so we need to import it first from react - redux, and then call it and save its returned value inside a constant ,like this:-
//*const dispatch = useDispatch();
//* it basically returns the dispatch function, so that's why we also named the constant 'dispatch', and it is function which we will use to  dispatch an action inside the handlerAddItem(), so inside the handleAddItem function first we will call this function , but we need to pass some arguments while calling this dispatch function, so first of all we need import the action we need , so this handler is for adding the item and that's why we need addItem action, and remember we already created it inside our cartSlice, so lets import it first , now inside the dispatch function call we need to call this addItem action like a function call , and inside it we have to pass an argument and this argument is basically the  menu Item(in technical language it is called the payload,that's why we push action.payload inside the state),for now let's just write `pasta` as argument and test it , if the cart is updating or not.and now we go  to any restaurant's menu page and just click the add button then we will see the cart item numbers are increasing with every click and even we can see the added items in the array if we open the console, and this is happening because the cart is in sink in the cart slice, the cart is subscribed to the cart slice, that's why it's is automatically updating.so let's analyze what's happening behind the scenes.so when we dispatch the action like this: -  dispatch(addItem(`pasta`)); then it creates, an object like: -
/***⁡⁣⁢⁣{
    payload: `pasta`;
    type: "cart/addItem";
}⁡*/
//* and this is the object which goes inside the reducer function as the second parameter action
/*⁡⁣⁢⁣addItem: (state, ​‌‍‌‍𝗮͟𝗰͟𝘁͟𝗶͟𝗼͟𝗻​) => {
      //* the below code will mutate the state
      state.items.push(action.payload);
    }⁡,*/
//* this action is the object returned by the dispatch function , and this object has an payload property which contains the actual data which we want to push,that's why when we push the data we write action.payload. because payLoad property contains the actual data.
/*
 ⁡⁣⁢⁣ const dispatch = useDispatch(); //*Returns the dispatch function from the Redux store.

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };//*called on click of the add btn⁡
*/
//* so for testing we used just pasta but let's pass real data inside the payload like this, onClick={()=>handleAddItem(item)}, and we already got the item as the parameter of MenuItem component and now inside addItem function call we pass this item.
//* and when the user clicks on the cart, we want to show a cart page so lets build it.and also don't forget to add the path of the page in App.js in router configuration.
//* now let's build our cart.js page , so first we built a normal cart page and as we need to display the added cart items, we can reuse our MenuItem component because it is a similar component as we need. so first to read data we useSelector hook, as we want our cart component to be subscribed with the cart slice. and after the getting the data from it we saved it inside a constant named cartItems, and now this cartItems is an array of objects and each object represents a different restaurant. now we have to use this data to pass inside MenuItem component. but MenuItem takes item as prop not the whole ItemList as prop. that why we iterated the array of restaurant objects using map method and each iteration we passed one item from the Itemlist.
//* we also used ternary operator to show the cart items when it is not empty but when it is empty we will display a empty cart message

//* now let's add a empty card btn, so let's first create the btn on ui, and then to make the cart empty on this btn click , we need to attach an handler function with it, and remember to mutate some data in the cart slice of redux store, first we need to dispatch an action, so first import useDispatch hook from react-redux . and now call this hook and saved the returned function into a constant named dispatch  . and now we will call this dispatch function inside our handleCart function, but before that we need to import the clearCart action from cartSlice.and now inside the handler function first we need to call dispatch function and then the clearCart action , we need to call both like this:- dispatch(clearCart().)

//*  we also created a  the handleSearch function in body.js file for adding restaurant searching feature using the keyboard enter btn because user can search using two ways , first way  when the user clicks on the search btn after entering the restaurant name in the input feild and second when the user search through the clicking enter on keyboard and that handler we need to attach on the input element .and to call the handlerSearch callback function on enter key press we need attach a handler on the search input element like this:-onKeyDown={(e) => e.key === "Enter" && handleSearch()}.

//*=> important interview question:- when evr your using the selector make sure you are subscribing to the right portion of the store. because it can decrease your app performance if you don't select the right part of the store. but why?
//*=> because instead of subscribing of only a little portion of the store like this:- const cartItems = useSelector((store) => store.cart.items); if we would subscribe to the whole store like this :-const store = useSelector((store) => store;
//* const cartItems= store.cart.item;
//* it will work but will very less efficient, because as our component is subscribed to the whole store, that's why even any change happens on any other slice which is not related this component, but as we subscribed to the whole store inside this component so react will every time try to update this component also and that is not needed. and eventually when we create a app the store becomes so much heavy as it contains many slices for many portions of the app. and if we subscribe to whole store inside any component , then each time anything changes inside the store even unrelated to the component still the component will be updated. and that's why not subscribing to the right portion of the store can make your app less performant.so always try to subscribe to a small portion of the store which is needed. that's why developer's named the hook useSelector(), as we should use it to get a selected portion of the store.But as we selected only a small portion of the store which is the store.cart.items,That's why this component will be only updated when this small portion gets changed and this component has nothing to do with the whole store and the other slices as we specifically mentioned the small portion we need here.

//* the second big mistake developers make while writing the reducer property of the store , the spelling should be reducer not reducers. because it is one big reducer and this reducer can have multiple small reducers.like this:-
/*const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});*/

//* but when we create a slice, then we create their multiple reducer functions that's wht inside a slice we write the property name 'reducers' because inside it we will write multiple small reducer functions.like this:-
/*const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //*initial state of the cart items is empty array,because at first the cart items will be 0.
  },
  reducers: {
    addItem: (state, action) => {
      //* the below code will mutate the state
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});*/
//* export default cartSlice.reducer;
//* but one more interesting thing is that while exporting it from cartSlice we only write cartSlice.reducer and this because this is big reducer which contains many small reducer functions.

//SoSo let's know about the previous way of using Redux which is also known as Vanilla Redux so we already know that using Vanilla Redux was a bit more complicated than the newer version of Redux Toolkit we are using right now and a major difference is that inside a slice when we are writing a reducer function like add to cart or any other inside that reducer function we are directly modifying the state so as we already know as the first parameter we receive the state and inside the reducer function we modify the state directly using action.payload but the previous version of Redux used to say that you can't modify the state directly instead you have to make a copy of the state by creating another constant and using the spread operator You spread the array inside another array and make a copy of the state array and then you modify that new copied state and then return it. like this:-
/*
reducers: {
  addItem: (state, action) => {
    //* vanilla redux(older) says => DON'T MUTATE STATE,make a copy of the state and then modify that copy then return that like below
    //* const newState = [...state];
    //* newState.items.push(action.payload);
    //* return newState;

    //* redux toolkit(new) says => YOU HAVE TO MUTATE existing STATE (COMPULSORY) or return a new state.
    //* the below code will mutate the state
    state.items.push(action.payload);
  }
}*/
//*BUT THE NEW VERSION OF REDUX KNOWN AS REDUX TOOLKIT SAYS  YOU HAVE TO MUTATE existing STATE (COMPULSORY) or return a new state. AND DON'T NEED TO MAKE THE COPY OF THE STATE.EARLIER RETURNING WAS MANDATORY BUT NOW THERE IS NO NEED OF compulsory RETURNING THE STATE AS WE DIRECTLY MODIFYING IT.But an interesting thing is that even we modify the state directly here but behind the scenes redux is doing all of the things it used to do on the older version but the difference is the develop has no need to do it by themselves redux do it behind the scenes so basically creating a copy of the state and then returning it but Redux abstracted the functionality and doing it behind the scenes and Redux do it using a library called Immer.Immer  is a tiny package that allows you to work with immutable state in a more convenient way.First compare between the older state and the modified state then create a new immutable state variable with the modified data and then return the immutable new state variable to us .

//*So now we can understand that we're not actually mutating the state even in the newer version, behind the scenes immer is doing the same thing like the older ver but but the functionality is abstracted so developers don't need to do it by themselves.if we do it state = [anupam]  it is just modifying the local copy inside the reducer, not the original state, but we want to change the original state, that's why we need to do like this:-state.items.push(action.payload); not this:- state = action.payload .
//* for any testing purpose , if you want to console log you state inside the reducer function the it will work, to  make it work you have to write  properly console.log(current(state)). and remember to import this current function from redux-toolkit as a named import.

//* redux devtools(part 8 from 12th lesson)

//* You know an important advantage of using redux is that redux helps us in debugging a lot . There is something known as Redux Dev tools(browser extension) ,install it, this is a chrome extension it will be available for all the browsers that we use . Once we will install it, you will get access to it in you browser extension list. It will activate once you have a redux app with you. So let's go back to our app , let's go to home page right then click on the redux extension. A pop up will appear which gives you this nice view of the redux store of our app.It helps us so much in debugging .It has so much useful features. An important thing is that redux is used for very large scale applications, when your application grows huge , there are so many components .

//*first of all when should we use redux?=> when your application grows huge there are so many components, managing data between components becomes very tough,  then  there are so many components who are subscribed to so many states ,so many portion of apps and mutating the states from some other components, so that kind of suppose that  there are thousands of components in our app and there are multiple components who are mutating the same state ,so mutating the same portion of the store and there are so many so many components that are subscribed to some portion of your store , so that is where debugging is very tough and that's why Redux gives us very good debugging tools, and we should explore it, this is really a good debugging tool right if I refresh the page .

//* if we refresh our page and see the redux dev tool extension that initially our cart is empty, so as we set the initial state a an empty array.as we add items in the cart , we can see them added in the redux devtools extension, we can see all of the added items  in the state, also in a raw form and chart form. and that makes the data very easy to visualize and debug.

//* in the left, it will basically show you the log of every action you made(like  every item you added), so basically these are the actions which is -- cart/addItem. and we can click on any action and there will be a jump and skip option so using these options we can easily see the ui render when the action happened and we can even skip any action. and there are so many thing that are so much helpful for debugging.So we can simulate the behavior of the user using this.

//* RTK Query:It is one of the important part included inside Redux toolkit so in the previous days for handling asynchronous operations like fetching some data from some api and saving that data inside Redux, the developer had to follow some specific coding pattern using middleware and thong, but in new redux toolkit we don't need to complicate things we can just use this rtk query and it will handle all of the asynchronous operations smoothly.
//*RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.
//*RTK Query is an optional addon included in the Redux Toolkit package, and its functionality is built on top of the other APIs in Redux Toolkit.

const Grocery = lazy(() => import("./components/Groceries.js"));

const AppLayout = () => {
  //* state variable to save user's data coming from api(from lesson 11 to understand context Provider )
  const [userName, setUserName] = useState();
  //make an API call send userName and password while log in and in response we are getting the userName as response from server(simulating the condition with some fake data )
  useEffect(() => {
    //*fake data
    const data = {
      userName: "Anupam Boral",
    };
    //*updating the state
    setUserName(data.userName);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ loggedInUser: userName, greetingMessage: `Hello` }}
      >
        <div className="app ">
          <Header />
          <Outlet />
          {/* <Body /> */}
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: `/groceries`,
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
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
      {
        path: `/cart`,
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
