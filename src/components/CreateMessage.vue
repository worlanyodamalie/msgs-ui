<template>
    <div>
        <form @submit.prevent="submitSubscription">
            <p class="f4 fw8 text-green ">New Message</p>
     
            <li class="pt3 fw6 f4 add-message-title">Message Details</li>
            <div class="pv4">
                <label class="mb2 fw5 f5 dib ">Message Title</label>
                <input  class="border-input-grey br2 input-reset  pa3  db w-100" v-model="messagetitle" placeholder="Give your message a name" type="text"  >
            </div>
            <div class="pv2 flex flex-column">
            <label class="mb2 fw6 f5 dib ">Upload Audio Message</label>
             <ul v-if="files.length" class="audio-box pv4 ph3">
                <li v-for="file in files" :key="file.id">
                    <label class="fw5 f5 mb3 dib">{{file.name}}</label>
                    <div class="flex gap-3 pb2 items-center">
                        <audio controls :src="audiosrc"></audio>
                        <a @click="remove(file)" ><img src="@/assets/img/delete.svg" alt=""></a>
                    </div>
                    <div class="pv3">
                        <label class="fw5 f5 dib mb3">Select duration for price audio</label>
                        <div class="flex gap-3">
                            <div>
                               <label class="mb2 fw5 f5 dib">Start duration</label>
                               <input class="border-input-grey br2 input-reset pa2 w-100" type="number" min="0" max="60"  v-model="pricetime.start" >
                            </div>
                            <div>
                               <label class="mb2 fw5 f5 dib">End duration</label>
                               <input class="border-input-grey br2 input-reset pa2 w-100" type="number" min="0" max="60"  v-model="pricetime.end" >
                            </div>
                        </div>
                        
                    </div>
                    <div class="pv3">
                        <label class="fw5 f5 dib mb3">Select duration for commodity audio</label>
                        <div class="flex gap-3">
                            <div>
                               <label class="mb2 fw5 f5 dib">Start duration</label>
                               <input class="border-input-grey br2 input-reset pa2 w-100" type="number" min="0" max="60"  v-model="commoditytime.start" >
                            </div>
                            <div>
                               <label class="mb2 fw5 f5 dib">End duration</label>
                               <input class="border-input-grey br2 input-reset pa2 w-100" type="number" min="0" max="60"  v-model="commoditytime.end" >
                            </div>
                        </div>
                        
                    </div>
                    <div class="pv3">
                        <label class="fw5 f5 dib mb3">Select duration for market audio</label>
                        <div class="flex gap-3">
                            <div>
                               <label class="mb2 fw5 f5 dib">Start duration</label>
                               <input class="border-input-grey br2 input-reset pa2 w-100" type="number" min="0" max="60"  v-model="markettime.start" >
                            </div>
                            <div>
                               <label class="mb2 fw5 f5 dib">End duration</label>
                               <input class="border-input-grey br2 input-reset pa2 w-100" type="number" min="0" max="60"  v-model="markettime.end" >
                            </div>
                        </div>
                        
                    </div>
                </li>
                
            </ul> 
            <div v-else>
                <file-upload  class="f5 link  br2 ph3 pv3 tc white bg-light-blue w-20"
                          post-action=""
                          accept="audio/*"
                          v-model="files"
                          ref="upload"
                          extensions="mp3"
                          @input-file="inputFile"> 
                          Add audio file 
                </file-upload>
            </div>
             

            <!-- <button class="w-10 mt2" @click.prevent="upload.active = true">upload</button>   -->
                      
        </div>
         <li class="pt3 fw6 f4 add-message-title">Schedule Time</li>
         <div class="flex gap-3 pv4">
            <div>
                <label class="mb2 fw5 f5 dib">Select Day</label>
                <input class="border-input-grey br2 input-reset pa2 w-100" type="date" v-model="scheduledate" >
            </div>
            <div>
                <label class="mb2 fw5 f5 dib">Select Time</label>
                <input class="border-input-grey br2 input-reset pa2 w-100" type="time"  v-model="scheduletime" >

            </div>
         </div>
         <div class="flex pv3">
             <div >
                 <label class="mb2 fw5 f5 dib">Select Day(s) To Send</label>
                  <Multiselect
                    v-model="days"
                    mode="tags"
                    :searchable="true"
                    :createTag="true"
                    :options="options"
                    class=" pv2"
                    />
             </div>

         </div>
         <div class="flex pv3">
               <div>
                   <label class="mb2 fw5 f5 dib">Ends on</label>
                   <div class="flex gap-3 pv4">
                        <div>
                            <label class="mb2 fw5 f5 dib">Select Day</label>
                            <input class="border-input-grey br2 input-reset pa2 w-100" type="date" v-model="scheduleEnddate" >
                        </div>
                    <div>
                    <label class="mb2 fw5 f5 dib">Select Time</label>
                    <input class="border-input-grey br2 input-reset pa2 w-100" type="time"  v-model="scheduleEndtime" >

                 </div>
         </div>

               </div>
         </div>
         <div class="flex justify-end">
             <button class="border-none mt2 f5 link  br2 ph3 pv2 tc  dib white bg-green" >Schedule</button>
         </div>

        </form>
               
    </div>
</template>
<script>
// import { ref,  watch} from 'vue'
import FileUpload from 'vue-upload-component'
import moment from 'moment'
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'

export default {
    name: 'CreateMessage',
    components: {
        FileUpload,
        Multiselect
    },
    data(){
       return {
           scheduledate: moment().format('YYYY-MM-DD'),
           scheduletime: moment().format('H:mm'),
           scheduleEnddate: moment().format('YYYY-MM-DD')  , 
           scheduleEndtime: moment().format('H:mm')  , 
           days: null,
           audiosrc: null,
           messagetitle: null,
           pricetime: {
              start: null,
              end: null 
            },
            commoditytime: {
              start: null,
              end: null 
            },
            markettime: {
              start: null,
              end: null 
            },
           files: [],
           options: [
               'Monday',
               'Tuesday',
               'Wednessday',
               'Thursday',
               'Friday',
               'Saturday'
           ]
       }
    } ,
    methods: {
        inputFile(newFile,oldFile){
          if (newFile && !oldFile) {
                // Add file
                console.log("This is the new file" , newFile)
                newFile.blob = ''
                let URL = (window.URL || window.webkitURL)
                if (URL) {
                    newFile.blob = URL.createObjectURL(newFile.file)
                    this.audiosrc = newFile.blob
                }


            }
        },
        remove(){
            this.files.pop()
            // console.log("remove" , file)
            // console.log(this.files.pop())
        },
        submitSubscription(){
            const formData = new FormData()
            formData.append('message_title', this.messagetitle)
            formData.append('audio_file', this.files)
            console.log("tis.files" , this.files)
            console.log("form data" , formData.audio_file)
        }

    }
    // setup(){
    //    const upload = ref(null)

    //    let files = ref([])

    //    watch(upload,function(newUpload){
    //       console.log("Testing file" , newUpload)
    //    })

    //    return {
    //        upload,
    //        files
    //    }


    // }
   
}
</script>