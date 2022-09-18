<template>
  <v-container>
    <div class="mb-5">
      <p class="text-h4 text--primary">Clientes</p>
    </div>

    <LazyTable :columns="columns" :service="service" />
  </v-container>
</template>

<script setup lang="ts">
import ClientApi from "@/api/client/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import { ClientService } from "@/services/clientService";

const service = new ClientService(new ClientApi());

const columns = [
  {
    headerName: "Nombre",
    field: "name",
  },
  {
    headerName: "Dni",
    field: "dni",
  },
  {
    headerName: "Telefono",
    field: "phone",
  },
  {
    headerName: "Tarifa",
    field: "rate",
  },
  {
    headerName: "Máximo Facturable",
    field: "taxable",
  },
  {
    headerName: "Comentarios",
    field: "comments",
  },
] as ColDef[];
</script>
