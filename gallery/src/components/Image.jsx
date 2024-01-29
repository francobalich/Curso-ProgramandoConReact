import React from 'react'
import './Gallery.css'

export const Image = ({src,alt}) => {
  return (
    <img src={src} alt={alt} className='imgGallery'/>
  )
}
