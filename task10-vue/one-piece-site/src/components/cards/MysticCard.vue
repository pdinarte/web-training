<template>
  <div className="mist-grid__card">
    <img :src=image alt=""/>
    <div className="mist-grid__card-infobox">
      <p className="l3">{name}</p>
      <p className="p-small">{description}</p>
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