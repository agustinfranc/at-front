<template>
  <div>
    <v-card>
      <v-card-title>Acompañador Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>

          <Name/>

          <DNI/>

          <Telephone/>

          <Rate/>
      
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Enviar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Name from './nameForm.vue'
import DNI from './dniForm.vue'
import Telephone from './telephoneForm.vue'
import Rate from './rateForm.vue'

export default defineComponent ({
  components: {
    Name,
    DNI,
    Telephone,
    Rate
  },

  data: () => ({
    snackbar: {
      display: false,
      text: "",
      color: "black",
    },
    valid: true,
    form: {
      nombre: "",
      dni: "",
      telefono: "",
    },
  }),
});
</script>
