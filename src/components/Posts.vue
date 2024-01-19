<template>
   <div>

    <h1>articles</h1>
    <div v-if="ess.length===0">
      chargement de donnes...
    </div>
    <div v-else>
        <div>
            le nombre total des ess 
            {{  ess.length}}
        </div>
        <ul v-for="(item, index) in ess" :key="index">
          <li>{{ item.codeEtablissementSoinSante}}</li>
        </ul>
    </div>
   </div>
</template>

<script setup lang="ts">
import {ref, onMounted, reactive} from 'vue';
import axios from "axios"
let ess = ref([])
onMounted(async()=>{
  ess.value = (await axios.get('https://ussd.anicns.cd:9443/territorial/ess/')).data
   console.log("mes data",ess)

})

</script>

<style>

</style>