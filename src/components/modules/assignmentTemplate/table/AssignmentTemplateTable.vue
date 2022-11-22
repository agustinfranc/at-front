<template>
  <v-container class="h-100 d-flex flex-column">
    <v-row class="flex-grow-0">
      <v-col align-self="center" cols="12" sm="4">
        <p class="text-h4 text--primary">Templates</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col align-self="center" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <v-btn
            rounded="lg"
            block
            variant="outlined"
            dark
            class="mb-2 text--primary"
            :to="{ name: 'assignment-template-new' }"
          >
            Nuevo
          </v-btn>
        </v-sheet>
      </v-col>
      <v-col align-self="center" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <v-btn
            rounded="lg"
            block
            variant="outlined"
            dark
            class="mb-2 text--primary"
            @click="generateAssignments"
          >
            Generar
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>

    <LazyTable :columns="columns" :service="service" />

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

const generateApi = new GenerateAssignmentApi();
const service = new AssignmentTemplateService(new AssignmentTemplateApi());
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

function generateAssignments() {
  generateApi.generate();
}

// DeleteItemModal Logic

const { dialog, selectedItem, handleDeletion, deleteItem } =
  useDeleteItemDialog<AssignmentTemplate>(service);
</script>
