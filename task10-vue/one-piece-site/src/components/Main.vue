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
import axios from 'axios';

export default {
  name : 'Main',
  components : {
    MainSection,
    CardGrid,
  },
  methods : {
    sortByName : function (object1, object2) {
      let name1 = object1.name.toLowerCase();
      let name2 = object2.name.toLowerCase();
      if (name1 < name2) {return -1;}
      if (name1 > name2) {return 1;}
      return 0;
    },
  },
  data () {
    return {
      characters : [],
      islands : [],
      mysticObjects : []
    }
  },
  created () {
    axios
      .get('https://static.akurey.com/trainings/OnePieceInformation.json')
      .then( response => {
        this.characters = response.data.characters;
        this.islands = response.data.islands;
        this.mysticObjects = response.data.mysticObjects;
        this.characters.sort(this.sortByName);
        this.islands.sort(this.sortByName);
        this.mysticObjects.sort(this.sortByName);
      })
      .catch((e) => console.error('Something went wrong while fetching data from '+this.URL+'. See error below:\n'+ e))
  }
}
</script>
