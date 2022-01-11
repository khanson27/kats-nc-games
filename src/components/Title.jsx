import { getReviews } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Title = () => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const { category_id } = useParams();

  // useEffect(() => {
  //   setCategoryTitle(category_id);
  // });
  return (
    <>{!categoryTitle ? <h2>Review List </h2> : <h2>{categoryTitle}</h2>}</>
  );
};
//need to fix as category id is always undefined, maybe need to call get reviews in order to get params?
export default Title;
