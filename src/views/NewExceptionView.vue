<template>
  <Exception />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Exception from "@/components/forms/exceptionForm.vue";

export default defineComponent({
  name: "NewExceptionView",

  components: {
    Exception,
  },
});
</script>
