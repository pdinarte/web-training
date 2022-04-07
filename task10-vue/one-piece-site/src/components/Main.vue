<template>
  <div> 
    <!-- characters -->
    <MainSection title="Characters" to="/characters" />
    <CardGrid type="character" :items=data.characters.slice(0,4) />
    <!-- islands -->
    <MainSection title="Islands" to="/islands" />
    <CardGrid type="island" :items=data.islands.slice(0,3) />
    <!-- mist objects -->
    <MainSection title="Mystic objects" to="/mysticObjects" />
    <CardGrid type="mystic" :items=data.mysticObjects.slice(0,4) />
  </div>
</template>

<script>
import MainSection from './MainSection.vue'
import CardGrid from './cards/CardGrid.vue'
import axios from 'axios';

export default {
  name : 'Main',
  components : {
    MainSection,
    CardGrid,
  },
  data () {
    return {
      data : {
        characters : [],
        islands : [],
        mysticObjects : []
      },
    }
  },
  mounted () {
    axios
      .get('https://static.akurey.com/trainings/OnePieceInformation.json')
      .then(response => {this.data = response.data;})
  }
}
</script>


<style scoped>

</style>
