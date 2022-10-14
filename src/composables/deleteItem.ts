import type { DeleteService } from "@/services/interfaces/DeleteService";
import { useSnackbarStore } from "@/stores/snackbar";
import { ref, type Ref } from "vue";

export function useDeleteItemDialog<T>(service: DeleteService) {
  const dialog = ref(false);
  const selectedItem: Ref<T | undefined> = ref();
  const snackbarStore = useSnackbarStore();

  function handleDeletion(item: T) {
    selectedItem.value = item;
    dialog.value = true;
  }

  function deleteItem(id: number) {
    service.delete(id).then(() => {
      snackbarStore.showSuccess({
        text: "Se elimino exitosamente",
      });
      // re render lazy table
    });
  }

  return { dialog, selectedItem, handleDeletion, deleteItem };
}
