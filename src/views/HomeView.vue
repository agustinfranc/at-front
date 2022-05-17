<template>
  <Layout />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Layout from '../layouts/default.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Layout,
  },
});
</script>
