import axios from 'axios'
import { getToken } from "../store/ducks/auth"

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        accept: 'application/json',
    },
})

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export default api;