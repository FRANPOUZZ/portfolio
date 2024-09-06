<template>
    <head>
    
    </head>
    <body>
        <div id="modalCDC" v-show="isModalVisible">
        <h3>Cahier des charges</h3><br>
        <img id="photocdc" src="/src/assets/photo cahier des charges.png" alt="photo du cahier des charges">
        <p>
          <strong>Date de création: </strong>16/01/2024 <br>
          <strong>Technologies utilisées: </strong> logiciel de traitement de texte<br>
          <strong><a id="linkcdc" href="/src/assets/Cahier des charges..pdf" target="blank">voir le cahier des charges</a></strong><br>
          <button id="closeModalBtn" @click="closeModal">Fermer</button>
        </p>
      </div>
        <article @click="openModal">
            <div id="cdcicon">
                <img id="CDC"src="/src/assets/photo cahier des charges.png" alt="apercu du cahier des charges">
                <h2 id="CDClink">Cahier des charges</h2>
            </div>
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
        cursor: pointer;
    }
    #CDC{
        height: 264.734px;
        width: 327.75px;
        border-radius: 10% 10% 10% 10%;
        border: 3px solid #BACEC1;
    }
    #CDClink{
        text-align: center;
    }
    #modalCDC {
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
    background-color: #e58a60;
  }
  #photocdc{
    height: 75%;
    width: 50%;
  }
  #cdcicon{
    text-decoration: none;
    color: black;
  }
  #linkcdc{
    text-decoration: none;
    color: #1D3124;
  }
    </style>