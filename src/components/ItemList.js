import { CDN_URL } from "../utils/config.js";
const ItemList = ({ itemsData }) => {
  console.log(itemsData);
  return (
    <div className="">
      {itemsData.map((item) => (
        <div className="shadow-cyan-600 shadow-lg flex justify-between mb-6 ">
          <div className="w-9/12">
            <div className="text-2xl m-2 ">{item.card.info.name}</div>
            <div className="text-xs m-2">{item.card.info.description}</div>
          </div>
          <div className="w-3/12 relative">
            <img
              className="w-36 mx-auto m-2 rounded-lg  "
              src={CDN_URL + item.card.info.imageId}
            ></img>
            <button className="absolute bg-cyan-950 text-gray-200 w-16 h-12 right-8 top-6 border-x-indigo-50 z-10 rounded-2xl text-4xl">
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
