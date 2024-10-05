<template>
  <div>
    <!-- Modal Cahier des charges -->
    <div v-show="isModalVisible" id="modalOverlay" @click.self="closeModal">
      <div id="modalCDC" @click.stop>
        <h3>Cahier des charges</h3>
        <img id="photocdc" src="/src/assets/photo cahier des charges.png" alt="photo du cahier des charges" />
        <p>
          <strong>Date de création: </strong>16/01/2024 <br />
          <strong>Technologies utilisées: </strong> logiciel de traitement de texte<br />
          <strong><a id="linkcdc" href="/src/assets/Cahier des charges..pdf" target="_blank">voir le cahier des charges</a></strong><br />
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
    </div>
    <article @click="openModal">
      <div id="cdcicon">
        <img id="CDC" src="/src/assets/photo cahier des charges.png" alt="aperçu du cahier des charges" />
        <h2 id="CDClink">Cahier des charges</h2>
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

#modalCDC {
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

#photocdc {
  height: 70%;
  width: 30rem;
}

#cdcicon {
  text-decoration: none;
  color: black;
}

#linkcdc {
  text-decoration: none;
  color: #1d3124;
}

#linkcdc:hover {
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

#CDC {
  height: 264.734px;
  width: 327.75px;
  border-radius: 10%;
  border: 3px solid #bacec1;
}

#CDClink {
  text-align: center;
}
</style>
