<template>
  <div :class="{'character-card' : type === 'character', 
            'island-card' : type === 'island',
            'mist-grid__card' : type === 'mystObject'}">
    <img :class="{'mist-grid__card' : type === 'mystObject',
               'card-grid__img' : type !== 'mystObject',
               'img--center' : image === '/images/monkeydluffy.svg', 
               'img--nico' : image === '/images/nico.svg', 
               'img--portgas' : image === '/images/ace.svg'}" 
      :src="image"/>
    <div v-if="type !== 'character'"
         :class="{'mist-grid__card-infobox' : type === 'mystObject',
                  'island-card__infobox' : type === 'island'}">
      <p class="l3">{{name}}</p>
      <p class="p-small"><i v-if="type === 'island'" class="fa-solid fa-location-dot"></i>{{type === 'island' ? location : description}}</p>
    </div>
    <div v-else>
      <h3 class="character-card__name">{{name}}</h3>
    </div>
  </div>
</template>


<script>
  export default {
    name : "Card",
    props : {
      type : String,
      name : String, 
      description : String,
      image : String,
      location : String,
    }
  }
</script>
