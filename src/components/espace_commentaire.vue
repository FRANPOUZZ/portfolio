<template>
    <head>
    
    </head>
    <body>
        <div id="modalEC" v-show="isModalVisible">
        <h3>éspace commentaire</h3><br>
        <img id="photoec" src="/src/assets/éspace_commentaire.png" alt="apercu de l'éspace commentaire">
        <p>
          <strong>Date de création: </strong>13/03/2024 <br>
          <strong>Technologies utilisées: </strong>HTML et JavaScript<br>
          <strong><a id="linkec" href="/src/assets/espace_commentaire-main/index.html" target="blank">voir l'espace commentaire</a></strong><br>
          <strong><a id="repec" href="https://github.com/FRANPOUZZ/espace_commentaire" target="blank">voir le repository</a></strong><br>
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
        <article @click="openModal">
            <a id="ecicon"href="#">
                <img id="EC"src="/src/assets/éspace_commentaire.png" alt="">
                <h2 id="EClink">Espace commentaire dynamique</h2>
            </a>
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
    article{
        border: 3px solid none;
        padding: 0%;
        width: 450px;
        height: 350px;
        border-radius: 10%;
    }
    article:hover{
        background-color: #BACEC1;
        border-color: #BACEC1;
        box-shadow: 10px 10px 8px 5px gray;
    }
    #EC{
        height: 264.734px;
        width: 327.75px;
        border-radius: 10% 10% 10% 10%;
        border: 3px solid #BACEC1;
    }
    #EClink{
        text-align: center;
    }
    #modalEC {
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
    background-color: #E59560;
    border: 0px solid gray;
    border-radius: 0px;
    cursor: pointer;
  }
  
  #closeModalBtn:hover {
    background-color: #e58a60;;
  }
  #photoec{
    height: 75%;
    width: 50%;
  }
  #ecicon{
    text-decoration: none;
    color: black;
  }
  #linkec{
    text-decoration: none;
    color: #1D3124;
  }
  #repec{
    text-decoration: none;
    color: #1D3124;
  }
    </style>