<template>
  <v-app>
    <v-main>
      <DefaultLayout>
        <router-view />
      </DefaultLayout>

      <v-snackbar
        v-model="snackbar.display"
        :color="snackbar.color"
        @onShowSnackbar="showSnackbar"
      >
        {{ snackbar.text }}
      </v-snackbar>
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

  methods: {
    showSnackbar(text: string) {
      this.snackbar.display = true;
      this.snackbar.text = text;
      console.log("funca");
    },
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
