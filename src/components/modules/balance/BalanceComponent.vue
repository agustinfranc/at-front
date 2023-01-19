<template>
  <v-container>
    <v-tabs fixed-tabs v-model="tab">
      <v-tab value="clients">Clientes</v-tab>
      <v-tab value="companions">Acompañantes</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="clients">
        <v-card>
          <BalanceTable value="clients" />
        </v-card>
      </v-window-item>
      <v-window-item value="companions">
        <v-card>
          <BalanceTable value="companions" />
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BalanceTable from "./table/BalanceTable.vue";

const tab = ref();
</script>
