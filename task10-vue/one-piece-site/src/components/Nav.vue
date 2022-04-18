<template>
  <nav class="side-margin">
    <button class="nav__menu fa-solid fa-bars" @click="showMenu"></button>
    <img class="nav__logo" src="images/logo.png" alt="One Piece logo">
    <div class="nav__dropdown" :class="{'visible' : this.isDisplayed}">
      <a v-for="page in pages" :key="page.name" :href="page.href">{{page.name}}</a>
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
      isDisplayed : false,
      pages : [
        {name : 'Home', href : "/"},
        {name : 'Characters', href : "/characters"},
        {name : 'Islands', href : "/islands"},
        {name : 'Myst Objects', href : "/myst-objects"}
      ]
    }
  },
  methods : {
    showMenu : function (event) {
      this.isDisplayed = !this.isDisplayed
    }
  }
}
</script>


