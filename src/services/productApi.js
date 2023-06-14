import axiosClient from "./axiosClient";

const productApi = {
  async getAll(keyword) {
    const url = `/api/Product${keyword ? "?keyword=" + keyword : ""}`;
    return axiosClient.get(url);
  },
  async getProductById(id) {
    const url = `/api/Product/getbyid?id=` + id;
    return axiosClient.get(url);
  },
  async getAllCategory() {
    const url = `/api/Product/getAllCategory`;
    return axiosClient.get(url);
  },
  async getProductById(id) {
    const url = `/api/Product/getbyid?id=` + id;
    return axiosClient.get(url);
  },
};

export default productApi;
