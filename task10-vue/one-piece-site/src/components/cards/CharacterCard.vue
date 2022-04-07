<template>
  <div class="character-card">
    <img class="card-grid__img" 
        :class="{'img--center' : image === '/images/monkeydluffy.svg', 
                 'img--nico' : image === '/images/nico.svg', 
                 'img--portgas' : image === '/images/ace.svg'}" :src=image alt=""/>
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



