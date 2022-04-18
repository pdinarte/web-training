<template>
  <nav class="side-margin">
    <button class="nav__menu fa-solid fa-bars" @click="showMenu"></button>
    <img class="nav__logo" src="images/logo.png" alt="One Piece logo">
    <div class="nav__dropdown" :class="{'visible' : this.data.isDisplayed}">
      <a href="/" >Home</a>
      <a href="/characters.html">Characters</a>
      <a href="/islands">Islands</a>
      <a href="/mist-objects">Mist Objects</a>
      <div class="nav__dropdown-language">
        <button class="language-btn color--grey"><h2>English</h2><img src="images/flag_en.png" alt="Britain flag" class="flag" /></button>
        <button class="language-btn"><h2>Spanish</h2><img src="images/flag_es.png" alt="Spain flag" class="flag" /></button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      data : {
        isDisplayed : false
      }
    }
  },
  methods : {
    showMenu : function (event) {
      this.data = {isDisplayed : !this.data.isDisplayed}
    }
  }
}
</script>


