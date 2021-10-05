<template>

<div class="h-screen">
<Header />
    <div class="grid grid-cols-5 justfy-between h-full ">
      
      <div class="md:block hidden">
        <!-- side bar -->
        <Sidebar />
        <!-- end sidebr -->
      </div>
      <div class="md:col-span-3 col-span-5 relative bg-gray-100 dark:bg-gray-900 h-screen">
        <div class="flex justify-between">
          <h1 class="p-2 ml-4 dark:text-white"><i class="fa fa-file-text-o text-black dark:text-white mr-2" aria-hidden="true"></i>Essays</h1>
        </div>
        <div class="text-center mt-24 font-semibold">
              <i class="fa fa-folder-open-o" aria-hidden="true"></i> Empity Folder
        </div>
      </div>
      <div>
          <!-- trending -->
        <FilesBar />
        <!-- end trending -->
      </div>
    </div>

  </div>
</template>

<script>

import Sidebar from '../components/SideBar.vue'
import FilesBar from '../components/FilesBar.vue'
import Header from '../components/Header.vue'

export default {
  name: 'Essay',
  props: {
    title: String
  },
  components: {
    Header,
    Sidebar,
    FilesBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
