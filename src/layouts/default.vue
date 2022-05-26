<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-header>
            <v-list-item-title v-text="item.title" />
          </v-list-item-header>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Nexos</v-toolbar-title>
    </v-app-bar>

    <v-main> </v-main>
    <v-card>
      <v-footer color="grey">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",

  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Clientes",
          to: "/clientes",
        },
        {
          title: "Acompañadores",
          to: "/acompañadores",
        },
        {
          title: "Usuarios",
          to: "/usuarios",
        },
        {
          title: "Saldos",
          to: "/saldos",
        },
      ],
    };
  },
});
</script>
