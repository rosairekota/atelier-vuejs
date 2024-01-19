<template>
    <div class="nav">
       <div class="nav__logo">
          <h1>Mon site</h1>
        
       </div>
       <div class="nav__menu">
         
            <router-link to="/">Accueil</router-link>
            <router-link to="/articles">Ess</router-link>
            <router-link to="/connexion">Connexion</router-link>
          </div>
    </div>
</template>
<style lang="scss" scoped>
 .nav{
    display: flex;
    justify-content: space-between;
    padding: 1rem 4rem;
    background-color: #0476e3;
    color: white;

   }
   .nav__menu{
     display: flex;
     gap:2rem;
     align-items: center;
   }
   .nav__menu a{
    color: white;
    text-decoration: none;
    font-weight: bold;
   }
</style>>