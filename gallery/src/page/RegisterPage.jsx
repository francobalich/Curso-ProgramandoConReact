import { useState } from "react";
import './LoginPage.css'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const initialState = {
  email: '',
  pws: '',
  pwsConfirm: ''
}

export const RegisterPage = () => {
  const [data, setData] = useState(initialState)
  const navigate = useNavigate()

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
  const handleInputPwsConfirm = ({ target }) => {
    const { value } = target;
    setData({
      ...data,
      pwsConfirm: value
    });
  }
  const handleSubmit = (ev) => {
    ev.preventDefault(false);
    if (data.email === '') {
      toast.error("¡No ingreso el email!");
      return
    }
    if (data.pws === '') {
      toast.error("¡No ingreso la contraseña!");
      return
    }
    if (data.pwsConfirm === '') {
      toast.error("¡No confirmo la contraseña!");
      return
    }
    if (data.pwsConfirm !== data.pws) {
      toast.error("¡Las contraseñas no coinciden!");
      return
    }
    const dataFilter = {
      email: data.email,
      pws: data.pws

    }
    Swal.fire({
      title: 'Se envio la información',
      text: `${JSON.stringify(dataFilter)}`,
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    //TODO: Ir a login
    navigate('/auth/login')
  }
  return (
    <section className="dataPage">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Registrar cuenta</h1>
        <p>Ingrese su email</p>
        <input onChange={handleInputEmail} type="email" className="form-control input" />
        <p>Ingrese su contraseña</p>
        <input onChange={handleInputPws} type="password" className="form-control input" />
        <p>Confirme su contraseña</p>
        <input onChange={handleInputPwsConfirm} type="password" className="form-control input" />
        <button type="submit" className="btn btn-primary">Registrarse</button>
        <ToastContainer theme="dark" />
      </form>
    </section>

  )
}
