import type { AssignmentService } from "@/services/assignmentService";
import type { AssignmentTemplateService } from "@/services/assignmentTemplateService";
import type { ClientService } from "@/services/clientService";
import type { CompanionService } from "@/services/companionService";
import type { UserService } from "@/services/userService";
import { useSnackbarStore } from "@/stores/snackbar";
import { useRoute, useRouter } from "vue-router";

export function useSaveFormService<T extends object>(
  service:
    | AssignmentTemplateService
    | AssignmentService
    | CompanionService
    | ClientService
    | UserService // type interface SaveService
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
