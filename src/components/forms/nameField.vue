<template>
  <v-text-field
    v-model="name"
    :rules="nameRules"
    label="Nombre"
    required
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    name: "",
    nameRules: [
      (v) => !!v || "Falta el nombre del cliente",
      (v) => (v && v.length <= 50) || "Nombre muy largo",
    ],
  }),
};
</script>
