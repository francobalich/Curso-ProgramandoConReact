import { axiosUnsplashAPI, axiosUserAPI } from "../api";
import { getEnvVariables } from "../utils/getEnvVariables";

export const useApi = () => {
  const getImages = async (keyword = "", cantImg=30,page=1) => {
    const { VITE_ACCESS_KEY } = getEnvVariables()
    const { data } = await axiosUnsplashAPI.get(`?page=${page}&query=${keyword}&client_id=${VITE_ACCESS_KEY}&per_page=${cantImg}`)
    const { results } = data;
    const list = results.map((element) => {
      return {
        id: element.id,
        alt: element.alt_description,
        src: element.urls.small
      }
    })
    return list
  }
  const getFetchImages = async (keyword = "", cantImg=30,page=1) => {
    const { VITE_ACCESS_KEY } = getEnvVariables()
    const resp = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${VITE_ACCESS_KEY}&per_page=${cantImg}`,{
      method:'GET',
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    const data = await resp.json();
    const { results } = data;
    const list = results.map((element) => {
      return {
        id: element.id,
        alt: element.alt_description,
        src: element.urls.small
      }
    })
    return list
  }
  const getUserLogin = async ({ email, pws }) => {
    const resp = await axiosUserAPI.post(`/login`, {
      "email": email,
      "password": pws
    })
    return resp
  }
  const getUserRegister = async ({ name, surname, email, pws }) => {
    const resp = await axiosUserAPI.post(`/register`, {
      "name": name,
      "surname": surname,
      "email": email,
      "password": pws
    })
    return resp
  }
  return {
    getImages,
    getUserRegister,
    getUserLogin,
    getFetchImages
  }
}