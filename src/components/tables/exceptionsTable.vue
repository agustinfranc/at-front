<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row>
          <v-col align-self="start" cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
              <v-card-title>Excepciones</v-card-title>
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
                to="/exception"
              >
                Nueva
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-table fixed-header>
        <thead>
          <tr>
            <th class="text-left">Acompañante</th>
            <th class="text-left">Cliente</th>
            <th class="text-left">Fecha</th>
            <th class="text-left">Reemplaza</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in exceptions" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.client }}</td>
            <td>{{ item.fecha }}</td>
            <td>{{ item.reemplaza }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExceptionsTable",
  data() {
    return {
      exceptions: [
        {
          name: "Cavallini",
          client: "Misisco",
          fecha: "7/8/22",
          reemplaza: "Vazquez",
        },
        {
          name: "Cavallini",
          client: "Misisco",
          fecha: "7/8/22",
          reemplaza: "Vazquez",
        },
        {
          name: "Torasini",
          client: "Arriada",
          fecha: "9/8/22",
          reemplaza: "Vazquez",
        },
        {
          name: "Cavallini",
          client: "Misisco",
          fecha: "10/8/22",
          reemplaza: "Vazquez",
        },
      ],
    };
  },
});
</script>
