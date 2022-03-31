import React from 'react'

const MysticCard = ({image, name, description}) => {
  return (
    <div className="mist-grid__card">
      <img src={`images/${image}`} alt=""/>
      <div className="mist-grid__card-infobox">
        <p className="l3">{name}</p>
        <p className="p-small">{description}</p>
      </div>
    </div>
  )
}

export default MysticCard;
