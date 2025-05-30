import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://skillable-saini.onrender.com/api/",
  withCredentials: true,
});

// Add a request interceptor to include the token in the headers
newRequest.interceptors.request.use(
  (config) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.accessToken) {
      config.headers.Authorization = `Bearer ${currentUser.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default newRequest;
