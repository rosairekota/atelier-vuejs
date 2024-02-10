<template>
  <div class="min-h-screen flex items-center justify-center container">
    <h1>Se connecter</h1>
    {{ user.firstName }} -{{  user.token }} <pre>
      {{  user.email }}
    </pre>
     <div v-if="error!== ''">error</div>
    <form  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 form"  @submit="onSubmit">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Nom d'utilisateur
        </label>
        <v-text-field/>
        <input
          class=" shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control "
          :class="{'border-red-500':errorEmail!==''}"
          id="username"
          name="username"
          type="text"
          placeholder="Votre nom d'utilisateur"
          v-model="user.username"
        />
        <span class="text-red-500"> {{  errorEmail }}</span>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mot de passe
        </label>
        <input
        
          class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Votre mot de passe"
          v-model="user.password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
        {{ displayBtn }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref , reactive , onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import VTextField from  "./ui/VTextField.vue"

// let username = ref("")
// let password = ref("")
let isLoading = ref(false)
let error = ref("")
let errorEmail= ref("")
let user = reactive<any>({
  username: '',
  password:'',
  token:''
})

const router = useRouter();

const displayBtn = computed(()=>{
   return isLoading.value  === true || isLoading.value === null ? "Chargememt" : " Connexion"
})

watch(user, ({username, password }) => {
  errorEmail.value =''
  if (!validateEmail(username)) {
    errorEmail.value = "addresse email invalid"
  }
  
})
// onMounted( ()=>{
//   let token = localStorage.getItem('token');
//   console.log("token", token)
//   if (token !=='' || token !== undefined|| token !== null) {
//     router.push('/articles')
//   }
// })
const onSubmit = async (e:any) => {
  e.stopPropagation();
  isLoading.value = true
  console.log("loading",isLoading.value)
  e.preventDefault();
 try {
   
  user = await ( await fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: user.username,
    password: user.password,
    // expiresInMins: 60, // optional
  })
})).json()
  isLoading.value = false
  if (user?.email !== undefined) {
    sessionStorage.setItem('token',user.token);
    sessionStorage.setItem('email', user.email); 
    router.push('/articles')
    
  }
  error.value = user.value?.error as unknown as any
 } catch (er) {
   error.value = "Error"
 }
}
const validateEmail = (email:string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
</script>

<style>
 .container{
    margin-top: 10rem; display: flex; justify-content: center; align-items: center; 
    flex-direction: column;
 }
 .form{
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1); background-color: white;  width: 400px; padding: 5rem;
 }
 
 button{
    padding: 1rem 4rem;
    background-color: #0476e3;
    color: white;
    border-radius: 40px;
    cursor: pointer;

 }
 button:hover{
    padding: 1rem 4rem;
    background-color: #0c72d1;
    color: white;
    border-radius: 40px;
    cursor: pointer;

 }
</style>