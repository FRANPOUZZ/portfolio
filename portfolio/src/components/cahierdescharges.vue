<template>
  <div>
    <!--Fermeture en cliquant en dehors de la modal-->
    <div id="modalOverlayCDC" @click.self="closeModal">
      <div id="modalCDC" class="modal" @click.stop>
        <h3>Cahier des charges</h3>
        <img id="photocdc" src="/src/assets/photo_cdc.png" alt="photo du cahier des charges">
        <p>
          <strong>Date de création: </strong>16/01/2024 <br>
          <strong>Technologies utilisées: </strong> logiciel de traitement de texte<br>
          <strong><a id="linkcdc" href="/src/assets/Cahier des charges..pdf" target="_blank">voir le cahier des charges</a></strong><br>
          <!--bouton de fermeture de la modal-->
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
    </div>
    <!--ouverture de la modale-->
    <article @click="openModal">
      <div id="cdcicon">
        <img id="CDC" src="/src/assets/photo_cdc.png" alt="aperçu du cahier des charges">
        <h2 id="CDClink" class="titles">Cahier des charges</h2>
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
modal = document.getElementById("modalCDC");
modalOverlay = document.getElementById("modalOverlayCDC");
})
</script>

<style scoped>

</style>
