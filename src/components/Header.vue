<template>
  <div class="p-4 grid grid-cols-5 gap-2 dark:bg-black">
      <div class="flex justify-center md:col-span-1 col-span-2">
        <img class="max-w-xs object-right logo" src="paper_logo.png" />

      </div>
      <div class="col-span-3">
          <ul class="m-0 p-0">
              <li class="md:inline-block hidden">
                    <a class="text-gray-300 hover:text-white md:mr-12 mr-5 text-center block">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i><br>
                        Dashboard
                        <hr class="border-transparent">
                    </a>
              </li>
              <li class="inline-block">
                    <router-link to="/" class="text-gray-300 hover:text-white mr-12 text-center ml-5 md:ml-0 block">
                        <i class="fa fa-users" aria-hidden="true"></i><br>
                        chart
                        <hr class="border-transparent">
                    </router-link>
              </li>
              <li class="inline-block">
                    <router-link to="/essay" class="text-gray-300 hover:text-white mr-12 text-center block">
                        <i class="fa fa-file-text-o" aria-hidden="true"></i><br>
                        Essay <span class="md:inline-block hidden">Review</span>
                        <hr class="border-transparent">
                    </router-link>
              </li>
             
          </ul>
      </div>
      <div class="flex justify-center text-white md:flex hidden">
          <i class="fa fa-user-circle-o text-2xl -mt-1" aria-hidden="true"></i>
          <div class="bg-white text-blue-900 h-6 pb-2 px-2 ml-3 rounded-sm">
              EN
          </div>

      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.logo{
    max-width: 180px;
}
@media only screen and (max-width: 1090px) {
   .logo{
        max-width: 90%;
        height: fit-content;
    }
}
.border-transparent{
    border-top-width: 2px;
}
.router-link-exact-active hr{
    border-top-width: 2px;
    width: 20px;
    margin: auto;
    border-color: #34d399 !important;
}

</style>
