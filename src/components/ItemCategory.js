import { useState } from "react";
import MenuItem from "./MenuItem";
//* Controlled and uncontrolled components and lifting the state up
//* So right now each of the item category has its own state inside them so every item category component has a show item state variable inside it and we want to implement a feature that if we click on one category then it will be expanded and all of the other categories should be collapsed but as every component of category has its own state that's why it is not possible to do and the solution of this problem is that we shift the state variable show items to its parent which is restaurant menu so basically we want to control this item category child component from its parent component restaurant menu that means this child component will not have the show items state variable instead it will receive show item value as a probe from the parent restaurant menu so lets lift the state up.
//* From this example we can also understand the concept of controlled and uncontrolled components so previously when item category child component has its own state at that time it was an uncontrolled component because its parent component was not controlling its state but when we are lifting the state up and its parent is controlling its state that means we are transferring the control to the parent so now the parent is controlling its child components,That's why all of the child components will become controlled components because they are being controlled by the parent restaurant menu now.

//* Now first to all to lift up the state,We commented out the local state variable and then went to restaurant menu component and inside that where we are mapping all of the item category components using map method there we have created a new prop named showItems,Because we want to pass show items from the parent restaurant card component as we have commented out the state variable here and first we will taste it with true and if we go to the ui then we will see that all of the components itemCategory are visible because we set it true for all itemCategory components We want to control it depending on the index Only using the index it is possible to track which itemCategory is closing and opening so that's why when we are using the map method inside that map methods callback function we have to mention the second parameter which is index,And now the prop we made Named Show items its value will be dependent on the index So first we will create another state variable where we will keep track of the index and the state variables name will be showIndex,And the probe set item's value will be :-showItems={index === showIndex ? true : false};So the first index is coming from the map method and the second one is the state variable we created and the condition is basically saying that if the components index is equal to our state variable then return true either return false and we will keep the state variables default value to zero as we want to keep the first itemCategory Expanded by default but now we want that this show index state variable which is present in the parent component its value should be changed when the user clicks on any of the item category so if he clicks on the second item card then That item category index should be passed inside this state variable so basically change the value of the state variable which will make that card open but to do that as the index will be accessible inside the child because it is only possible to know which category is being clicked inside that category only and from that we can get index but to do that the main problem is we need to control the state variable from the child component so basically we need to pass the control of the parent to the child component which is directly not possible and it is only possible to pass the control of the child to the parent but passing the control from the parent to the child is not possible so how can we do that so as we cannot do it directly we have to do it indirectly so we will create another prop which will be passed inside all item cards like this:- setShowIndex={() => setShowIndex(index)} ,and See closely that we have not called setShowIndex(index) While passing it as the probe instead we passed it inside a callback function and we passed it with the index so that means while mapping all of the item cards we'll get this probe with their own index number and as we have not called the setShowIndex(index) function,Instead passed it inside a callback function that means when we will call it inside the child then only the insider function will get executed So basically setShowIndex(index) Is passed inside the child component but it is not called But it is passed with the index of that component and it will be only called inside the child if we call it there inside the child,So now we have to receive this probe also inside the child and then inside the toggle function we made inside our child component there we just need to call this set show index function,So the feature is now almost complete,Basically at the first the first item category will keep expanded and then when we will click on some other category then the other categories should be collapsed so only one should be opened at a time but one more bug is that what if we want to close or collapse that only one opened category so if only one category is opened and we also want to collapse that and don't want to expand any other category then how is that possible so basically the toggle feature we implemented back how can we do that now so to do that the solution is very similar to what we just did so we just need to create another prop and pass it which will look like this :collapseItem={() => setShowIndex(false)} ;In this probe we are setting Show index value to false,But again we're not directly calling it we're just passing it inside a callback function and we'll call it inside the child component so again we need to receive it and now inside the accordion toggle function inside the child component we just need to use the ternary operator and write the condition that if it is already opened so if any category is already opened then call these collapse item function and if it is not open then call sets show index function which will expand that category like this:-    showItems ? collapseItem() : setShowIndex(); .
const ItemCategory = ({ data, showItems, setShowIndex, collapseItem }) => {
  console.log(data);

  // const [showItems, setShowItems] = useState(false);//*commented out when lifting the state up to the it's parent RestaurantMenu for building the feature when we click on any category then all other will collapse.see above notes about it.

  const accordianToggle = () => {
    /* commented out when lifting the state up
    //*implementing toogle functionality using not`!` operator
    setShowItems(!showItems); //* if showItem's current state is false then because of not operator it will be changed to true and if it is true then it will be changed to false
    */

    showItems ? collapseItem() : setShowIndex();
  };

  return (
    <div className="text-white bg-starry  cursor-pointer ">
      <div
        onClick={accordianToggle}
        className="flex justify-between p-4 text-3xl md:text-4xl my-4 shadow-md shadow-slate-400"
      >
        <div className="font-bold">{data.card.card.title}</div>
        <span>🔽</span>
      </div>
      <div>
        {showItems
          ? data.card.card.itemCards.map((item) => (
              <MenuItem key={item.card.info.id} item={item} />
            ))
          : ``}
      </div>
    </div>
  );
};
export default ItemCategory;
