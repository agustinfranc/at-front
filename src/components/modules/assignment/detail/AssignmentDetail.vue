<template>
  <v-container>
    <v-card class="my-4">
      <v-progress-linear
        v-if="loading"
        class="position-absolute"
        height="10"
        indeterminate
      ></v-progress-linear>

      <v-card-title> Assignment </v-card-title>

      <v-card-text>
        <v-row>
          <v-col>
            <v-card-item>
              <v-span class="font-weight-bold"> Cliente </v-span>
              <v-span> {{ assignment }}</v-span>
            </v-card-item>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import AssignmentApi from "@/api/assignment";
import { AssignmentService } from "@/services/assignmentService";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const assignmentService = new AssignmentService(new AssignmentApi());

let assignment = reactive({});
let loading = ref(false);

onMounted(async () => {
  loading.value = true;

  const assignmentId = route.params.id as string;
  const { error, data } = await assignmentService.findOne(
    parseInt(assignmentId)
  );

  loading.value = false;

  if (error) return;
  if (data) assignment = data;
});
</script>
