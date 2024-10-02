<template>
  <div>
    <div v-show="isModalVisible" id="modalOverlay" @click.self="closeModal">
      <div id="modalCV" @click.stop>
        <h3>CV en HTML</h3>
        <img id="photocv" src="/src/assets/photo_cv.png" alt="Photo CV">
        <p>
          <strong>Date de création: </strong>9/01/2024 <br>
          <strong>Technologies utilisées: </strong> HTML et CSS <br>
          <strong><a id="linkcv" href="/src/assets/CV-de-Fran-ois-Croizer-main/index.html" target="_blank">Voir le CV</a></strong><br>
          <strong><a id="linkrep" href="https://github.com/FRANPOUZZ/CV-de-Fran-ois-Croizer" target="_blank">Voir le repository</a></strong><br>
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
    </div>
    <article id="articleCV" @click="openModal">
      <div id="cvicon">
        <img id="CV" src="/src/assets/photo_cv.png" alt="Photo du CV en html">
        <h2 id="CVtitle">CV en HTML</h2>
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
