<template>
  <div>
    <!-- Modal Espace commentaire -->
    <div v-show="isModalVisible" id="modalOverlay" @click.self="closeModal">
      <div id="modalEC" @click.stop>
        <h3>Espace commentaire</h3>
        <img id="photoec" src="/src/assets/éspace_commentaire.png" alt="aperçu de l'espace commentaire" />
        <p>
          <strong>Date de création: </strong>13/03/2024 <br />
          <strong>Technologies utilisées: </strong>HTML et JavaScript<br />
          <strong><a id="linkec" href="/src/assets/espace_commentaire-main/index.html" target="_blank">voir l'espace commentaire</a></strong><br />
          <strong><a id="repec" href="https://github.com/FRANPOUZZ/espace_commentaire" target="_blank">voir le repository</a></strong><br />
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
    </div>
    <article @click="openModal">
      <div id="ecicon">
        <img id="EC" src="/src/assets/éspace_commentaire.png" alt="aperçu de l'espace commentaire" />
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
#modalOverlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

#modalEC {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #bacec1;
  height: 500px;
  width: 1000px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

#closeModalBtn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #e59560;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
}

#closeModalBtn:hover {
  background-color: #e58a60;
}

#photoec {
  height: 70%;
  width: 30rem;
}

#ecicon {
  text-decoration: none;
  color: black;
}

#linkec,
#repec {
  text-decoration: none;
  color: #1d3124;
}

#linkec:hover,
#repec:hover {
  text-decoration: underline;
}

article {
  border: 3px solid none;
  padding: 0;
  width: 450px;
  height: 350px;
  border-radius: 10%;
}

article:hover {
  background-color: #bacec1;
  border-color: #bacec1;
  box-shadow: 10px 10px 8px 5px gray;
  cursor: pointer;
}

#EC {
  height: 264.734px;
  width: 327.75px;
  border-radius: 10%;
  border: 3px solid #bacec1;
}

#EClink {
  text-align: center;
}
</style>
