import axios from "axios";


export default {
  getQuote: function() {
    return axios.get("https://type.fit/api/quotes");
  }
}