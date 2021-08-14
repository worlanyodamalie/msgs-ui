<template>
    <div>
        <DefaultLayout>
        <p class="f4 fw8 text-green">Dashboard</p>
        <div class="pv4">
            <div class="d-grid stats-cards">
                <div v-for="(stat , index) in stats" :key="index" class="pa3 bg-white card">
                    <h1 class="f4 fw6">{{stat.title}}</h1>
                    <h3 class="fw5 fw5">{{stat.description}}</h3>
                </div>      
            </div>
            <div class="pv4 d-grid chart-card">
                <div class="pa3 card bg-white">
                   <h1 class="f4 fw6">Subscription chart</h1>
                   <div class="pv3">
                    <apexchart
                        width="500"
                        type="bar"
                        :options="chartOptions"
                        :series="series"
                    ></apexchart> 
                    </div>
                </div>
                <div class="pa3 card bg-white">
                   <h1 class="f4 fw6">Subscriber chart</h1>
                   <div class="pv3">
                    <apexchart
                        width="500"
                        type="bar"
                        :options="chartOptions"
                        :series="series"
                    ></apexchart> 
                    </div>
                </div>
            </div>
            
        </div>
        </DefaultLayout>
    </div>
</template>
<script>
import DefaultLayout from './Layout/DefaultLayout.vue'
import VueApexCharts from "vue3-apexcharts";
export default {
  name: 'Dashboard',
  components: {
    DefaultLayout,
    apexchart: VueApexCharts,
  },
  data(){
    return {
       stats:[
           {
             title: 'Subscribers',
             description: 30 
           },
           {
             title: 'Subscriptions',
             description: 50 
           },
           {
             title: 'Messages',
             description: 150 
           }
       ],
       chartOptions: {
            chart: {
            id: "vuechart-example",
            },
            xaxis: {
            categories: ['Price', 'Commodity', 'Location'],
            },
             dataLabels: {
                enabled: false
            }
        },
        series: [
        {
          name: "series-1",
          data: [30, 40, 35],
        },
      ]
       
    }
  }
}
</script>
<style  scoped>
  /* .stats-cards{
      grid-template-columns: repeat(auto-fit,minmax(15rem , 1fr));
      grid-gap: 2rem;
  }

  .card{
      box-shadow: 0 0 4px 2px rgb(0 0 0 / 3%);
      border-radius: 0.25rem;
  }

  .chart-card{
    grid-template-columns: repeat(auto-fit,minmax(30rem , 1fr));
    grid-gap: 2rem; 
  } */
</style>