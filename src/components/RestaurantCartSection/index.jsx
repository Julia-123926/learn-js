import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  selectCartItemById,
  removeCartItem,
} from "../../redux/ui/cart";
import Counter from "../Counter";

const RestaurantCartSection = ({ id }) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => selectCartItemById(state, id));
  const addItem = () => {
    dispatch(addCartItem(id));
  };

  const removeItem = () => {
    dispatch(removeCartItem(id));
  };
  return (
    <div>
      <Counter value={amount} increment={addItem} decrement={removeItem} />
    </div>
  );
};

export default RestaurantCartSection;
