import { useContext, useState } from "react";
import './LoginPage.css'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useForm } from "../hooks/useForm";
import { useValidations } from "../hooks/useValidations";

const initialState = {
  email: '',
  pws: ''
}

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)
  const { email, pws, onInputChange } = useForm(initialState)
  const navigate = useNavigate();
  const{validateLogin}=useValidations({ email, pws})

  const handleSubmit = (ev) => {
    try {
      ev.preventDefault(false);
      const dataLogin=validateLogin()
    
    Swal.fire({
      title: 'Se envio la información',
      text: `${JSON.stringify(dataLogin)}`,
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    //TODO: Agrega API login
    const resp = {
      name: 'Franco',
      surname: 'Balich',
      email: email,
      state: 'authenticated'
    }
    setUser(resp)
    localStorage.setItem('user',JSON.stringify(resp))
    navigate('/home')
    } catch (error) {
      Swal.fire({
        title: 'Hay un error',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }
  return (
    <section className="dataPage">
      <form className="loginForm" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
      </form>
    </section>

  )
}
