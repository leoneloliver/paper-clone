<template>
  <div class="md:block hidden h-full py-2 px-6 overflow-y-scroll dark:bg-gray-800 relative bg-gray-300">
    
    <div class="w-full rounded-lg  dark:text-gray-300">
      <div class="flex items-center p-3">
        <p class="text-lg font-bold text-center w-full">Shared Files</p>
        
      </div>
      <div class="text-center h-full align-middle pt-12">
        
        <i class="fa fa-file-text-o text-7xl text-blue-500 dark:text-gray-500 mb-3" aria-hidden="true"></i>
        <p class="text-center text-sm">All your files will appear here<p/>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'FilesBar'
}
</script>

<style scoped>
.ico-search{
  margin-top: 16px;
}
</style>
