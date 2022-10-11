<template>
  <v-row class="flex-grow-0">
    <v-col align-self="center" cols="12" sm="4">
      <p class="text-h4 text--primary">{{ title }}</p>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
