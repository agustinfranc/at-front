<template>
  <v-textarea
    required
    rows="1"
    prepend-inner-icon="mdi-comment"
    class="mx-2"
    auto-grow
  ></v-textarea>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value"],
  name: "TextAreaField",
  data() {
    return {
      textAreaField: this.value,
    };
  },
});
</script>
