<template>
  <User />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import User from "@/components/forms/userForm.vue";

export default defineComponent({
  name: "NewUserView",

  components: {
    User,
  },
});
</script>
