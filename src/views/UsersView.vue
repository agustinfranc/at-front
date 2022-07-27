<template>
  <Users />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Users from "@/components/tables/usersTable.vue";

export default defineComponent({
  name: "UsersView",

  components: {
    Users,
  },
});
</script>
