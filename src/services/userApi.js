import axiosClient from "./axiosClient";

const userApi = {
  async register(data) {
    const url = `/api/Users/signup`;
    return axiosClient.post(url, data);
  },
  async login(data) {
    const url = `/api/Users/signin`;
    return axiosClient.post(url, data);
  },
  async update(data) {
    const url = `/api/Users/updateProfile`;
    return axiosClient.post(url, data);
  },
  async getInfo() {
    const url = `/api/Users/getProfile`;
    return axiosClient.post(url);
  },
  async facebookLogin(data) {
    const url = "/api/Users/facebooklogin";
    return axiosClient.post(url, data);
  },
  async getProductFavorites(data) {
    const url = "/api/Users/getproductfavorite";
    return axiosClient.get(url, data);
  },
  async likeProduct(id) {
    const url = "/api/Users/unlike?productId=" + id;
    return axiosClient.get(url);
  },
  async unlikeProduct(id) {
    const url = "/api/Users/unlike?productId=" + id;
    return axiosClient.get(url);
  },
};

export default userApi;
