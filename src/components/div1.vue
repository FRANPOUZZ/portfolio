<template>
      <div class="div1">
        <description/>
        <formu/>
      </div>
</template>

<script setup>
import description from './description.vue';
import formu from './formu.vue';
</script>

<style scoped>
.div1{
  max-width: 1000px;;
  display: flex;
  flex-direction: column;
}
</style>