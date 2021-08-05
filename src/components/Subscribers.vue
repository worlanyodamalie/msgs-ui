<template>
    <div>
      <DefaultLayout> 
         <p class="f4 fw8 text-green">Subscribers</p>
          <div class="d-grid add-message-sec">
            <input  class="light-green-input-border br2 input-reset ba b--black-20 pa2  db" placeholder="Search message here" type="text" >
            <router-link  class="f5 link  br2 ph3 pv3 tc  dib white bg-dark-green" to="/add-subscriber"> Add new subscriber </router-link>
          </div>
         <!-- <div v-if="isEmpty"  class="flex flex-column justify-center items-center pv6">
          <img class="pb4" src="@/assets/img/empty_inbox.svg" alt="">
          <p class="mb2 mt2 tc f6 fw5">No subscribers added yet</p>
          
         </div> -->
         <div >
           <div  v-if="subscribers.length">
               <div class="overflow-auto pv5">
                  <table class="f5 w-100 " cellspacing="0">
                    <thead>
                      <tr>
                        <th class="fw6 bb b--black-20 tl pb3 pr3 ">SUBSCRIBER</th>
                        <th class="fw6 bb b--black-20 tl pb3 pr3 ">PHONE NUMBER</th>
                        <th class="fw6 bb b--black-20 tl pb3 pr3 ">DATE</th>
                      </tr>
                    </thead>
                    <tbody class="lh-copy">
                      <tr v-for="(subscriber , key) in subscribers" :key="key">
                        <td class="pv3 pr3 bb b--black-20">{{subscriber.name}}</td>
                        <td class="pv3 pr3 bb b--black-20">{{subscriber.phone_number}}</td>
                        <td class="pv3 pr3 bb b--black-20">{{ datefilter(subscriber.created_at) }}</td>
                      </tr>
                    </tbody>
                  </table>
                 </div>
           </div>
           <div class="flex flex-column justify-center items-center pv6" v-else>
                <img class="pb4" src="@/assets/img/empty_inbox.svg" alt="">
                <p class="mb2 mt2 tc f6 fw5">No subscribers added yet</p>
                <p class="mb2 mt2 tc f6 fw5">Click on the button below to add subscribers</p>
                <router-link class="mt2 f5 link  br2 ph3 pv3 tc  dib white bg-dark-green" to="/add-subscriber"> Add new subscriber </router-link>
           </div>
             

         </div>
      </DefaultLayout>    



        
    </div>
</template>
<script>
import axios from 'axios'
import DefaultLayout from './Layout/DefaultLayout.vue'
import moment from 'moment'

export default {
    name: 'Subscribers',
    components: {
      DefaultLayout
    },
    data(){
      return {
       subscribers: []
      }
    },
    
    methods: {
       
      getSubscribers(){
            axios
                .get(`${process.env.VUE_APP_API_URL}/subscribers` , { 
                    headers: { 'Accept': 'application/json' , 'Authorization': 'Bearer' + ' ' + localStorage.getItem("usertoken") } })
               .then(
                   (response) => {
                       this.subscribers = response.data.data
                    }
                )
                .catch((err) => {
                     console.log(err.response)
                } )
        },
      datefilter(date){
          return moment(date).format('YYYY-MM-DD')
       }  
    },
    created(){
        this.getSubscribers()
    }

}
</script>