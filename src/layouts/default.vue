<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list>
          <v-list-item @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-list-item-action>
              <v-icon class="mx-5" v-if="!$vuetify.theme.dark"
                >mdi-weather-sunny</v-icon
              >
              <v-icon class="mx-5" v-else>mdi-weather-night</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                v-if="$vuetify.theme.dark"
                v-text="'Modo Oscuro'"
              />
              <v-list-item-title v-else v-text="'Modo Claro'" />
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click.stop="logout">
            <v-list-item-action>
              <v-icon class="mx-5">mdi-logout</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title v-text="'Salir'" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Nexos</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>

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
          title: "Calendario",
          to: "/calendar",
        },
        {
          title: "Clientes",
          to: "/clients",
        },
        {
          title: "Acompañadores",
          to: "/companions",
        },
        {
          title: "Usuarios",
          to: "/usuarios",
        },
        {
          title: "Saldos",
          to: "/saldos",
        },
        {
          title: "Acompañamientos",
          to: "/acompañamientos",
        },
      ],
    };
  },
});
</script>
