<template>
  <v-container>
    <TitleComponent :title="client.name"></TitleComponent>
    <v-card class="my-4">
      <v-row>
        <v-col>
          <v-card-text> Dirección: {{ client.address }} </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-text> Teléfono: {{ client.phone }} </v-card-text>
        </v-col>
        <v-col>
          <v-card-text> Teléfono Extra: {{ client.extra_phone }} </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-text> Dni: {{ client.dni }} </v-card-text>
        </v-col>
        <v-col>
          <v-card-text> Nacimiento: {{ client.birthday }} </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-text>
            Nombre a cargo: {{ client.guardian_name }}
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card-text>
            Obra Social: {{ client.health_insurance }}
          </v-card-text>
        </v-col>
        <v-col>
          <v-card-text> Afiliado: {{ client.affiliate }} </v-card-text>
        </v-col>
      </v-row>

      <v-card-text> Diagnosis: {{ client.diagnosis }} </v-card-text>
      <v-card-text> Tratamiento: {{ client.treatment }} </v-card-text>
      <v-card-text> Medicamento: {{ client.medicine }} </v-card-text>
      <v-row>
        <v-col>
          <v-card-text> Tarifa: {{ client.rate }} </v-card-text>
        </v-col>
        <v-col>
          <v-card-text>
            Fecha Presupuesto: {{ client.budget_date }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import ClientApi from "@/api/client";
import { ClientService } from "@/services/clientService";
import { onBeforeMount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import TitleComponent from "../../components/forms/extras/TitleComponent.vue";

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
