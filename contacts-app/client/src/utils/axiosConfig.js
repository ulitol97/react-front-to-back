import axios from "axios";

// Conditions under which intercept the request and place the auth token (if available)
const protectedRoutes = [
  (req) => {
    return req.method === "get" && req.url.includes("auth");
  },
  (req) => {
    return req.url.includes("contacts");
  },
];

export function setDefaultHeaders() {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
}

export function setAuthInterceptor() {
  axios.interceptors.request.use(
    (request) => {
      for (const condition of protectedRoutes) {
        if (condition(request)) {
          const token = localStorage.getItem("token");
          if (token) request.headers["x-auth-token"] = token;
          return request;
        }
      }
      return request;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
}