<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import { getTodos } from '@/services';
import type { Todo } from '@/types';

const todoList = ref<Todo[]>([]);

onMounted(() => {
  getTodos().then((todos: Todo[] | undefined) => {
    if (todos) {
      todoList.value = todos;
    } else {
      todoList.value = [];
    }
  });
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <section>
    <h2>Todo List</h2>
    <ul class="todo-list">
      <li v-for="todo in todoList" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.todo-list {
  max-height: 200px;

  overflow-y: auto;
}
</style>
