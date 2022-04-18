<template>
  <div class="main__section-header side-margin">
    <h2>{{title}}</h2>
    <a class="text-btn" :href=to><p class="p-medium">See all</p></a>
  </div>
</template>

<script>
export default {
  name: 'MainSection',
  props: {
    title: String,
    to: String
  },
}
</script>
