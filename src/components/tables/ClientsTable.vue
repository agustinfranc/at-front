<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Clientes" :route="{ name: 'new-client' }" />
    <LazyTable :columns="columns" :service="service" @cellClick="showClient" />
  </v-container>
</template>

<script setup lang="ts">
import ClientApi from "@/api/client/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "./extras/TableHeader.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import { ClientService } from "@/services/clientService";
import { useRouter } from "vue-router";
import type Client from "@/api/client/interface";

const service = new ClientService(new ClientApi());
const router = useRouter();

function showClient(client: Client) {
  router.push({
    name: "client-detail",
    params: { id: client.id },
  });
}

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
    headerName: "Teléfono",
    field: "phone",
  },
  {
    headerName: "Dni",
    field: "dni",
  },
  {
    headerName: "Tarifa",
    field: "rate",
    cellRenderer: (params: any) => {
      return "$ " + params.value;
    },
  },
] as ColDef[];
</script>
