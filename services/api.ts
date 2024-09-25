import axios from "axios";


const BASE_URL = "https://narutodb.xyz/api";
export const axiosInstance = axios.create({ baseURL: BASE_URL });
