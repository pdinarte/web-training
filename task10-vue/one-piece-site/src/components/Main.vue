<template>
  <div> 
    <!-- characters -->
    <MainSection title="Characters" to="/characters" />
    <CardGrid type="character" :items=characters.slice(0,4) />
    <!-- islands -->
    <MainSection title="Islands" to="/islands" />
    <CardGrid type="island" :items=islands.slice(0,3) />
    <!-- mist objects -->
    <MainSection title="Mystic objects" to="/mysticObjects" />
    <CardGrid type="mystic" :items=mysticObjects.slice(0,4) />
  </div>
</template>

<script>
import MainSection from './MainSection.vue'
import CardGrid from './cards/CardGrid.vue'

export default {
  name : 'Main',
  components : {
    MainSection,
    CardGrid,
  }
}
</script>


<style scoped>

</style>
