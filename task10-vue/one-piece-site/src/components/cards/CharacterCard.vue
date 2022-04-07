<template>
  <div class="character-card">
    <img class="card-grid__img" :src=image alt=""/>
    <h3 class="character-card__name">{{name}}</h3>
  </div>
</template>


<script>
  export default {
    name : 'CharacterCard',
    props : {
      image:String,
      name:String
    }
  }
</script>



