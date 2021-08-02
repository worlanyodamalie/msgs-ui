<template>
    <div>
      <DefaultLayout> 
         <p class="f4 fw8 text-green">Subscribers</p>
         <div v-if="isEmpty"  class="flex flex-column justify-center items-center pv6">
          <img class="pb4" src="@/assets/img/empty_inbox.svg" alt="">
          <p class="mb2 mt2 tc f6 fw5">No subscribers added yet</p>
          
         </div>
         <div v-else>
             <div class="overflow-auto pv5">
              <table class="f5 w-100 " cellspacing="0">
                <thead>
                  <tr>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 ">DATE ADDED</th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 ">SUBSCRIBER</th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 ">PHONE NUMBER</th>
                    <th class="fw6 bb b--black-20 tl pb3 pr3 ">DATE</th>
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
      </DefaultLayout>    



        
    </div>
</template>
<script>
import axios from 'axios'
import DefaultLayout from './Layout/DefaultLayout.vue'


export default {
    name: 'Subscribers',
    components: {
      DefaultLayout
    },
    data(){
      return {
       isEmpty: false,
       subscribers: null
      }
    },
    methods: {
       
        // loginSanctum(){
        //     axios.get()
        //           then()    
        // },

        getSubscribers(){
            axios
                .get('https://sim-api.nimdee.co/subscribers' , { 
                    headers: {"Access-Control-Allow-Origin": "*", 'Accept': 'application/json' , 'Authorization': 'Bearer 1|wZCd1ekHLlAKO3EobE6i0d22qt6Ma0R3y60tbyN2' ,  } })
               .then(
                   (response) => {
                       this.subscribers = response
                    }
                )
                .catch((err) => {
                     console.log(err.response)
                } )
        }
    },
    created(){
        this.getSubscribers()
    }

}
</script>