import { selectCartItems } from "../../redux/ui/cart";
import { useSelector } from "react-redux";
import { useAuthorize } from "../UserContext";

const Cart = () => {
  const { value: authStatus } = useAuthorize();
  const items = useSelector(selectCartItems);
  return (
    <>
      {authStatus === "signOut" && (
        <div>
          {items.length ? (
            <ul>
              {items.map(({ itemId, amount }) => (
                <li key={itemId}>
                  {itemId} - {amount}
                </li>
              ))}
            </ul>
          ) : (
            "empty cart"
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
