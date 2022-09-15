<template>
  <v-btn :disabled="!valid" color="success" class="mr-4"> Enviar </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubmitButton",
  props: ["valid"],
});
</script>
