<template>
  <v-app>
    <v-main>
      <BlankLayout v-if="route.meta.layout === 'blank'">
        <router-view />
      </BlankLayout>

      <DefaultLayout v-else>
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
import BlankLayout from "./layouts/blank.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useSnackbarStore();
const snackbar = store.snackbar;
</script>
