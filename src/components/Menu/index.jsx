import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes";
import { selectRestaurantById } from "../../redux/entities/restaurants";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Menu = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { menu } = restaurant;
  const dishes = useSelector((state) =>
    menu.map((dishId) => selectDishById(state, dishId))
  );

  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <Link to={`/dish/${dish.id}`} state={{ dish, restaurantId }}>
            {dish.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
