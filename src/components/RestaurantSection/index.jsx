import { useState } from "react";
import { restaurants } from "../../mock";
import Restaurant from "../Restaurant";

const RestaurantSection = () => {
  const [activeRestId, setActiveRestId] = useState(restaurants[0].id);
  const activeRest = restaurants.find((item) => item.id === activeRestId);

  return (
    <div>
      <ul>
        {restaurants.map(({ id, name }) => (
          <li key={id}>
            <button
              onClick={() => setActiveRestId(id)}
              disabled={id === activeRestId}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      {activeRest && <Restaurant restaurant={activeRest} />}
    </div>
  );
};

export default RestaurantSection;
