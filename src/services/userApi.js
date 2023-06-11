import axiosClient from "./axiosClient";

const userApi = {
  async register(data) {
    const url = `/api/Users/signup`;
    return axiosClient.post(url,data);
  },
  async login(data){
    const url = `/api/Users/signin`
    return axiosClient.post(url,data)
  },
  async update(data){
    const url = `/api/Users/updateProfile`
    return axiosClient.post(url,data)
  },
  async getInfo(){
    const  url = `/api/Users/getProfile`
    return axiosClient.post(url)
  },
  async facebookLogin(data) {
    const url = "/api/Users/facebooklogin"
    return axiosClient.post(url,data)
  }
};

export default userApi;
