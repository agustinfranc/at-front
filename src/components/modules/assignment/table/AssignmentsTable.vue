<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Acompañamientos" :route="{ name: 'assignment-new' }" />

    <LazyTable :columns="columns" :service="service" />

    <DeleteItemModal
      v-model="dialog"
      item-name="acompañamiento"
      :item="selectedItem"
      @click:outside.stop="dialog = false"
      @delete="deleteItem"
    />
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import AssignmentApi from "@/api/assignment/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "@/components/tables/extras/TableHeader.vue";
import DeleteItemModal from "@/components/modals/DeleteItemModal.vue";
import { AssignmentService } from "@/services/assignmentService";
import type {
  ColDef,
  ValueFormatterParams,
} from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import type Assignment from "@/api/assignment/interface";
import type { CellClickedEvent } from "ag-grid-community";
import { useDeleteItemDialog } from "@/composables/deleteItem";

const service = new AssignmentService(new AssignmentApi());
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
    headerName: "Cliente",
    field: "client.name",
    flex: 10,
  },
  {
    headerName: "Acompañante",
    field: "companion.name",
    flex: 10,
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

function booleanFormatter(params: ValueFormatterParams) {
  return params.value ? "Si" : "No";
}

function showDetails(assignment: Assignment) {
  router.push({
    name: "assignment-detail",
    params: { id: assignment.id },
  });
}

function goToEdition(assignment: Assignment) {
  router.push({
    name: "assignment-edit",
    params: { id: assignment.id },
  });
}

// DeleteItemModal Logic

const { dialog, selectedItem, handleDeletion, deleteItem } =
  useDeleteItemDialog<Assignment>(service);
</script>
