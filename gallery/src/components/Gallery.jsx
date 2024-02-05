import './Gallery.css'
import { useEffect, useState } from 'react'
import { Input, Image } from './'
import { useApi } from '../hooks'
import { Loading } from './Loading'

export const Gallery = () => {
  const [imgs, setImgs] = useState()
  const { getImages } = useApi()

  const addImgs = (imgData) => {
    let listOfImgs = []
    imgData.forEach(element => {
      listOfImgs.push(<Image src={element.src} alt={element.alt} key={element.id} />)
      setTimeout(()=>{
        setImgs(listOfImgs)
      },2000)
    })
  }
  const loadImages = (keyword = "code") => {
    setImgs(<Loading />)
    getImages(keyword)
      .then((list) => {
        addImgs(list)
      })
      .catch(() => console.error("Algo salio mal"))
  }
  const findImages = (keyword) => {
    loadImages(keyword)
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <section className='gallery__page'>
      <Input label='Ingrese lo que desea buscar' onButtonClick={findImages} />
      <div className='gallery__container'>
        {imgs}
      </div>
    </section>
  )
}
