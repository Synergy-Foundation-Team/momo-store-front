<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { getTodo } from '../services';
import type { Todo } from '@/types';

import { Card, Button, Typography, Spin } from 'ant-design-vue';

const todo: Ref<Todo | undefined> = ref(undefined);
const loading: Ref<boolean> = ref(true);

onMounted(() => {
  getTodo(1).then((todoItem: Todo | undefined) => {
    loading.value = false;
    if (todoItem) {
      todo.value = todoItem;
    }
  });
});


const handleClick = () => {
  console.log('More details clicked');
};
</script>

<template>
  <div class="about">
    <Typography.Title :level="2">This is an about page</Typography.Title>
  </div>

  <Spin v-if="loading" tip="Loading..." />

  <a-card v-else-if="todo" title="Todo Details" class="todo-card">
    <Typography.Title :level="4">{{ todo.title }}</Typography.Title>
    <p>Completed: <strong>{{ todo.completed ? 'Yes' : 'No' }}</strong></p>

    <a-button type="primary" @click="handleClick">
      More Details
    </a-button>
  </a-card>
</template>

<style scoped>
.about {
  margin: 16px;
}

.todo-card {
  margin: 16px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
