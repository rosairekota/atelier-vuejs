<template>
  <div class="min-h-screen flex items-center justify-center container">
    <h1>Se connecter</h1>
    <form  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 form">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Nom d'utilisateur
        </label>
        <input
         
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control"
          id="username"
          type="text"
          placeholder="Votre nom d'utilisateur"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mot de passe
        </label>
        <input
        
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-control"
          id="password"
          type="password"
          placeholder="Votre mot de passe"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Connexion
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
 .container{
    margin-top: 10rem; display: flex; justify-content: center; align-items: center; 
    flex-direction: column;
 }
 .form{
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1); background-color: white;  width: 400px; padding: 5rem;
 }
 .form-control{
   padding: .5rem;
   margin: .5rem;
   border-radius: 40px;
   border: 1px solid #0476e3;;
   outline: none;

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