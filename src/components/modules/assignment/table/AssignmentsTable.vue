<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Acompañamientos" :route="{ name: 'assignment-new' }" />

    <LazyTable :columns="columns" :service="service" />

    <DeleteAssignmentModal
      v-model="dialog"
      :assignment="selectedAssignment"
      @click:outside.stop="dialog = false"
      @delete="deleteAssignment"
    />
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import AssignmentApi from "@/api/assignment/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "@/components/tables/extras/TableHeader.vue";
import DeleteAssignmentModal from "@/components/modules/assignment/modals/DeleteAssignmentModal.vue";
import { AssignmentService } from "@/services/assignmentService";
import type {
  ColDef,
  ValueFormatterParams,
} from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import type Assignment from "@/api/assignment/interface";
import type { CellClickedEvent } from "ag-grid-community";

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
    headerName: "Periodico",
    field: "periodic",
    flex: 3,
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

// DeleteAssignmentModal Logic

const dialog = ref(false);
const selectedAssignment: Ref<Assignment | undefined> = ref();

function handleDeletion(assignment: Assignment) {
  selectedAssignment.value = assignment;
  dialog.value = true;
}

function deleteAssignment(id: number) {
  service.delete(id);
}
</script>
