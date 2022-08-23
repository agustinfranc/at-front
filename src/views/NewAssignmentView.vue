<template>
  <Assignment @request="assignmentPost" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AssignemtPost from "../api/assignments/index";

// Components
import Assignment from "@/components/forms/assignmentForm.vue";

export default defineComponent({
  name: "NewAssignmentView",

  components: {
    Assignment,
  },

  data() {
    return {
      assignmentPost: AssignemtPost.post,
    };
  },
});
</script>
