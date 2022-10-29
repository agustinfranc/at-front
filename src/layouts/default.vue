<template>
  <v-card class="h-100">
    <v-layout class="h-100">
      <v-navigation-drawer expand-on-hover rail permanent>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Usuario Admin"
            subtitle="ejemplo@gmail.com"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="item in items"
            :prepend-icon="item.icon"
            :key="item.title"
            :to="item.to"
            :value="item.title"
            :title="item.title"
          >
            <v-divider v-if="item.separator"></v-divider>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <slot></slot>
      </v-main>
    </v-layout>
  </v-card>
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
          icon: "mdi-calendar-month",
        },
        {
          title: "Acompañamientos",
          to: "/assignments",
          icon: "mdi-account-multiple",
        },
        {
          title: "Clientes",
          to: "/clients",
          icon: "mdi-home-city",
        },
        {
          title: "Acompañantes",
          to: "/companions",
          icon: "mdi-account",
        },
        {
          separator: true,
          icon: "",
        },
        {
          title: "Saldos",
          to: "",
          icon: "mdi-folder",
        },
        {
          title: "Usuarios",
          to: "/users",
          icon: "mdi-account-group-outline",
        },
      ],
    };
  },
});
</script>
