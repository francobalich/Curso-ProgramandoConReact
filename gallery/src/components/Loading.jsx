import loadingSvg from '../assets/loading.svg'

export const Loading = () => {
  return (
    <div className='loadingSvg'>
      <img src={loadingSvg} alt='Icono de carga' />
      <p>Cargando...</p>
    </div>
  )
}
