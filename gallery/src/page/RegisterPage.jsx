import './LoginPage.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useForm, useValidations,useApi } from "../hooks";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const initialState = {
  name: '',
  surname: '',
  email: '',
  pws: '',
  pwsConfirm: ''
}

export const RegisterPage = () => {
  const { name, surname, email, pws, pwsConfirm, onInputChange } = useForm(initialState)
  const navigate = useNavigate()
  const { validateRegister } = useValidations({ name, surname, email, pws, pwsConfirm })
  const { getUserRegister } = useApi()

  const submitRegister = (data) => {
    getUserRegister(data).then((resp) => {
      const { data } = resp
      const simpleUser = {
        name: data.name,
        surname: data.surname,
        email: data.email,
        state: 'authenticated'
      }

      Swal.fire({
        title: 'Se registro un nuevo usuario',
        text: `Usuario: ${data.name}`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      return simpleUser
    })
      .catch((error) => console.error(error.data))
  }


  const handleSubmitRegister = (ev) => {
    try {
      ev.preventDefault(false);
      const dataFilter = validateRegister()
      submitRegister(dataFilter)
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
        <p>Ingrese su nombre</p>
        <input
          onChange={onInputChange}
          name="name"
          value={name}
          type="text"
          className="form-control input" />

        <p>Ingrese su apellido</p>
        <input
          onChange={onInputChange}
          name="surname"
          value={surname}
          type="text"
          className="form-control input" />

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
