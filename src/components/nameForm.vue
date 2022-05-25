<template>
  <v-text-field
    v-model="nombre"
    :rules="nombreRules"
    label="Nombre"
    required
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    nombre:'',  
    nombreRules: [
      (v) => !!v || "Falta el nombre del cliente",
      (v) => (v && v.length <= 50) || "Nombre muy largo",
    ],
  }),
};
</script>
