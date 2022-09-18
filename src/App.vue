<template>
  <v-app>
    <v-main>
      <DefaultLayout>
        <router-view />
      </DefaultLayout>

      <v-snackbar v-model="snackbar.display" :color="snackbar.color">
        {{ snackbar.text }}
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import DefaultLayout from "./layouts/default.vue";
import { useSnackbarStore } from "@/stores/snackbar";

const store = useSnackbarStore();
const snackbar = store.snackbar;
</script>
