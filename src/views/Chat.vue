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
        <Tutoring  :class="[message_count >= 2 ? 'hide-tutor-profile' : '']"/>
        
        <!-- tweets -->
        <Messages @childToParent="updateMessageLength" />
       
        <!-- end tweets -->
        
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
import Messages from '../components/Messages.vue'
import FilesBar from '../components/FilesBar.vue'
import Tutoring from '../components/Tutoring.vue'
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  props: {
    title: String
  },
  data () {
    return { 
      message_count: 0, 
    }
  },
  components: {
    Header,
    Sidebar,
    Messages,
    Tutoring,
    FilesBar
  },
  methods: {
    updateMessageLength(data) {
      this.message_count = data;
    },
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
