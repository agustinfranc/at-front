<template>
  <v-container>
    <v-tabs fixed-tabs v-model="tab">
      <v-tab value="clients">Clientes</v-tab>
      <v-tab value="companions">Acompañantes</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="clients">
        <v-card>
          <p>clients</p>
        </v-card>
      </v-window-item>
      <v-window-item value="companions">
        <v-card>
          <p>companions</p>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientBalanceTable from "./ClientBalanceTable.vue";

//es la unica forma que pude hacer que funcionen las tabs
export default {
  data: () => ({
    tab: null,
  }),
};
</script>
