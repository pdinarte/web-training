<template>
  <div class="island-card">
    <img class="card-grid__img" :src=image alt=""/>
    <div class="island-card__infobox">
      <p class="l3">{name}</p>
      <p class="p-small"><i class="fa-solid fa-location-dot"></i> {location}</p>
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
