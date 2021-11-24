import axios from "axios";
const URL = 'https://apilast.herokuapp.com';
export const fetchPosts = () => axios.get(`${URL}/api/Cost`)
export const fetchInfo = () => axios.get(`${URL}/api/Info`)
export const createSchedule = (payload) => axios.post(`${URL}/api/Schedule`, payload)
export const fetchSchedule = () => axios.get(`${URL}/api/Schedule`)
export const updateSchedule = (payload) => axios.post(`${URL}/api/Schedule_update`, payload)
export const createCost = (payload) => axios.post(`${URL}/api/Cost`, payload)
export const deleteCost = (payload) => axios.post(`${URL}/api/Cost_delete`, payload)
export const updateCost = (payload) => axios.post(`${URL}/api/Cost_update`, payload)


