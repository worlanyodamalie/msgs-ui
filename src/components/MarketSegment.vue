<template>
    <div>
        <DefaultLayout>
            <div>
                <p class="f4 fw8 text-green ">Market Segment</p>
                <ul>
                    <li></li>
                </ul>
            </div>
        </DefaultLayout>
    </div>
</template>
<script>
import DefaultLayout from './Layout/DefaultLayout.vue'
import axios from 'axios'

export default {
    name: 'MarketSegment',
    components: {
        DefaultLayout
    }, 
    data(){
        return {
            segments: null
        }
    } ,
    created(){
        this.getSegments()
    },
    methods: {
        getSegments(){
            // axios.defaults.withCredentials = true;

                axios.get('https://sim-api.nimdee.co/markets/segment-types' , 
                         { 
                            headers: { 
                                // "Access-Control-Allow-Origin": "*", 
                                'Accept': 'application/json' ,
                                'Authorization': 'Bearer 9|CyJD6Y1Q4KKpl9Cg7f933qYPvKEN5kx5EQQWPfbI'
                                        } 
                            }
                        )
                            .then((response) => {
                                console.log(response)

                            })
                            .catch((err) => {
                                console.log("error" , err.response)
                            })

            // axios.get('https://sim-api.nimdee.co/sanctum/csrf-cookie'  )
            //      .then( (response) => {
            //          console.log(response)
                       
              
                            
            //                 } )
            //                 .catch((err) => {
            //                     console.log("cors" , err.response)
            //                 })
            
            }
    }  
}
</script>