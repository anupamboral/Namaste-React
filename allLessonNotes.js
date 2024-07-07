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
