import axios from "axios";

const REST_API_BASE_URL = "localhost:8080/api/BookingTtickets";

export const userLogin = (user) => axios.post(REST_API_BASE_URL,user);

export const createLogin = (user) => axios.post(REST_API_BASE_URL+"/users", user);

export const deleteLogin = (userId) => axios.delete(REST_API_BASE_URL+'/'+userId);