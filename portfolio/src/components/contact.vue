<template>
  <section id="contact">
    <div id="contact-div">
      <h2>Me contacter</h2>
      <form @submit.prevent="sendEmail">
        <input type="text" v-model="name" placeholder="Nom"><br>
        <input type="text" v-model="firstName" placeholder="Prénom"><br>
        <input id="object" type="text" v-model="object" placeholder="Objet"><br>
        <textarea v-model="message" id="message" rows="10" placeholder="Message"></textarea><br>
        <button type="submit">Envoyer</button>
      </form>
      <p v-if="statusMessage">{{ statusMessage }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const name = ref('');
const firstName = ref('');
const object = ref('');
const message = ref('');
const statusMessage = ref('');

const sendEmail = () => {
  if (!name.value || !firstName.value || !object.value || !message.value) {
      statusMessage.value = "Veuillez remplir tous les champs !";
      return;
  }

  const templateParams = {
      name: name.value,
      firstName: firstName.value,
      object: object.value,
      message: message.value,
  };

  emailjs.send('service_nwn2dlb', 'template_tr80pda', templateParams, 'm9V1blbTNHYQKbAGc')
      .then((response) => {
          statusMessage.value = 'Envoyé';
          name.value = '';
          firstName.value = '';
          object.value = '';
          message.value = '';
      }, (error) => {
          statusMessage.value = 'Erreur lors de l\'envoi de l\'email.';
          console.log('Erreur lors de l\'envoi de l\'email', error);
      });
};
</script>
