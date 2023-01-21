<template>
  <v-container>
    <v-tabs fixed-tabs v-model="tab">
      <v-tab value="clients">Clientes</v-tab>
      <v-tab value="companions">Acompañantes</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="clients">
        <v-card>
          <BalanceTable :service="clientService" />
        </v-card>
      </v-window-item>
      <v-window-item value="companions">
        <v-card>
          <BalanceTable :service="companionService" />
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BalanceTable from "./table/BalanceTable.vue";
import { ClientBalanceService } from "@/services/clientBalanceService";
import { CompanionBalanceService } from "@/services/companionBalanceService";
import BalanceApi from "@/api/balance";

const clientService = new ClientBalanceService(new BalanceApi());
const companionService = new CompanionBalanceService(new BalanceApi());

const tab = ref();
</script>
