<template>
  <v-container>
    <v-row>
      <v-col align-self="start" cols="12" sm="4">
        <p class="text-h4 text--primary">Clientes</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col align-self="end" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <v-btn
            rounded="lg"
            block
            variant="outlined"
            dark
            class="mb-2 text--primary"
            to="/client"
          >
            Nuevo
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <LazyTable :columns="columns" :request="ClientApi.get" />
  </v-container>
</template>

<script setup lang="ts">
import ClientApi from "@/api/client/index";
import LazyTable from "@/components/tables/LazyTable.vue";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";

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
