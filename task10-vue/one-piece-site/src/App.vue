<template>
  <div>
    <Nav/>
    <Hero />
    <SearchBar />
    <Main />
    <Footer/>      
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import SearchBar from './components/SearchBar.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Hero,
    SearchBar,
    Main,
    Footer
  },
}
</script>
