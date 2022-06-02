<template>
  <vue-cal
    :selected-date="date"
    :time-from="9 * 60"
    :time-to="25 * 60"
    :disable-views="['years']"
    :events="events"
    locale="es"
  >
  </vue-cal>
</template>

<script lang="ts">
import VueCal from "vue-cal"
import "vue-cal/dist/vuecal.css"
import 'vue-cal/dist/i18n/es.js'

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
export default {
  components: { VueCal },
}
</script>
