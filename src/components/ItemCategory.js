import { useState } from "react";
import MenuItem from "./MenuItem";
const ItemCategory = ({ data }) => {
  console.log(data);

  const [showItems, setShowItems] = useState(false);

  const accordianToggle = () => {
    //*implementing toogle functionality using not`!` operator
    setShowItems(!showItems); //* if showItem's current state is false then because of not operator it will be changed to true and if it is true then it will be changed to false
  };

  return (
    <div className="text-white cursor-pointer ">
      <div
        onClick={accordianToggle}
        className="flex justify-between p-4 text-4xl my-4 shadow-md shadow-slate-400"
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
