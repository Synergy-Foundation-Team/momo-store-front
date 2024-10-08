<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive, type RendererElement, type RendererNode, type VNode } from 'vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import type { Locale } from 'ant-design-vue/es/locale';

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

const updateTheme = (newTheme: object) => {
  Object.assign(themeConfig.token, newTheme);
};

const setComponentSize = (size: string) => {
  componentSize.value = size;
};

const setLocale = (newLocale: Locale | { locale: string; Pagination?: { items_per_page?: string | undefined; jump_to?: string | undefined; jump_to_confirm?: string | undefined; page?: string | undefined; prev_page?: string | undefined; next_page?: string | undefined; prev_5?: string | undefined; next_5?: string | undefined; prev_3?: string | undefined; next_3?: string | undefined; } | undefined; Table?: { filterTitle?: string | undefined; filterConfirm?: any; filterReset?: any; filterEmptyText?: any; filterCheckall?: any; filterSearchPlaceholder?: any; emptyText?: any | (() => any); selectAll?: any; selectNone?: any; selectInvert?: any; selectionAll?: any; sortTitle?: string | undefined; expand?: string | undefined; collapse?: string | undefined; triggerDesc?: string | undefined; triggerAsc?: string | undefined; cancelSort?: string | undefined; } | undefined; Popconfirm?: Record<string, any> | undefined; Form?: { optional?: string | undefined; defaultValidateMessages: { default?: (string | (() => string)) | undefined; required?: (string | (() => string)) | undefined; enum?: (string | (() => string)) | undefined; whitespace?: (string | (() => string)) | undefined; date?: { format?: (string | (() => string)) | undefined; parse?: (string | (() => string)) | undefined; invalid?: (string | (() => string)) | undefined; } | undefined; types?: { string?: (string | (() => string)) | undefined; method?: (string | (() => string)) | undefined; array?: (string | (() => string)) | undefined; object?: (string | (() => string)) | undefined; number?: (string | (() => string)) | undefined; date?: (string | (() => string)) | undefined; boolean?: (string | (() => string)) | undefined; integer?: (string | (() => string)) | undefined; float?: (string | (() => string)) | undefined; regexp?: (string | (() => string)) | undefined; email?: (string | (() => string)) | undefined; url?: (string | (() => string)) | undefined; hex?: (string | (() => string)) | undefined; } | undefined; string?: { len?: (string | (() => string)) | undefined; min?: (string | (() => string)) | undefined; max?: (string | (() => string)) | undefined; range?: (string | (() => string)) | undefined; } | undefined; number?: { len?: (string | (() => string)) | undefined; min?: (string | (() => string)) | undefined; max?: (string | (() => string)) | undefined; range?: (string | (() => string)) | undefined; } | undefined; array?: { len?: (string | (() => string)) | undefined; min?: (string | (() => string)) | undefined; max?: (string | (() => string)) | undefined; range?: (string | (() => string)) | undefined; } | undefined; pattern?: { mismatch?: (string | (() => string)) | undefined; } | undefined; }; } | undefined; Image?: { preview: string; } | undefined; DatePicker?: { lang: { locale: string; monthBeforeYear?: boolean | undefined; yearFormat: string; monthFormat?: string | undefined; quarterFormat?: string | undefined; today: string; now: string; backToToday: string; ok: string; timeSelect: string; dateSelect: string; weekSelect?: string | undefined; clear: string; month: string; year: string; previousMonth: string; nextMonth: string; monthSelect: string; yearSelect: string; decadeSelect: string; dayFormat: string; dateFormat: string; dateTimeFormat: string; previousYear: string; nextYear: string; previousDecade: string; nextDecade: string; previousCentury: string; nextCentury: string; shortWeekDays?: string[] | undefined; shortMonths?: string[] | undefined; placeholder: string; yearPlaceholder?: string | undefined; quarterPlaceholder?: string | undefined; monthPlaceholder?: string | undefined; weekPlaceholder?: string | undefined; rangeYearPlaceholder?: [string, string] | undefined; rangeQuarterPlaceholder?: [string, string] | undefined; rangeMonthPlaceholder?: [string, string] | undefined; rangeWeekPlaceholder?: [string, string] | undefined; rangePlaceholder?: [string, string] | undefined; }; timePickerLocale: { placeholder?: string | undefined; rangePlaceholder?: [string, string] | undefined; }; dateFormat?: string | undefined; dateTimeFormat?: string | undefined; weekFormat?: string | undefined; monthFormat?: string | undefined; } | undefined; TimePicker?: Record<string, any> | undefined; Calendar?: Record<string, any> | undefined; Modal?: { okText: string; cancelText: string; justOkText: string; } | undefined; Transfer?: { titles?: ((string | number | boolean | void | VNode<RendererNode, RendererElement, { [key: string]: any; }> | null | undefined) | VNode<RendererNode, RendererElement, { [key: string]: any; }> | (string | number | boolean | void | VNode<RendererNode, RendererElement, { [key: string]: any; }> | null | undefined)[])[] | undefined; notFoundContent?: (string | number | boolean | void | VNode<RendererNode, RendererElement, { [key: string]: any; }> | null | undefined) | VNode<RendererNode, RendererElement, { [key: string]: any; }> | (string | number | boolean | void | VNode<RendererNode, RendererElement, { [key: string]: any; }> | null | undefined)[]; searchPlaceholder?: string | undefined; itemUnit?: string | undefined; itemsUnit?: string | undefined; remove?: string | undefined; selectAll?: string | undefined; selectCurrent?: string | undefined; selectInvert?: string | undefined; removeAll?: string | undefined; removeCurrent?: string | undefined; } | undefined; Select?: Record<string, any> | undefined; Upload?: { uploading?: string | undefined; removeFile?: string | undefined; downloadFile?: string | undefined; uploadError?: string | undefined; previewFile?: string | undefined; } | undefined; Empty?: { description: string; } | undefined; global?: Record<string, any> | undefined; PageHeader?: { back: string; } | undefined; Icon?: Record<string, any> | undefined; Text?: { edit?: any; copy?: any; copied?: any; expand?: any; } | undefined; Tour?: { Next: string; Previous: string; Finish: string; } | undefined; QRCode?: { expired?: string | undefined; refresh?: string | undefined; scanned?: string | undefined; } | undefined; }) => {
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
