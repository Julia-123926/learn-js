import Review from "../Review";
import MenuItem from "../MenuItem";
import PropTypes from "prop-types";
import ReviewForm from "../ReviewForm";
import styles from "./styles.module.css";
import classnames from "classnames";
import { useTheme } from "../ThemeContext";

const Restaurant = ({ restaurant }) => {
  const { value: themeValue } = useTheme();
  if (!restaurant.name) {
    return null;
  }
  return (
    <div
      className={classnames(styles.container, {
        [styles.light]: themeValue === "light",
        [styles.dark]: themeValue === "dark",
      })}
    >
      <h3 className={styles.heading}>{restaurant.name}</h3>
      <h3 className={styles.subHeading}>Menu</h3>
      <div>
        {restaurant.menu.map((item) => (
          <MenuItem key={item.id} name={item.name} />
        ))}
      </div>
      <h3 className={styles.subHeading}>Reviews</h3>
      <div className={styles.reviewContainer}>
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
