<template>
    <div>
        <div  class="login-wrapper">
            <form class="flex flex-column login-form pv6" @submit.prevent="submitLogin">

                <div class="pv2">
                    <label class="mb2 fw5 f5 dib ">Username</label>
                    <input  class="border-input-grey br2 input-reset  pa3  db w-100" v-model="username" placeholder="Username" required type="text"  >
                </div>
                <div class="pv2">
                    <label class="mb2 fw5 f5 dib ">Password</label>
                    <input  class="border-input-grey br2 input-reset  pa3  db w-100" v-model="password" placeholder="Password" required type="text"  >
                </div>
                <div class="pt3">
                    <button class="border-none mt2 f5 link  br2 ph3 pv2 tc  dib white bg-green w-100" >Login</button>
                </div>
            </form>

        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
// import router from './router'

export default {
    name: 'Login',
    data(){
        return {
           username: '',
           password: ''
        }
    },
    methods: {
        
        
        submitLogin(){
            axios.get('https://sim-api.nimdee.co/sanctum/csrf-cookie').then( (response) => {
                   console.log("csrf token" , response)
                    
                    axios.post(
                            'https://sim-api.nimdee.co/login'  ,
                            {
                                "username": this.username,
                                "password": this.password
                            },
                            { 
                                    headers: { 
                                        "Access-Control-Allow-Origin": "*", 
                                        'Accept': 'application/json' ,
                                        } 
                                    }
                        )
                        .then(
                            (response) => {
                                console.log(response)
                                this.$router.push({ path: '/subscription' })
                            }
                        )
                        .catch((err) => {
                            console.log(err.response)
                        } )
                     } )
            
        }
    }
}
</script>
<style lang="css" scoped>
   .login-wrapper{
       background: #FAFBFC;
       height: 100vh;
   }

   .login-form{
        margin-left: auto;
        margin-right: auto;
        width: 26rem;
   }
</style>