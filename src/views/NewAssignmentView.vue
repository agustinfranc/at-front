<template>
  <AssignmentForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AssignmentForm from "@/components/forms/assignmentForm.vue";

export default defineComponent({
  name: "NewAssignmentView",

  components: {
    AssignmentForm,
  },
});
</script>
