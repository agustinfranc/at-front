<template>
  <v-container>
    <v-card>
      <v-card-title>Cliente Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <Name v-model="form.name" />

          <TextField v-model="form.dni" type="number" label="Dni"></TextField>

          <Telephone v-model="form.phone" />

          <Rate v-model="form.rate" />

          <TextField
            v-model="form.taxable"
            label="Porcentaje Facturado"
            prefix="%"
            type="number"
          />

          <TextAreaField
            label="Comentarios"
            v-model="form.comments"
          ></TextAreaField>

          <SubmitButton :valid="valid" @click="postClient" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Name from "./nameField.vue";
import Dni from "./dniField.vue";
import Telephone from "./telephoneField.vue";
import SubmitButton from "./SubmitButton.vue";
import Rate from "./rateField.vue";
import TextField from "./textField.vue";
import TextAreaField from "./textAreaField.vue";
import ClientApi from "@/api/client/index";

export default defineComponent({
  name: "ClientForm",
  components: {
    Name,
    Dni,
    Telephone,
    SubmitButton,
    Rate,
    TextField,
    TextAreaField,
  },

  methods: {
    async postClient() {
      ClientApi.post(this.form);
      console.log(this.form);
    },
  },

  data() {
    return {
      snackbar: {
        display: false,
        text: "",
        color: "black",
      },
      valid: true,
      form: {
        name: "",
        dni: "",
        phone: "",
        rate: "",
        comments: "",
        taxable: "",
      },
    };
  },
});
</script>
