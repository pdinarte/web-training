import React from 'react'
import CharacterCard from './cards/CharacterCard';
import IslandCard from './cards/IslandCard';
import MysticCard from './cards/MysticCard';

const CardGrid = ({type, items}) => {

  return (
    <>
    
      {items && items.length !== 0 ? (
        type !== "character" ? (
          type !== "island" ? (
            <div className="mist-grid side-padding">
              {items.map(item => { return (<MysticCard />) })}
            </div>
            ) : (
            <div className="card-grid side-padding" >
              {items.map(item => { return (<IslandCard />) })}
            </div>
          )
        ) : (
          <div className="card-grid side-padding" >
            {items.map(item => { return (<CharacterCard image={item.img} name={item.name}/>) })}
          </div>
        )
      ) : (
        null
        //nothing to render
      )}    
    
    </>
  )
}



export default CardGrid;
