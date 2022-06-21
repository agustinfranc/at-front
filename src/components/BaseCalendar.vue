<template>
  <v-container>
    <vue-cal
      :selected-date="date"
      :time-from="9 * 60"
      :time-to="25 * 60"
      :disable-views="['years']"
      :events="events"
      locale="es"
      today-button
    >
    </vue-cal>
  </v-container>
</template>

<script lang="ts">
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import "vue-cal/dist/i18n/es.js";
import { defineComponent } from "vue";

const today = new Date();

export default defineComponent({
  name: "BaseCalendar",
  components: { VueCal },

  data: () => ({
    date:
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate(),

    events: [
      {
        start: "2022-6-6 10:30",
        end: "2022-6-6 16:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-6-8 10:00",
        end: "2022-6-10 18:00",
        title: "Arriada - Vazquez",
        class: "sport",
      },
      {
        start: "2022-6-12 13:00",
        end: "2022-6-12 22:00",
        title: "Cavallini - Torasini",
        class: "leisure",
      },
    ],
  }),
});
</script>

<style>
.vuecal__event.leisure {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.vuecal__event.sport {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
</style>
