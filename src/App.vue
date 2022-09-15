<template>
  <v-app>
    <v-main>
      <DefaultLayout>
        <router-view />
      </DefaultLayout>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "./layouts/default.vue";

export default defineComponent({
  name: "App",
  components: {
    DefaultLayout,
  },

  data() {
    return {
      snackbar: {
        display: false,
        text: "",
        color: "black",
      },
    };
  },
});
</script>
