<template>
  <Client />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Client from "@/components/forms/clientForm.vue";

export default defineComponent({
  name: "NewClientView",

  components: {
    Client,
  },
});
</script>
