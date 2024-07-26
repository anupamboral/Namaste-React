import { useEffect, useState } from "react";
import { MENU_API_URL } from "./config";
//*from lesson 9
//*  So right now our RestaurantMenu component has multiple responsibilities which are basically fetching the data maintaining its state and displaying the jsx on the ui, But According to the one responsibility principle this restaurant menu component should have only one responsibility which is to basically display the data on the ui so to do that we can abstract or basically take out all of the other functionalities inside a custom hook so right now the other responsibilities are basically how to fetch the data and maintaining the state using the state variable these are other responsibilities the component is handling so we will try to build a hook named useRestaurantMenu(), This book will handle all of these other responsibilities so the data will be fetched and how the state will be maintained when the data comes we just need to pass the parameter resid which is basically the dynamic parameter different for every restaurant so while calling the hook we will just pass this restaurant id and in return this hook will give us the restaurant data directly so we do not need to Do all of the other things inside this restaurant menu component instead our custom hook will handle all of the other responsibilities and directly give us our data so let's build the hook.So the only responsibility of the restaurant menu component is to get the data and display it and the other responsibilities it had which was how to fetch the data is now abstracted into another custom book named Hughes useRestaurantMenu(resId).
//*Hooks are nothing but utility functions / helper functions. and the best place to create hooks id utils folder. and we already  have this folder.
//* Important:-Always try to create a separate file for every  hook.
//* So as every hook is a helper/utility function , so the best place to create them inside utils folder, so lets create the hook to abstract the functionality of fetch the data from the api. now while creating the file for a hook we always start with the word 'use'(in small letters basically using camelCase) , and the file name should be same as the hook name. In this case, the hook name name will be useRestaurantMenu() , so the file name should be  'useRestaurantMenu.js ' . this `use` keyword helps React to understand that this is a hook.
//* while making a hook , first we should think that what's the contract, so contract means what the hook takes as input and what the hook giving as output, here our useRestaurantMenu(resId) takes the resId(restaurant id) as input while calling the function and it will return the resInfo(restaurant information) as output ,so this is the contract of this hook, so it will get the resId and fetch the Data and return the resInfo back to where it is called from. And also export it because we will use it inside RestaurantMenu.js so we need to import it there.
//* Now we know that we will receive the data resId as the parameter and it will return the resInfo after fetching the data and as usual we will use the use effect hook to fetch the data, Like we do in other components and we have to mention the empty dependency array[] as the second argument while calling the use effect hook because we want to call this hook only once in the initial render. And after fetching the data we will get the json . And now we know that we have to return resInfo , And rest info is basically a local variable inside this function so inside this hook so to save the data we just get from the api we will create a state variable named resInfo and its default state will be null And when we get the data we will update the state using setResInfo. And finally it will returned. So as conclusion at first This function will return null and because of that our restaurant menu function will first display the shimmer ui and then the use effect group will be called and it will fetch the data and update the straight variable so because of the change in state the whole component will be rendered so basically the function will be called again and this time it will return the restaurant information which contains the data we received from the api.

//*custom hook to fetch the data of restaurant menu
const useRestaurantMenu = (resId) => {
  //*saving the data inside a local state variable
  const [resInfo, setResInfo] = useState(null);

  //*fetching data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };
  //*returning restaurant information

  return resInfo;
};

export default useRestaurantMenu;
