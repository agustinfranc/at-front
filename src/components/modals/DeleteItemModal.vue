<template>
  <!-- https://vuejs.org/guide/components/events.html#usage-with-v-model -->
  <!-- ver porque no funciona -->
  <!-- :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" -->

  <!-- eslint-disable-next-line -->
  <v-dialog v-model="modelValue" max-width="400">
    <v-card>
      <v-card-title class="text-h5"> Eliminar {{ itemName }} </v-card-title>

      <v-card-text>
        Estas seguro que deseas eliminiar el {{ itemName }}?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text
          color="grey darken-1"
          @click="$emit('update:modelValue', false)"
        >
          Cancelar
        </v-btn>

        <v-btn color="primary" elevation="2" outlined @click="deleteItem">
          Aceptar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const props = defineProps(["modelValue", "item", "itemName"]);
const emit = defineEmits(["update:modelValue", "delete"]);

function deleteItem() {
  emit("update:modelValue", false);
  emit("delete", props.item.id);
}
</script>
