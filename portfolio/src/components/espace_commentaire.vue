<template>
  <div>
    <div v-show="isModalVisible" id="modalOverlay" @click.self="closeModal">
      <div id="modalEC" @click.stop>
        <h3>Espace commentaire</h3>
        <img id="photoec" src="/src/assets/éspace_commentaire.png" alt="aperçu de l'espace commentaire">
        <p>
          <strong>Date de création: </strong>13/03/2024 <br />
          <strong>Technologies utilisées: </strong>HTML et JavaScript<br />
          <strong><a id="linkec" href="/src/assets/espace_commentaire-main/index.html" target="_blank">voir l'espace commentaire</a></strong><br>
          <strong><a id="repec" href="https://github.com/FRANPOUZZ/espace_commentaire" target="_blank">voir le repository</a></strong><br>
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
    </div>
    <article @click="openModal">
      <div id="ecicon">
        <img id="EC" src="/src/assets/éspace_commentaire.png" alt="aperçu de l'espace commentaire">
        <h2 id="EClink">Espace commentaire dynamique</h2>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style scoped>

</style>
