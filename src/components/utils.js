import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://haydens-news.onrender.com/api/",
});

export const getArticles = (topic) => {
  if (topic === "All") topic = "";
  return apiClient
    .get(`/articles?topic=${topic}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticle = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getComments = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getUsers = () => {
  return apiClient.get("/users").then(({ data: { users } }) => {
    return users;
  });
};

export const patchVotes = (article_id, inc_votes) => {
  return apiClient
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((data) => {
      return data;
    });
};

export const postComment = (article_id, body, username) => {
  return apiClient
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const getTopics = () => {
  return apiClient.get(`/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};
