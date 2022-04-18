<template>
  <div class="main__hero">
    <!-- main image -->
    <div class="main__hero-img"> 
      <img src="images/everyone.png" alt="One Piece characters together">
    </div>
    <!-- read more logo -->
    <img class="main__hero-logo" :class="this.readState" src="images/logo.png" alt="One Piece logo">
    <!-- sinopsis-box -->
    <section class="main__hero-sinopsis side-margin">
      <h1>Sinopsis</h1>
      <p class="p-medium show-text" :class="this.readState">
        Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.
        <br><br>
        It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.
        <span class="more-text">
        <br><br>  
        This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family.
        <br><br>
        Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line.
        <br><br>
        It is located in the Red Line and is the geographical antipode of Mary Geoise.
        </span>
      </p>
      <hr>
      <button class="text-btn read-more-btn" @click="this.changeText">
        <i class="fa-solid" :class="{'fa-chevron-up' : this.read, 'fa-chevron-down' : !this.read}"></i>
        <p class="p-large">Read {{this.readText}}</p>
      </button>
    </section>
  </div>
</template>



<script>
export default {
  name : 'Hero',
  data () {
    return {
      readText : 'All',
      read : false,
      readState : '',
    }
  },
  methods : {
    changeText : function (event) {
      if(!this.read){
        this.readText = 'Less';
        this.read = true;
        this.readState = 'visible';
      } else {
        this.readText = 'All';
        this.read = false;
        this.readState = '';
      }
    }
  }
}
</script>
