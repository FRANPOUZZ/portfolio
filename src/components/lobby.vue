<template>
<header>
    <!-- Bouton Accueil -->
    <div id="homebtn">
      <router-link to="/">
        <img id="home" src="@/assets/home.png" alt="logo d'accueil" />
      </router-link>
    </div>
    
    <!-- Menu de navigation -->
    <nav class="navbar">
      <ul>
        <!-- Bouton pour dérouler le menu -->
        <li class="navbutton" @click="toggleMenu">
          <img id="menu" src="@/assets/menu.png" alt="menu nav déroulant" />
        </li>
      </ul>
      <!-- Liste des liens de navigation affichée lorsque le menu est ouvert -->
      <ul v-if="isMenuOpen" class="navlist">
        <li>
          <router-link to="/description">Présentation</router-link>
        </li>
        <li>
          <router-link to="/divtwo">Projets réalisés</router-link>
        </li>
        <li>
          <router-link to="/formu">Me contacter</router-link>
        </li>
      </ul>
    </nav>
    
    <h1>Portfolio</h1>
  </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const isMenuOpen = ref(false);
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  import formu from '@/components/formu.vue';
  import description from '@/components/description.vue';
  import App from '@/App.vue';
  </script>
  
  <style scoped>
  header {
    background-color: #f6f4e8;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100rem;
    position: relative;
  }
  
  h1 {
    text-align: center;
    flex-grow: 1;
  }
  
  #home {
    height: 40px;
    width: 40px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
  
  #menu {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
  
  .navbar {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
  }
  
  .navlist {
    list-style: none;
    padding-left: 0;
    margin: 0;
    background-color: #C3CBD6;
    border: 1px solid #C3CBD6;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 15px;
    top: 100px;
    z-index: 1;
    border-radius: 10%;
  }
  
  .navlist li {
    list-style: none;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #C3CBD6;
    color: black;
  }
  
  .navlist li:hover {
    background-color: #f0f0f0;
  }
  .navlist li a{
    color: black;
    text-decoration: none;
  }
  .navlist li a:hover{
    text-decoration: underline;
  }
  #homebtn {
    position: fixed;
    left: 10px;
    top: 10px;
  }
  
  .navbutton {
    position: fixed;
    left: 20px;
    top: 60px;
  }
  ul{
    list-style: none;
  }
  </style>