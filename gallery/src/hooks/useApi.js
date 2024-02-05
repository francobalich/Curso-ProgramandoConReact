import { axiosUnsplashAPI, axiosUserAPI } from "../api";
import { getEnvVariables } from "../utils/getEnvVariables";

export const useApi = () => {
  const getImages = async (keyword = "", cantImg=30,page=2) => {
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
    getUserLogin
  }
}