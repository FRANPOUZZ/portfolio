
<template>
  <head>

  </head>
  <body>
    <header>
      <lobby/>
    </header>
    <main>
      <CV/>
      <cahierdescharges/>
      <espace_commentaire/>
    </main>
    <footer>
      <foot/>
    </footer>

  </body>
</template>

<script setup>
import lobby from '@/components/lobby.vue'
import foot from '@/components/foot.vue'
import CV from '@/components/CV.vue'
import cahierdescharges from './components/cahierdescharges.vue';
import espace_commentaire from '@/components/espace_commentaire.vue';
</script>

<style scoped>

</style>
