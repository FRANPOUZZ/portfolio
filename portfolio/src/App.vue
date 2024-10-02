<template>
  <div id="webpage">
    <header v-if="!isNotFoundPage">
      <lobby/>
    </header>
    <div>
      <RouterView/>
    </div>
    <main v-if="!isNotFoundPage">
      <presentation/>
      <projects/>
      <contact/>
    </main>
    <footer v-if="!isNotFoundPage">
      <foot/>
    </footer>
  </div>
</template>

<script setup>
import presentation from './components/presentation.vue';
import projects from './components/projects.vue';
import contact from './components/contact.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import lobby from '@/components/lobby.vue';
import foot from '@/components/foot.vue';
import { RouterView } from 'vue-router';

const route = useRoute();

const isNotFoundPage = computed(() => route.name === 'NotFound');
</script>

<style scoped>
</style>

