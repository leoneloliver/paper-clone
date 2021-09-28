<template>
  <div>
    <div class="flex flex-col overflow-y-auto mb-3">
      <div v-for="message in messages" :key="message.content" class="p-4 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 flex justify-end">
        
        <div class="-mt-3 mr-2">
          
          <div class="py-2 bg-blue-800 text-white rounded-xl  py-3 px-6 rounded-bl-full rounded-t-full shadow-md type-bg" v-html="message.content" >
           
          </div>
          <p class="text-sm text-dark ml-2 md:block hidden text-right fs"> {{ message.time }} </p>
          
        </div>
        <div class="flex-none mr-4">
          <img :src="`${message.src}`" class="h-12 w-12 rounded-full flex-none"/>
        </div>
      </div>
    </div>

    <div class="inset-x-0 bottom-0 fixed block w-full">
      <div class="grid grid-cols-5 gap-2 ">
        <div class="md:col-start-2 md:col-end-5 col-start-1 col-end-6 bg-gray-100 dark:bg-gray-900 pb-5 mb-0">
            <div>
              <form v-on:submit.prevent = "addNewMessage" class="w-full px-4 relative">
                <input type="text" v-model="message.content" placeholder="Type your message!" class="mt-2 pb-4 w-full focus:outline-none dark:bg-gray-800 dark:text-gray-300 bg-white border h-16 border-gray-200 dark:border-gray-600 rounded p-2 pt-0" />
                <input type="submit" value="Submit" class="hidden" />
              </form>
          </div>
          <div class="flex justify-end w-full pr-5 mt-3">
            <button class="text-white bg-paper rounded-md font-semibold focus:outline-none p-2 px-5 hover:bg-blue-800 mr-2 type-bg"><i class="fa fa-paperclip text-white" aria-hidden="true"></i> Send file </button>
            <button class="text-white bg-paper rounded-md font-semibold focus:outline-none  p-2 px-5 hover:bg-blue-800 type-bg"><i class="fa fa-pencil text-white" aria-hidden="true"></i> Draw </button>
            <i class="fa fa-smile-o absolute right mt-12 smile dark:text-gray-200" aria-hidden="true"></i>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages',
  data() {
    return {
      messages: [],
      message: {content: ''}
    }
  },
  methods: {
    addNewMessage () {
      let newTweet = {
        content: this.message.content,
        src: 'profile.jpg', 
        name: 'Riana Maia',
        time: this.timeNow()
      };
      if(this.message.content){
        this.messages.push(newTweet)
        this.message.content = ''
      }
      
    },
    timeNow() {
      return ((new Date().getHours()+ 11) % 12 + 1)+':'+new Date().getMinutes()+':'+new Date().getSeconds();
    }
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

.type-bg{
  background: #0a1aec;
}

.msg-box{
  width: 53%;
  max-width: 775px;
}
.smile{
    position: absolute;
    top: -24px;
    margin-right: 12px;
    font-size: 30px;
    color: #0a1aec;
}

</style>
