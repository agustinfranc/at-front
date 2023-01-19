<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Nombre</th>
        <th class="text-left">Factura</th>
        <th class="text-left">Sin Factura</th>
        <th class="text-left">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in balances" :key="item.name">
        <td>{{ item.name }}</td>
        <td>${{ item.taxable_debt }}</td>
        <td>${{ item.no_tax_debt }}</td>
        <td>${{ item.no_tax_debt + item.taxable_debt }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import BalanceApi from "@/api/balance";
import { BalanceService } from "@/services/balanceService";
import { ref } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const service = new BalanceService(new BalanceApi());
let balances = ref();

onMounted(async () => {
  if (props.value === "clients") {
    const { data, error } = await service.getClientsBalances();
    if (error || !data) return;
    balances.value = data;
  } else {
    const { data, error } = await service.getCompanionsBalances();
    if (error || !data) return;
    balances.value = data;
  }
});
</script>
