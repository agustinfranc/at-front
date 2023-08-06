<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Clientes" :route="{ name: 'new-client' }" />
    <LazyTable :columns="columns" :service="service" />
    <DeleteItemModal
      v-model="dialog"
      item-name="cliente"
      :item="selectedItem"
      @click:outside.stop="dialog = false"
      @delete="deleteItem"
    />
  </v-container>
</template>

<script setup lang="ts">
import ClientApi from "@/api/client/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "../../../tables/extras/TableHeader.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import { ClientService } from "@/services/clientService";
import { useRouter } from "vue-router";
import type Client from "@/api/client/interface";
import type { CellClickedEvent } from "ag-grid-community";
import DeleteItemModal from "../../../modals/DeleteItemModal.vue";
import { useDeleteItemDialog } from "@/composables/deleteItem";

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
    headerName: "ID",
    field: "id",
    resizable: true,
    suppressMovable: true,
    suppressMenu: true,
    flex: 2,
    cellClass: "text-blue-accent-4 text-decoration-underline cursor-pointer",
    onCellClicked: (event: CellClickedEvent) => showClient(event.data),
  },
  {
    headerName: "Nombre",
    field: "name",
    flex: 9,
  },
  {
    headerName: "Nombre Tutor",
    field: "guardian_name",
    flex: 8,
    cellRenderer: (params: { value: string }) => {
      return params.value ?? "-";
    },
  },
  {
    headerName: "Teléfono",
    field: "phone",
    flex: 6,
  },
  {
    headerName: "Dni",
    field: "dni",
    flex: 6,
  },
  {
    headerName: "Tarifa",
    field: "rate",
    flex: 4,
    cellRenderer: (params: { value: string }) => {
      return params.value ? "$" + params.value : "-";
    },
  },
  {
    headerName: "Tarifa Acompañante",
    field: "companion_rate",
    flex: 4,
    cellRenderer: (params: { value: string }) => {
      return params.value ? "$" + params.value : "-";
    },
  },
  {
    suppressMovable: true,
    sortable: false,
    suppressMenu: true,
    flex: 1,
    cellClass: "d-flex justify-center",
    cellRenderer: () => `
      <button type="button" class="v-icon notranslate v-icon--link mdi mdi-pencil theme--light" style="font-size: 16px;"></button>
    `,
    onCellClicked: (event: CellClickedEvent) => goToEdition(event.data),
  },
  {
    suppressMovable: true,
    sortable: false,
    suppressMenu: true,
    flex: 1,
    cellClass: "d-flex justify-center",
    cellRenderer: () => `
      <button type="button" class="v-icon notranslate v-icon--link mdi mdi-delete theme--light" style="font-size: 16px;"></button>
    `,
    onCellClicked: (event: CellClickedEvent) => handleDeletion(event.data),
  },
] as ColDef[];

function goToEdition(client: Client) {
  router.push({
    name: "client-edit",
    params: { id: client.id },
  });
}

const { dialog, selectedItem, handleDeletion, deleteItem } =
  useDeleteItemDialog<Client>(service);
</script>
