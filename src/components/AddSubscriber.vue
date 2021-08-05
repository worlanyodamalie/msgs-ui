<template>
    <div>
        <DefaultLayout> 
            <form class="w-50" @submit.prevent="submitSubscriber">
                <p class="f4 fw8 text-green ">New Subscriber</p>
                <div class="pv4">
                    <label class="mb2 fw5 f5 dib ">Name</label>
                    <input  class="border-input-grey br2 input-reset  pa3  db w-100" v-model="name" placeholder="Enter name" type="text" required  >
                </div>
                <div class="pv4">
                    <label class="mb2 fw5 f5 dib ">Phone Number</label>
                    <input  class="border-input-grey br2 input-reset  pa3  db w-100" v-model="phone_number" placeholder="Enter phone number" type="text" required  >
                </div>
                <div class="flex justify-end">
                  <button class="border-none mt2 f5 link  br2 ph3 pv2 tc  dib white bg-green" >Submit</button>
                </div>
            </form>
        </DefaultLayout>
    </div>
</template>
<script>
import axios from 'axios'
import DefaultLayout from './Layout/DefaultLayout.vue'

export default {
    name: 'AddSubscribers',
    components: {
      DefaultLayout
    },
    data(){
      return {
       name: null,
       phone_number: null
      }
    },
    methods: {
        
        submitSubscriber(){
            let formData = new FormData();
            formData.append('name' , this.name)
            formData.append('phone_number' , this.phone_number)

            axios.post(`${process.env.VUE_APP_API_URL}/subscribers` , 
                         formData ,
                         { 
                            headers: { 
                                'Accept': 'application/json' ,
                                'Authorization': 'Bearer' + ' ' + localStorage.getItem("usertoken")
                                        } 
                            }
                        )
                        .then((response) => {
                            if (response.status){
                                console.log("here")
                                this.$router.push({ path: '/subscribers' })
                            }
                        })
                        .catch((err) => {
                            console.log(err.response)
                        })
        }

        
    }
}
</script>