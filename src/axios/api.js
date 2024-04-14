import axios from "axios";

export default axios.create({
  baseURL: "http://176.99.12.22:8001",
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Basic " + localStorage.token ?? "",
    // "x-authorization-entity": localStorage.token ? "session" : "",
  },
});
