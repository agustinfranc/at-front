<template>
  <v-container>
    <h1>Client Details</h1>
    {{ client }}
  </v-container>
</template>

<script setup lang="ts">
import ClientApi from "@/api/client";
import { ClientService } from "@/services/clientService";
import { onBeforeMount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const client = ref();
const clientService = new ClientService(new ClientApi());

const route = useRoute();

onBeforeMount(() => {
  client.value = [];
});

onMounted(async () => {
  const clientId = route.params.id as string;
  const clientsData = await clientService.findOne(parseInt(clientId));
  client.value = clientsData.data;

  if (clientsData.error) return;
});
</script>
