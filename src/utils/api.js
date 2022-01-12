import axios from "axios";

const gamesApi = axios.create({
  baseURL: "http://kats-games.herokuapp.com/api",
});

export const getReviews = (category_id, order, sortBy) => {
  let path = "/reviews";
  if (category_id && sortBy && order) {
    path += `?category=${category_id}&sort_by=${sortBy}&order=${order}`;
  } else if (category_id && !sortBy && !order) {
    path += `?category=${category_id}`;
  } else if (sortBy && !category_id && !order) {
    path += `?sort_by=${sortBy}`;
  } else if (sortBy && order && !category_id) {
    path += `?sort_by=${sortBy}&order=${order}`;
  } else if (order && !sortBy && !category_id) {
    path += `?order=${order}`;
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

export const postCommentForReview = (review_id, { body, username }) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, {
      username: username,
      body: body,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const patchVotesForReviews = (review_id, votes) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: votes })
    .then((res) => {
      return res.data.review.votes;
    });
};

export const patchVotesForComments = (comment_id, votes) => {
  return gamesApi
    .patch(`/comments/${comment_id}`, { inc_votes: votes })
    .then((res) => {
      return res.data.comment.votes;
    });
};
