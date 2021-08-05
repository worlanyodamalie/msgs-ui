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
            
            // axios.get(`${process.env.VUE_APP_API_URL}/sanctum/csrf-cookie`)
            //       .then( (response) => {
            //              console.log(response)
                         
                    
            //          } )
            console.log(process.env.VUE_APP_API_URL)
             axios.post(`${process.env.VUE_APP_API_URL}/login` ,{"username": this.username,"password": this.password},
                            { 
                                headers: { 
                                    'Accept': 'application/json',
                                    'Access-Control-Allow-Origin': '*' 
                                } 
                                
                                }
                        )
                        .then(
                            (response) => {
                                // console.log("Tk" , response.data)
                                const userdata = response.data
                                // console.log(userdata.data.token)
                                localStorage.setItem("usertoken" , userdata.data.token)
                                // localStorage.setItem("usertoken" , JSON.stringify(response.data))
                                // this.$store.commit("adduser", response.data )
                                return this.$router.push({ path: '/subscription' })
                            }
                        )
                        .catch((err) => {
                            console.log(err.response)
                        } )
            
            
            
        }
    }
}
</script>
<style lang="css" scoped>
   .login-wrapper{
       background: #FAFBFC;
       min-height: 100vh;
   }

   .login-form{
        margin-left: auto;
        margin-right: auto;
        width: 26rem;
   }
</style>