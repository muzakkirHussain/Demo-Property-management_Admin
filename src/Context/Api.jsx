// // import axios from "axios";
// // import AxiosInstance from "./AxiosInstance";
// // import { useStore } from "../Store/Store";
// // import { useNavigate } from "react-router-dom";

// // const baseUrl = "http://192.168.1.28:9002/";
// // // const baseUrl = "https://dummyjson.com";

// // const token = localStorage.getItem("Token");
// // // const navigate = useNavigate();
// // const axiosInstance = axios.create({
// //   baseURL: baseUrl,
// //   headers: {
// //     "Content-Type": "application/json",
// //     Authorization: `Bearer ${token}`,
// //   },
// // });
// // const { user, setUser, setToken } = useStore((state) => ({
// //   user: state.user,
// //   setUser: state.setUser,
// //   setToken: state.setToken,
// // }));

// // const handleResponse = async (request) => {
// //   try {
// //     const response = await request();
// //     return response.data;
// //   } catch (error) {
// //     if (error.response && error.response.status === 401) {
// //       localStorage.clear();
// //       setUser([]);
// //     }
// //     throw error.message;
// //   }
// // };

// // // export const getAdminTableData = async (selectedFilter) => {
// // //   return await AxiosInstance.get(`manager/crud/v1/?role=${selectedFilter}`);
// // // };

// // export const getAdminTableData = async (payload) => {
// //   const request = async () => {
// //     return AxiosInstance.get(
// //       `manager/crud/v1/?role=${payload.selectedFilter}`,
// //       payload.config
// //     );
// //   };
// //   return handleResponse(request);
// // };

// // export const postCreateSuperAdmin = async (payload) => {
// //   return (
// //     await axiosInstance.get(`manager/crud/v1/${payload.id}`, payload.data)
// //   ).data;
// // };

// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import AxiosInstance from './AxiosInstance';
// import { useStore } from '../Store/Store';

// // const baseUrl = 'http://192.168.1.28:9002/';
// const baseUrl =
//   'https://3416-2406-7400-bb-778f-3dd5-1bf4-2250-4279.ngrok-free.app/';
// // const baseUrl = "https://dummyjson.com";

// const axiosInstance = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // const handleResponse = async (request) => {
// //   try {
// //     const response = await request();
// //     return response.data;
// //   } catch (error) {
// //     if (error.response && error.response.status === 401) {
// //       localStorage.clear();
// //       // Handle clearing user state here if needed
// //     }
// //     throw error.message;
// //   }
// // };

// // const handleResponse = async (url, config) => {
// //   const navigate = useNavigate();
// //   const { setUser } = useStore();
// //   try {
// //     const response = await await AxiosInstance.get(url, config);
// //     return response.data;
// //   } catch (error) {
// //     if (error.response && error.response.status === 401) {
// //       localStorage.clear();
// //       navigate("/login");
// //       setUser([]);
// //     }
// //     throw error.message;
// //   }
// // };

// // export const getAdminTableData = async (payload) => {
// //   const url = `manager/crud/v1/`;
// //   return handleResponse(url, payload.params);
// // };

// export const getAdminTableData = async (selectedFilter) =>
//   await AxiosInstance.get(`manager/crud/v1/?role=${selectedFilter}`);

// export const postCreateSuperAdmin = async (payload) => {
//   const request = async () =>
//     axiosInstance.post(`manager/crud/v1/${payload.id}`, payload.data);
//   return handleResponse(request);
// };
