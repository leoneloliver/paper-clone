<template>

<div class="h-screen">
<Header />
    <div class="grid grid-cols-9 h-full">
    

      <div class="md:col-span-3 col-span-9 bg-gray-100 dark:bg-gray-900 gap-4">
        <router-link to="/chat">    
            <div class="shadow-md md:mt-24 md:m-5 md:ml-24 m-8 text-center border-2 border-indigo-600 p-12 md:h-1/2 h-auto bg-white dark:bg-gray-900 dark:hover:bg-black hover:bg-gray-100">
                <i class="fa fa-graduation-cap text-blue-900 dark:text-white " aria-hidden="true"></i>
                <h2 class="text-gray-500 dark:text-white font-semibold">Mathematics</h2>
                <p class="text-gray-500 dark:text-white text-sm">Mathematics includes the study of such topics as quantity (number theory), structure (algebra) ...</p>
                <button class="mt-5 type-bg hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Ask a tutor</button>
            </div>
        </router-link>
      </div>
      <div class="md:col-span-3 col-span-9 bg-gray-100 dark:bg-gray-900 gap-4">
        <router-link to="/chat">    
            <div class="shadow-md md:mt-24 md:m-5 md:mx-12 m-8 text-center border-2 border-indigo-600 p-12 md:h-1/2 h-auto bg-white dark:bg-gray-900 dark:hover:bg-black hover:bg-gray-100">
                <i class="fa fa-code text-blue-900 dark:text-white " aria-hidden="true"></i>
                <h2 class="text-gray-500 dark:text-white font-semibold">Coding</h2>
                <p class="text-gray-500 dark:text-white text-sm">Coding is basically the computer language used to develop apps, websites, and software ...</p>
                <button class="mt-5 type-bg hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Ask a tutor</button>
            </div>
        </router-link>
      </div>
      <div class="md:col-span-3 col-span-9 bg-gray-100 dark:bg-gray-900 gap-4">
          <router-link to="/chat">    
            <div class="shadow-md md:mt-24 md:m-5 md:mr-24 m-8 text-center border-2 border-indigo-600 p-12 md:h-1/2 h-auto bg-white dark:bg-gray-900 dark:hover:bg-black hover:bg-gray-100">
                <i class="fa fa-line-chart text-blue-900 dark:text-white " aria-hidden="true"></i>
                <h2 class="text-gray-500 dark:text-white font-semibold">Statistics</h2>
                <p class="text-gray-500 dark:text-white text-sm">Statistics deals with every aspect of data, including the planning of data collection  ...</p>
                <button class="mt-5 type-bg hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Ask a tutor</button>
            </div>
        </router-link>
      </div>
      
    </div>

  </div>
</template>

<script>

import Header from '../components/Header.vue'

export default {
  name: 'Dashboard',
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
.fa{
    font-size: 3em;
}
h2{
    font-size: 2em;
}
body{
  margin: 0;
}

/* width */
::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 0 #f3f4f6; */
  border-radius: 0px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  /* background: #f3f4f6; */
  border-radius: 0px;
}


</style>
