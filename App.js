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
