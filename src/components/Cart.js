import {
  useDispatch,
  useSelector,
} from "../../node_modules/react-redux/dist/react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleEmptyCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center  bg-starry min-h-dvh text-white ">
      <div className="max-w-6xl px-4 mx-auto text-left  ">
        <p className=" text-3xl font-extrabold underline bg-starry text-center p-4  ">
          Your meal list
        </p>

        <div className="text-white   cursor-pointer p-4">
          {/* below condition is written to show the cart items when it is not empty but when it is empty we will display a empty cart message  */}
          {cartItems.length > 0 ? (
            <div className="text-right pr-6">
              <button
                className="empty-cart-btn text-xl font-bold m-2 p-2 list-none cursor-pointer bg-black border-cyan-600  border-2 border-[solid]  max-w-[15rem] [transition:all_500ms] shadow-cyan-600 shadow-lg  rounded-lg "
                onClick={handleEmptyCart}
              >
                Empty cart
              </button>

              {cartItems.map((item) => (
                <div>
                  {" "}
                  <MenuItem key={item.card.info.id} item={item} />
                </div>
              ))}
            </div>
          ) : (
            <p className=" text-2xl font-bold bg-starry  p-4">
              Your cart is empty! Add your delicious meal and get discount
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
