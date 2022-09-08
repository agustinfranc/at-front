<template>
  <GenericTable :columns="columns" :rows="rows" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenericTable from "./GenericTable.vue";

export default defineComponent({
  name: "LazyTable",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    request: {
      type: Function,
      required: true,
    },
  },
  components: {
    GenericTable,
  },

  data() {
    return {
      rows: [],
    };
  },

  async mounted() {
    const res = await this.request();
    this.rows = res.data;
  },
});
</script>
