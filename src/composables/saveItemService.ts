import type { AssignmentService } from "@/services/assignmentService";
import type { CompanionService } from "@/services/companionService";
import { useSnackbarStore } from "@/stores/snackbar";
import { useRoute, useRouter } from "vue-router";

export function useSaveFormService<T>(
  service: AssignmentService | CompanionService // type interface SaveService
) {
  const route = useRoute();
  const router = useRouter();
  const snackbarStore = useSnackbarStore();
  const isEdit = () => !!route.params?.id;

  function saveItem(item: T, routeName: string | null = null) {
    isEdit()
      ? service.update(item).then(({ data }) => {
          if (data) showNotification();
          if (data && routeName) router.push({ name: routeName });
        })
      : service.create(item).then(({ data }) => {
          if (data) showNotification();
          if (data && routeName) router.push({ name: routeName });
        });
  }

  function showNotification() {
    snackbarStore.showSuccess({
      text: "Se guardaron los cambios exitosamente",
    });
  }

  return { isEdit, saveItem };
}
