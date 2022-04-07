<template>
  <div class="mist-grid__card">
    <img :src=image alt=""/>
    <div class="mist-grid__card-infobox">
      <p class="l3">{name}</p>
      <p class="p-small">{description}</p>
    </div>
  </div>
</template>


<script>
  export default {
    name : "MysticCard",
    props : {
      name : String, 
      description : String,
      image : String,
    }
  }
</script>