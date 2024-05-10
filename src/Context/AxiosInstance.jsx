import axios from "axios";

const baseUrl = "http://192.168.1.28:9002";
const tokens = localStorage.getItem("Token");

const AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${tokens}`,
  },
});

export default AxiosInstance;
