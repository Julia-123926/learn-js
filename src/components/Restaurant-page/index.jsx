import { useEffect } from "react";
import { useParams, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const selectRestaurantById = (state, id) => state.restaurants.entities[id];

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (restaurant) {
      navigate("menu", { replace: true });
    }
  }, [restaurant, navigate]);

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <nav>
        <NavLink to="menu">Menu</NavLink>{" "}
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default RestaurantPage;
