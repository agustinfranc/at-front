import AssignmentApi from "@/api/assignment";
import type Assignment from "@/api/assignment/interface";
import { AssignmentService } from "@/services/assignmentService";
import { useSnackbarStore } from "@/stores/snackbar";
import { onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";

export function useGetAssignmentService() {
  const route = useRoute();
  const assignmentService = new AssignmentService(new AssignmentApi());
  const snackbarStore = useSnackbarStore();

  const assignment: Ref<Assignment | null> = ref(null);
  const error = ref(null);

  const assignmentId = route.params.id as string;

  onMounted(() => {
    if (!assignmentId) return;

    assignmentService
      .findOne(parseInt(assignmentId))
      .then((res) => (assignment.value = res.data?.data || null))
      .catch((err) => (error.value = err))
      .catch((err) =>
        snackbarStore.showError({
          text: err.message,
        })
      );
  });

  return { assignment, error };
}
