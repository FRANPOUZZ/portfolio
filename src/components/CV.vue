<template>
  <div>
    <div v-show="isModalVisible" id="modalOverlay" @click.self="closeModal">
      <div id="modalCV" @click.stop>
        <h3>CV en HTML</h3>
        <img id="photocv" src="/src/assets/Photo CV.png" alt="Photo CV" />
        <p>
          <strong>Date de création: </strong>9/01/2024 <br />
          <strong>Technologies utilisées: </strong> HTML et CSS <br />
          <strong><a id="linkcv" href="/src/assets/CV-de-Fran-ois-Croizer-main/index.html" target="_blank">Voir le CV</a></strong><br />
          <strong><a id="linkrep" href="https://github.com/FRANPOUZZ/CV-de-Fran-ois-Croizer" target="_blank">Voir le repository</a></strong><br />
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
    </div>
    <article id="articleCV" @click="openModal">
      <div id="cvicon">
        <img id="CV" src="/src/assets/Photo CV.png" alt="Photo du CV en html" />
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

#modalCV {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #bacec1;
  height: 500px;
  min-width: 70rem;
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

#photocv {
  height: 70%;
  width: 30rem;
}

#cvicon {
  text-decoration: none;
  color: black;
}

#linkcv,
#linkrep {
  text-decoration: none;
  color: #1d3124;
}

#linkcv:hover,
#linkrep:hover {
  text-decoration: underline;
}

article {
  display: block;
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

#CV {
  height: 264.734px;
  width: 327.75px;
  border-radius: 10%;
  border: 3px solid #bacec1;
}

#CVtitle {
  text-align: center;
}
</style>
