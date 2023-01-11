<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Nombre</th>
        <th class="text-left">Deuda</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in balances" :key="item.name">
        <td>{{ item.name }}</td>
        <td>${{ item.debt }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import BalanceApi from "@/api/balance";
import { BalanceService } from "@/services/balanceService";
import { ref } from "vue";

const service = new BalanceService(new BalanceApi());
let balances = ref();

onMounted(async () => {
  const { data, error } = await service.getClientsBalances();
  if (error || !data) return;
  balances.value = data;
});
</script>
