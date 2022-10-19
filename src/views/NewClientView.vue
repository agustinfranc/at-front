<template>
  <ClientForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientForm from "@/components/modules/client/form/ClientForm.vue";

export default defineComponent({
  name: "NewClientView",
  components: {
    ClientForm,
  },
});
</script>
