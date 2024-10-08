<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getTodos } from '../services';

const message = ref('Hello, Vue 3!');

onMounted(() => {
  getTodos().then((todos) => {
    console.log(todos);
  });
});

</script>

<template>
  <h1>{{ message }}</h1>
  <div>test</div>
</template>
