<template>
    <div>
        <p class="f4 fw8">Messages</p>
        <div class="d-grid add-message-sec">
            <input  class="msgs-input input-reset ba b--black-20 pa2  db" placeholder="Search message here" type="text" >
            <a class="f5 link  br2 ph3 pv3 tc  dib white bg-dark-green"> Add new message </a>
        </div>
        <div v-if="isEmpty" class="flex flex-column justify-center items-center pv6">
          <img class="pb4" src="@/assets/img/empty_inbox.svg" alt="">
          <p class="mb2 mt2 tc f6 fw5">No messages added yet</p>
          <p class="mb2 mt2 tc f6 fw5">Click on the button below to add message</p>
          <router-link class="mt2 f5 link  br2 ph3 pv2 tc  dib white bg-dark-green" to=""> Add new message </router-link>
         

        </div>
    </div>
</template>
<script>
export default {
  name: 'Messages',
  props: {
    msg: String
  },
  data(){
    return {
       isEmpty: true
    }
  }
}
</script>
<style scoped>
  
</style>