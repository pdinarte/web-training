<template>
  <div class="main__hero">
    <!-- main image -->
    <div class="main__hero-img"> 
      <img src="images/everyone.png" alt="One Piece characters together">
    </div>
    <!-- read more logo -->
    <img class="main__hero-logo" :class="{'visible' : read}" src="images/logo.png" alt="One Piece logo">
    <!-- sinopsis-box -->
    <section class="main__hero-sinopsis side-margin">
      <h1>Sinopsis</h1>
      <div class="p-medium show-text" :class="{'visible' : read}">
        <p v-for="sentence in sentences" :class="{'more-text' : !read && sentence.hidden}" :key="sentence.id" >{{sentence.text}}<br><br></p>
      </div>
      <hr>
      <button class="text-btn read-more-btn" @click="this.changeText">
        <i class="fa-solid" :class="{'fa-chevron-up' : this.read, 'fa-chevron-down' : !this.read}"></i>
        <p class="p-large">Read {{read ? 'Less' : 'All'}}</p>
      </button>
    </section>
  </div>
</template>



<script>
export default {
  name : 'Hero',
  data () {
    return {
      read : false,
      sentences : [
        {id : 1, hidden:false, text : "Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated."},
        {id : 2, hidden:false, text : "It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon."},
        {id : 3, hidden:true, text : "This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family."},
        {id : 4, hidden:true, text : "Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line."},
        {id : 5, hidden:true, text : "It is located in the Red Line and is the geographical antipode of Mary Geoise."}
      ]
    }
  },
  methods : {
    changeText : function (event) {
      this.read = !this.read;
    }
  }
}
</script>
