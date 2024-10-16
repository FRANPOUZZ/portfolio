<template>
  <div>
    <!--Fermeture en cliquant en dehors de la modal-->
    <div id="modalOverlayCV" @click.self="closeModal">
      <div id="modalCV">
        <h3>CV en HTML</h3>
        <img id="photocv" src="/src/assets/photo_cv.png" alt="Photo CV">
        <p>
          <strong>Date de création: </strong>9/01/2024 <br>
          <strong>Technologies utilisées: </strong> HTML et CSS <br>
          <strong><a id="linkcv" href="/src/assets/CV-de-Fran-ois-Croizer-main/index.html" target="_blank">Voir le CV</a></strong><br>
          <strong><a id="linkrep" href="https://github.com/FRANPOUZZ/CV-de-Fran-ois-Croizer" target="_blank">Voir le repository</a></strong><br>
          <!--bouton de fermeture de la modal-->
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
    </div>
    <!--ouverture de la modale-->
    <article id="articleCV" @click="openModal">
      <div id="cvicon">
        <img id="CV" src="/src/assets/photo_cv.png" alt="Photo du CV en html">
        <h2 id="CVtitle">CV en HTML</h2>
      </div>
    </article>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
//déclaration de modal et modal
let modal;
let modalOverlay;

//fonction pour ouvrir la modal
function openModal() {
  modal.style.display = "flex";
  modalOverlay.style.display = "flex";
}

//fonction pour fermer la modal
function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
}

//appel de la modal et de l'overlay avec onMounted
onMounted(() => {
modal = document.getElementById("modalCV");
modalOverlay = document.getElementById("modalOverlayCV");
})
</script>

<style scoped>
</style>
