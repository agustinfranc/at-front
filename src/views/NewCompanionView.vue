<template>
  <Companion />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Companion from "@/components/forms/companionForm.vue";

export default defineComponent({
  name: "NewCompanionView",

  components: {
    Companion,
  },
});
</script>
