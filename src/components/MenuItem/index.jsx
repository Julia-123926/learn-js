import { useAuthorize } from "../UserContext";
import RestaurantCartSection from "../RestaurantCartSection";
import { useLocation, Link } from "react-router-dom";

const MenuItem = () => {
  const location = useLocation();
  const { dish, restaurantId } = location.state;
  const { value: authStatus } = useAuthorize();

  return (
    <div>
      {dish.name}{" "}
      {authStatus === "signOut" && (
        <div>
          <RestaurantCartSection id={dish.name} />
        </div>
      )}
      <Link to={`/restaurants/${restaurantId}/menu`}>
        <span>Back</span>
      </Link>
    </div>
  );
};

export default MenuItem;
