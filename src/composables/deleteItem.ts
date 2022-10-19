import type { DeleteService } from "@/services/interfaces/DeleteService";
import { useLazyTableStore } from "@/stores/lazyTable";
import { useSnackbarStore } from "@/stores/snackbar";
import { ref, type Ref } from "vue";

export function useDeleteItemDialog<T extends object>(service: DeleteService) {
  const dialog = ref(false);
  const selectedItem: Ref<T | undefined> = ref();
  const snackbarStore = useSnackbarStore();
  const lazyTableStore = useLazyTableStore();

  function handleDeletion(item: T) {
    selectedItem.value = item;
    dialog.value = true;
  }

  function deleteItem(id: number) {
    service.delete(id).then(() => {
      snackbarStore.showSuccess({
        text: "Se eliminó el item exitosamente",
      });
      lazyTableStore.deleteItemFromTable(id);
    });
  }

  return { dialog, selectedItem, handleDeletion, deleteItem };
}
