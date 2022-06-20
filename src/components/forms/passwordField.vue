<template>
  <v-text-field
    v-model="password"
    :rules="passwordRules"
    label="Constraseña"
    required
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    password: "",
    passwordRules: [
      (v) => !!v || "Falta el nombre del cliente",
      (v) => (v && v.length <= 50) || "Nombre muy largo",
    ],
  }),
};
</script>
