import { getReviews } from "../utils/api";
import { useEffect, useState } from "react";
import ReviewCards from "./ReviewCards";
import { useParams } from "react-router";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { category_id } = useParams();

  useEffect(() => {
    getReviews(category_id).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category_id]);

  return (
    <>
      <>{!category_id ? <h2>Review List </h2> : <h2>{category_id}</h2>}</>
      <ReviewCards reviews={reviews} />
    </>
  );
};

export default Reviews;
