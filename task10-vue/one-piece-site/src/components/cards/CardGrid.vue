<template>
<div>
  <div class="card-grid side-padding" v-if="type === 'character'">
    <Card v-for="item in items" :key="item.name" :type="'character'" :image="'/images/'+item.img" :name="item.name" />
  </div>
  <div class="card-grid side-padding" v-else-if="type === 'island'">
    <Card v-for="item in items" :key="item.name" :type="'island'" :image="'/images/'+item.img" :name="item.name" :location="item.Location" />
  </div>
  <div class="mist-grid side-padding" v-else>
    <Card v-for="item in items" :key="item.name" :type="'mystObject'" :image="'/images/'+item.img" :name="item.name" :description="item.description" />
  </div>
</div>
</template>


<script>
  import Card from './Card.vue' 

  export default {
    name : "CardGrid",
    components : {
      Card,
    },
    props : {
      type : String,
      items : Array,
    }
  }
</script>
