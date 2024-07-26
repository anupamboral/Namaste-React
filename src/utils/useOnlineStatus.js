import { useEffect, useState } from "react";
//*from lesson 9
//* creating another custom hook to check the online status(internet on/off) of the user:InIn other chatting apps we have seen that when a user is online then a green dot gets shown to tell that he is active so he is Internet connexion i and and when he goes offline then it turns red so it means that his connexion is lost or he turned off the Internet so now we will create a feature like this by building another custom hook to make our understanding of custom hooks better .We already know that we have to create this book inside the util folder and we will name the file useOnlineStatus.js and also the hook name will be same so useOnlineStatus(), And to build this hook first we have to think about the contract so what this function will receive as input and what it will give in return as output so in case of this hook we do not need anything as input from where we will call this hook so there is no input required because using some event listeners provided by window object which browser gives us we can check if the user is online or not. And in return we will return a boolean value so if the user is active we will return true and if he is not active then we will return false and to know the event name we are going to use we can Google online status event listener and we will get the necessary event listener name so let us build the hook.
//*but how many times we need to add the event listener to browser?
//*:-- only once . but how we can add our event listener once? and we can do that using useEffect hook by mentioning the empty dependency array.And the event listeners job is to keep track when the user is online and when the user is offline and keep returning that status to us. so the event listener is window.addEventlistener(`online`,()=>{}),and window.addEventlistener(`offline`,()=>{}).
//* And whenever the status changes we have to return the Boolean value and to save that Boolean value so basically whenever the offline online status changes we can save that status somewhere we will create a state variable and whenever the status will change according to the event listener we will update this state variable and we will name this state variable online status and we will also return the state variable because it is the output of this hook.
//*default value of the state variable is true because when user will open the page we can assume he will be online.

//* And now we can use this custom hook anywhere in our app to display the status so first we will import this hook in our body component and before returning the shimmer ui we will just Write a if else statement ,We have to write it above the simmer ui condition because if it is true then the return will not happen and the below code will get executed to return the shimmer ui or actual data) : -
// if (OnlineStatus === false) return <h1>You are offline. Please cheack your internet connection</h1>
//*So whenever the user goes offline this message will be displayed in our body component and we can also test that out by stimulating offline condition using our network tab in the developer Console of the browser.

//* We know that when we go to  Other pages then our body component will not be visible but the header component will be visible so let us add another item on the navigation bar which will display the online status so it will become green when the user is online and it will display a red circle when the user gets offline so first lets import this hook on our header component.And now inside the header component first we have to create a constant variable named online status and as its value we will call our useOnlineStatus hook which will return the status after checking the browser Internet connection. And then inside the navigation bar we have to add another list item like this:-
//* <li>Online Status:{onlineStatus ? `🟢` :`🔴`}</li>

//*So here we used the ternary operator so if its value is true then it will show the green sign which means active Internet connection and if the user gets offline so his Internet connection is lost then it will show the red colour dot which means that his Internet connection is lost.
const useOnlineStatus = () => {
  //*local state variable to keep track of the status returned by the event listener.
  const [onlineStatus, setOnlineStatus] = useState(true); //* default value is true because when user will open the page we can assume he will be online.
  //* check if online
  useEffect(() => {
    window.addEventListener(`offline`, () => {
      setOnlineStatus(false);
    });
    window.addEventListener(`online`, () => {
      setOnlineStatus(true);
    });
  }, []); //*Here we used use effect book because we only want to add the event listener once to the browser and after just adding once it will keep track of the status and return whenever it will change.
  //*Boolean value
  return onlineStatus;
};
export default useOnlineStatus;
