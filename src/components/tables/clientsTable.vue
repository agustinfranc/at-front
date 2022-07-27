<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row>
          <v-col align-self="start" cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
              <v-card-title>Clientes</v-card-title>
            </v-sheet>
          </v-col>
          <v-spacer></v-spacer>
          <v-col align-self="end" cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
              <v-btn
                rounded="lg"
                block
                variant="outlined"
                dark
                class="mb-2"
                to="/client"
              >
                Nuevo
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-table fixed-header>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">DNI</th>
            <th class="text-left">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in clients" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.dni }}</td>
            <td>{{ item.telephone }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClientsTable",
  data() {
    return {
      clients: [
        {
          name: "Agustín Amato",
          dni: 39678543,
          telephone: 45902345,
        },
        {
          name: "Gastón Malalel",
          dni: 56900546,
          telephone: 46789031,
        },
        {
          name: "Nicolás Arriada",
          dni: 45865431,
          telephone: 43895433,
        },
        {
          name: "Micaela Pérez",
          dni: 40234567,
          telephone: 1532924113,
        },
      ],
    };
  },
});
</script>
