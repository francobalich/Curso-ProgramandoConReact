import { useContext, useState } from "react";
import './LoginPage.css'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const initialState = {
  email: '',
  pws: ''
}

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)
  const [data, setData] = useState(initialState)
  const navigate = useNavigate();
  const handleInputEmail = ({ target }) => {
    const { value } = target;
    setData({
      ...data,
      email: value
    });
  }
  const handleInputPws = ({ target }) => {
    const { value } = target;
    setData({
      ...data,
      pws: value
    });
  }
  const handleSubmit = (ev) => {
    ev.preventDefault(false);

    if (data.email === '') {
      Swal.fire({
        title: 'Error',
        text: `Falta ingresar el email.`,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }
    if (data.pws === '') {
      Swal.fire({
        title: 'Error',
        text: `Falta ingresar la contraseña.`,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }
    Swal.fire({
      title: 'Se envio la información',
      text: `${JSON.stringify(data)}`,
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    //TODO: Agrega API login
    const resp = {
      name: 'Franco',
      surname: 'Balich',
      email: data.email,
      state: 'authenticated'
    }
    setUser(resp)
    navigate('/home')
  }
  return (
    <section className="dataPage">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Inicie sesión</h1>
        <p>Ingrese su email</p>
        <input onChange={handleInputEmail} type="email" className="form-control input" />
        <p>Ingrese su contraseña</p>
        <input onChange={handleInputPws} type="password" className="form-control input" />
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
      </form>
    </section>

  )
}
