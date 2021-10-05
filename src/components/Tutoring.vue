<template>
    <div class="mt-0">


        <div class="flex justify-between">
          <h1 class="p-2 ml-4 dark:text-white"><i class="fa fa-circle text-green-400 mr-2" aria-hidden="true"></i>Kevin</h1>

          <div class="px-3 mt-2">
              <button @click="this.darkMode">
                <span v-if="darkTheme" class="sun"><i class="fa fa-sun-o text-yellow-200 text-lg" aria-hidden="true"></i></span>
                <span v-else class="moon"><i class="fa fa-moon-o text-gray-100 text-lg" aria-hidden="true"></i></span>
              </button>
            </div>

        </div>


        <div class="p-3 tex-center mb-5 dark:text-white" id="tutor-profile">
            <img src="kevin.jpg" class="h-24 w-24 rounded-full flex-none m-auto"/>
            <p class="text-bold text-center">Say hi to your tutor, <span class="text-indigo-700 dark:text-gray-400">Kevin</span></p>
            <p class="text-sm text-center">They will be here to help you with your question.</p>

        </div>
            
         
          <div v-for="tutor in tutoring" :key="tutor.text" class="w-full dark:text-gray-200 p-4 hover:bg-gray-100 dark:hover:bg-gray-900 flex">
            


            <div class="flex-none mr-4 mt-4">
              <img :src="`${tutor.src}`" class="h-12 w-12 rounded-full flex-none"/>
            </div>
            <div>
              
              <div class="py-2 bg-white text-gray-800 rounded-xl py-3 px-6 rounded-br-full rounded-t-full shadow-md " v-html="tutor.text" >
                
              </div>
              <p class="text-sm text-dark ml-2 md:block hidden fs text-left"> {{tutor.time}} </p>
              
              
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Tutoring',
  data() {
    return {
      tutoring: [],
      darkTheme: false
    }
  },
  methods: {
    darkMode () {
      document.querySelector('html').classList.toggle('dark');
      this.darkTheme = !this.darkTheme;
    },
    timeNow() {
      return ((new Date().getHours()+ 11) % 12 + 1)+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    }
  },
  mounted() {
    let newComment = {
        src: 'kevin.jpg', name: 'Kevin Doh', time: this.timeNow(), text: 'Hi how can I help you?'
    };
    const v = this;
    setTimeout(function(){ 
      v.tutoring.push(newComment);
      // document.querySelector('#tutor-profile').classList.add('hidden')
      
    }, 5000);
      
  }
    
}
</script>

<style scoped>
.moon{
  background: #9da4b0;
  border-radius: 500px;
  padding: 3px 7px;
}
.sun{
  background: #333;
  border-radius: 500px;
  padding: 3px 6px;
}

</style>
