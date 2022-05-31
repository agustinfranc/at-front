<template>
  <div>
    <v-card>
      <v-card-title>Cliente Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>

          <Name/>
        
          <DNI/>

          <Telephone/>

          <SendButton :valid="valid"/>
      
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
import SendButton from './sendButton.vue'

export default defineComponent ({
  components: {
    Name,
    DNI,
    Telephone,
    SendButton
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
