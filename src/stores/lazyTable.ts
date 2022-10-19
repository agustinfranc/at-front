import { defineStore } from "pinia";
import { reactive } from "vue";

export const useLazyTableStore = defineStore("lazyTable", () => {
  // state properties
  const rows = reactive({ value: [] as any[] });

  // getters
  //

  // actions
  function deleteItemFromTable(id: number) {
    rows.value = rows.value.filter((row) => row.id !== id);
  }

  // watchers
  //

  // export all
  return { rows, deleteItemFromTable };
});
