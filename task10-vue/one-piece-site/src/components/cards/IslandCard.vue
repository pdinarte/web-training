<template>
  <div className="island-card">
    <img className="card-grid__img" :src=image alt=""/>
    <div className="island-card__infobox">
      <p className="l3">{name}</p>
      <p className="p-small"><i className="fa-solid fa-location-dot"></i> {location}</p>
    </div>
  </div>
</template>


<script>
  export default {
    name : "IslandCard",
    props : {
      name : String,
      image : String,
      location : String,
    }
  }
</script>
