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
import { useRouter, useRoute } from "vue-router";

const client = ref();
const clientService = new ClientService(new ClientApi());

const route = useRoute();

onBeforeMount(() => {
  client.value = [];
});

onMounted(async () => {
  const clientsData = await clientService.findOne(route.params.id);
  client.value = clientsData.data;

  if (clientsData.error) return;

  console.log(clientsData);
});
</script>
