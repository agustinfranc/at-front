import { defineStore } from "pinia";
import { reactive } from "vue";

export const useSnackbarStore = defineStore("snackbar", () => {
  // state properties
  const snackbar = reactive({
    display: false,
    text: "Ocurrio un error inesperado",
    color: "red",
  });

  // getters
  // const doubleCount = computed(() => count.value * 2);

  // actions
  function show({ text, type }: { text: string; type: string }) {
    snackbar.display = true;
    snackbar.text = text;

    switch (type) {
      case "error":
        snackbar.color = "red";
        break;
      case "success":
        snackbar.color = "green";
        break;
    }
  }

  function showError({
    text = "Ocurrio un error inesperado",
  }: {
    text: string | undefined;
  }) {
    snackbar.display = true;
    snackbar.text = text;
    snackbar.color = "red";
  }

  function showSuccess({ text }: { text: string }) {
    snackbar.display = true;
    snackbar.text = text;
    snackbar.color = "green";
  }

  // watchers
  //

  // export all
  return { snackbar, show, showError, showSuccess };
});
