<template>
    <div>
        <div class="msglayout">
         <div class="sidebar pa4">
           <ul>
             <li><router-link to="/subscription">Subscriptions</router-link></li>
              <li><router-link to="/subscribers">Subscribers</router-link></li>
              <li><router-link to="/market-segment">Market Segment</router-link></li>
           </ul>
         </div>
         <div class="main-content">
           <slot></slot>
         </div>

      </div>
    </div>
</template>