<template>
  <v-text-field
    v-model="password"
    :rules="passwordRules"
    label="Constraseña"
    required
    type="password"
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PasswordField",

  data() {
    return {
      password: "",
      passwordRules: [
        (v) => !!v || "Falta la constreña",
        (v) => (v && v.length <= 50) || "Constraseña muy larga",
      ],
    };
  },
});
</script>
