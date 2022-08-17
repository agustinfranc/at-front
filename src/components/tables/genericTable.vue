<template>
  <v-container>
    <button @click="deselectRows">deselect rows</button>
    <ag-grid-vue
      class="ag-theme-alpine"
      :rowData="rowData.value"
      style="height: 500px"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
      @cell-clicked="cellWasClicked"
      @grid-ready="onGridReady"
      :columnDefs="columnDefinitions"
    >
    </ag-grid-vue>
  </v-container>
</template>

<script lang="ts">
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
import { reactive, onMounted, ref, defineComponent } from "vue";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

export default defineComponent({
  props: ["columnDefinitions"],
  name: "Table",
  components: {
    AgGridVue,
  },
  setup() {
    const gridApi = ref(null); // Optional - for accessing Grid's API

    // Obtain API from grid's onGridReady event
    const onGridReady = (params) => {
      gridApi.value = params.api;
    };

    const rowData = reactive({}); // Set rowData to Array of Objects, one Object per Row

    // DefaultColDef sets props common to all Columns
    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 1,
    };

    // Example load data from sever
    onMounted(() => {
      fetch("https://www.ag-grid.com/example-assets/row-data.json")
        .then((result) => result.json())
        .then((remoteRowData) => (rowData.value = remoteRowData));
    });

    return {
      onGridReady,
      //columnDefs,
      rowData,
      defaultColDef,
      cellWasClicked: (event) => {
        // Example of consuming Grid Event
        console.log("cell was clicked", event);
      },
      deselectRows: () => {
        gridApi.value.deselectAll();
      },
    };
  },
});
</script>

<style lang="scss"></style>
