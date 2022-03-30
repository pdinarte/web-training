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
              {items.map(item => { return (<MysticCard image={item.img} name={item.name} description={item.description}/>) })}
            </div>
            ) : (
            <div className="card-grid side-padding" >
              {items.map(item => { return (<IslandCard image={item.img} name={item.name} location={item.Location}/>) })}
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
