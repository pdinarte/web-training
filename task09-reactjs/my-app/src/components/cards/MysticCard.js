import React from 'react'

const MysticCard = ({image, name, description}) => {
  return (
    <div class="mist-grid__card">
      <img src={`images/${image}`} alt=""/>
      <div class="mist-grid__card-infobox">
        <p class="l3">{name}</p>
        <p class="p-small">{description}</p>
      </div>
    </div>
  )
}

export default MysticCard;
