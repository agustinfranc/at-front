<template>
  <v-container>
    <v-card class="my-4">
      <v-progress-linear
        v-if="!item && !error"
        class="position-absolute"
        height="10"
        indeterminate
      ></v-progress-linear>

      <template v-if="item">
        <v-card-title> Acompañamiento #{{ item.id }}</v-card-title>

        <v-card-text>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Cliente</p>
              {{ item.client.name }}
            </v-col>
            <v-col>
              <p class="font-weight-bold">Acompañante</p>
              {{ item.companion.name }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Dias</p>
              <span v-for="day in item.days" :key="day.id">
                {{ day.title }}
                de {{ day.pivot.from }} a {{ day.pivot.to }} ({{
                  day.pivot.hours
                }}hs)
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Habilitado</p>
              {{ item.enabled ? "Si" : "No" }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Creado el</p>
              {{ item.created_at }}
            </v-col>
            <v-col>
              <p class="font-weight-bold">Modificado el</p>
              {{ item.updated_at ?? "-" }}
            </v-col>
          </v-row>
        </v-card-text>
      </template>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import AssignmentTemplateApi from "@/api/assignmentTemplate";
import type AssignmentTemplate from "@/api/assignmentTemplate/interface";
import { useFindOneService } from "@/composables/findOneItemService";
import { AssignmentTemplateService } from "@/services/assignmentTemplateService";

const service = new AssignmentTemplateService(new AssignmentTemplateApi());

const { item, error } = useFindOneService<AssignmentTemplate>(service);
</script>
