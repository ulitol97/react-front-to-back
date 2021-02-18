import axios from "axios";

export function setDefaultHeaders() {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
}

function setAuthToken() {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else delete axios.defaults.headers.common["x-auth-token"];
}

export default setAuthToken;
