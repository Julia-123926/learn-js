import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const RestaurantLink = ({ id }) => {
  const { name } = useSelector((state) => selectRestaurantById(state, id));

  if (!name) return null;
  return (
    <div>
      <NavLink
        className={({ isActive }) => isActive && styles.activeLink}
        to={`/restaurants/${id}`}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default RestaurantLink;
