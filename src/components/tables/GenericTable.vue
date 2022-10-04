<template>
  <div>
    <!-- <button @click="deselectRows">deselect rows</button> -->
    <ag-grid-vue
      class="ag-theme-material"
      style="height: 100%"
      :column-defs="columnDefs.value"
      :row-data="rowData"
      :default-col-def="defaultColDef"
      row-selection="multiple"
      animate-rows="true"
      @cell-clicked="cellWasClicked"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>

<script lang="ts">
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
import { reactive, ref, defineComponent, computed, type PropType } from "vue";
import "ag-grid-community/styles/ag-grid.min.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.min.css"; // Optional theme CSS
import "ag-grid-community/styles/ag-theme-material.min.css";
import type { ColDef } from "@/components/tables/interfaces/GenericTable/columnDefinitions";
import type { CellClickedEvent } from "ag-grid-community";

export default defineComponent({
  props: {
    columns: {
      type: Array as PropType<ColDef[]>,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  name: "GenericTable",
  components: {
    AgGridVue,
  },

  setup(props, context) {
    // Set rowData to Array of Objects, one Object per Row
    const rowData = computed(() => props.rows);

    // Each Column Definition results in one Column.
    const columnDefs = reactive({
      value: props.columns as ColDef[],
    });

    // DefaultColDef sets props common to all Columns
    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 1,
    };

    const gridApi = ref(null); // Optional - for accessing Grid's API

    // Obtain API from grid's onGridReady event
    const onGridReady = (params) => {
      gridApi.value = params.api;
    };

    return {
      onGridReady,
      columnDefs,
      rowData,
      defaultColDef,
      cellWasClicked: (event: CellClickedEvent) => {
        context.emit("showDetails", event.data.id);
      },
      deselectRows: () => {
        gridApi.value.deselectAll();
      },
    };
  },
});
</script>
