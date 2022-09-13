<template>
  <v-container>
    <v-card>
      <v-card-title>Usuario Nuevo</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <Name v-model="form.username" />

          <Password v-model="form.password" />

          <SelectRole v-model="form.role" :items="roles" label="Rol" />

          <SubmitButton :valid="valid" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Name from "./nameField.vue";
import SubmitButton from "./SubmitButton.vue";
import Password from "./passwordField.vue";
import SelectRole from "./selectField.vue";

export default defineComponent({
  name: "UserForm",
  components: {
    Name,
    SubmitButton,
    Password,
    SelectRole,
  },

  data: () => ({
    snackbar: {
      display: false,
      text: "",
      color: "black",
    },

    roles: ["Admin", "Empleado"],

    valid: true,
    form: {
      username: "",
      password: "",
      role: "",
    },
    passRules: [(v) => !!v || "Falta la constraseña del Usuario"],
  }),
});
</script>
