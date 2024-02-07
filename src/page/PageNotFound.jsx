import React from 'react'
import './LoginPage.css'
import errorImg from '../assets/error.svg'

export const PageNotFound = () => {
  return (
    <section className="dataPage">
      <div className='errorPage'>
        <h1>Pagina no encontrada.</h1>
        <img src={errorImg} alt='Imagen de error 404'/>
      </div>
      
      </section>
  )
}
