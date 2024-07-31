import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants";
import { useParams } from "react-router-dom";
import { selectReviewById } from "../../redux/entities/reviews";
import Review from "../Review";
const Reviews = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { reviews } = restaurant;

  const assessments = useSelector((state) =>
    reviews.map((review) => selectReviewById(state, review))
  );

  return (
    <div>
      {!!assessments?.length &&
        assessments.map((review) => (
          <Review key={review.id} text={review.text} />
        ))}
    </div>
  );
};

export default Reviews;
