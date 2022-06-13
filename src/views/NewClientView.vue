<template>
  <Client />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Client from "@/components/forms/client.vue";

export default defineComponent({
  name: "NewClientView",

  components: {
    Client,
  },
});
</script>

<!-- Basicamente no esta agarrando el componente client :( -->
