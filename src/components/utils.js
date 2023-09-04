import axios from "axios";

const baseUrl = "https://haydens-news.onrender.com/api";

export const getArticles = () => {
  return axios.get(`${baseUrl}/articles`).then(({ data: { articles } }) => {
    return articles;
  });
};
