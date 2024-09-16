<template>
  <div>
    <header v-if="!isNotFoundPage">
      <lobby/>
    </header>
    <main>
      <RouterView/> <!-- C'est ici que les composants basés sur les routes apparaîtront -->
    </main>
    <footer v-if="!isNotFoundPage">
      <foot/>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import lobby from '@/components/lobby.vue';
import foot from '@/components/foot.vue';
import { RouterView } from 'vue-router';

const route = useRoute();

const isNotFoundPage = computed(() => route.name === 'NotFound');
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Reddit+Sans+Condensed:wght@200..900&display=swap');
body {
  font-family: "Reddit Sans Condensed", sans-serif;
}

main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  padding-bottom: 15rem;
}
</style>

