import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/config.js";
import { addItem } from "../utils/cartSlice.js";
const MenuItem = ({ item }) => {
  console.log(item);
  //*from lesson 12
  //* till now we were adding fake items to the cart , but now it's time to add real items from restaurant menu list. and remember to mutate the state basically add some data on click of the add btn(inside every menu item card), we have to dispatch an action on the btn click,that will call  the mapped reducer function with the dispatched action, and finally the reduce function will update the state , and as the cart is in sink with the cart slice so it will be automatically updated.
  //* now to dispatch an action on add btn click , we have to go to menuitem.js file because there our add btn exists, on click of this btn we will call a function which will dispatch an action
  //* now let's name that function handleAddItem(see below the function), the function will be called on add btn click, now first to dispatch a action we need another function ,we will get it from a hook named useDispatcher, so we need to import it first from react-redux, and then call it and save its returned value inside a constant, it basically returns the dispatch function, so that's why we also named the constant dispatch, and it is function which we will use to inside dispatch a action inside the handlerAddItem(), so inside the handleAddItem function first we will call this function , but we need to pass some arguments while calling this dispatch function, so first of all we need import the action we need , so this handler is for adding the item and that's why we need addItem action , and remember we already created it inside our cartSlice, so lets import it first , now inside the dispatch function call we need to call this addItem action like a function call , and inside it we have to pass an argument and this argument is basically the  menu Item,for now let's just write `pasta` as argument and test it , if the cart is updating or not.and now we go to to any restaurant's menu page and just click the add button then we will see the cart item numbers are increasing with every click and even we can see the added items in the rray if we open the console, and this is happeniung because the cart is in sink in the cart slice the cart is subscribed to the cart slice, that's why it's is automatically updating. so let's analyse what's happening behind the scenes.so when we dispatch the action like this:-  dispatch(addItem(`pasta`)); then it creates, an object like:-
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
  //* so for testing we used just pasta but let's pass real data inside the payload like this, onClick={()=>handleAddItem(item)}, and then we get it as a parameter and inside addItem action call we pass this item.

  const dispatch = useDispatch(); //*Returns the dispatch function from the Redux store.
  //* handler function for dispatching action to add the item in redux store cart slice on click of the add button
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="">
      <div className="shadow-cyan-600 shadow-lg flex bg-starry justify-between mb-6 ">
        <div className="w-9/12">
          <div className="text-2xl md:text-3xl m-2 font-bold text-left">
            {item.card.info.name}
          </div>
          <div className="text-base font-bold m-2 text-left">
            {item.card.info.description}
          </div>
          <div className="text-3xl font-bold m-2">
            ₹{" "}
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </div>
        </div>
        <div className="w-3/12 relative">
          <img
            className="w-40 mx-auto m-2 rounded-lg  "
            src={CDN_URL + item.card.info.imageId}
          ></img>
          <button
            className="absolute bg-cyan-950 text-white w-16 h-12 right-2 bottom-6 border-x-indigo-50 z-10 rounded-2xl shadow-lg shadow-cyan-700 text-4xl hover:scale-105 transition-all"
            onClick={() => handleAddItem(item)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
