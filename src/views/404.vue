<template>

<div class="h-screen">
<Header />
    <div class="grid justfy-between h-full ">
      
      
      <div class="relative bg-gray-100 dark:bg-gray-900 h-screen">
        
        <div class="text-center mt-24 font-semibold">
              404 Page not found
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>

import Header from '../components/Header.vue'

export default {
  name: 'Not-Found',
  props: {
    title: String
  },
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
