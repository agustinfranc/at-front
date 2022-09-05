<template>
  <AssignmentForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AssignmentForm from "@/components/forms/AssignmentForm.vue";

export default defineComponent({
  name: "NewAssignmentView",

  components: {
    AssignmentForm,
  },
});
</script>
