<template>
  <GenericTable :columns="columns" :rows="rows" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericTable from "./genericTable.vue";

export default defineComponent({
  props: {
    columns: Array,
    request: Function,
  },
  name: "LazyTable",
  components: {
    GenericTable,
  },

  async mounted() {
    this.rows = await this.request();
  },

  data() {
    return {
      rows: [],
    };
  },
});
</script>
