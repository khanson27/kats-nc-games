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
    setIsLoading(true);
    getReviews(category, selectedOrder, selectedSort)
      .then((reviewsFromApi) => {
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
          {!category ? (
            <h2>Review List </h2>
          ) : (
            <h2>
              {category.includes("-") ? category.replace(/-/g, " ") : category}
            </h2>
          )}
          <SortingButton
            setSelectedOrder={setSelectedOrder}
            setSelectedSort={setSelectedSort}
            category={category}
            selectedOrder={selectedOrder}
            selectedSort={selectedSort}
          />

          <ReviewCards reviews={reviews} />
        </>
      )}
    </>
  );
};

export default Reviews;
