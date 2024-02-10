<template>
  <div>
   <h1> Mes articles:</h1>
   <div v-if="isLoading">
      <span class="spinner text-white bg-blue-600 p-3 rounded-xl h-5 w-5 animate-pulse"> Chargement...</span>
   </div>
  <div v-else>
      <ul v-for="(post, index) in posts" :key="index">
      <li>{{  post.title }}</li>
   </ul>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
let posts = ref<any>([])
let isLoading= ref<any>(false)
let isAuhtenticated = ref<any>(false)
const router = useRouter()

onMounted(async ()=>{
  isLoading.value = true;
 posts.value = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
  let token = sessionStorage.getItem('token');
  console.log("token", token)
  if (token ==='' || token === undefined|| token===null) {
    router.push('/connexion')
  }
 isLoading.value = false;

})

</script>

<style>

</style>