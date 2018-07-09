import axios from "axios";

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";

const weatherApiKey = "&appid=bd0d3906d4a9c29f579ad1a5dd40d33c";

const weatherQuery = "Richmond,US";


export default {
  weatherSearch: function () {
    return axios.get(weatherURL + weatherQuery + weatherApiKey);
  },
  getUser: function () {
    return axios.get("/api/user");
  },
  // Gets the article with the given id
  getUserById: function (id) {
    return axios.get("/api/user/" + id);
  },
  
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves user to the database
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  }
};
