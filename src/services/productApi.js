import axiosClient from "./axiosClient";

const productApi = {
  async getAll(data) {
    const url = `/api/Product`;
    return axiosClient.get(url,data);
  },
  // async login(data){
  //   const url = `/api/Users/signin`
  //   return axiosClient.post(url,data)
  // },
  // async update(data){
  //   const url = `/api/Users/updateProfile`
  //   return axiosClient.post(url,data)
  // },
  // async getInfo(){
  //   const  url = `/api/Users/getProfile`
  //   return axiosClient.post(url)
  // },
  // async facebookLogin(data) {
  //   const url = "/api/Users/facebooklogin"
  //   return axiosClient.post(url,data)
  // }
};

export default productApi;
