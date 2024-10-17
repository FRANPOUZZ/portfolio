<template>
  <header>
    <!--bouton d'acueuil-->
    <div id="homebtn">
      <router-link to="/">
        <img id="home" src="@/assets/home.png" alt="logo d'accueil" @click.self="linkhome"/>
      </router-link>
    </div>
    <nav class="navbar">
      <ul>
        <!--bouton nav-->
        <li id="navbutton" @click="menuNav">
          <!--menu de navigation-->
          <img id="menu" src="@/assets/menu.png" alt="menu nav déroulant" />
        </li>
      </ul>
      <ul ref="navList" id="navlist">
        <li>
          <a href="#presentation">Présentation</a>
        </li>
        <li>
          <a href="#projects">Projets réalisés</a>
        </li>
        <li>
          <a href="#contact">Me contacter</a>
        </li>
      </ul>
    </nav>

    <h1>Portfolio</h1>
  </header>
</template>

<script setup>
import {onMounted} from 'vue';
import { RouterView } from 'vue-router';

//declaration des constantes//
let home;
let navlist;
let navOpen = false;
let menuOverlay;

//fonction pour le bouton home//
function linkhome(){
  window.scroll({
    top: 0,
    left: 0,
  })
}

//fonction pour ouvrir le menu nav//
function openMenu(){
  navlist.style.display = "flex";
  navOpen = true;
}

//fonction pour fermer le menu//
function closeMenu(){
  navlist.style.display = "none";
  navOpen = false;
}

//fonction pour ouvrir et fermer le menu avec le bouton nav//
function menuNav(){
  if(navOpen === true){
    closeMenu();
  }
  else{
    openMenu();
  }
}

onMounted(() =>{
  home = document.getElementById("homebtn");
  navlist = document.getElementById("navlist");
})


</script>

<style scoped>
</style>