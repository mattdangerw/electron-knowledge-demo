import React from 'react'

const Card = ({ model, onClick }) => {
  const imageStyle = {
    backgroundImage: 'url(' + model.thumbnail_uri + ')'
  }
  return (
    <li onClick={onClick} className='card'>
      <div className='card-image' style={imageStyle} />
      <p className='card-title'>{model.title}</p>
      <p className='card-synopsis'>{model.synopsis}</p>
    </li>
  )
}

export default Card
