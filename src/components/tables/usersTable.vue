<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row>
          <v-col align-self="start" cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
              <v-card-title>Usuarios</v-card-title>
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
                to="/user"
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
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
          name: "Administrador",
          calories: 123456789,
        },
        {
          name: "Empleado 1",
          calories: 123456789,
        },
        {
          name: "Empleado 2",
          calories: 123456789,
        },
      ],
    };
  },
});
</script>
