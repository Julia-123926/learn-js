import { useSelector } from "react-redux";
import {
  selectRestaurantsById,
  selectRestaurantById,
} from "../../redux/entities/restaurants";

import { NavLink } from "react-router-dom";

const RestaurantList = () => {
  const restaurantIds = useSelector(selectRestaurantsById);
  const restaurants = useSelector((state) =>
    restaurantIds.map((id) => selectRestaurantById(state, id))
  );
  return (
    <ul>
      {restaurants.map((restaurant) => {
        if (!restaurant) return null;
        const { id, name } = restaurant;
        return (
          <li key={id}>
            <NavLink to={`/restaurants/${id}`}>{name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default RestaurantList;
