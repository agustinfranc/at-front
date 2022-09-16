<template>
  <v-container>
    <v-row>
      <v-col align-self="start" cols="12" sm="4">
        <p class="text-h4 text--primary">Acompañantes</p>
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
            to="/companion"
          >
            Nuevo
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
    <LazyTable :columns="columns" :request="CompanionApi.get" />
  </v-container>
</template>

<script setup lang="ts">
import CompanionApi from "@/api/companion/index";
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
    headerName: "Máximo Facturable",
    field: "taxable",
  },
  {
    headerName: "Extras",
    field: "extras",
  },
] as ColDef[];
</script>
