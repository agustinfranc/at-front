<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Home from '../components/Home.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Home,
  },
});
</script>
