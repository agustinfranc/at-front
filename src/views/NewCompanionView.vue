<template>
  <CompanionForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompanionForm from "@/components/forms/CompanionForm.vue";

export default defineComponent({
  name: "NewCompanionView",
  components: {
    CompanionForm,
  },
});
</script>
