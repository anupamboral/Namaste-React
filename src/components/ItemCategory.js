import { useState } from "react";
import ItemList from "./ItemList";
const ItemCategory = ({ data }) => {
  console.log(data);

  const [showItems, setShowItems] = useState(false);

  const accordianToggle = () => {
    //*implementing toogle functionality using not`!` operator
    setShowItems(!showItems); //* if showItem's current state is false then because of not operator it will be changed to true and if it is true then it will be changed to false
  };

  return (
    <div className=" ">
      <div className="flex justify-between p-4 text-4xl my-4 shadow-md shadow-slate-400">
        <div className="">{data.card.card.title}</div>
        <button onClick={accordianToggle}>🔽</button>
      </div>
      <div>
        {showItems && (
          <ItemList
            key={data.card.card.title}
            itemsData={data.card.card.itemCards}
          />
        )}
      </div>
    </div>
  );
};
export default ItemCategory;
