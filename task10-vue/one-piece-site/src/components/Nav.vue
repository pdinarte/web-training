<template>
  <nav class="side-margin">
    <button class="nav__menu fa-solid fa-bars"></button>
    <img class="nav__logo" src="images/logo.png" alt="">
    <div class="nav__dropdown">
      <a href="/" >Home</a>
      <a href="/characters.html">Characters</a>
      <a href="/islands">Islands</a>
      <a href="/mist-objects">Mist Objects</a>
      <div class="nav__dropdown-language">
        <button class="language-btn color--grey"><h2>English</h2><img src="images/flag_en.png" alt="" class="flag" /></button>
        <button class="language-btn"><h2>Spanish</h2><img src="images/flag_es.png" alt="" class="flag" /></button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* estilos css */
</style>
