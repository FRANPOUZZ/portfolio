<template>
    <head></head>
    <body>
      <div id="modalCV" v-show="isModalVisible">
        <h3>CV en HTML</h3><br>
        <img id="photocv" src="/src/assets/Photo CV.png" alt="">
        <p>
          <strong>Date de création: </strong>9/01/2024 <br>
          <strong>Technologies utilisées: </strong> HTML et CSS <br>
          <strong><a href="/src/assets/CV-de-Fran-ois-Croizer-main/index.html" target="blank">Lien vers le CV</a></strong><br>
          <strong><a href="https://github.com/FRANPOUZZ/CV-de-Fran-ois-Croizer" target="blank">Lien vers le repository</a></strong><br>
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
      <article id="articleCV" @click="openModal">
        <img id="CV" src="/src/assets/Photo CV.png" alt="Photo du CV en html" />
        <a href="#"><h2 id="CVtitle">CV en HTML</h2></a>
      </article>
    </body>
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
  article {
    display: block;
    flex-direction: row;
    border: 3px solid none;
    padding: 0%;
    width: 450px;
    height: 350px;
    border-radius: 10%;
  }
  
  article:hover {
    background-color: #bacec1;
    border-color: #bacec1;
    box-shadow: 10px 10px 8px 5px gray;
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
  
  #modalCV {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #bacec1;
    height: 500px;
    width: 1000px;
    z-index: 1000;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  #closeModalBtn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
  }
  
  #closeModalBtn:hover {
    background-color: #f0f0f0;
  }
  #photocv{
    height: 75%;
    width: 50%;
  }
  </style>