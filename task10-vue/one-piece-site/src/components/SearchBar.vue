<template>
  <section class="main__search-bar side-margin">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input class="search-bar" type="text" placeholder="Search Characters, Islands or Objects">
  </section>
</template>

<script>
export default {
  name : 'SearchBar'
}
</script>

<style >
  .search-bar {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.25px;
    border: none;
    width: 100%;
  }
  .search-bar:focus {
    outline: none;
  }
</style>
