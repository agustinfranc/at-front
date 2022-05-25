<template>
  <div>
    <v-card>
      <v-card-title>Cliente Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>

          <Name/>

          <DNI/>

          <v-text-field
            type="number"
            v-model="form.telefono"
            label="Teléfono"
          ></v-text-field>

      
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

export default defineComponent ({
  components: {
    Name,
    DNI
  },

  data: () => ({
    snackbar: {
      display: false,
      text: "",
      color: "black",
    },
    valid: true,
    obras: [],
    form: {
      nombre: "",
      contacto: "",
      apellido: "",
      dni: "",
      telefono: "",
      obra_id: null,
      nro_afiliado: "",
    },
    apellidoRules: [
      (v) => !!v || "Falta el apellido del cliente",
      (v) => (v && v.length <= 25) || "Apellido muy largo",
    ],
  }),
});
</script>
