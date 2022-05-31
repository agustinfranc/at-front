<template>
  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
    Enviar
  </v-btn>
</template>


<script>

export default {
  props: ['valid']
}
</script>
