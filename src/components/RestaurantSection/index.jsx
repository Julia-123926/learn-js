import RestaurantList from "../RestaurantList";
import { Outlet } from "react-router-dom";

const RestaurantSection = () => {
  return (
    <div>
      <RestaurantList />
      <Outlet />
    </div>
  );
};

export default RestaurantSection;
