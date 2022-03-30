import React from 'react'

const IslandCard = ({image, name, location}) => {
  return (
    <div className="island-card">
      <img className="card-grid__img" src={`images/${image}`} alt=""/>
      <div className="island-card__infobox">
        <p className="l3">{name}</p>
        <p className="p-small"><i className="fa-solid fa-location-dot"></i> {location}</p>
      </div>
    </div>
  )
}

export default IslandCard;
