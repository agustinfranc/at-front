<template>
  <Companions />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Companions from "@/components/tables/companionsTable.vue";

export default defineComponent({
  name: "CompanionsView",

  components: {
    Companions,
  },
});
</script>
