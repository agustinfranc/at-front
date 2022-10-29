<template>
  <v-container class="h-100 d-flex flex-column">
    <TableHeader title="Usuarios" :route="{ name: 'user-new' }" />

    <LazyTable :columns="columns" :service="service" />

    <DeleteItemModal
      v-model="dialog"
      item-name="user"
      :item="selectedItem"
      @click:outside.stop="dialog = false"
      @delete="deleteItem"
    />
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import UserApi from "@/api/user/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import TableHeader from "@/components/tables/extras/TableHeader.vue";
import DeleteItemModal from "@/components/modals/DeleteItemModal.vue";
import { UserService } from "@/services/userService";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import type User from "@/api/user/interface";
import type { CellClickedEvent } from "ag-grid-community";
import { useDeleteItemDialog } from "@/composables/deleteItem";

const service = new UserService(new UserApi());
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
    headerName: "Rol",
    field: "role.name",
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

function showDetails(user: User) {
  router.push({
    name: "user-detail",
    params: { id: user.id },
  });
}

function goToEdition(user: User) {
  router.push({
    name: "user-edit",
    params: { id: user.id },
  });
}

// DeleteItemModal Logic

const { dialog, selectedItem, handleDeletion, deleteItem } =
  useDeleteItemDialog<User>(service);
</script>
