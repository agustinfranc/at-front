<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader @generate="generateAssignments" />
    <LazyTable :columns="columns" :service="assignmentTemplateService" />

    <DeleteItemModal
      v-model="dialog"
      item-name="template"
      :item="selectedItem"
      @click:outside.stop="dialog = false"
      @delete="deleteItem"
    />
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import LazyTable from "@/components/tables/LazyTable.vue";
import DeleteItemModal from "@/components/modals/DeleteItemModal.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import type { CellClickedEvent } from "ag-grid-community";
import { useDeleteItemDialog } from "@/composables/deleteItem";
import type AssignmentTemplate from "@/api/assignmentTemplate/interface";
import { AssignmentTemplateService } from "@/services/assignmentTemplateService";
import AssignmentTemplateApi from "@/api/assignmentTemplate";
import { booleanFormatter } from "@/helpers/formatters";
import GenerateAssignmentApi from "@/api/generateAssigment";
import TableHeader from "./TableHeader.vue";
import { useSnackbarStore } from "@/stores/snackbar";
import { GenerateAssignmentService } from "@/services/generateAssignmentService";

const generateAssignmentService = new GenerateAssignmentService(
  new GenerateAssignmentApi()
);
const snackbarStore = useSnackbarStore();
const assignmentTemplateService = new AssignmentTemplateService(
  new AssignmentTemplateApi()
);
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
    headerName: "Habilitado",
    field: "enabled",
    flex: 10,
    cellClass: "d-flex justify-center",
    suppressMenu: true,
    valueFormatter: booleanFormatter,
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

function showDetails(assignmentTemplate: AssignmentTemplate) {
  router.push({
    name: "assignment-template-detail",
    params: { id: assignmentTemplate.id },
  });
}

function goToEdition(assignmentTemplate: AssignmentTemplate) {
  router.push({
    name: "assignment-template-edit",
    params: { id: assignmentTemplate.id },
  });
}

async function generateAssignments() {
  const { data } = await generateAssignmentService.generate();

  if (data) {
    snackbarStore.showSuccess({
      text: "Los asignamientos se generaron exitosamente.",
    });
  }
}

// DeleteItemModal Logic
const { dialog, selectedItem, handleDeletion, deleteItem } =
  useDeleteItemDialog<AssignmentTemplate>(assignmentTemplateService);
</script>
