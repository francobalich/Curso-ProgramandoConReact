import axios from 'axios'

const API_URL = "https://api.francobalich.com/api"

export const axiosUserAPI = axios.create({
    baseURL: API_URL
})

axiosUserAPI.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})
