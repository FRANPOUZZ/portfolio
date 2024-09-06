<template>
    <header>
      <div id="homebtn">
        <a href="/App.vue">
          <img id="home" src="/src/assets/home.png" alt="logo d'accueil" />
        </a>
      </div>
      <nav class="navbar">
        <ul>
          <li class="navbutton" @click="toggleMenu">
            <img id="menu" src="/src/assets/menu.png" alt="menu nav déroulant" />
          </li>
        </ul>
        <ul v-if="isMenuOpen" class="navlist">
          <li><a href="description.vue">Présentation</a></li>
          <li><a href="App.vue/div2">Projets réalisés</a></li>
          <li><a href="formu.vue">Me contacter</a></li>
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
    min-width: 100%;
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