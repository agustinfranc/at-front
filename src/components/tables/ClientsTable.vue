<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Clientes" route="/client" />

    <LazyTable :columns="columns" :service="service" />
  </v-container>
</template>

<script setup lang="ts">
import ClientApi from "@/api/client/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "./extras/TableHeader.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import { ClientService } from "@/services/clientService";

const service = new ClientService(new ClientApi());

const columns = [
  {
    headerName: "Nombre",
    field: "name",
  },
  {
    headerName: "Nombre Tutor",
    field: "guardian_name",
  },
  {
    headerName: "Dni",
    field: "dni",
  },
  {
    headerName: "Dirección",
    field: "address",
  },
  {
    headerName: "Telefono",
    field: "phone",
  },
  {
    headerName: "Obra Social",
    field: "health_insurance",
  },
  {
    headerName: "Nro Afiliado",
    field: "affiliate",
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
    headerName: "Trabajo a Realizar",
    field: "treatment",
  },
] as ColDef[];
</script>
