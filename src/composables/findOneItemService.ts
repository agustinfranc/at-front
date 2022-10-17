import type { FindService } from "@/services/interfaces/FindService";
import { useSnackbarStore } from "@/stores/snackbar";
import { onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";

export function useFindOneService<T>(service: FindService) {
  const route = useRoute();
  const snackbarStore = useSnackbarStore();

  const item: Ref<T | null> = ref(null);
  const error = ref(null);

  const id = route.params.id as string;

  onMounted(() => {
    if (!id) return;

    service
      .findOne(parseInt(id))
      .then((res) => (item.value = res.data?.data || null))
      .catch((err) => (error.value = err))
      .catch((err) =>
        snackbarStore.showError({
          text: err.message,
        })
      );
  });

  return { item, error };
}
