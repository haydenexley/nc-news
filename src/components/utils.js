import axios from "axios";

const baseUrl = "https://haydens-news.onrender.com/api";

export const getArticles = () => {
  return axios.get(`${baseUrl}/articles`).then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticle = (article_id) => {
  return axios
    .get(`${baseUrl}/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getComments = (article_id) => {
  return axios
    .get(`${baseUrl}/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};
