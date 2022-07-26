<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row>
          <v-col align-self="start" cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
              <v-card-title>Asignaciones</v-card-title>
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
                to="/assignment"
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.fecha }}</td>
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
      desserts: [
        {
          name: "Cavallini",
          calories: "Misisco",
          fecha: "7/8/22",
        },
        {
          name: "Cavallini",
          calories: "Misisco",
          fecha: "7/8/22",
        },
        {
          name: "Torasini",
          calories: "Arriada",
          fecha: "9/8/22",
        },
        {
          name: "Cavallini",
          calories: "Misisco",
          fecha: "10/8/22",
        },
        {
          name: "Torasini",
          calories: "Arriada",
          fecha: "11/8/22",
        },
        {
          name: "Cavallini",
          calories: "Misisco",
          fecha: "11/8/22",
        },
        {
          name: "Torasini",
          calories: "Arriada",
          fecha: "12/8/22",
        },
        {
          name: "Cavallini",
          calories: "Misisco",
          fecha: "13/8/22",
        },
        {
          name: "Torasini",
          calories: "Arriada",
          fecha: "13/8/22",
        },
        {
          name: "Vazquez",
          calories: "Arriada",
          fecha: "13/8/22",
        },
      ],
    };
  },
});
</script>
