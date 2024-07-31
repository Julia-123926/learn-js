import Review from "../Review";
import MenuItem from "../MenuItem";
import PropTypes from "prop-types";
import ReviewForm from "../ReviewForm";
import styles from "./styles.module.css";
import classnames from "classnames";
import { useTheme } from "../ThemeContext";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes";
import { selectReviewById } from "../../redux/entities/reviews";

const Restaurant = ({ restaurant }) => {
  const { value: themeValue } = useTheme();

  const { name, menu, reviews } = restaurant;

  const dishes = useSelector((state) =>
    menu.map((dishId) => selectDishById(state, dishId))
  );

  const assessments = useSelector((state) =>
    reviews.map((review) => selectReviewById(state, review))
  );

  return (
    <div
      className={classnames(styles.container, {
        [styles.light]: themeValue === "light",
        [styles.dark]: themeValue === "dark",
      })}
    >
      <h3 className={styles.heading}>{name}</h3>
      <h3 className={styles.subHeading}>Menu</h3>
      <div>
        {dishes.map((item) => (
          <MenuItem key={item.id} name={item.name} />
        ))}
      </div>
      <h3 className={styles.subHeading}>Reviews</h3>
      <div className={styles.reviewContainer}>
        {!!assessments?.length &&
          assessments.map((review) => (
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
