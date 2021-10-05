<template>
    <div class="pt-5 flex flex-col justify-between dark:bg-black h-screen">
      <div>

        <ul class="m-0 p-0 flex justify-center mb-12 mt-5 xl:flex hidden">
              <li class="inline-block selected ">
                  <a href="#" class="text-gray-300 hover:text-white mr-12 text-center block font-bold text-gray-300">
                      Sessions
                      <hr class="border-red">
                  </a>
              </li>
              <li class="inline-block">
                  <a href="#" class="text-gray-300 hover:text-white mr-12 text-center block font-light hover:font-bold text-gray-400">
                      History
                      <hr class="border-transparent">
                  </a>
              </li>
          </ul>
        
        <div class="mt-2 ml-6 text-gray-200 mb-4">Tutors</div>
        <router-link to="/" class="text-white bg-blue-900 dark:bg-gray-900 font-semibold focus:outline-none w-full p-3 hover:bg-blue-800  flex type-bg">
          <img src="kevin.jpg" class="h-12 w-12 rounded-full border-2 border-green-500 xl:block hidden"/>
          <div class="text-left">
            <p class="mt-2 ml-3">Kevin Smith</p>
            <p class="-mt-1 ml-3 font-thin text-xs">Your Tutor today</p>
          </div>
          
        </router-link>

        <button class="text-white font-semibold focus:outline-none w-full p-3 flex mt-12 flex justify-between">
         
            <div class="mt-2 ml-3 text-gray-200">Chats</div>
            <i class="fa fa-plus-circle mt-2 text-2xl -mt-1 hover:text-white text-gray-300" aria-hidden="true"></i>
          
        </button>
      </div>

    </div>    
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style>
.type-bg{
  background: #0a1aec;
}
.selected hr{
    border-top-width: 2px;
    width: 20px;
    margin: auto;
    border-color: red;
}
</style>
