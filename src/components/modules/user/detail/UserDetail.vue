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
        <v-card-title> Usuario #{{ item.id }}</v-card-title>

        <v-card-text>
          <v-row>
            <v-col>
              <p class="font-weight-bold">Nombre</p>
              {{ item.name }}
            </v-col>
            <v-col>
              <p class="font-weight-bold">Rol</p>
              {{ item.role.name }}
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
import UserApi from "@/api/user";
import type User from "@/api/user/interface";
import { useFindOneService } from "@/composables/findOneItemService";
import { UserService } from "@/services/userService";

const service = new UserService(new UserApi());

const { item, error } = useFindOneService<User>(service);
</script>
