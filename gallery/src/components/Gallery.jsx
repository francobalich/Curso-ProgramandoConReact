import imgV from '../assets/imgV.jpg'
import imgH from '../assets/imgH.jpg'
import './Gallery.css'
import imgData from '../data/imgData.json'
import { useEffect } from 'react'
import { useState } from 'react'
import { Image } from './Image'

export const Gallery = () => {
  const [imgs, setImgs] = useState(<></>)
  useEffect(() => {
    addImgs()
  }, [])
  const addImgs=()=>{
    let listOfImgs=[]
    imgData.forEach(element => {
      listOfImgs.push(<Image src={element.src} alt={element.alt} key={element.id} />)
      setImgs(listOfImgs)
    })
  }
  return (
    <section className='gallery__page'>
      <div className='gallery__container'>
      <img src={imgV} className='imgGallery'/>
        <img src={imgH} className='imgGallery'/>
        {imgs} {imgs} {imgs} {imgs}
      </div>
    </section>
  )
}
