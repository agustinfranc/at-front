<template>
  <v-row>
    <v-col align-self="start" cols="12" sm="4">
      <p class="text-h4 text--primary">{{ title }}</p>
    </v-col>
    <v-spacer></v-spacer>
    <v-col align-self="end" cols="12" sm="4">
      <v-sheet class="ma-2 pa-2">
        <v-btn
          rounded="lg"
          block
          variant="outlined"
          dark
          class="mb-2 text--primary"
          :to="`/${route}`"
        >
          Nuevo
        </v-btn>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  route: String,
});
</script>
