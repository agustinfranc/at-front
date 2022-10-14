<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Acompañantes" :route="{ name: 'companion-new' }" />

    <LazyTable :columns="columns" :service="service" />

    <DeleteItemModal
      v-model="dialog"
      item-name="acompañante"
      :item="selectedItem"
      @click:outside.stop="dialog = false"
      @delete="deleteItem"
    />
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import CompanionApi from "@/api/companion/index";
import { CompanionService } from "@/services/companionService";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "../../../tables/extras/TableHeader.vue";
import DeleteItemModal from "@/components/modals/DeleteItemModal.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import type Companion from "@/api/companion/interface";
import type { CellClickedEvent } from "ag-grid-community";
import { useDeleteItemDialog } from "@/composables/deleteItem";

const service = new CompanionService(new CompanionApi());
const router = useRouter();

const columns = [
  {
    headerName: "ID",
    field: "id",
    resizable: true,
    suppressMovable: true,
    suppressMenu: true,
    flex: 2,
    cellClass: "text-blue-accent-4 text-decoration-underline cursor-pointer",
    onCellClicked: (event: CellClickedEvent) => showDetails(event.data),
  },
  {
    headerName: "Nombre",
    field: "name",
    flex: 10,
  },
  {
    headerName: "CUIT",
    field: "cuit",
    flex: 8,
  },
  {
    headerName: "Fecha Nacimiento",
    field: "birthday",
    flex: 8,
  },
  {
    headerName: "Teléfono",
    field: "phone",
    flex: 8,
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
    hide: true,
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

function showDetails(companion: Companion) {
  router.push({
    name: "companion-detail",
    params: { id: companion.id },
  });
}

function goToEdition(companion: Companion) {
  router.push({
    name: "companion-edit",
    params: { id: companion.id },
  });
}

// DeleteItemModal Logic

const { dialog, selectedItem, handleDeletion, deleteItem } =
  useDeleteItemDialog<Companion>(service);
</script>
