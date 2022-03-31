import React from 'react'
import CharacterCard from './cards/CharacterCard';
import IslandCard from './cards/IslandCard';
import MysticCard from './cards/MysticCard';

const CardGrid = ({type, items}) => {

  const switchCard = (type) => {
    switch (type) {
      case "character":
        return (
          <div className="card-grid side-padding" >
            {items.map(item => { return (<CharacterCard key={item.name} image={item.img} name={item.name}/>) })}
          </div>
        )
      case "island":
        return (
          <div className="card-grid side-padding" >
            {items.map(item => { return (<IslandCard key={item.name} image={item.img} name={item.name} location={item.Location}/>) })}
          </div>
        )
      default:
        return (
          <div className="mist-grid side-padding">
            {items.map(item => { return (<MysticCard key={item.name} image={item.img} name={item.name} description={item.description}/>) })}
          </div>
        )
    }
  }

  return (
    <>
      {items && items.length !== 0 && ( switchCard(type) )}           
    </>
  )
}



export default CardGrid;
