<template>
  <v-text-field required></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value"],
  name: "TextField",
  data() {
    return {
      textField: this.value,
    };
  },
});
</script>
