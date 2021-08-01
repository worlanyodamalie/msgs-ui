<template>
    <div>
        <p class="f4 fw8 text-green ">New Message</p>
         
        <li class="pt3 fw6 f4 add-message-title">Message Details</li>
        <div class="pv4">
            <label class="mb2 fw5 f5 dib ">Message Title</label>
            <input  class="border-input-grey br2 input-reset  pa3  db w-100" placeholder="Give your message a name" type="text" >
        </div>
        <div class="pv2 flex flex-column">
            <label class="mb2 fw6 f5 dib ">Upload Audio Message</label>
             <ul v-if="files.length" class="audio-box pv4 ph3">
                <li v-for="file in files" :key="file.id">
                    <span>{{file.name}}</span>
                </li>
            </ul> 
            <div v-else>
                <file-upload  class="f5 link  br2 ph3 pv3 tc white bg-light-blue w-20"
                          post-action=""
                          accept="audio/*"
                          v-model="files"
                          ref="upload"
                          extensions="mp3"
                          > Add audio file 
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
         <div class="flex justify-end">
             <a class="mt2 f5 link  br2 ph3 pv2 tc  dib white bg-green">Schedule</a>
         </div>

        
    </div>
</template>
<script>
import { ref,  watch} from 'vue'
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
           days: null,
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
    setup(){
       const upload = ref(null)

       let files = ref([])

       watch(upload,function(newUpload){
          console.log("Testing file" , newUpload.files)
       })

       return {
           upload,
           files
       }

       


    }
   
}
</script>