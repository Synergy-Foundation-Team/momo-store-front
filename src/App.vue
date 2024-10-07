<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { ref, reactive } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import AppLayout from './layouts/AppLayout.vue';

const themeConfig = reactive({
  token: {
    colorPrimary: '#00b96b',
    borderRadius: 6,
    colorLink: '#00b96b',
  },
  components: {
    Button: {
      colorPrimary: '#00b96b',
      algorithm: true,
    },
    Input: {
      colorPrimary: '#00b96b',
    },
  },
});

const componentSize = ref('middle');

const locale = ref(enUS);

const updateTheme = (newTheme) => {
  Object.assign(themeConfig.token, newTheme);
};

const setComponentSize = (size) => {
  componentSize.value = size;
};

const setLocale = (newLocale) => {
  locale.value = newLocale;
};

defineExpose({
  updateTheme,
  setComponentSize,
  setLocale,
});

</script>

<template>
  <a-config-provider :theme="themeConfig" :locale="locale" :componentSize="componentSize">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <h1>Hello Vue 3 + Vite + Vue Router</h1>
        <a-button>Add</a-button>

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
