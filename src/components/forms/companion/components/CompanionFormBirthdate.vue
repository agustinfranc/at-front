<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title> Fecha de Nacimiento </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="d-flex justify-center align-center">
          <vue-cal
            class="vuecal--date-picker"
            xsmall
            hide-view-selector
            :time="false"
            :transitions="false"
            active-view="month"
            :disable-views="['week']"
            style="max-width: 70%; height: 230px"
            locale="es"
            @cell-click="assignDate"
          >
          </vue-cal>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

const emit = defineEmits<{
  (e: "updateValue", value: string): void;
}>();

function assignDate(date: Date) {
  emit(
    "updateValue",
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  );
}
</script>
