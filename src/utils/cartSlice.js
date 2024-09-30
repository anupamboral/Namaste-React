import { createSlice } from "@reduxjs/toolkit"; //*from lesson 12

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [`pizza`, `burger`], //*initial state of the cart items is empty array,because at first the cart items will be 0.
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
});
export const { addItem, removeItem, clearCart } = cartSlice.actions; //* exporting actions after destructuring, and this weird syntax is given by redux, and I'm saying it weird because their is no action property inside cartSlice, instead, inside the reducer object we write all of the action names(like property names) which are pointed towards their reducer functions, but as redux given us this syntax that's why we have to follow it.
export default cartSlice.reducer; //* exporting reducers functions

//* so let's understand what is happening behind the scenes, so while we call createSlice() method to create the slice, and assign this function call to the constant named cartSlice, that's from the function call returns an object in this cartSlice constant. and that object will look like:-
/*
{
  actions: {
    addItem, removeItem, clearItem, clearCart;
  }
  reducers
}
*/
//* and that's why when we export the actions and reducer, we need to do the destructuring like that.

//* and now we need to add this slice into our store( appStore we built for redux store) , and to add the slice to store we first exported the actions and reducer from the cartSlice. and we need import this actions and reducer into our store(appStore), and one more important thing is that, the store also has its own reducer(an object which contains all the reducers of different slices like a big reducer which contains all of the reducers of different slices.) , so now inside the appStore we need to import the reducer and as the the reducer export was a default export like this:-export default cartSlice.reducer , so we can change the name while importing it in the appStore like cartReducer. so let's import it first. then we will add the cartSlice's reducer inside the reducer object of the store. and now our store and the cart slice is connected.
