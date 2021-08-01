<template>
    <div>
        <p class="f4 fw8 text-green">Messages</p>
        <div class="d-grid add-message-sec">
            <input  class="light-green-input-border br2 input-reset ba b--black-20 pa2  db" placeholder="Search message here" type="text" >
            <router-link  class="f5 link  br2 ph3 pv3 tc  dib white bg-dark-green" to="/create-message"> Add new message </router-link>
        </div>
        <div v-if="isEmpty" class="flex flex-column justify-center items-center pv6">
          <img class="pb4" src="@/assets/img/empty_inbox.svg" alt="">
          <p class="mb2 mt2 tc f6 fw5">No messages added yet</p>
          <p class="mb2 mt2 tc f6 fw5">Click on the button below to add message</p>
          <router-link class="mt2 f5 link  br2 ph3 pv3 tc  dib white bg-dark-green" to="/create-message"> Add new message </router-link>
        </div>
        <div v-else> 
            <div class="overflow-auto pv5">
              <table class="f5 w-100 " cellspacing="0">
                <thead>
                  <tr>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 ">DATE ADDED</th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 ">TITLE</th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 ">CREATED BY</th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 ">ACTIONS</th>
                  </tr>
                </thead>
                <tbody class="lh-copy">
                  <tr>
                    <td class="pv3 pr3 bb b--black-20">01-08-21</td>
                    <td class="pv3 pr3 bb b--black-20">Test</td>
                    <td class="pv3 pr3 bb b--black-20">Test</td>
                    <td class="pv3 pr3 bb b--black-20">Test</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
       isEmpty: false
    }
  }
}
</script>
<style scoped>
  
</style>