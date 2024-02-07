import './LoginPage.css'
import { useContext, useState } from "react";
import { useForm, useValidations, useApi } from "../hooks";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Swal from 'sweetalert2'

const initialState = {
  email: '',
  pws: ''
}

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)
  const { email, pws, onInputChange } = useForm(initialState)
  const navigate = useNavigate();
  const { validateLogin } = useValidations({ email, pws })
  const { getUserLogin } = useApi()
  const [enable, setEnable] = useState(true)

  const submitLogin = (data) => {
   
    getUserLogin(data).then((resp) => {
      const { data } = resp
      localStorage.setItem('token', data.token)
      const simpleUser = {
        name: data.name,
        surname: data.surname,
        email: data.email,
        state: 'authenticated'
      }
      setUser(simpleUser)
      localStorage.setItem('user', JSON.stringify(simpleUser))

      Swal.fire({
        title: 'Se inicio sesión',
        text: `Bienvenido/a ${data.name}`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    })
      .catch((error) => {

       
        console.error(error.data)
      })
  }

  const handleSubmit = (ev) => {
    try { 
      setEnable(false)
      ev.preventDefault(false);
      const dataLogin = validateLogin()
      submitLogin(dataLogin)

      navigate('/home')

    } catch (error) {
      Swal.fire({
        title: 'Hay un error',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: 'Ok'
      }) 
      setEnable(true)
    }
  }
  return (
    <section className="dataPage">
      <form className="loginForm" onSubmit={handleSubmit} disabled={!enable} >
        <h1>Inicie sesión</h1>
        <p>Ingrese su email</p>
        <input
          onChange={onInputChange}
          name="email"
          value={email}
          type="email"
          className="form-control input" />
        <p>Ingrese su contraseña</p>
        <input
          onChange={onInputChange}
          name="pws"
          value={pws}
          type="password"
          className="form-control input" />
        <button  type="submit" className="btn btn-primary">Iniciar sesión</button>
      </form>
    </section>

  )
}
