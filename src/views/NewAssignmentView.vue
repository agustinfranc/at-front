<template>
  <Assignment />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Assignment from "@/components/forms/assignmentForm.vue";

export default defineComponent({
  name: "NewAssignmentView",

  components: {
    Assignment,
  },
});
</script>
