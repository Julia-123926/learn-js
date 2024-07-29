import { useState } from "react";
import Restaurant from "../Restaurant";
import { useSelector } from "react-redux";
import {
  selectRestaurantsById,
  selectRestaurantById,
} from "../../redux/entities/restaurants";

const RestaurantSection = () => {
  const restaurantIds = useSelector(selectRestaurantsById);

  const restaurants = useSelector((state) =>
    restaurantIds.map((id) => selectRestaurantById(state, id))
  );

  const [activeRestId, setActiveRestId] = useState(
    restaurantIds.length ? restaurantIds[0] : null
  );

  const activeRest = useSelector((state) =>
    activeRestId ? selectRestaurantById(state, activeRestId) : null
  );

  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => {
          if (!restaurant) return null;
          const { id, name } = restaurant;

          return (
            <li key={id}>
              <button
                onClick={() => setActiveRestId(id)}
                disabled={id === activeRestId}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      {activeRest && <Restaurant restaurant={activeRest} />}
    </div>
  );
};

export default RestaurantSection;
