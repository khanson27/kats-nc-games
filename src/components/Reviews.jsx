import { getReviews } from "../utils/api";
import { useEffect, useState } from "react";
import ReviewCards from "./ReviewCards";
import { useParams } from "react-router";
import SortingButton from "./SortingButton";
import ErrorPage from "./ErrorPage";
import LoadingIcon from "./LoadingIcon";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("DESC");
  const [selectedSort, setSelectedSort] = useState("created_at");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    getReviews(category, selectedOrder, selectedSort)
      .then((reviewsFromApi) => {
        setIsLoading(true);
        setReviews(reviewsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [category, selectedOrder, selectedSort]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      <br></br>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <>
          <SortingButton
            setSelectedOrder={setSelectedOrder}
            setSelectedSort={setSelectedSort}
            category={category}
            selectedOrder={selectedOrder}
            selectedSort={selectedSort}
          />
          {!category ? <h2>Review List </h2> : <h2>{category}</h2>}
          <ReviewCards reviews={reviews} />
        </>
      )}
    </>
  );
};

export default Reviews;
