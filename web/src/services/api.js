import axios from 'axios'

const api = axios.create({
    // baseURL: 'localhost:3000/api',
    headers: {
        accept: 'application/json',
    },
})

export default api;