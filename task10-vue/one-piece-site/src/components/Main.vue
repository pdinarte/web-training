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
      data : {
        characters : [],
        islands : [],
        mysticObjects : []
      },
    }
  },
  created () {
    axios
      .get('https://static.akurey.com/trainings/OnePieceInformation.json')
      .then( response => {
        this.data = response.data;
        this.data.characters.sort(this.sortByName);
        this.data.islands.sort(this.sortByName);
        this.data.mysticObjects.sort(this.sortByName);
      })
      .catch((e) => console.error('Something went wrong while fetching data from '+this.URL+'. See error below:\n'+ e))
  }
}
</script>
