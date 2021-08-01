<template>

      <div class="msglayout">
         <div class="sidebar pa4">
           <ul>
             <li><router-link to="/">Subscriptions</router-link></li>
              <li><router-link to="/">Subscribers</router-link></li>
           </ul>
         </div>
         <div class="main-content pa4">
           <router-view />
         </div>

      </div>

  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
