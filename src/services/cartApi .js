import axiosClient from "./axiosClient";

const cartApi = {
  async order(data) {
    const url = `/api/Users/order`;
    return axiosClient.post(url, data);
  },
};

export default cartApi;
