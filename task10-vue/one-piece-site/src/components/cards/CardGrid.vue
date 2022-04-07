<template>
<div>
  <div class="card-grid side-padding" v-if="type === 'character'">
    <CharacterCard v-for="item in items.characters" :key="item.name" :image="item.img" :name="item.name" />
  </div>

  <div class="card-grid side-padding" v-else-if="type === 'island'">
    <IslandCard v-for="item in items.islands" :key="item.name" :image="item.img" :name="item.name" :location="item.Location" />
  </div>

  <div class="mist-grid side-padding" v-else>
    <MysticCard v-for="item in items.mysticObjects" :key="item.name" :image="item.img" :name="item.name" :description="item.description" />
  </div>
</div>
</template>


<script>
  import CharacterCard from './CharacterCard.vue'
  import IslandCard from './IslandCard.vue'
  import MysticCard from './MysticCard.vue'

  export default {
    name : "CardGrid",
    components : {
      CharacterCard,
      IslandCard,
      MysticCard,
    },
    props : {
      type : String,
    }
  }
</script>