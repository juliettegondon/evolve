import axios from "axios";

export default {
  getQuote: function() {
 //   return axios.get("https://type.fit/api/quotes");
    return axios.get("https://zenquotes.io/api/random");
  },

    // Saves a week of Health information to the database
    saveHealth: function(healthData) {
      return axios.post("/api/health", healthData);
    }

  
};
