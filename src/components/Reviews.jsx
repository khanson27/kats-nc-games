import { getReviews } from "../utils/api";
import { useEffect, useState } from "react";
import ReviewCards from "./ReviewCards";
import { useParams } from "react-router";
import SortingButton from "./SortingButton";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("DESC");
  const [selectedSort, setSelectedSort] = useState("created_at");
  const { category } = useParams();

  useEffect(() => {
    getReviews(category, selectedOrder, selectedSort).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category, selectedOrder, selectedSort]);
  console.log(selectedOrder);

  return (
    <>
      <br></br>
      <SortingButton
        setSelectedOrder={setSelectedOrder}
        setSelectedSort={setSelectedSort}
        category={category}
        selectedOrder={selectedOrder}
        selectedSort={selectedSort}
      />
      <>{!category ? <h2>Review List </h2> : <h2>{category}</h2>}</>
      <ReviewCards reviews={reviews} />
    </>
  );
};

export default Reviews;
