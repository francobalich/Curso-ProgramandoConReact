import { useState } from "react";
import './LoginPage.css'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useValidations } from "../hooks/useValidations";

const initialState = {
  email: '',
  pws: '',
  pwsConfirm: ''
}

export const RegisterPage = () => {
  const { email, pws, pwsConfirm, onInputChange } = useForm(initialState)
  const navigate = useNavigate()
  const { validateRegister } = useValidations({ email, pws, pwsConfirm })

  const handleSubmitRegister = (ev) => {
    try {
      ev.preventDefault(false);
      const dataFilter = validateRegister()

      Swal.fire({
        title: 'Se envio la información',
        text: `${JSON.stringify(dataFilter)}`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      //TODO: Ir a login
      navigate('/auth/login')
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
      <form className="loginForm" onSubmit={handleSubmitRegister}>
        <h1>Registrar cuenta</h1>
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
        <p>Confirme su contraseña</p>
        <input
          onChange={onInputChange}
          name="pwsConfirm"
          value={pwsConfirm}
          type="password"
          className="form-control input" />
        <button type="submit" className="btn btn-primary">Registrarse</button>
        <ToastContainer theme="dark" />
      </form>
    </section>

  )
}
