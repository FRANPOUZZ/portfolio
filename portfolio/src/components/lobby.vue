<template>
  <header>
    <div id="homebtn">
      <router-link to="/">
        <img id="home" src="@/assets/home.png" alt="logo d'accueil" />
      </router-link>
    </div>

    <nav class="navbar">
      <ul>
        <li class="navbutton" @click.stop="toggleMenu">
          <img id="menu" src="@/assets/menu.png" alt="menu nav déroulant" />
        </li>
      </ul>
      <ul v-if="isMenuOpen" ref="navList" class="navlist" @click.stop>
        <li :class="{ active: activeSection === 'presentation' }" @click="setActiveSection('presentation')">
          <a href="#presentation">Présentation</a>
        </li>
        <li :class="{ active: activeSection === 'projects' }" @click="setActiveSection('projects')">
          <a href="#projects">Projets réalisés</a>
        </li>
        <li :class="{ active: activeSection === 'contact' }" @click="setActiveSection('contact')">
          <a href="#contact">Me contacter</a>
        </li>
      </ul>
    </nav>

    <h1>Portfolio</h1>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const navList = ref(null);

const activeSection = ref('presentation');

const setActiveSection = (section) => {
  activeSection.value = section;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClickOutside = (event) => {
  if (isMenuOpen.value && navList.value && !navList.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
</style>