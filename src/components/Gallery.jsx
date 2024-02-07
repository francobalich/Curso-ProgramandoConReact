import './Gallery.css'
import { useEffect, useState } from 'react'
import { Input, Image } from './'
import { useApi } from '../hooks'
import { Loading } from './Loading'

export const Gallery = () => {
  const [imgs, setImgs] = useState()
  const [page, setPage] = useState(1)
  const [word, setWord] = useState("code")
  const { getImages } = useApi()

  const addImgs = (imgData) => {
    let listOfImgs = []
    imgData.forEach(element => {
      listOfImgs.push(<Image src={element.src} alt={element.alt} key={element.id} />)
      setTimeout(() => {
        setImgs(listOfImgs)
      }, 2000)
    })
  }
  const loadImages = (keyword = "code") => {
    setImgs(<Loading />)
    getImages(keyword, 30, page)
      .then((list) => {
        addImgs(list)
      })
      .catch(() => console.error("Algo salio mal"))
  }

  const findImages = (keyword) => {
    loadImages(keyword)
    setWord(keyword)
  }

  const handleCount = (newValue) => {
    if (page + newValue > 0) {
      setPage(value => value + newValue)
      findImages(word)
    }
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <section className='gallery__page'>
      <Input label='Ingrese lo que desea buscar' onButtonClick={findImages} />
      <div>
        <button type="button" className="btn btn-primary" onClick={() => handleCount(-1)}>-1</button>
        <label  className="form-label m-4">   {page}   </label>
        <button type="button" className="btn btn-primary" onClick={() => handleCount(1)}>+1</button>
      </div>
      <div className='gallery__container'>
        {imgs}
      </div>
    </section>
  )
}
