
<template>
  <head>

  </head>
  <body>
    <header>
      <lobby/>
    </header>
    <main>
      <div1/>
      <div2/>
    </main>
    <footer>
      <foot/>
    </footer>
  </body>
</template>

<script setup>
import div1 from './components/div1.vue'
import div2 from './components/div2.vue'
import formu from '@/components/formu.vue'
import lobby from '@/components/lobby.vue'
import foot from '@/components/foot.vue'
import CV from '@/components/CV.vue'
import cahierdescharges from './components/cahierdescharges.vue';
import espace_commentaire from '@/components/espace_commentaire.vue';
import description from '@/components/description.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Reddit+Sans+Condensed:wght@200..900&display=swap');
body{
  font-family: "Reddit Sans Condensed", sans-serif;
}
main{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
