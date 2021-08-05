<template>
    <div>
        <DefaultLayout>
            <div>
                <p class="f4 fw8 text-green ">Market Segments</p>
                <form enctype="multipart/form-data"  @submit.prevent="submitSegment">
                    <div class="w-40 pv3">
                        <label class="fw5 f5 mb3 dib">Title</label>
                        <input type="text" class="form-control" v-model="title" placeholder="">
                    </div>
                    <div class="w-40 pv3">
                        <label class="mb2 fw6 f5 dib pv3 ">Select Market Segment</label>
                        <select v-model="segmentType" class="form-control" >
                            <option v-for="segment in segments" :value="segment.id" :key="segment.id">{{segment.type }} </option>
                        </select> 
                    </div>
                    <div class="w-40 pv3">
                        <label class="mb2 fw6 f5 dib pv3 ">Select Subscription(s)</label>
                        <Multiselect
                                v-model="selectedsubscriptions"
                                mode="tags"
                                :searchable="true"
                                :createTag="true"
                                :options="subscriptions"
                                class="pv2"
                        /> 
                    </div>
                    <div>
                        <label class="mb2 fw6 f5 dib pv3 ">Upload Audio Message</label>
                       <ul v-if="prices.length" class="audio-box pv4 ph3">
                            <li v-for="(price , key ) in prices" :key="key">
                                <div class="flex items-center gap-3 pb4">
                                    
                                    
                                    <div class="flex flex-column">
                                        <label class="fw5 f5 mb3 dib">{{price.name}}</label>
                                        <audio controls :src="priceaudio"></audio>
  
                                    </div>
                                    
                                    
                                </div>
                            </li>
                        </ul>
                        <div class="flex flex-column"> 
                            <file-upload  class="f5 link  br2 ph3 pv3 tc white bg-light-blue w-20"
                                    post-action=""
                                    accept="audio/*"
                                    v-model="prices"
                                    ref="segmentupload"
                                    extensions="mp3"
                                    
                                    :multiple="true"
                                    @input-file="priceSrc"> 
                                    Add audio file 
                            </file-upload>
                       </div>
                    </div>
                    
                    <div class="flex justify-end">
                       <button class="border-none mt2 f5 link  br2 ph3 pv2 tc  dib white bg-green w-20" >Save </button>
                    </div>
                    
                </form>
                
            </div>
        </DefaultLayout>
    </div>
</template>
<script>
import DefaultLayout from './Layout/DefaultLayout.vue'
import axios from 'axios'
import FileUpload from 'vue-upload-component'
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'


export default {
    name: 'MarketSegment',
    components: {
        DefaultLayout,
        FileUpload,
        Multiselect
    }, 
    data(){
        return {
            segments: null,
            segmentType: '',
            prices: [],
            priceaudio:[],
            subscriptions: [
                "Market Subscriptions",
                "Commodity Subscriptions"
            ],
            selectedsubscriptions: null,
            // pricesubscription:[],
            title: ''
        }
    } ,
    created(){
        this.getSegments()
    },
    methods: {
        getSegments(){
                // axios.defaults.withCredentials = true;
                // const token =  this.$store.getters.getUser.data.token
                axios.get('https://sim-api.nimdee.co/markets/segment-types' , 
                       
                         { 
                            headers: { 
                                // "Access-Control-Allow-Origin": "*", 
                                'Accept': 'application/json' ,
                                'Authorization': 'Bearer' + ' ' + localStorage.getItem("usertoken")
                                        } 
                            }
                        )
                            .then((response) => {
                                console.log("segment" , response.data.data)
                                return  this.segments = response.data.data

                            })
                            .catch((err) => {
                                console.log("error" , err.response)
                            })

            
            
            },
        priceSrc(newFile){
            // console.log("new file",newFile)
            // console.log("args",args)
            newFile.blob = ''
            let URL = (window.URL || window.webkitURL)
            if (URL) {
                newFile.blob = URL.createObjectURL(newFile.file)
                console.log("blob",newFile.blob)
                this.priceaudio.push(newFile.blob)
                // this.pricesubscription.push('')
            }
        } ,
        submitSegment(){
             
              let formData = new FormData();
              formData.append('title' , this.title)
              formData.append('market_segment_type_id' , this.segmentType)

              axios.post(`${process.env.VUE_APP_API_URL}/subscriptions/segments` , 
                         formData ,
                         { 
                            headers: { 
                                'Accept': 'multipart/form-data' ,
                                'Authorization': 'Bearer' + ' ' + localStorage.getItem("usertoken")
                                        } 
                            }
                        )
                        .then((response) => {
                            if (response.status){
                                console.log("here")
                                this.$router.push({ path: '/market-segment' })
                            }
                        })
                        .catch((err) => {
                            err.response
                        })
        }   
    }  
}
</script>
<style lang="css" scoped>
 .list-style-none{
     list-style: none !important;
 }

 .form-control{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
 }
</style>