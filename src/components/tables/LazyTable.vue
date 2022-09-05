<template>
  <GenericTable :columns="columns" :rows="rows" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericTable from "./GenericTable.vue";

export default defineComponent({
  name: "LazyTable",
  props: {
    columns: Array,
    request: Function,
  },
  components: {
    GenericTable,
  },

  async mounted() {
    this.rows = await this.request?.();
  },

  data() {
    return {
      rows: [],
    };
  },
});
</script>
