<template>
  <section id="projects">
    <div id="div2">
        <h2><strong>Projets réalisés</strong></h2>
        <CV/>
        <cahierdescharges/>
        <espace_commentaire/>
    </div>
  </section>
</template>

<script setup>
import CV from './CV.vue';
import espace_commentaire from './espace_commentaire.vue';
import cahierdescharges from './cahierdescharges.vue';
</script>

<style scoped>
#div2{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
  gap: 50px;
  padding-top: 10rem;
}
h2{
  width: 1000px;
}
</style>