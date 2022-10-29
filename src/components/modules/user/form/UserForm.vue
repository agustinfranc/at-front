<template>
  <v-container>
    <v-card>
      <v-card-title class="mb-5">{{ title }}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row
            ><v-col>
              <v-text-field
                v-model="fields.name"
                label="Nombre"
                required
                append-inner-icon="mdi-exclamation"
                :rules="[
                  (v: any) => !!v || 'Este campo es requerido',
                  (v: string | any[]) => (v && v.length <= 50) || 'El nombre excede los 80 digitos',
                ]"
                @change="(event: any) => capitalizeField(event.target.value, 'name', fields)"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-combobox
                v-model="fields.role"
                :items="roles"
                label="Rol"
                return-object
                required
                :rules="[(v: string) => !!v || 'Este campo es requerido']"
              />
            </v-col>
          </v-row>

          <SubmitButton :valid="valid" @click="store" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import SubmitButton from "@/components/forms/common/SubmitButton.vue";
import UserForm from "../interfaces/userForm";
import { useRoute } from "vue-router";
import { mapForEditForm, mapFormForRequest } from "./formHelpers";
import type User from "@/api/user/interface";
import { useFindOneService } from "@/composables/findOneItemService";
import UserApi from "@/api/user/index";
import { useSaveFormService } from "@/composables/saveItemService";
import { UserService } from "@/services/userService";
// eslint-disable-next-line
// @ts-ignore
import { cloneDeep } from "lodash";
import { capitalizeField } from "@/helpers/stringMethods";

const roles = [
  {
    title: "Administrador",
    id: 1,
    value: 1,
  },
  {
    title: "Asistente",
    id: 2,
    value: 2,
  },
];

const route = useRoute();

const form = ref(); // declare template ref form
const valid = ref(true);
const fields = ref(new UserForm());
const service = new UserService(new UserApi());

const { isEdit, saveItem } = useSaveFormService<UserForm>(service);
const title = isEdit() ? `Usuario #${route.params.id}` : "Nuevo usuario";

const { item } = useFindOneService<User>(service);
watch(item, () => {
  if (item.value) {
    fields.value = mapForEditForm(item.value);
  }
});

async function store() {
  const formValidation = await form.value.validate();
  if (!formValidation.valid) return;

  const userForm = mapFormForRequest(fields.value, roles);

  saveItem(cloneDeep(userForm), "users");
}
</script>
