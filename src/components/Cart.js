import { useSelector } from "../../node_modules/react-redux/dist/react-redux";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center m-4 p4">
      <p className=" text-2xl font-bold">Cart</p>
      <MenuItem items={cartItems} />
    </div>
  );
};

export default Cart;
