import React from 'react'

const CharacterCard = ({image, name}) => {

  const monkey_img = "img--center"
  const nico_img = "img--nico"
  const portgas_img = "img--portgas"  

  return (
    <div className={"character-card"}>
      <img className={`card-grid__img ${image === "monkeydluffy.svg" ? monkey_img : 
                                        image === "nico.svg" ? nico_img : 
                                        image === "ace.svg" ? portgas_img : '' }`} src={`images/${image}`} alt=""/>
      <h3 className="character-card__name">{name}</h3>
    </div>
  )
}

export default CharacterCard;
