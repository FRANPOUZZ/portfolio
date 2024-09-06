
<template>
  <head>

  </head>
  <body>
    <header>
      <lobby/>
    </header>
    <main>
      <div class="div1">
        <description/>
        <formu/>
      </div>
      <div id="div2">
        <h2><strong>Projets réalisés</strong></h2>
        <CV/>
        <cahierdescharges/>
        <espace_commentaire/>
      </div>
    </main>
    <footer>
      <foot/>
    </footer>

  </body>
</template>

<script setup>
import formu from '@/components/formu.vue'
import lobby from '@/components/lobby.vue'
import foot from '@/components/foot.vue'
import CV from '@/components/CV.vue'
import cahierdescharges from './components/cahierdescharges.vue';
import espace_commentaire from '@/components/espace_commentaire.vue';
import description from '@/components/desciption.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Reddit+Sans+Condensed:wght@200..900&display=swap');
body{
  font-family: "Reddit Sans Condensed", sans-serif;
}
div{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1000px;
  gap: 50px;
}
main{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
h2{
  width: 1000px;
}
.div1{
  display: flex;
  flex-direction: column;
}
</style>
