import { CDN_URL } from "../utils/config.js";
const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <div className="">
      <div className="shadow-cyan-600 shadow-lg flex bg-[url('/src/imgs/background2.png')] justify-between mb-6 ">
        <div className="w-9/12">
          <div className="text-2xl md:text-3xl m-2 font-bold ">
            {item.card.info.name}
          </div>
          <div className="text-base font-bold m-2">
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
          <button className="absolute bg-cyan-950 text-white w-16 h-12 right-2 bottom-6 border-x-indigo-50 z-10 rounded-2xl shadow-lg shadow-cyan-700 text-4xl hover:scale-105 transition-all">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
