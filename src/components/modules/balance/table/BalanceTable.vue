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
import { onMounted, type PropType } from "vue";
import { ref } from "vue";

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});

const balances = ref();

onMounted(async () => {
  const { data, error } = await props.service.getBalances();
  if (error || !data) return;
  balances.value = data;
});
</script>
