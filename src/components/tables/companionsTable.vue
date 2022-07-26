<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row>
          <v-col align-self="start" cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
              <v-card-title>Acompañadores</v-card-title>
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
                v-bind="attrs"
                v-on="on"
                to="/companion"
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
            <th class="text-left">Tarifa</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.rate }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      desserts: [
        {
          name: "Franco Cavallini",
          calories: 39458753,
          rate: 350,
        },
        {
          name: "Juan Cruz Torasini",
          calories: 39567890,
          rate: 400,
        },
        {
          name: "Joaquin Misisco",
          calories: 38345678,
          rate: 500,
        },
        {
          name: "Tomás Vazquez",
          calories: 40123876,
          rate: 250,
        },
      ],
    };
  },
};
</script>
