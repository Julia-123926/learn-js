import Review from "../Review";
import MenuItem from "../MenuItem";
import PropTypes from "prop-types";
import ReviewForm from "../ReviewForm";
import "./styles.modules.css";

const Restaurant = ({ restaurant }) => {
  if (!restaurant.name) {
    return null;
  }
  return (
    <div className="container">
      <h3 className="heading">{restaurant.name}</h3>
      <h3 className="subHeading">Menu</h3>
      <div>
        {restaurant.menu.map((item) => (
          <MenuItem key={item.id} name={item.name} />
        ))}
      </div>
      <h3 className="subHeading">Reviews</h3>
      <div className="reviewContainer">
        {!!restaurant.reviews?.length &&
          restaurant.reviews.map((review) => (
            <Review key={review.id} text={review.text} />
          ))}
      </div>
      <ReviewForm />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Restaurant;
