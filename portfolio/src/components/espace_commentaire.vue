<template>
  <div>
    <!--Fermeture en cliquant en dehors de la modal-->
    <div id="modalOverlayEC" @click.self="closeModal">
      <div id="modalEC" @click.stop>
        <h3>Espace commentaire</h3>
        <img id="photoec" src="/src/assets/éspace_commentaire.png" alt="aperçu de l'espace commentaire">
        <p>
          <strong>Date de création: </strong>13/03/2024 <br />
          <strong>Technologies utilisées: </strong>HTML et JavaScript<br />
          <strong><a id="linkec" href="/src/assets/espace_commentaire-main/index.html" target="_blank">voir l'espace commentaire</a></strong><br>
          <strong><a id="repec" href="https://github.com/FRANPOUZZ/espace_commentaire" target="_blank">voir le repository</a></strong><br>
          <!--bouton de fermeture de la modal-->
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
    </div>
    <!--ouverture de la modale-->
    <article @click="openModal">
      <div id="ecicon">
        <img id="EC" src="/src/assets/éspace_commentaire.png" alt="aperçu de l'espace commentaire">
        <h2 id="EClink">Espace commentaire dynamique</h2>
      </div>
    </article>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
//déclaration de modal et modalOverlay
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
modal = document.getElementById("modalEC");
modalOverlay = document.getElementById("modalOverlayEC");
})
</script>

<style scoped>

</style>
