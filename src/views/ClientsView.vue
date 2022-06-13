<template>
  <Clients />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Clients from "@/components/tables/clients.vue";

export default defineComponent({
  name: "NewClientView",

  components: {
    Clients,
  },
});
</script>
