import ClientApi from "@/api/client";
import type Client from "@/api/client/interface";
import { ClientService } from "@/services/clientService";
import { useSnackbarStore } from "@/stores/snackbar";
import { onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";

export function useGetClientService() {
  const route = useRoute();
  const clientService = new ClientService(new ClientApi());
  const snackbarStore = useSnackbarStore();

  const client: Ref<Client | null> = ref(null);
  const error = ref(null);

  const clientId = route.params.id as string;

  onMounted(() => {
    if (!clientId) return;

    clientService
      .findOne(parseInt(clientId))
      .then((res) => (client.value = res.data?.data || null))
      .catch((err) => (error.value = err))
      .catch((err) =>
        snackbarStore.showError({
          text: err.message,
        })
      );
  });

  return { client, error };
}
