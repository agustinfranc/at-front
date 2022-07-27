<template>
  <v-container>
    <vue-cal
      :selected-date="date"
      :time-from="9 * 60"
      :time-to="25 * 60"
      :disable-views="['years', 'day']"
      :events="events"
      locale="es"
      today-button
      events-on-month-view="short"
      style="height: 700px"
      :time="false"
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
        start: "2022-7-4",
        end: "2022-7-4 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-6",
        end: "2022-7-6 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-8",
        end: "2022-7-8 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-11",
        end: "2022-7-11 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-13",
        end: "2022-7-13 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-15",
        end: "2022-7-15 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-18",
        end: "2022-7-18 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-20",
        end: "2022-7-20 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-22",
        end: "2022-7-22 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-25",
        end: "2022-7-25 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-27",
        end: "2022-7-27 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-29",
        end: "2022-7-29 24:00",
        title: "Cavallini - Misisco",
        class: "leisure",
      },
      {
        start: "2022-7-8 10:00",
        end: "2022-7-8 18:00",
        title: "Arriada - Vazquez",
        class: "sport",
      },
      {
        start: "2022-7-20 10:00",
        end: "2022-7-20 18:00",
        title: "Arriada - Vazquez",
        class: "sport",
      },
      {
        start: "2022-7-11 10:00",
        end: "2022-7-11 18:00",
        title: "Arriada - Vazquez",
        class: "sport",
      },
      {
        start: "2022-7-17 13:00",
        end: "2022-7-17 22:00",
        title: "Cavallini - Torasini",
        class: "leisure",
      },
      {
        start: "2022-7-11 13:00",
        end: "2022-7-11 22:00",
        title: "Malalel - Amato",
        class: "green",
      },
      {
        start: "2022-7-6 13:00",
        end: "2022-7-6 22:00",
        title: "Malalel - Amato",
        class: "green",
      },
      {
        start: "2022-7-16 13:00",
        end: "2022-7-16 22:00",
        title: "Malalel - Amato",
        class: "green",
      },
      {
        start: "2022-7-26 13:00",
        end: "2022-7-26 22:00",
        title: "Malalel - Amato",
        class: "green",
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
.vuecal__event.green {
  background-color: rgba(19, 219, 12, 0.9);
  border: 1px solid rgb(82, 235, 136);
  color: #fff;
}
</style>
