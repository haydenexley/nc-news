import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://haydens-news.onrender.com/api/",
});

export const getArticles = () => {
  return apiClient.get(`/articles`).then(({ data: { articles } }) => {
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
