<template>
  <DefaultLayout />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import DefaultLayout from "../layouts/default.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    DefaultLayout,
  },
});
</script>
