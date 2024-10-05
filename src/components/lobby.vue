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

// Variable pour l'élément actif
const activeSection = ref('presentation');

// Fonction pour changer la section active
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

.navlist li a {
  color: black;
  text-decoration: none;
}

.navlist li a:hover {
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

ul {
  list-style: none;
}

.navlist li.active a {
  text-decoration: underline;
  font-weight: bold;
}
</style>
