import axios from "axios";

const gamesApi = axios.create({
  baseURL: "http://kats-games.herokuapp.com/api",
});

export const getReviews = (category_id) => {
  let path = "/reviews";
  if (category_id) {
    path += `?category=${category_id}`;
  }
  return gamesApi.get(path).then((res) => {
    return res.data.reviews;
  });
};

export const getCategories = (category_id) => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getIndividualReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getCommentsForReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postCommentForReview = (review_id, body, username) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, {
      username: username,
      body: body,
    })
    .then((res) => {
      return res.data.comments;
    });
};
