import axios from "axios";
// import { ErrorPayload } from "vite/types/hmrPayload";

const axiosClient = axios.create({
  baseURL: "https://shop.cyberlearn.vn",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (res) => {
    return res.data;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        // localStorage.removeItem("token");

        // localStorage.clear()
        // login
        try {
          //   const rs = await refreshToken();
          //   const { accessToken } = rs.data;
          //   window.localStorage.setItem("accessToken", accessToken);
          //   instance.defaults.headers.common["x-access-token"] = accessToken;

          return axiosClient(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }

          return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);

export default axiosClient;
