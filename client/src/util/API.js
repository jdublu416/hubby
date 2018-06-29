import axios from "axios";

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const weatherApiKey = "&appid=bd0d3906d4a9c29f579ad1a5dd40d33c";

const weatherQuery = "Richmond,US";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  weatherSearch: function () {
    return axios.get(weatherURL + weatherQuery + weatherApiKey);
  },
  getArticles: function () {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticlesById: function (id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  }
};
