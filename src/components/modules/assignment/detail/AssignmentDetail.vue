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
              <p class="font-weight-bold">Fecha</p>
              {{ renderNullableTableCell(item.date) }}
            </v-col>
            <v-col>
              <p class="font-weight-bold">Horas</p>
              {{ item.hours }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Desde</p>
              {{ renderNullableTableCell(item.from) }}
            </v-col>
            <v-col>
              <p class="font-weight-bold">Hasta</p>
              {{ renderNullableTableCell(item.to) }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Creado el</p>
              {{ item.created_at }}
            </v-col>
            <v-col>
              <p class="font-weight-bold">Modificado el</p>
              {{ renderNullableTableCell(item.updated_at) }}
            </v-col>
          </v-row>
        </v-card-text>
      </template>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import AssignmentApi from "@/api/assignment";
import type Assignment from "@/api/assignment/interface";
import { useFindOneService } from "@/composables/findOneItemService";
import { renderNullableTableCell } from "@/helpers/renderCellMethods";
import { AssignmentService } from "@/services/assignmentService";

const service = new AssignmentService(new AssignmentApi());

const { item, error } = useFindOneService<Assignment>(service);
</script>
