import { axiosUserAPI } from "../../src/api"

describe('Pruebas de axiosUserAPI',()=>{
  test('El baseURL es correcto',()=>{
    expect((axiosUserAPI.defaults.baseURL)).toBe("https://api.francobalich.com/api")
  })
})