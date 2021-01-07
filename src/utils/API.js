import axios from "axios";


export default {
  getWorkouts: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
