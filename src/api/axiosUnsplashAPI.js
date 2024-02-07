import axios from 'axios'

const API_URL = "https://api.unsplash.com/search/photos"

export const axiosUnsplashAPI = axios.create({
    baseURL: API_URL
})
