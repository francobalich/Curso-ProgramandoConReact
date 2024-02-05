import { axiosUnsplashAPI } from "../../src/api"

describe('Pruebas de axiosUnsplashAPI',()=>{
  test('El baseURL es correcto',()=>{
    expect((axiosUnsplashAPI.defaults.baseURL)).toBe("https://api.unsplash.com/search/photos")
  })
})