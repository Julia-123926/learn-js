import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { selectRestaurantById } from "../../redux/entities/restaurants";
import { Outlet } from "react-router-dom";

const RestaurantsPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <nav>
        <NavLink to="menu">Menu</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet context={{ restaurantId }} />
    </div>
  );
};

export default RestaurantsPage;
