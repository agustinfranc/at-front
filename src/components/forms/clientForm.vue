<template>
  <v-container>
    <v-card>
      <v-card-title>Cliente Nuevo</v-card-title>

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

          <SubmitButton :valid="valid" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Name from "./nameField.vue";
import DNI from "./dniField.vue";
import Telephone from "./telephoneField.vue";
import SubmitButton from "./SubmitButton.vue";

export default defineComponent({
  name: "ClientForm",
  components: {
    Name,
    DNI,
    Telephone,
    SubmitButton,
  },

  methods: {
    pruebita(v) {
      this.form.name = v.target.value;
    },
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
    },
  }),
});
</script>
