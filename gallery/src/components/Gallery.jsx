import imgV from '../assets/imgV.jpg'
import imgH from '../assets/imgH.jpg'
import './Gallery.css'
//import imgData from '../data/imgData.json'
import { useEffect } from 'react'
import { useState } from 'react'
import { Image } from './Image'
import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables'

export const Gallery = () => {
  const { VITE_ACCESS_KEY } = getEnvVariables()
  const [imgs, setImgs] = useState(<></>)
  useEffect(() => {
    loadImages().then(list => {
      addImgs(list)
    })
  }, [])

  const addImgs = (imgData = []) => {
    let listOfImgs = []
    login()
    imgData.forEach(element => {
      listOfImgs.push(<Image src={element.src} alt={element.alt} key={element.id} />)
      setImgs(listOfImgs)
    })
  }
  const loadImages = async () => {
    const { data } = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=art&client_id=${VITE_ACCESS_KEY}&per_page=30`)
    const { results } = data
    const resp = results.map(element => {
      return {
        id: element.id,
        alt: element.alt_description,
        src: element.urls.small
      }
    })
    return resp;
  }
  const login = async () => {
    const {data} = await axios.post(`https://api.francobalich.com/api/login`,{
      "email":"franco@gmail.com",
      "password":"123456"
  })
    console.log(data);
    return data;
  }
  return (
    <section className='gallery__page'>
      <div className='gallery__container'>
        {imgs}
      </div>
    </section>
  )
}
