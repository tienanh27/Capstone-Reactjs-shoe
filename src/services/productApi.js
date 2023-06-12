import axiosClient from "./axiosClient";

const productApi = {
  async getAll() {
    const url = `/api/Product`;
    return axiosClient.get(url);
  },
  async getProductById(id) {
    const url = `/api/Product/getbyid?id=` + id;
    return axiosClient.get(url);
  },
};

export default productApi;
