<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
 /* background: #fff; */
 color: #1f1f1f;
 /* max-width: 1280px; */
 margin: 0 auto;
 font-family: 'Open Sans', sans-serif;
}
.fs{
   font-size: 10px !important;
 }

</style>
