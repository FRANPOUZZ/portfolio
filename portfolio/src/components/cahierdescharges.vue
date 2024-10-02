<template>
  <div>
    <div v-show="isModalVisible" id="modalOverlay" @click.self="closeModal">
      <div id="modalCDC" class="modal" @click.stop>
        <h3>Cahier des charges</h3>
        <img id="photocdc" src="/src/assets/photo_cdc.png" alt="photo du cahier des charges">
        <p>
          <strong>Date de création: </strong>16/01/2024 <br>
          <strong>Technologies utilisées: </strong> logiciel de traitement de texte<br>
          <strong><a id="linkcdc" href="/src/assets/Cahier des charges..pdf" target="_blank">voir le cahier des charges</a></strong><br>
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
    </div>
    <article @click="openModal">
      <div id="cdcicon">
        <img id="CDC" src="/src/assets/photo_cdc.png" alt="aperçu du cahier des charges">
        <h2 id="CDClink" class="titles">Cahier des charges</h2>
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
