<template>
<div>
  <div className="card-grid side-padding" >
    {items.map(item => { return (<CharacterCard key={item.name} image={item.img} name={item.name}/>) })}
  </div>

  <div className="card-grid side-padding" >
    {items.map(item => { return (<IslandCard key={item.name} image={item.img} name={item.name} location={item.Location}/>) })}
  </div>

  <div className="mist-grid side-padding">
    {items.map(item => { return (<MysticCard key={item.name} image={item.img} name={item.name} description={item.description}/>) })}
  </div>
</div>
</template>


<script>
  export default {
    name : "CardGrid",
    props : {
      type : String
    }
  }
</script>