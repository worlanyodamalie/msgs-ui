<template>

      <div>
          <router-view />
      </div> 
      <!-- <div class="msglayout">
         <div class="sidebar pa4">
           <ul>
             <li><router-link to="/subscription">Subscriptions</router-link></li>
              <li><router-link to="/subscribers">Subscribers</router-link></li>
           </ul>
         </div>
         <div class="main-content">
           <router-view />
         </div>

      </div> -->

  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Hind Siliguri', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
