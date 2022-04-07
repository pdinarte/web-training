<template>
  <div> 
    <!-- characters -->
    <MainSection title="Characters" to="/characters" />
    <div id="characters-section" class="card-grid side-padding"></div>
    <!-- islands -->
    <MainSection title="Islands" to="/islands" />
    <div id="islands-section" class="card-grid side-padding"></div>
    <!-- mist objects -->
    <MainSection title="Mystic objects" to="/mysticObjects" />
    <div id="myst-section" class="mist-grid side-padding"></div>
  </div>
</template>

<script>
import MainSection from './MainSection.vue'

export default {
  name : 'Main',
  components : {
    MainSection,
  }
}
</script>


<style scoped>

</style>
