<template>
  <v-container>
    <v-card class="my-4">
      <v-progress-linear
        v-if="!assignment && !error"
        class="position-absolute"
        height="10"
        indeterminate
      ></v-progress-linear>

      <template v-if="assignment">
        <v-card-title> Acompañamiento #{{ assignment.id }}</v-card-title>

        <v-card-text>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Cliente</p>
              {{ assignment.client.name }}
            </v-col>
            <v-col>
              <p class="font-weight-bold">Acompañante</p>
              {{ assignment.companion.name }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Dias</p>
              <span v-for="day in assignment.days" :key="day.id">
                {{ day.title }}
                de {{ day.pivot.from }} a {{ day.pivot.to }} ({{
                  day.pivot.hours
                }}hs)
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Periódico</p>
              {{ assignment.periodic ? "Si" : "No" }}
            </v-col>
            <v-col>
              <p class="font-weight-bold">Habilitado</p>
              {{ assignment.enabled ? "Si" : "No" }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Creado el</p>
              {{ assignment.created_at }}
            </v-col>
            <v-col>
              <p class="font-weight-bold">Modificado el</p>
              {{ assignment.updated_at ?? "-" }}
            </v-col>
          </v-row>
        </v-card-text>
      </template>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useGetAssignmentService } from "@/composables/assignment";

const { assignment, error } = useGetAssignmentService();
</script>
