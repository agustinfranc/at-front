<template>
  <div>
    <v-card>
      <v-card-title>Acompañador Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <Name
            :value="form.name"
            @updateName="
              (v) => {
                form.name = v.target.value;
              }
            "
          />

          <DNI
            :value="form.dni"
            @updateDNI="
              (v) => {
                form.dni = v.target.value;
              }
            "
          />

          <Telephone
            :value="form.telephone"
            @updateTelephone="
              (v) => {
                form.telephone = v.target.value;
              }
            "
          />

          <Rate
            :value="form.rate"
            @updateRate="
              (v) => {
                form.rate = v.target.value;
              }
            "
          />

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
import Name from "./nameField.vue";
import DNI from "./dniField.vue";
import Telephone from "./telephoneField.vue";
import Rate from "./rateField.vue";

export default defineComponent({
  name: "CompanionForm",
  components: {
    Name,
    DNI,
    Telephone,
    Rate,
  },

  data: () => ({
    snackbar: {
      display: false,
      text: "",
      color: "black",
    },
    valid: true,
    form: {
      name: "",
      dni: "",
      telephone: "",
      rate: "",
    },
  }),
});
</script>
