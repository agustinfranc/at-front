<template>
  <Exceptions />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Exceptions from "@/components/tables/exceptionsTable.vue";

export default defineComponent({
  name: "ExceptionsView",

  components: {
    Exceptions,
  },
});
</script>
